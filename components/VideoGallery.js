"use client";
import { useState, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";

export default function VideoGallery({ language }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const translations = {
    en: {
      title: "Video Gallery",
      subtitle: "Educational videos, surgical procedures, and professional seminars"
    },
    bn: {
      title: "ভিডিও গ্যালারি",
      subtitle: "শিক্ষামূলক ভিডিও, সার্জিক্যাল পদ্ধতি এবং পেশাদার সেমিনার"
    }
  };

  const t = translations[language];

  useEffect(() => {
    fetch("/api/gallery/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data.videos?.map((v) => ({ ...v, id: v._id })) || []))
      .catch(() => console.error("Failed to load gallery videos"))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openYouTubeVideo = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section id="gallery" className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        )}

        {!isLoading && videos.length === 0 && (
          <p className="text-center text-gray-500 py-10">No videos yet.</p>
        )}

        {/* Videos Grid */}
        {!isLoading && videos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => openYouTubeVideo(video.videoUrl)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer group"
            >
              {/* Thumbnail */}
              <div 
                className="relative aspect-video bg-gray-900 overflow-hidden"
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="bg-red-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2 text-left">
                  {video.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-2 text-left">
                  {video.description}
                </p>
              </div>
            </button>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}