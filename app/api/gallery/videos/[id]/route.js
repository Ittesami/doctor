import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import GalleryVideo from "@/lib/models/GalleryVideo";
import { getAdminFromToken } from "@/lib/auth";
import { youTubeThumbnail } from "@/lib/youtube";

export async function PATCH(request, { params }) {
  const admin = await getAdminFromToken();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const { title, description, videoUrl, thumbnail, duration, order } = body;

    const updateData = {};
    if (title !== undefined) updateData.title = title.trim();
    if (description !== undefined) updateData.description = description.trim();
    if (videoUrl !== undefined) updateData.videoUrl = videoUrl.trim();
    if (duration !== undefined) updateData.duration = duration.trim();
    if (order !== undefined) updateData.order = order;
    if (thumbnail !== undefined) {
      updateData.thumbnail = thumbnail.trim() || youTubeThumbnail(videoUrl);
    }

    const video = await GalleryVideo.findByIdAndUpdate(id, updateData, { new: true });
    if (!video) {
      return NextResponse.json({ error: "Video not found." }, { status: 404 });
    }
    return NextResponse.json({ video });
  } catch (err) {
    console.error("Gallery video PATCH error:", err);
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
    const video = await GalleryVideo.findByIdAndDelete(id);
    if (!video) {
      return NextResponse.json({ error: "Video not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Gallery video DELETE error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
