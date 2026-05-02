"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import { useLanguage } from "@/context/LanguageContext";
import { Image, Video } from "lucide-react";

export default function GalleryPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("photos");

  const t = {
    en: {
      heading: "Gallery",
      subheading:
        "Photos and videos from Dr. Ahsan Habib's professional engagements, international training, and medical procedures.",
      photos: "Photo Gallery",
      videos: "Video Gallery",
    },
    bn: {
      heading: "গ্যালারি",
      subheading:
        "ডাঃ আহসান হাবিবের পেশাদার কার্যক্রম, আন্তর্জাতিক প্রশিক্ষণ এবং চিকিৎসা পদ্ধতির ছবি ও ভিডিও।",
      photos: "ফটো গ্যালারি",
      videos: "ভিডিও গ্যালারি",
    },
  }[language];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heading}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">{t.subheading}</p>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-2 px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "photos"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <Image className="w-4 h-4" />
              {t.photos}
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "videos"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <Video className="w-4 h-4" />
              {t.videos}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === "photos" ? (
        <Gallery language={language} />
      ) : (
        <VideoGallery language={language} />
      )}

      <Footer />
    </div>
  );
}
