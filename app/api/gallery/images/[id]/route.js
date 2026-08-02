import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import GalleryImage from "@/lib/models/GalleryImage";
import { getAdminFromToken } from "@/lib/auth";

export async function PATCH(request, { params }) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const { src, alt, caption, order } = body;

    if (alt !== undefined && !alt.trim()) {
      return NextResponse.json({ error: "Alt text is required." }, { status: 400 });
    }

    const updateData = {};
    if (src !== undefined) updateData.src = src.trim();
    if (alt !== undefined) updateData.alt = alt.trim();
    if (caption !== undefined) updateData.caption = caption.trim();
    if (order !== undefined) updateData.order = order;

    const image = await GalleryImage.findByIdAndUpdate(id, updateData, { new: true });
    if (!image) {
      return NextResponse.json({ error: "Image not found." }, { status: 404 });
    }
    return NextResponse.json({ image });
  } catch (err) {
    console.error("Gallery image PATCH error:", err);
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
    const image = await GalleryImage.findByIdAndDelete(id);
    if (!image) {
      return NextResponse.json({ error: "Image not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Gallery image DELETE error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
