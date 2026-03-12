"use client";
import { Building2, Smartphone, ArrowLeft, ChevronRight } from "lucide-react";

export default function StepCheckout({ language, formData, updateFormData, onNext, onBack }) {
  const translations = {
    en: {
      title: "Select Payment Method",
      subtitle: "Choose how you'd like to pay the consultation fee",
      fee: "Consultation Fee",
      feeAmount: "800 BDT",
      bkashNote: "(with bKash, please include charge)",
      bankTransfer: "Bank Transfer",
      bkash: "bKash",
      bankDetails: "Bank Details",
      bankName: "Bank",
      accountNumber: "Account Number",
      accountHolder: "Account Holder",
      branch: "Branch",
      bkashNumber: "bKash Number",
      instruction: "Please complete the payment using the details above, then click Continue to enter your Transaction ID.",
      continue: "Continue",
      back: "Back",
    },
    bn: {
      title: "পেমেন্ট পদ্ধতি নির্বাচন করুন",
      subtitle: "আপনি কীভাবে পরামর্শ ফি দিতে চান তা চয়ন করুন",
      fee: "পরামর্শ ফি",
      feeAmount: "৮০০ টাকা",
      bkashNote: "(বিকাশে চার্জ সহ)",
      bankTransfer: "ব্যাংক ট্রান্সফার",
      bkash: "বিকাশ",
      bankDetails: "ব্যাংক বিবরণ",
      bankName: "ব্যাংক",
      accountNumber: "অ্যাকাউন্ট নম্বর",
      accountHolder: "অ্যাকাউন্ট হোল্ডার",
      branch: "শাখা",
      bkashNumber: "বিকাশ নম্বর",
      instruction: "উপরের বিবরণ ব্যবহার করে পেমেন্ট সম্পন্ন করুন, তারপর আপনার ট্রানজেকশন আইডি দিতে Continue ক্লিক করুন।",
      continue: "এগিয়ে যান",
      back: "পিছনে",
    },
  };

  const t = translations[language];

  const paymentInfo = {
    bank: {
      bankName: "AB BANK PLC",
      accountNumber: "4018339814300",
      accountHolder: "Mohammad Ittehad Rahman Sami",
      branch: "Board Bazar",
    },
    bkash: {
      number: "01641113528",
    },
  };

  const handleContinue = () => {
    if (!formData.paymentMethod) return;
    onNext();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {/* Fee Display */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
        <p className="text-sm text-blue-700 font-medium">{t.fee}</p>
        <p className="text-3xl font-bold text-blue-600 mt-1">{t.feeAmount}</p>
        <p className="text-xs text-blue-500 mt-1">{t.bkashNote}</p>
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-4 mb-6">
        {/* Bank Transfer Option */}
        <button
          type="button"
          onClick={() => updateFormData({ paymentMethod: "bank_transfer" })}
          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
            formData.paymentMethod === "bank_transfer"
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-md flex items-center justify-center ${
              formData.paymentMethod === "bank_transfer" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
            }`}>
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{t.bankTransfer}</p>
              <p className="text-sm text-gray-500">{paymentInfo.bank.bankName}</p>
            </div>
          </div>
        </button>

        {/* Bank Details (shown when selected) */}
        {formData.paymentMethod === "bank_transfer" && (
          <div className="bg-gray-50 rounded-lg p-4 ml-4 border border-gray-200 space-y-2">
            <h4 className="font-semibold text-gray-900 text-sm mb-3">{t.bankDetails}</h4>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t.bankName}:</span>
              <span className="font-medium text-gray-900">{paymentInfo.bank.bankName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t.accountNumber}:</span>
              <span className="font-medium text-gray-900 font-mono">{paymentInfo.bank.accountNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t.accountHolder}:</span>
              <span className="font-medium text-gray-900">{paymentInfo.bank.accountHolder}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t.branch}:</span>
              <span className="font-medium text-gray-900">{paymentInfo.bank.branch}</span>
            </div>
          </div>
        )}

        {/* bKash Option */}
        <button
          type="button"
          onClick={() => updateFormData({ paymentMethod: "bkash" })}
          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
            formData.paymentMethod === "bkash"
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-md flex items-center justify-center ${
              formData.paymentMethod === "bkash" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
            }`}>
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{t.bkash}</p>
              <p className="text-sm text-gray-500">{paymentInfo.bkash.number}</p>
            </div>
          </div>
        </button>

        {/* bKash Details (shown when selected) */}
        {formData.paymentMethod === "bkash" && (
          <div className="bg-gray-50 rounded-lg p-4 ml-4 border border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{t.bkashNumber}:</span>
              <span className="font-medium text-gray-900 font-mono">{paymentInfo.bkash.number}</span>
            </div>
          </div>
        )}
      </div>

      {/* Instruction */}
      {formData.paymentMethod && (
        <p className="text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
          {t.instruction}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={!formData.paymentMethod}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-colors"
        >
          {t.continue}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
