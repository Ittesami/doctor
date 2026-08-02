import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import GalleryImage from "@/lib/models/GalleryImage";
import { getAdminFromToken } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();
    const images = await GalleryImage.find().sort({ order: 1, createdAt: 1 });
    return NextResponse.json({ images });
  } catch (err) {
    console.error("Gallery images GET error:", err);
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
    const { src, alt, caption, order } = body;

    if (!src?.trim() || !alt?.trim()) {
      return NextResponse.json(
        { error: "Image URL and alt text are required." },
        { status: 400 }
      );
    }

    const image = await GalleryImage.create({
      src: src.trim(),
      alt: alt.trim(),
      caption: caption?.trim() || "",
      order: order || 0,
    });

    return NextResponse.json({ image }, { status: 201 });
  } catch (err) {
    console.error("Gallery images POST error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
