"use client";
import { useState, useEffect } from "react";
import { X, Play, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Dr Ahsan Habib Treatment procedure of piles",
      description: "Dr Ahsan Habib Treatment procedure of piles",
      thumbnail: "https://i3.ytimg.com/vi/5SbP2XgWerc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5SbP2XgWerc",
      duration: "4:31"
    },
    {
      id: 2,
      title: "BSCRS 1st National Conference",
      description: "BSCRS 1st National Conference",
      thumbnail: "https://i3.ytimg.com/vi/u6HPjjhMqfk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=u6HPjjhMqfk",
      duration: "4:27"
    },
    {
      id: 3,
      title: "Piles treatment - Colorectal polyps Dr. Md. Ahsan Habib",
      description: "Piles treatment - Colorectal polyps Dr. Md. Ahsan Habib",
      thumbnail: "https://i3.ytimg.com/vi/7VIKi-V8SsI/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=7VIKi-V8SsI",
      duration: "42:09"
    },
    {
      id: 4,
      title: "Laparoscopic Ventral Rectopexy by Professor Sheikh",
      description: "Laparoscopic Ventral Rectopexy by Professor Sheikh",
      thumbnail: "https://i3.ytimg.com/vi/fxQKA2AfwVk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=fxQKA2AfwVk",
      duration: "7:06"
    },
    {
      id: 5,
      title: "লেজার পদ্ধতিতে পাইলস রোগের চিকিৎসা",
      description: "লেজার পদ্ধতিতে পাইলস রোগের চিকিৎসা",
      thumbnail: "https://i3.ytimg.com/vi/I9sN7FYJvR8/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=I9sN7FYJvR8",
      duration: "21:55"
    },
    {
      id: 6,
      title: "Laser Treatment In Anal Fissure",
      description: "Laser Treatment In Anal Fissure",
      thumbnail: "https://i3.ytimg.com/vi/1t8k_SKT078/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=1t8k_SKT078",
      duration: "23:59"
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openVideo = (video, index) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setVideoError(false);
  };

  const handleVideoChange = (video, index) => {
    setSelectedVideo(video);
    setCurrentVideoIndex(index);
    setVideoError(false);
  };

  const nextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    handleVideoChange(videos[nextIndex], nextIndex);
  };

  const prevVideo = () => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    handleVideoChange(videos[prevIndex], prevIndex);
  };

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Video Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Educational videos, surgical procedures, and professional seminars
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openVideo(video, index)}
            >
              {/* Thumbnail */}
              <div 
                className="relative aspect-video bg-gray-900 overflow-hidden group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            onClick={closeVideo}
          >
            <div 
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button 
                  onClick={closeVideo}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Video Container */}
              <div className="relative bg-black rounded-lg overflow-hidden">
                <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                  {!videoError ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.videoUrl.split('v=')[1]}`}
                      title={selectedVideo.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onError={() => setVideoError(true)}
                    />
                  ) : (
                    <a
                      href={selectedVideo.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/70 hover:bg-black/60 transition-all duration-200"
                      title="Open on YouTube"
                    >
                      <div className="text-center">
                        <Play className="w-16 h-16 text-white mx-auto mb-4 fill-white" />
                        <p className="text-white text-lg font-semibold">Video Unavailable</p>
                        <p className="text-gray-300 text-sm mt-2">Click to watch on YouTube</p>
                      </div>
                    </a>
                  )}
                </div>

                {/* Previous Button */}
                <button 
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button 
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Video Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  {currentVideoIndex + 1} / {videos.length}
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-6 bg-black/50 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-3">{selectedVideo.title}</h3>
                <p className="text-gray-300">{selectedVideo.description}</p>
                <p className="text-gray-400 text-sm mt-3">Duration: {selectedVideo.duration}</p>
              </div>

              {/* Thumbnails Strip */}
              <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => {
                      handleVideoChange(video, index);
                    }}
                    className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                      index === currentVideoIndex 
                        ? 'ring-2 ring-blue-500 scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-20 h-14 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}