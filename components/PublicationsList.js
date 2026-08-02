"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Calendar } from "lucide-react";

export default function PublicationsList({ publications }) {
  const { language } = useLanguage();

  const t = {
    en: {
      heading: "Publications & Research",
      subheading:
        "Peer-reviewed research contributions to colorectal surgery published in national and international medical journals.",
      empty: "No publications yet. Check back soon.",
    },
    bn: {
      heading: "প্রকাশনা ও গবেষণা",
      subheading:
        "জাতীয় ও আন্তর্জাতিক চিকিৎসা জার্নালে প্রকাশিত কোলোরেক্টাল সার্জারিতে পিয়ার-রিভিউড গবেষণা অবদান।",
      empty: "এখনো কোনো প্রকাশনা নেই। শীঘ্রই দেখুন।",
    },
  }[language];

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.heading}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">{t.subheading}</p>
        </div>
      </div>

      {/* Publications */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {publications.length === 0 ? (
            <p className="text-center text-gray-500">{t.empty}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((pub) => (
                <Link
                  key={pub._id}
                  href={`/publications/${pub.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(pub.publishedDate)}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3">
                    {pub.title}
                  </h3>
                  {pub.journal && (
                    <div className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {pub.journal}
                    </div>
                  )}
                  <p className="text-sm text-gray-600">
                    {pub.excerpt || pub.authors}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
