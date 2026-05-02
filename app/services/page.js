"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/services-data";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function ServicesPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      heading: "Our Services",
      subheading:
        "Comprehensive colorectal care covering 18 specialties — from laser procedures and VAAFT to HIPEC and laparoscopic cancer surgery.",
      learnMore: "Learn More",
      bookCta: "Have a specific concern? Book a consultation.",
      bookBtn: "Book Appointment",
    },
    bn: {
      heading: "আমাদের সেবা",
      subheading:
        "লেজার পদ্ধতি ও VAAFT থেকে HIPEC ও ল্যাপারোস্কোপিক ক্যান্সার সার্জারি পর্যন্ত ১৮টি বিশেষত্বে ব্যাপক কলোরেক্টাল সেবা।",
      learnMore: "আরও জানুন",
      bookCta: "নির্দিষ্ট সমস্যা আছে? একটি পরামর্শ সেশন বুক করুন।",
      bookBtn: "অ্যাপয়েন্টমেন্ট বুক করুন",
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

      {/* Services Grid */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const title = language === "en" ? service.titleEn : service.titleBn;
              const short =
                language === "en"
                  ? service.shortDescriptionEn
                  : service.shortDescriptionBn;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.04}s` }}
                >
                  <div className="h-1.5 bg-blue-600" />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{short}</p>
                    <span className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.learnMore} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <div className="bg-blue-600 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg font-medium">{t.bookCta}</p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            {t.bookBtn}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
