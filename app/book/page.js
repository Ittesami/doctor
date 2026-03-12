"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import StepPatientForm from "@/components/booking/StepPatientForm";
import StepCheckout from "@/components/booking/StepCheckout";
import StepPaymentConfirm from "@/components/booking/StepPaymentConfirm";
import StepSuccess from "@/components/booking/StepSuccess";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookPage() {
  const [language, setLanguage] = useState("en");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    patientName: "",
    whatsappNumber: "",
    sex: "",
    age: "",
    details: "",
    paymentMethod: "",
    transactionId: "",
  });

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setIsSubmitting(false);
        return;
      }

      setStep(4);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepLabels = {
    en: ["Patient Info", "Payment", "Confirm"],
    bn: ["রোগীর তথ্য", "পেমেন্ট", "নিশ্চিত"],
  };

  const labels = stepLabels[language];

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Step Indicator */}
          {step < 4 && (
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3].map((s, i) => (
                <div key={s} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                        s < step
                          ? "bg-green-500 text-white"
                          : s === step
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {s < step ? <Check className="w-5 h-5" /> : s}
                    </div>
                    <span className={`text-xs mt-1.5 font-medium ${
                      s <= step ? "text-blue-600" : "text-gray-400"
                    }`}>
                      {labels[i]}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className={`w-16 md:w-24 h-0.5 mx-2 mb-5 ${
                      s < step ? "bg-green-500" : "bg-gray-200"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
              {error}
            </div>
          )}

          {/* Steps */}
          {step === 1 && (
            <StepPatientForm
              language={language}
              formData={formData}
              updateFormData={updateFormData}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <StepCheckout
              language={language}
              formData={formData}
              updateFormData={updateFormData}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <StepPaymentConfirm
              language={language}
              formData={formData}
              updateFormData={updateFormData}
              onSubmit={handleSubmit}
              onBack={() => setStep(2)}
              isSubmitting={isSubmitting}
            />
          )}
          {step === 4 && <StepSuccess language={language} />}
        </div>
      </main>
      <Footer language={language} />
    </>
  );
}
