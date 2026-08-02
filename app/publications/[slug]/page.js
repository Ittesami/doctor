import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildArticleSchema } from "@/lib/schema";
import connectDB from "@/lib/mongodb";
import Publication from "@/lib/models/Publication";
import { ArrowLeft, BookOpen, Calendar, Phone } from "lucide-react";

async function getPublication(slug) {
  await connectDB();
  const publication = await Publication.findOne({ slug });
  return publication ? JSON.parse(JSON.stringify(publication)) : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const publication = await getPublication(slug);

  if (!publication) {
    return { title: "Publication Not Found" };
  }

  const description =
    publication.excerpt ||
    publication.content?.slice(0, 160) ||
    `Research publication by Prof. Dr. Md. Ahsan Habib${
      publication.journal ? ` in ${publication.journal}` : ""
    }.`;

  return {
    title: `${publication.title} | Prof. Dr. Md. Ahsan Habib`,
    description,
    openGraph: {
      title: publication.title,
      description,
      type: "article",
      publishedTime: publication.publishedDate,
    },
  };
}

export default async function PublicationDetailPage({ params }) {
  const { slug } = await params;
  const publication = await getPublication(slug);

  if (!publication) {
    notFound();
  }

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="min-h-screen">
      <JsonLd data={buildArticleSchema(publication)} />
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-28 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1 text-blue-200 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Publications
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                {publication.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-blue-100 text-sm">
                {publication.journal && (
                  <span className="bg-white/15 px-3 py-1 rounded-full">
                    {publication.journal}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(publication.publishedDate)}
                </span>
              </div>
              {publication.authors && (
                <p className="text-blue-200 text-sm mt-3">{publication.authors}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm space-y-6">
          {publication.excerpt && (
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              {publication.excerpt}
            </p>
          )}
          {publication.content && (
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {publication.content}
            </p>
          )}
        </div>

        {/* Booking CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-lg font-medium">
            Consult Dr. Ahsan Habib about your condition
          </p>
          <div className="flex gap-3">
            <Link
              href="/appointment"
              className="bg-white text-blue-700 py-2.5 px-5 rounded-md font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Link>
            <a
              href="tel:+8801721036644"
              className="border border-white/40 text-white py-2.5 px-5 rounded-md font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
