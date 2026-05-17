"use client";
import { Facebook, Youtube, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = {
    en: {
      copyright: "© Copyright 2025 Dr. Md. Ahsan Habib. | Developed by Tasnuva Mahjabin",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      services: "Services",
      publications: "Publications", 
      gallery: "Gallery",
      appointment: "Book Appointment",
      contact: "Contact",
      chamber1Name: "Specialised Colorectal Center",
      chamber2Name: "Asia Hospital, Tangail",
      address: "Rupayan Prime, Green Rd\nDhanmondi, Dhaka 1205",
      phone: "+880 1721-036644",
      phone1: "+880 1307-242788",
      hours: "Sat, Sun, Mon, Wed — 7:00 PM to 9:00 PM",
      address2: "Asia Hospital, Mymensingh Road\nSabalia, Tangail",
      phone2: "+880 1740-614450",
      hours2: "Thu: 5–8 PM · Fri: All Day",
      website: "www.drmdahsanhabib.com",
    },
    bn: {
      copyright: "© কপিরাইট ২০২৫ ডা. এম ডি আহসান হাবিব। | উন্নত করেছেন তাসনুভা মাহজাবিন",
      quickLinks: "দ্রুত লিঙ্ক",
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      services: "সেবা",
      publications: "প্রকাশনা",
      gallery: "গ্যালারি",
      appointment: "অ্যাপয়েন্টমেন্ট বুক করুন",
      contact: "যোগাযোগ",
      chamber1Name: "স্পেশালাইজড কোলোরেক্টাল সেন্টার",
      chamber2Name: "এশিয়া হসপিটাল, টাঙ্গাইল",
      address: "রুপায়ন প্রাইম, গ্রীন রোড\nধানমন্ডি, ঢাকা ১২০৫",
      phone: "+৮৮০ ১৭২১-০৩৬৬৪৪, +৮৮০ ১৩০৭-২৪২৭৮৮",
      hours: "শনি, রবি, সোম, বুধ — সন্ধ্যা ৭:০০ – ৯:০০",
      address2: "এশিয়া হসপিটাল, ময়মনসিংহ রোড\nসাবালিয়া, টাঙ্গাইল",
      phone2: "+৮৮০ ১৭৪০-৬১৪৪৫০",
      hours2: "বৃহস্পতি: ৫–৮ টা · শুক্রবার: সারাদিন",
      website: "www.drmdahsanhabib.com",
    },
  }[language];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about" },
    { label: t.services, href: "/services" },
    { label: t.publications, href: "/publications" },
    { label: t.gallery, href: "/gallery" },
    { label: t.appointment, href: "/appointment" },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              {language === "en" ? "Dr. Md. Ahsan Habib" : "ডা: মো: আহসান হাবিব"}
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              {language === "en"
                ? "Professor of Colorectal Surgery, Dhaka Medical College. Pioneer in laser surgery & HIPEC in Bangladesh."
                : "ঢাকা মেডিকেল কলেজের কোলোরেক্টাল সার্জারির অধ্যাপক। বাংলাদেশে লেজার সার্জারি ও HIPEC-এর অগ্রদূত।"}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Dr.MAhsanHabib/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors hover:scale-110"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=1t8k_SKT078"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors hover:scale-110"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.contact}</h4>
            <div className="space-y-4 text-sm text-blue-200">
              {/* Chamber 1 */}
              <div>
                <p className="text-white font-medium text-xs mb-1">{t.chamber1Name || "Laser Colorectal Center"}</p>
                <p className="whitespace-pre-line">{t.address}</p>
                <a href="tel:+8801721036644" className="hover:text-white transition-colors">{t.phone}, </a>
                <a href="tel:+8801307242788" className="hover:text-white transition-colors">{t.phone1}</a>
                <p className="text-blue-300 text-xs mt-0.5">{t.hours}</p>
              </div>
              {/* Chamber 2 */}
              <div>
                <p className="text-white font-medium text-xs mb-1">{t.chamber2Name || "Asia Hospital, Tangail"}</p>
                <p className="whitespace-pre-line">{t.address2}</p>
                <a href="tel:+8801740614450" className="hover:text-white transition-colors">{t.phone2}</a>
                <p className="text-blue-300 text-xs mt-0.5">{t.hours2}</p>
              </div>
              {/* Website */}
              <div>
                <a
                  href="https://www.drmdahsanhabib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white text-xs transition-colors"
                >
                  🌐 {t.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 py-5 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-300 text-xs">{t.copyright}</p>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-40"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
