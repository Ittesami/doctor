"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/services-data";
import Link from "next/link";
import { Calendar, Phone, Award, ArrowRight, MapPin, Clock } from "lucide-react";

const FEATURED_SLUGS = [
  "fistula-in-ano",
  "hemorrhoids-piles",
  "anal-fissure",
  "colorectal-cancer",
  "cytoreductive-surgery-hipec",
  "colonoscopy",
];

export default function Home() {
  const { language } = useLanguage();

  const featuredServices = FEATURED_SLUGS.map((slug) =>
    services.find((s) => s.slug === slug)
  ).filter(Boolean);

  const t = {
    en: {
      servicesTitle: "Our Services",
      servicesSubtitle:
        "Comprehensive colorectal care with advanced laser, laparoscopic, and HIPEC procedures",
      viewAll: "View All 18 Services",
      learnMore: "Learn More",
      aboutTitle: "About Dr. Ahsan Habib",
      aboutDesc:
        "Professor of Colorectal Surgery at Dhaka Medical College. Pioneer in laser colorectal surgery in Bangladesh, with international training in India, China, Germany and the UK.",
      aboutBtn: "Full Biography",
      yearsExp: "Years in Practice",
      surgeries: "Surgeries Performed",
      ctaTitle: "Ready to Book a Consultation?",
      ctaDesc:
        "Contact us at Laser Colorectal Center, Rupayan Prime, Green Road, Dhanmondi, Dhaka.",
      ctaBook: "Book Appointment",
      ctaCall: "Call Now",
    },
    bn: {
      servicesTitle: "আমাদের সেবা",
      servicesSubtitle:
        "উন্নত লেজার, ল্যাপারোস্কোপিক ও HIPEC পদ্ধতি সহ ব্যাপক কলোরেক্টাল সেবা",
      viewAll: "সকল ১৮টি সেবা দেখুন",
      learnMore: "আরও জানুন",
      aboutTitle: "ডা: মো: আহসান হাবিব সম্পর্কে",
      aboutDesc:
        "ঢাকা মেডিকেল কলেজের কোলোরেক্টাল সার্জারির অধ্যাপক। বাংলাদেশে লেজার কোলোরেক্টাল সার্জারির অগ্রদূত। ভারত, চীন, জার্মানি ও যুক্তরাজ্যে আন্তর্জাতিক প্রশিক্ষণপ্রাপ্ত।",
      aboutBtn: "সম্পূর্ণ জীবনী",
      yearsExp: "বছরের অভিজ্ঞতা",
      surgeries: "অপারেশন সম্পন্ন",
      ctaTitle: "পরামর্শ বুক করতে প্রস্তুত?",
      ctaDesc:
        "লেজার কোলোরেক্টাল সেন্টার, রুপায়ন প্রাইম, গ্রীন রোড, ধানমন্ডি, ঢাকায় যোগাযোগ করুন।",
      ctaBook: "অ্যাপয়েন্টমেন্ট বুক করুন",
      ctaCall: "এখনই কল করুন",
    },
  }[language];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero language={language} />

      {/* About Snapshot */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/doctor.jpg"
                alt="Dr. Md. Ahsan Habib"
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.aboutTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.aboutDesc}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                  <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                  <div className="text-sm text-gray-600">{t.yearsExp}</div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15000+</div>
                  <div className="text-sm text-gray-600">{t.surgeries}</div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                {t.aboutBtn}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Specialty Highlight */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en"
                ? "Pioneer in Colorectal Surgery & Internationally Trained"
                : "কলোরেক্টাল সার্জারিতে অগ্রদূত ও আন্তর্জাতিকভাবে প্রশিক্ষিত"}
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              {language === "en"
                ? "Dr. Md. Ahsan Habib is among the first surgeons in Bangladesh to introduce laser-assisted colorectal treatments. He has trained internationally in India, China, Germany, and the UK, bringing world-class expertise in complex fistula surgery, interventional colonoscopy, and cytoreductive surgery with HIPEC."
                : "ডা: মো: আহসান হাবিব বাংলাদেশে লেজার কলোরেক্টাল চিকিৎসা প্রবর্তনকারী অগ্রণী সার্জনদের একজন। তিনি ভারত, চীন, জার্মানি ও যুক্তরাজ্যে আন্তর্জাতিক প্রশিক্ষণ গ্রহণ করে জটিল ফিস্টুলা সার্জারি, ইন্টারভেনশনাল কোলোনোস্কপি এবং HIPEC-সহ সাইটোরিডাক্টিভ সার্জারিতে বিশ্বমানের দক্ষতা অর্জন করেছেন।"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en" ? "Trained in India, China, Germany & UK" : "ভারত, চীন, জার্মানি ও যুক্তরাজ্যে প্রশিক্ষিত"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en" ? "HIPEC & Laser Surgery Expert" : "HIPEC ও লেজার সার্জারি বিশেষজ্ঞ"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en" ? "High Success Rate in Complex Cases" : "জটিল ক্ষেত্রে উচ্চ সাফল্যের হার"}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Featured Services */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredServices.map((service, index) => {
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
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-1.5 bg-blue-600" />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{short}</p>
                    <span className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1">
                      {t.learnMore} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              {t.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-14 h-14 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-colors text-base"
            >
              <Calendar className="w-5 h-5" />
              {t.ctaBook}
            </Link>
            <a
              href="tel:+8801721036644"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              {t.ctaCall}
            </a>
          </div>
        </div>
      </section>

      {/* Chamber Location */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {language === "en" ? "Visit Our Chamber" : "আমাদের চেম্বারে আসুন"}
            </h2>
            <p className="text-gray-500 text-base">
              {language === "en"
                ? "Walk-ins welcome during consultation hours"
                : "পরামর্শের সময় সরাসরি আসতে পারেন"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Info card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-7 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {language === "en" ? "Specialised Colorectal Center" : "লেজার কোলোরেক্টাল সেন্টার"}
                </h3>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {language === "en" ? "Address" : "ঠিকানা"}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {language === "en"
                        ? "Rupayan Khan Plaza, Lift 8, House 18\nDhanmondi 7, Mirpur Road, Dhaka"
                        : "রূপায়ন খান প্লাজা, লিফট ৮, হাউস ১৮\nধানমন্ডি ৭, মিরপুর রোড, ঢাকা"}
                    </p>
                    <button
                      onClick={() => window.open("https://maps.app.goo.gl/UYXpwRkvYaK19pj2A", "_blank")}
                      className="mt-1.5 text-blue-600 hover:text-blue-700 font-medium text-xs inline-flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3" />
                      {language === "en" ? "Open in Google Maps →" : "গুগল ম্যাপে খুলুন →"}
                    </button>
                  </div>
                </div>

                {/* Days */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {language === "en" ? "Available Days" : "উপলব্ধ দিন"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {(language === "en"
                        ? ["Sat", "Sun", "Mon", "Wed"]
                        : ["শনি", "রবি", "সোম", "বুধ"]
                      ).map((day) => (
                        <span key={day} className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {language === "en" ? "Consultation Hours" : "পরামর্শের সময়"}
                    </p>
                    <p className="text-gray-700 text-sm font-semibold">
                      {language === "en" ? "7:00 PM – 9:00 PM" : "সন্ধ্যা ৭:০০ – রাত ৯:০০"}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {language === "en" ? "Appointment Serial" : "অ্যাপয়েন্টমেন্ট সিরিয়াল"}
                    </p>
                    <a href="tel:+8801721036644" className="text-blue-600 font-semibold hover:underline text-sm block">
                      +880 1721-036644
                    </a>
                    <a href="tel:+8801307242788" className="text-blue-600 font-semibold hover:underline text-sm block">
                      +880 1307-242788
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <Link
                  href="/appointment"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  {language === "en" ? "Book Online" : "অনলাইনে বুক করুন"}
                </Link>
                <a
                  href="tel:+8801721036644"
                  className="flex-1 flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-2.5 px-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {language === "en" ? "Call Now" : "এখনই কল করুন"}
                </a>
              </div>
            </div>

            {/* Map thumbnail */}
            <button
              onClick={() => window.open("https://maps.app.goo.gl/UYXpwRkvYaK19pj2A", "_blank")}
              className="relative w-full min-h-64 rounded-xl overflow-hidden group shadow-sm border border-gray-200"
              title={language === "en" ? "Open in Google Maps" : "গুগল ম্যাপে খুলুন"}
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: "url(/images/map.png)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8 group-hover:from-black/70 transition-all">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-white font-semibold text-base">
                    {language === "en" ? "Click to open in Google Maps" : "গুগল ম্যাপে খোলার জন্য ক্লিক করুন"}
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    {language === "en" ? "Dhanmondi, Dhaka" : "ধানমন্ডি, ঢাকা"}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
