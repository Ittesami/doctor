"use client";
import { useState, useEffect } from "react";
import { Play } from "lucide-react";

export default function VideoGallery({ language }) {
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

  const videos = [
    {
      id: 1,
      title: "Laparoscopic Gynecology Surgery",
      description: language === 'en'
        ? "Advanced laparoscopic techniques in gynecologic procedures"
        : "গাইনোকলজিক পদ্ধতিতে উন্নত ল্যাপারোস্কোপিক কৌশল",
      thumbnail: "https://i3.ytimg.com/vi/5SbP2XgWerc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5SbP2XgWerc",
      duration: "4:31"
    },
    {
      id: 2,
      title: "Women's Health Awareness Seminar",
      description: language === 'en'
        ? "Educational seminar on women's reproductive health"
        : "মহিলাদের প্রজনন স্বাস্থ্যের উপর শিক্ষামূলক সেমিনার",
      thumbnail: "https://i3.ytimg.com/vi/u6HPjjhMqfk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=u6HPjjhMqfk",
      duration: "4:27"
    },
    {
      id: 3,
      title: "Gynecologic Surgery Techniques",
      description: language === 'en'
        ? "Modern surgical approaches in gynecology"
        : "গাইনিকোলজিতে আধুনিক সার্জিক্যাল পদ্ধতি",
      thumbnail: "https://i3.ytimg.com/vi/7VIKi-V8SsI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=7VIKi-V8SsI",
      duration: "42:09"
    },
    {
      id: 4,
      title: "Minimally Invasive Surgery",
      description: language === 'en'
        ? "Minimally invasive gynecologic surgical procedures"
        : "ন্যূনতম আক্রমণাত্মক গাইনোকলজিক সার্জিক্যাল পদ্ধতি",
      thumbnail: "https://i3.ytimg.com/vi/fxQKA2AfwVk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=fxQKA2AfwVk",
      duration: "7:06"
    },
    {
      id: 5,
      title: "Women's Healthcare Education",
      description: language === 'en'
        ? "Comprehensive guide to women's health and wellness"
        : "মহিলা স্বাস্থ্য এবং সুস্থতার জন্য ব্যাপক নির্দেশিকা",
      thumbnail: "https://i3.ytimg.com/vi/I9sN7FYJvR8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=I9sN7FYJvR8",
      duration: "21:55"
    },
    {
      id: 6,
      title: "Gynecology & Obstetrics Overview",
      description: language === 'en'
        ? "Overview of gynecology and obstetrics procedures"
        : "গাইনিকোলজি এবং অবস্টেট্রিক্স পদ্ধতির সংক্ষিপ্ত বিবরণ",
      thumbnail: "https://i3.ytimg.com/vi/1t8k_SKT078/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=1t8k_SKT078",
      duration: "23:59"
    },
  ];

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

        {/* Videos Grid */}
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
      </div>
    </section>
  );
}