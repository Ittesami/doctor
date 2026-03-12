"use client";
import { Facebook, Youtube, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer({ language }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const translations = {
    en: {
      copyright: "© Copyright 2025 Dr. Md. Ahsan Habib. | Developed by Ittehad Sami"
    },
    bn: {
      copyright: "© কপিরাইট ২০২৫ ডা. এম ডি আহসান হাবিব। | উন্নত করেছেন ইত্তেহাদ সামী"
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-900 text-white py-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            {t.copyright}
          </p>
          <div className="flex justify-start gap-6">
            <a
              href="https://www.facebook.com/Dr.MAhsanHabib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
              title="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.youtube.com/watch?v=1t8k_SKT078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
              title="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}