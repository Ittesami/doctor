"use client";
import { CheckCircle, Home } from "lucide-react";
import Link from "next/link";

export default function StepSuccess({ language }) {
  const translations = {
    en: {
      title: "Appointment Submitted!",
      message: "Your appointment request has been submitted successfully. We will review your payment and contact you via WhatsApp with your appointment schedule.",
      note: "Please keep your WhatsApp available for our response.",
      home: "Back to Home",
    },
    bn: {
      title: "অ্যাপয়েন্টমেন্ট জমা হয়েছে!",
      message: "আপনার অ্যাপয়েন্টমেন্ট অনুরোধ সফলভাবে জমা হয়েছে। আমরা আপনার পেমেন্ট যাচাই করব এবং আপনার অ্যাপয়েন্টমেন্টের সময়সূচী হোয়াটসঅ্যাপে জানাব।",
      note: "অনুগ্রহ করে আমাদের প্রতিক্রিয়ার জন্য আপনার হোয়াটসঅ্যাপ চালু রাখুন।",
      home: "হোমে ফিরে যান",
    },
  };

  const t = translations[language];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 shadow-sm text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
      <p className="text-gray-600 mb-4 max-w-md mx-auto">{t.message}</p>
      <p className="text-sm text-blue-600 font-medium mb-8">{t.note}</p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-colors"
      >
        <Home className="w-4 h-4" />
        {t.home}
      </Link>
    </div>
  );
}
