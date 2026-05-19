"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin, Phone, Clock, Calendar as CalendarIcon,
  User, Mail, MessageSquare, CheckCircle, Loader2,
} from "lucide-react";

export default function AppointmentPage() {
  const { language } = useLanguage();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const t = {
    en: {
      heading: "Book an Appointment",
      subheading:
        "Fill in the form below and we will get back to you to confirm your appointment time.",
      formTitle: "Send Us a Message",
      fullName: "Full Name",
      fullNamePh: "Your full name",
      phone: "Phone / WhatsApp Number",
      phonePh: "+880 XXXXXXXXXX",
      email: "Email Address",
      emailPh: "your@email.com",
      message: "Describe Your Problem (optional)",
      messagePh: "Tell us about your symptoms or what you'd like to discuss…",
      submit: "Send Request",
      submitting: "Sending…",
      successTitle: "Request Sent!",
      successMsg: "Thank you. We will contact you shortly to confirm your appointment.",
      errorFallback: "Something went wrong. Please try again.",
      chambersTitle: "Chamber Locations",
      // Chamber 1
      chamber1Name: "Specialised Colorectal Center",
      chamber1Address: "Rupayan Prime, Green Rd\nDhanmondi, Dhaka 1205",
      chamber1Days: "Sat, Sun, Mon, Wed",
      chamber1Hours: "7:00 PM – 9:00 PM",
      chamber1Phone: "+880 1721-036644",
      chamber1Phone1: "+880 1307-242788",
      chamber1Map: "View on Google Maps →",
      // Chamber 2
      chamber2Name: "Asia Hospital",
      chamber2Address: "Mymensingh Road, Sabalia\nTangail",
      chamber2Days: "Thursday & Friday",
      chamber2Hours: "Thu: 5:00 PM – 8:00 PM\nFri: All Day",
      chamber2Phone: "+880 1740-614450",
      // Labels
      location: "Location",
      phoneLabel: "Appointment Serial",
      schedule: "Available Days",
      hours: "Consultation Hours",
      callNow: "Call Now to Book",
      clickToOpen: "Click to open in Google Maps",
    },
    bn: {
      heading: "অ্যাপয়েন্টমেন্ট বুক করুন",
      subheading:
        "নিচের ফর্মটি পূরণ করুন এবং আমরা আপনার অ্যাপয়েন্টমেন্টের সময় নিশ্চিত করতে যোগাযোগ করব।",
      formTitle: "আমাদের একটি বার্তা পাঠান",
      fullName: "পুরো নাম",
      fullNamePh: "আপনার পুরো নাম",
      phone: "ফোন / হোয়াটসঅ্যাপ নম্বর",
      phonePh: "+৮৮০ XXXXXXXXXX",
      email: "ইমেইল ঠিকানা",
      emailPh: "your@email.com",
      message: "সমস্যার বিবরণ (ঐচ্ছিক)",
      messagePh: "আপনার উপসর্গ বা আলোচনা করতে চান এমন বিষয় লিখুন…",
      submit: "অনুরোধ পাঠান",
      submitting: "পাঠানো হচ্ছে…",
      successTitle: "অনুরোধ পাঠানো হয়েছে!",
      successMsg: "ধন্যবাদ। আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করতে আমরা শীঘ্রই যোগাযোগ করব।",
      errorFallback: "কিছু একটা ঠিকঠাক হয়নি। আবার চেষ্টা করুন।",
      chambersTitle: "চেম্বারের অবস্থান",
      chamber1Name: "লেজার কোলোরেক্টাল সেন্টার",
      chamber1Address: "রুপায়ন প্রাইম, গ্রীন রোড\nধানমন্ডি, ঢাকা ১২০৫",
      chamber1Days: "শনি, রবি, সোম, বুধ",
      chamber1Hours: "সন্ধ্যা ৭:০০ – ৯:০০",
      chamber1Phone: "+৮৮০ ১৭২১-০৩৬৬৪৪",
      chamber1Map: "গুগল ম্যাপে দেখুন →",
      chamber2Name: "এশিয়া হসপিটাল",
      chamber2Address: "ময়মনসিংহ রোড, সাবালিয়া\nটাঙ্গাইল",
      chamber2Days: "বৃহস্পতিবার ও শুক্রবার",
      chamber2Hours: "বৃহস্পতি: বিকাল ৫:০০ – রাত ৮:০০\nশুক্রবার: সারাদিন",
      chamber2Phone: "+৮৮০ ১৭৪০-৬১৪৪৫০",
      location: "অবস্থান",
      phoneLabel: "অ্যাপয়েন্টমেন্ট সিরিয়াল",
      schedule: "উপলব্ধ দিনগুলি",
      hours: "পরামর্শের সময়",
      callNow: "এখনই কল করুন",
      clickToOpen: "গুগল ম্যাপে খোলার জন্য ক্লিক করুন",
    },
  }[language];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim()) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
    "w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  const ChamberCard = ({ name, address, days, hours, phone, phone1, mapUrl, mapLabel }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100">
        {name}
      </h3>
      <div className="space-y-4">
        {/* Location */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
              {t.location}
            </p>
            <p className="text-gray-700 text-sm whitespace-pre-line">{address}</p>
            {mapUrl && (
              <button
                onClick={() => window.open(mapUrl, "_blank")}
                className="mt-1 text-blue-600 hover:text-blue-700 font-medium text-xs"
              >
                {mapLabel}
              </button>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
              {t.phoneLabel}
            </p>
            <a
              href={`tel:${phone.replace(/\s|-/g, "")}`}
              className="text-blue-600 font-semibold hover:underline text-sm"
            >
              {phone} 
            </a>
              <br />
            <a
              href={`tel:${phone1.replace(/\s|-/g, "")}`}
              className="text-blue-600 font-semibold hover:underline text-sm"
            >
              {phone1}
            </a>
          </div>
        </div>

        {/* Days */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
              {t.schedule}
            </p>
            <p className="text-gray-700 text-sm">{days}</p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
              {t.hours}
            </p>
            <p className="text-gray-700 text-sm whitespace-pre-line">{hours}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100">
        <a
          href={`tel:${phone.replace(/\s|-/g, "")}`}
          className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <Phone className="w-4 h-4" />
          {t.callNow}
        </a>
      </div>
    </div>
  );

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ── Contact Form ── */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>
                      {t.fullName} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" name="fullName" value={form.fullName}
                        onChange={handleChange} required placeholder={t.fullNamePh}
                        className={`${inputClass} pl-10`} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      {t.phone} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="tel" name="phone" value={form.phone}
                        onChange={handleChange} required placeholder={t.phonePh}
                        className={`${inputClass} pl-10`} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t.email}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="email" name="email" value={form.email}
                        onChange={handleChange} placeholder={t.emailPh}
                        className={`${inputClass} pl-10`} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t.message}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea name="message" value={form.message}
                        onChange={handleChange} placeholder={t.messagePh}
                        rows={4} className={`${inputClass} pl-10 resize-none`} />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md px-4 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <button type="submit" disabled={status === "submitting"}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                    {status === "submitting" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" />{t.submitting}</>
                    ) : t.submit}
                  </button>
                </form>
              )}
            </div>

            {/* ── Chambers ── */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">{t.chambersTitle}</h2>

              {/* Chamber 1 — Dhanmondi */}
              <ChamberCard
                name={t.chamber1Name}
                address={t.chamber1Address}
                days={t.chamber1Days}
                hours={t.chamber1Hours}
                phone={t.chamber1Phone}
                phone1={t.chamber1Phone1}
                mapUrl="https://maps.app.goo.gl/UYXpwRkvYaK19pj2A"
                mapLabel={t.chamber1Map}
              />

              {/* Chamber 2 — Asia Hospital, Tangail */}
              {/* <ChamberCard
                name={t.chamber2Name}
                address={t.chamber2Address}
                days={t.chamber2Days}
                hours={t.chamber2Hours}
                phone={t.chamber2Phone}
              /> */}

              {/* Map thumbnail for Dhanmondi */}
              <button
                onClick={() =>
                  window.open("https://maps.app.goo.gl/UYXpwRkvYaK19pj2A", "_blank")
                }
                className="relative w-full h-48 rounded-lg overflow-hidden group shadow-sm border border-gray-200"
                title={t.clickToOpen}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: "url(/images/map.png)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 flex items-center justify-center group-hover:from-black/30 group-hover:to-black/60 transition-all">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform shadow">
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
