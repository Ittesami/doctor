"use client";
import { useState } from "react";
import { Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import GalleryImagesManager from "./GalleryImagesManager";
import GalleryVideosManager from "./GalleryVideosManager";

export default function GalleryManager() {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 rounded-[26px] border border-[#e7dccf] bg-[#f7f1ea] p-2 shadow-[0_12px_30px_rgba(68,52,37,0.06)]">
        <div className="flex items-center gap-2 rounded-[18px] bg-[#efe5d9] p-1">
          <button
            onClick={() => setActiveTab("photos")}
            className={`flex items-center justify-center gap-2 rounded-[14px] px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] transition-all ${
              activeTab === "photos"
                ? "bg-[#1a2432] text-[#f9f5f0] shadow-[0_10px_18px_rgba(26,36,50,0.22)]"
                : "text-slate-600 hover:bg-white hover:text-slate-800"
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Photos
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center justify-center gap-2 rounded-[14px] px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] transition-all ${
              activeTab === "videos"
                ? "bg-[#5547d0] text-white shadow-[0_10px_18px_rgba(85,71,208,0.28)]"
                : "text-slate-600 hover:bg-white hover:text-slate-800"
            }`}
          >
            <VideoIcon className="w-4 h-4" />
            Videos
          </button>
        </div>

        <div className="hidden rounded-full border border-[#d8c7b1] bg-[#faf6f1] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7a6755] sm:block">
          Showcase
        </div>
      </div>

      {activeTab === "photos" ? <GalleryImagesManager /> : <GalleryVideosManager />}
    </div>
  );
}
