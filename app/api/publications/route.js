import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Publication from "@/lib/models/Publication";
import { getAdminFromToken } from "@/lib/auth";
import { uniqueSlug } from "@/lib/slugify";

export async function GET() {
  try {
    await connectDB();
    const publications = await Publication.find().sort({ publishedDate: -1 });
    return NextResponse.json({ publications });
  } catch (err) {
    console.error("Publications GET error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(request) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();

    const body = await request.json();
    const { title, journal, authors, excerpt, content, publishedDate, coverImage } = body;

    if (!title?.trim()) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }

    const slug = await uniqueSlug(Publication, title);

    const publication = await Publication.create({
      title: title.trim(),
      slug,
      journal: journal?.trim() || "",
      authors: authors?.trim() || "",
      excerpt: excerpt?.trim() || "",
      content: content?.trim() || "",
      publishedDate: publishedDate ? new Date(publishedDate) : new Date(),
      coverImage: coverImage?.trim() || "",
    });

    return NextResponse.json({ publication }, { status: 201 });
  } catch (err) {
    console.error("Publications POST error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
