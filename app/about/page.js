"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Biography from "@/components/Biography";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();

  const t = {
    en: { book: "Book Appointment", call: "Call Now" },
    bn: { book: "অ্যাপয়েন্টমেন্ট বুক করুন", call: "এখনই কল করুন" },
  }[language];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            {language === "en" ? "About Dr. Md. Ahsan Habib" : "ডা: মো:আহসান হাবিব সম্পর্কে"}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            {language === "en"
              ? "Professor of Colorectal Surgery at Dhaka Medical College — Pioneer in laser surgery & HIPEC in Bangladesh"
              : "ঢাকা মেডিকেল কলেজের কোলোরেক্টাল সার্জারির অধ্যাপক — বাংলাদেশে লেজার সার্জারি ও HIPEC-এর অগ্রদূত"}
          </p>
        </div>
      </div>

      {/* Biography Section */}
      <Biography language={language} />

      {/* CTA */}
      <div className="bg-blue-50 border-t border-blue-100 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === "en"
              ? "Schedule a Consultation"
              : "একটি পরামর্শ সেশন নির্ধারণ করুন"}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              <Calendar className="w-4 h-4" />
              {t.book}
            </Link>
            <a
              href="tel:+8801721036644"
              className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              {t.call}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
