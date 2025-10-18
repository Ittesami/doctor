"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mainSlideIndex, setMainSlideIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    {
      id: 1,
      src: "/images/photo1.jpg",
      alt: "With Professor Thomas Deska atarien Hospital, Witten, Germany for training on laser proctology.",
      caption: "With Professor Thomas Deska atarien Hospital, Witten, Germany for training on laser proctology."
    },
    {
      id: 2,
      src: "/images/photo2.jpg",
      alt: "Operation Theatre",
      caption: "Operation Theatre"
    },
    {
      id: 3,
      src: "/images/photo3.jpeg",
      alt: "With Professor Parvez Sheikh(India) for training of complex and recurrent fistula in ano",
      caption: "With Professor Parvez Sheikh(India) for training of complex and recurrent fistula in ano"
    },
    {
      id: 4,
      src: "/images/photo4.jpeg",
      alt: "With colorectal surgeon Peter A Cataldon, professor of Vermont Medical university, USA and author of ASCRS Text book.",
      caption: "With colorectal surgeon Peter A Cataldon, professor of Vermont Medical university, USA and author of ASCRS Text book."
    },
    {
      id: 5,
      src: "/images/photo5.jpeg",
      alt: "Attending colorectal conference in India. Close meeting with faculty members. With Professor Chevate(India) and Professor Ali Shafik(Egypt).",
      caption: "Attending colorectal conference in India. Close meeting with faculty members. With Professor Chevate(India) and Professor Ali Shafik(Egypt)."
    },
    {
      id: 6,
      src: "/images/photo6.jpeg",
      alt: "Bleeding per rectum for radiation proctitis, an unpleasant situation for the patient. We started  formalin therapy every Wednesday at National Institute of cancer research and hospital in 2020.",
      caption: "Bleeding per rectum for radiation proctitis, an unpleasant situation for the patient. We started  formalin therapy every Wednesday at National Institute of cancer research and hospital in 2020."
    },
    {
      id: 7,
      src: "/images/photo7.jpeg",
      alt: "With Prof Antonio Longo, Italy",
      caption: "With Prof Antonio Longo, Italy"
    },
    {
      id: 8,
      src: "/images/photo8.jpeg",
      alt: "Lone star retractor made by me in 2016 for Rectal cancer operation.",
      caption: "Lone star retractor made by me in 2016 for Rectal cancer operation."
    },
    {
      id: 9,
      src: "/images/photo9.jpeg",
      alt: "With Professor Olivier Glehen (France) for training on advanced cancer surgery",
      caption: "With Professor Olivier Glehen (France) for training on advanced cancer surgery"
    },
    {
      id: 10,
      src: "/images/photo10.jpeg",
      alt: "",
      caption: ""
    },
    {
      id: 11,
      src: "/images/photo11.jpeg",
      alt: "",
      caption: ""
    },
    {
      id: 12,
      src: "/images/photo12.jpeg",
      alt: "With Professor Thomas Deska atarien ",
      caption: "With Professor Thomas Deska atarien"
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide effect for main gallery (always playing, pause on hover)
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      const itemsPerView = isMobile ? 1 : 3;
      const maxSlides = Math.ceil(images.length / itemsPerView);
      setMainSlideIndex((prev) => (prev + 1) % maxSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isHovering, isMobile, images.length]);

  // Main gallery navigation
  const nextMainSlide = () => {
    const itemsPerView = isMobile ? 1 : 3;
    const maxSlides = Math.ceil(images.length / itemsPerView);
    setMainSlideIndex((prev) => (prev + 1) % maxSlides);
  };

  const prevMainSlide = () => {
    const itemsPerView = isMobile ? 1 : 3;
    const maxSlides = Math.ceil(images.length / itemsPerView);
    setMainSlideIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  // Get images to display in main slider
  const getVisibleImages = () => {
    const itemsPerView = isMobile ? 1 : 3;
    const startIndex = mainSlideIndex * itemsPerView;
    return images.slice(startIndex, startIndex + itemsPerView);
  };

  const visibleImages = getVisibleImages();
  const itemsPerView = isMobile ? 1 : 3;
  const maxSlides = Math.ceil(images.length / itemsPerView);

  // Modal gallery auto-slide (pause on hover)
  useEffect(() => {
    if (!selectedImage || isHovering) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering, selectedImage, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openGallery = (image) => {
    setSelectedImage(image);
    setCurrentSlide(images.findIndex(img => img.id === image.id));
  };

  const closeGallery = () => {
    setSelectedImage(null);
    setCurrentSlide(0);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our facilities, equipment, and professional engagements
          </p>
        </div>

        {/* Main Slider */}
        <div className="mb-12">
          <div 
            className="relative bg-gray-100 rounded-lg overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Slider Container */}
            <div className="relative overflow-hidden">
  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 lg:p-6 transition-all duration-700 ease-in-out`}
    style={{
      transform: `translateX(0)`,
      animation: `slideIn 0.7s ease-in-out`
    }}
  >
                {visibleImages.map((image) => (
                  <div 
                    key={image.id}
                    className="overflow-hidden rounded-lg cursor-pointer hover:shadow-lg shadow-md transition-all transform hover:-translate-y-1 group"
                    onClick={() => openGallery(image)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {image.caption && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0 flex items-end p-4">
                          <p className="text-white text-sm font-medium line-clamp-2">{image.caption}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Previous Button */}
              <button 
                onClick={prevMainSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-all z-10 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button 
                onClick={nextMainSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-all z-10 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 py-4">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setMainSlideIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === mainSlideIndex 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-400 w-2 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sliding Modal Gallery */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="max-w-5xl w-full">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button 
                  onClick={closeGallery}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Main Slide Container */}
              <div className="relative bg-black rounded-lg overflow-hidden">
                {/* Images Slide */}
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  {images.map((image, index) => (
                    <div
                      key={image.id}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Previous Button */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  {currentSlide + 1} / {images.length}
                </div>
              </div>

              {/* Caption */}
              {images[currentSlide]?.caption && (
                <div className="mt-6 bg-black/50 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-white text-lg">{images[currentSlide].caption}</p>
                </div>
              )}

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 w-2 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`}</style>
    </section>
  );
}