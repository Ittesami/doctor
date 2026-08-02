import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import GalleryVideo from "@/lib/models/GalleryVideo";
import { getAdminFromToken } from "@/lib/auth";
import { youTubeThumbnail } from "@/lib/youtube";

export async function GET() {
  try {
    await connectDB();
    const videos = await GalleryVideo.find().sort({ order: 1, createdAt: 1 });
    return NextResponse.json({ videos });
  } catch (err) {
    console.error("Gallery videos GET error:", err);
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
    const { title, description, videoUrl, thumbnail, duration, order } = body;

    if (!title?.trim() || !videoUrl?.trim()) {
      return NextResponse.json(
        { error: "Title and video URL are required." },
        { status: 400 }
      );
    }

    const video = await GalleryVideo.create({
      title: title.trim(),
      description: description?.trim() || "",
      videoUrl: videoUrl.trim(),
      thumbnail: thumbnail?.trim() || youTubeThumbnail(videoUrl),
      duration: duration?.trim() || "",
      order: order || 0,
    });

    return NextResponse.json({ video }, { status: 201 });
  } catch (err) {
    console.error("Gallery videos POST error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
