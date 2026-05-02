"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      publications: "Publications",
      gallery: "Gallery",
      appointment: "Book Now",
      appointmentFull: "Make an Appointment",
      callFor: "Call for appointments",
      available: "Available 24/7",
    },
    bn: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবা",
      publications: "প্রকাশনা",
      gallery: "গ্যালারি",
      appointment: "বুক করুন",
      appointmentFull: "অ্যাপয়েন্টমেন্ট নিন",
      callFor: "অ্যাপয়েন্টমেন্টের জন্য কল করুন",
      available: "২৪/৭ উপলব্ধ",
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    // On non-home pages always show solid navbar
    if (!isHome) setIsScrolled(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about" },
    { label: t.services, href: "/services" },
    { label: t.publications, href: "/publications" },
    { label: t.gallery, href: "/gallery" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // On non-home pages always use solid style
  const solid = !isHome || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`text-sm sm:text-lg font-bold transition-colors flex-shrink-0 ${
              solid ? "text-blue-600 hover:text-blue-700" : "text-transparent"
            }`}
          >
            <span className="hidden sm:inline">
              {language === "en" ? "Dr. Ahsan Habib" : "ডা. আহসান হাবিব"}
            </span>
            <span className="inline sm:hidden">
              {language === "en" ? "Dr. Habib" : "ডা. হাবিব"}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors text-xs lg:text-sm relative pb-1 ${
                  solid ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
                } ${
                  isActive(link.href)
                    ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 text-xs lg:text-sm"
            >
              <Phone className="w-4 h-4" />
              {t.appointment}
            </Link>
          </div>

          {/* Right: Language + Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "bn" : "en")}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-md font-medium transition-all text-xs ${
                solid
                  ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              title="Toggle Language"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs">{language === "en" ? "বাংলা" : "EN"}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                solid
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white border-gray-200">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium text-sm ${
                    isActive(link.href)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  href="/appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {t.appointmentFull}
                </Link>

                <div className="bg-blue-50 border border-blue-200 px-4 py-3 rounded-lg mt-3">
                  <p className="text-xs text-gray-600">{t.callFor}</p>
                  <p className="text-base font-bold text-blue-600 mt-1">+880 1721-036644</p>
                  <p className="text-xs text-gray-600 mt-1">{t.available}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
