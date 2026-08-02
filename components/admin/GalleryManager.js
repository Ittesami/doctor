"use client";
import { useState } from "react";
import { Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import GalleryImagesManager from "./GalleryImagesManager";
import GalleryVideosManager from "./GalleryVideosManager";

export default function GalleryManager() {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("photos")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "photos"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          Photos
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "videos"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          <VideoIcon className="w-4 h-4" />
          Videos
        </button>
      </div>

      {activeTab === "photos" ? <GalleryImagesManager /> : <GalleryVideosManager />}
    </div>
  );
}
