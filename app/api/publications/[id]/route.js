import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Publication from "@/lib/models/Publication";
import { getAdminFromToken } from "@/lib/auth";

async function findByIdOrSlug(idOrSlug) {
  if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
    const bySlug = await Publication.findById(idOrSlug);
    if (bySlug) return bySlug;
  }
  return Publication.findOne({ slug: idOrSlug });
}

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const publication = await findByIdOrSlug(id);
    if (!publication) {
      return NextResponse.json({ error: "Publication not found." }, { status: 404 });
    }
    return NextResponse.json({ publication });
  } catch (err) {
    console.error("Publication GET error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const { title, journal, authors, excerpt, content, publishedDate, coverImage } = body;

    const updateData = {};
    if (title !== undefined) updateData.title = title.trim();
    if (journal !== undefined) updateData.journal = journal.trim();
    if (authors !== undefined) updateData.authors = authors.trim();
    if (excerpt !== undefined) updateData.excerpt = excerpt.trim();
    if (content !== undefined) updateData.content = content.trim();
    if (publishedDate !== undefined) updateData.publishedDate = new Date(publishedDate);
    if (coverImage !== undefined) updateData.coverImage = coverImage.trim();

    const publication = await Publication.findByIdAndUpdate(id, updateData, { new: true });
    if (!publication) {
      return NextResponse.json({ error: "Publication not found." }, { status: 404 });
    }
    return NextResponse.json({ publication });
  } catch (err) {
    console.error("Publication PATCH error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const publication = await Publication.findByIdAndDelete(id);
    if (!publication) {
      return NextResponse.json({ error: "Publication not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Publication DELETE error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
