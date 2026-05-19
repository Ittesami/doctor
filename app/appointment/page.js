"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin, Phone, Clock, Calendar as CalendarIcon,
  User, Mail, MessageSquare, CheckCircle, Loader2,
} from "lucide-react";

// Dhanmondi chamber available days: Sun(0), Mon(1), Wed(3), Sat(6)
const AVAILABLE_WEEK_DAYS = new Set([0, 1, 3, 6]);
const DAY_NAMES_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAMES_BN = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"];

const MONTH_NAMES_EN = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
];
const MONTH_NAMES_BN = [
  "জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টে","অক্টো","নভে","ডিসে"
];

function getAvailableDates(weeks = 10) {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Start from tomorrow
  const cursor = new Date(today);
  cursor.setDate(cursor.getDate() + 1);
  const limit = weeks * 7;
  for (let i = 0; i < limit; i++) {
    if (AVAILABLE_WEEK_DAYS.has(cursor.getDay())) {
      dates.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

export default function AppointmentPage() {
  const { language } = useLanguage();

  const availableDates = useMemo(() => getAvailableDates(10), []);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isBn = language === "bn";

  const t = {
    en: {
      heading: "Book an Appointment",
      subheading: "Fill in the form and we will contact you to confirm your appointment.",
      formTitle: "Request an Appointment",
      fullName: "Full Name",
      fullNamePh: "Your full name",
      phone: "Phone / WhatsApp",
      phonePh: "+880 XXXXXXXXXX",
      email: "Email Address (optional)",
      emailPh: "your@email.com",
      dateLabel: "Preferred Date",
      datePh: "— Select an available date —",
      message: "Describe Your Problem (optional)",
      messagePh: "Tell us about your symptoms or what you'd like to discuss…",
      submit: "Send Request",
      submitting: "Sending…",
      successTitle: "Request Received!",
      successMsg: "Thank you. We will contact you on the number you provided to confirm your appointment.",
      errorFallback: "Something went wrong. Please try again.",
      chamberTitle: "Chamber Location",
      chamberName: "Specialised Colorectal Center",
      chamberAddress: "Rupayan Prime, Green Rd\nDhanmondi, Dhaka 1205",
      chamberDays: "Sat · Sun · Mon · Wed",
      chamberHours: "7:00 PM – 9:00 PM",
      chamberPhone1: "+880 1721-036644",
      chamberPhone2: "+880 1307-242788",
      chamberMap: "View on Google Maps →",
      location: "Location",
      phoneLabel: "Appointment Serial",
      schedule: "Available Days",
      hours: "Consultation Hours",
      callNow: "Call Now",
      clickToOpen: "Click to open in Google Maps",
    },
    bn: {
      heading: "অ্যাপয়েন্টমেন্ট বুক করুন",
      subheading: "নিচের ফর্মটি পূরণ করুন। আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করতে আমরা যোগাযোগ করব।",
      formTitle: "অ্যাপয়েন্টমেন্টের অনুরোধ",
      fullName: "পুরো নাম",
      fullNamePh: "আপনার পুরো নাম",
      phone: "ফোন / হোয়াটসঅ্যাপ",
      phonePh: "+৮৮০ XXXXXXXXXX",
      email: "ইমেইল ঠিকানা (ঐচ্ছিক)",
      emailPh: "your@email.com",
      dateLabel: "পছন্দের তারিখ",
      datePh: "— উপলব্ধ তারিখ বেছে নিন —",
      message: "সমস্যার বিবরণ (ঐচ্ছিক)",
      messagePh: "আপনার উপসর্গ বা আলোচনা করতে চান এমন বিষয় লিখুন…",
      submit: "অনুরোধ পাঠান",
      submitting: "পাঠানো হচ্ছে…",
      successTitle: "অনুরোধ পাওয়া গেছে!",
      successMsg: "ধন্যবাদ। আপনার দেওয়া নম্বরে আমরা শীঘ্রই যোগাযোগ করে অ্যাপয়েন্টমেন্ট নিশ্চিত করব।",
      errorFallback: "কিছু একটা ঠিকঠাক হয়নি। আবার চেষ্টা করুন।",
      chamberTitle: "চেম্বারের অবস্থান",
      chamberName: "লেজার কোলোরেক্টাল সেন্টার",
      chamberAddress: "রুপায়ন প্রাইম, গ্রীন রোড\nধানমন্ডি, ঢাকা ১২০৫",
      chamberDays: "শনি · রবি · সোম · বুধ",
      chamberHours: "সন্ধ্যা ৭:০০ – রাত ৯:০০",
      chamberPhone1: "+৮৮০ ১৭২১-০৩৬৬৪৪",
      chamberPhone2: "+৮৮০ ১৩০৭-২৪২৭৮৮",
      chamberMap: "গুগল ম্যাপে দেখুন →",
      location: "অবস্থান",
      phoneLabel: "অ্যাপয়েন্টমেন্ট সিরিয়াল",
      schedule: "উপলব্ধ দিনগুলি",
      hours: "পরামর্শের সময়",
      callNow: "এখনই কল করুন",
      clickToOpen: "গুগল ম্যাপে খোলার জন্য ক্লিক করুন",
    },
  }[language];

  // Format a Date object into a human-readable option label
  const formatDateOption = (date) => {
    const dayNames = isBn ? DAY_NAMES_BN : DAY_NAMES_EN;
    const monthNames = isBn ? MONTH_NAMES_BN : MONTH_NAMES_EN;
    const day = dayNames[date.getDay()];
    const d = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}, ${d} ${month} ${year}`;
  };

  // ISO value stored in form state
  const toISODate = (date) => date.toISOString().split("T")[0];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.preferredDate) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          preferredChamber: "dhanmondi",
          preferredDate: form.preferredDate,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t.errorFallback);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message || t.errorFallback);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

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

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Request Form ── */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{t.formTitle}</h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.successTitle}</h3>
                  <p className="text-gray-600 max-w-sm">{t.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Full Name */}
                  <div>
                    <label className={labelClass}>
                      {t.fullName} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text" name="fullName" value={form.fullName}
                        onChange={handleChange} required placeholder={t.fullNamePh}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>
                      {t.phone} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel" name="phone" value={form.phone}
                        onChange={handleChange} required placeholder={t.phonePh}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>{t.email}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder={t.emailPh}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Preferred Date — only available days */}
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-gray-500" />
                        {t.dateLabel} <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      name="preferredDate"
                      value={form.preferredDate}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="" disabled>{t.datePh}</option>
                      {availableDates.map((date) => (
                        <option key={toISODate(date)} value={toISODate(date)}>
                          {formatDateOption(date)}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-400 mt-1">
                      {isBn
                        ? "শনি, রবি, সোম ও বুধ — সন্ধ্যা ৭টা থেকে রাত ৯টা"
                        : "Available: Sat, Sun, Mon & Wed — 7:00 PM to 9:00 PM"}
                    </p>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>{t.message}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        name="message" value={form.message}
                        onChange={handleChange} placeholder={t.messagePh}
                        rows={3} className={`${inputClass} pl-10 resize-none`}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md px-4 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit" disabled={status === "submitting"}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" />{t.submitting}</>
                    ) : t.submit}
                  </button>
                </form>
              )}
            </div>

            {/* ── Chamber Info ── */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">{t.chamberTitle}</h2>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                  {t.chamberName}
                </h3>
                <div className="space-y-3">

                  {/* Location */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{t.location}</p>
                      <p className="text-gray-700 text-sm whitespace-pre-line">{t.chamberAddress}</p>
                      <button
                        onClick={() => window.open("https://maps.app.goo.gl/UYXpwRkvYaK19pj2A", "_blank")}
                        className="mt-1 text-blue-600 hover:text-blue-700 font-medium text-xs"
                      >
                        {t.chamberMap}
                      </button>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{t.phoneLabel}</p>
                      <a href={`tel:${t.chamberPhone1.replace(/[\s\-]/g, "")}`} className="text-blue-600 font-semibold hover:underline text-sm block">
                        {t.chamberPhone1}
                      </a>
                      <a href={`tel:${t.chamberPhone2.replace(/[\s\-]/g, "")}`} className="text-blue-600 font-semibold hover:underline text-sm block">
                        {t.chamberPhone2}
                      </a>
                    </div>
                  </div>

                  {/* Available Days */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CalendarIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{t.schedule}</p>
                      <p className="text-gray-700 text-sm">{t.chamberDays}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{t.hours}</p>
                      <p className="text-gray-700 text-sm">{t.chamberHours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <a
                    href={`tel:${t.chamberPhone1.replace(/[\s\-]/g, "")}`}
                    className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {t.callNow}
                  </a>
                </div>
              </div>

              {/* Map thumbnail */}
              <button
                onClick={() => window.open("https://maps.app.goo.gl/UYXpwRkvYaK19pj2A", "_blank")}
                className="relative w-full h-44 rounded-lg overflow-hidden group shadow-sm border border-gray-200"
                title={t.clickToOpen}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: "url(/images/map.png)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-2 shadow">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-white font-medium text-sm">{t.clickToOpen}</p>
                  </div>
                </div>
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
