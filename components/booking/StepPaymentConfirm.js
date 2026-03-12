"use client";
import { ArrowLeft, Send, Loader2 } from "lucide-react";

export default function StepPaymentConfirm({ language, formData, updateFormData, onSubmit, onBack, isSubmitting }) {
  const translations = {
    en: {
      title: "Confirm Payment",
      subtitle: "Enter your Transaction ID after completing the payment",
      paymentMethod: "Payment Method",
      bankTransfer: "Bank Transfer",
      bkash: "bKash",
      transactionLabel: "Transaction ID",
      transactionPlaceholder: "Enter your Transaction ID",
      submit: "Submit Appointment",
      submitting: "Submitting...",
      back: "Back",
      reminder: "Make sure you have completed the payment before submitting.",
    },
    bn: {
      title: "পেমেন্ট নিশ্চিত করুন",
      subtitle: "পেমেন্ট সম্পন্ন করার পর আপনার ট্রানজেকশন আইডি দিন",
      paymentMethod: "পেমেন্ট পদ্ধতি",
      bankTransfer: "ব্যাংক ট্রান্সফার",
      bkash: "বিকাশ",
      transactionLabel: "ট্রানজেকশন আইডি",
      transactionPlaceholder: "আপনার ট্রানজেকশন আইডি লিখুন",
      submit: "অ্যাপয়েন্টমেন্ট জমা দিন",
      submitting: "জমা হচ্ছে...",
      back: "পিছনে",
      reminder: "জমা দেওয়ার আগে আপনি পেমেন্ট সম্পন্ন করেছেন তা নিশ্চিত করুন।",
    },
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.transactionId) return;
    onSubmit();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {/* Payment Method Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{t.paymentMethod}:</span>
          <span className="font-semibold text-gray-900">
            {formData.paymentMethod === "bank_transfer" ? t.bankTransfer : t.bkash}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Transaction ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t.transactionLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.transactionId}
            onChange={(e) => updateFormData({ transactionId: e.target.value })}
            placeholder={t.transactionPlaceholder}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900 font-mono"
          />
        </div>

        {/* Reminder */}
        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
          {t.reminder}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </button>
          <button
            type="submit"
            disabled={!formData.transactionId || isSubmitting}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t.submitting}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {t.submit}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
