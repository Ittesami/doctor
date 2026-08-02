"use client";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { getServiceBySlug, services } from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMedicalProcedureSchema } from "@/lib/schema";
import Link from "next/link";
import { Calendar, Phone, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const service = getServiceBySlug(slug);

  const t = {
    en: {
      notFound: "Service Not Found",
      back: "Back to Services",
      bookHeading: "Consult Dr. Ahsan Habib",
      bookDesc: "Available at Laser Colorectal Center, Dhanmondi, Dhaka",
      bookBtn: "Book Appointment",
      callBtn: "Call Now",
      treatments: "Available Treatments",
      relatedTitle: "Related Services",
      allServices: "View All Services",
    },
    bn: {
      notFound: "সেবা পাওয়া যায়নি",
      back: "সেবা তালিকায় ফিরুন",
      bookHeading: "ডাঃ আহসান হাবিবের সাথে পরামর্শ করুন",
      bookDesc: "লেজার কোলোরেক্টাল সেন্টার, ধানমন্ডি, ঢাকায় পাওয়া যাচ্ছে",
      bookBtn: "অ্যাপয়েন্টমেন্ট বুক করুন",
      callBtn: "এখনই কল করুন",
      treatments: "উপলব্ধ চিকিৎসা",
      relatedTitle: "সম্পর্কিত সেবা",
      allServices: "সকল সেবা দেখুন",
    },
  }[language];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{t.notFound}</h1>
          <Link href="/services" className="text-blue-600 hover:underline flex items-center gap-1 justify-center">
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;
  const title = language === "en" ? service.titleEn : service.titleBn;
  const fullDescription =
    language === "en" ? service.fullDescriptionEn : service.fullDescriptionBn;

  // Pick 3 related services (same list, excluding current)
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <JsonLd data={buildMedicalProcedureSchema(service, language)} />
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-blue-200 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t.back}
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{title}</h1>
              <p className="text-blue-200 text-base md:text-lg">
                {language === "en"
                  ? service.shortDescriptionEn
                  : service.shortDescriptionBn}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                {fullDescription}
              </p>
            </div>

            {/* Treatments */}
            {service.treatments && service.treatments.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  {t.treatments}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.treatments.map((treatment, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-md px-4 py-3"
                    >
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">
                        {treatment}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-blue-600 text-white rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-2">{t.bookHeading}</h3>
              <p className="text-blue-100 text-sm mb-6">{t.bookDesc}</p>
              <Link
                href="/appointment"
                className="w-full bg-white text-blue-700 py-3 px-4 rounded-md font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <Calendar className="w-4 h-4" />
                {t.bookBtn}
              </Link>
              <a
                href="tel:+8801721036644"
                className="w-full border border-white/40 text-white py-3 px-4 rounded-md font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {t.callBtn}
              </a>
            </div>

            {/* Related Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t.relatedTitle}</h3>
              <div className="space-y-3">
                {related.map((s) => {
                  const RelIcon = s.icon;
                  const relTitle = language === "en" ? s.titleEn : s.titleBn;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <RelIcon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                        {relTitle}
                      </span>
                      <ArrowRight className="w-3 h-3 text-gray-400 ml-auto group-hover:text-blue-600 transition-colors" />
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/services"
                className="mt-4 text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
              >
                {t.allServices} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
