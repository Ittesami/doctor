"use client";
import { User, Phone, Users, Calendar, FileText } from "lucide-react";

export default function StepPatientForm({ language, formData, updateFormData, onNext }) {
  const translations = {
    en: {
      title: "Patient Information",
      subtitle: "Please fill in your details to book an appointment",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      whatsappLabel: "WhatsApp Number",
      whatsappPlaceholder: "+880 1XXXXXXXXX",
      sexLabel: "Sex",
      sexSelect: "Select",
      sexMale: "Male",
      sexFemale: "Female",
      sexOther: "Other",
      ageLabel: "Age",
      agePlaceholder: "Enter your age",
      detailsLabel: "Problem Details (Optional)",
      detailsPlaceholder: "Briefly describe your health concern...",
      next: "Continue to Payment",
      required: "This field is required",
    },
    bn: {
      title: "রোগীর তথ্য",
      subtitle: "অ্যাপয়েন্টমেন্ট বুক করতে আপনার বিবরণ পূরণ করুন",
      nameLabel: "পূর্ণ নাম",
      namePlaceholder: "আপনার পূর্ণ নাম লিখুন",
      whatsappLabel: "হোয়াটসঅ্যাপ নম্বর",
      whatsappPlaceholder: "+৮৮০ ১XXXXXXXXX",
      sexLabel: "লিঙ্গ",
      sexSelect: "নির্বাচন করুন",
      sexMale: "পুরুষ",
      sexFemale: "মহিলা",
      sexOther: "অন্যান্য",
      ageLabel: "বয়স",
      agePlaceholder: "আপনার বয়স লিখুন",
      detailsLabel: "সমস্যার বিবরণ (ঐচ্ছিক)",
      detailsPlaceholder: "আপনার স্বাস্থ্য সমস্যা সংক্ষেপে বর্ণনা করুন...",
      next: "পেমেন্টে এগিয়ে যান",
      required: "এই ক্ষেত্রটি আবশ্যক",
    },
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.whatsappNumber || !formData.sex || !formData.age) {
      return;
    }
    onNext();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
            <User className="w-4 h-4" />
            {t.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.patientName}
            onChange={(e) => updateFormData({ patientName: e.target.value })}
            placeholder={t.namePlaceholder}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
            <Phone className="w-4 h-4" />
            {t.whatsappLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.whatsappNumber}
            onChange={(e) => updateFormData({ whatsappNumber: e.target.value })}
            placeholder={t.whatsappPlaceholder}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
          />
        </div>

        {/* Sex and Age in a row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <Users className="w-4 h-4" />
              {t.sexLabel} <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.sex}
              onChange={(e) => updateFormData({ sex: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 bg-white"
            >
              <option value="">{t.sexSelect}</option>
              <option value="male">{t.sexMale}</option>
              <option value="female">{t.sexFemale}</option>
              <option value="other">{t.sexOther}</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
              <Calendar className="w-4 h-4" />
              {t.ageLabel} <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="0"
              max="120"
              value={formData.age}
              onChange={(e) => updateFormData({ age: e.target.value })}
              placeholder={t.agePlaceholder}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
            <FileText className="w-4 h-4" />
            {t.detailsLabel}
          </label>
          <textarea
            value={formData.details}
            onChange={(e) => updateFormData({ details: e.target.value })}
            placeholder={t.detailsPlaceholder}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-lg"
        >
          {t.next}
        </button>
      </form>
    </div>
  );
}
