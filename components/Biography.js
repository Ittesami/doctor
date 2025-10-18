import { useState } from "react";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

export default function Biography() {
  const [language, setLanguage] = useState("en");

  const timeline = [
    {
      year: "1993",
      titleEn: "Dhaka Medical College",
      titleBn: "ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Ranked 28th in medical admission test, admitted to prestigious Dhaka Medical College",
      descriptionBn: "১৯৯৩ সালে মেডিকেল ভর্তি পরীক্ষায় ২৮তম স্থান অধিকার করে ঢাকা মেডিকেল কলেজে ভর্তি হন",
      icon: GraduationCap
    },
    {
      year: "2003",
      titleEn: "BCS (Health)",
      titleBn: "বি.সি.এস (স্বাস্থ্য)",
      descriptionEn: "Ranked 33rd in 22nd BCS examination and joined government service",
      descriptionBn: "২২ তম বি.সি.এস পরীক্ষায় ৩৩তম স্থান অধিকার করে সরকারী চাকুরীতে যোগদান করেন",
      icon: Briefcase
    },
    {
      year: "2008-2009",
      titleEn: "MRCS & FCPS",
      titleBn: "এম.আর.সি.এস এবং এফ.সি.পি.এস",
      descriptionEn: "Achieved MRCS (Edinburgh) in 2008 and FCPS (Surgery) in 2009",
      descriptionBn: "২০০৮ সালে এম.আর.সি.এস এবং ২০০৯ সালে এফ.সি.পি.এস অর্জন করেন",
      icon: Award
    },
    {
      year: "2017",
      titleEn: "MS & Fellowship",
      titleBn: "এম.এস এবং ফেলোশীপ",
      descriptionEn: "MS in Colorectal Surgery from BSMMU and Fellowship in ISCP (International Society of Coloproctology)",
      descriptionBn: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় থেকে কলোরেক্টাল সার্জারীতে এম.এস ডিগ্রি এবং ISCP থেকে ফেলোশীপ অর্জন করেন",
      icon: GraduationCap
    },
    {
      year: "2019",
      titleEn: "Best Teacher Award",
      titleBn: "সেরা শিক্ষক পুরস্কার",
      descriptionEn: "Received Best Teacher Award from National Institute of Cancer Research & Hospital",
      descriptionBn: "জাতীয় ক্যান্সার গবেষণা ইন্সটিটিউট ও হাসপাতাল থেকে সেরা শিক্ষক পুরস্কার অর্জন করেন",
      icon: Award
    },
    {
      year: "2021-Present",
      titleEn: "Associate Professor",
      titleBn: "সহযোগী অধ্যাপক",
      descriptionEn: "Associate Professor of Colorectal Surgery at Dhaka Medical College",
      descriptionBn: "ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারী বিভাগে সহযোগী অধ্যাপক পদে কর্মরত",
      icon: Users
    }
  ];

  const bioEnglish = `Dr. Md. Ahsan Habib passed SSC and HSC from Rajshahi Cadet College. He stood 28th position in the medical admission test in 1993 and got admitted to Dhaka Medical College. He stood 33rd position in 22nd BCS and joined in 2003. He passed MRCS in 2008, FCPS in 2009, MS (Colorectal Surgery) in 2017 from Bangabandhu Sheikh Mujib Medical University, and Fellowship in ISCP (International Society of Coloproctology) in 2017.

Dr. Md. Ahsan Habib has been working as a junior consultant of surgery from 2010 to 2015 and as Assistant Professor of Surgery at National Institute of Cancer Research and Hospital, Mohakhali from 2018 to 2020. He joined Dhaka Medical College as Associate Professor of Colorectal Surgery in 2021 and continues there till today.

He has performed numerous operations in government and private hospitals with great reputation. He frequently deals with recurrent fistula in ano (previously operated in Bangladesh or abroad) successfully. He prefers diagnostic VAAFT followed by excision and reconstruction for complex and recurrent fistula in ano with high success rate. He was trained by Professor Parvez Sheikh (India) for complex and recurrent fistula in ano and is working to adopt excision and reconstruction techniques in the country.`;

  const bioBangla = `ডাঃ মোঃ আহসান হাবিব রাজশাহী ক্যাডেট কলেজ হতে এইচ. এস.সি পাশের পর ১৯৯৩ সালে মেডিকেল ভর্তি পরীক্ষায় ২৮তম স্থান অধিকার করে ঢাকা মেডিকেল কলেজে ভর্তি হন। ২০০৩ সালে ২২ তম বি.সি.এস পরীক্ষায় ৩৩তম স্থান অধিকার করে সরকারী চাকুরীতে যোগদান করেন। তিনি ২০০৮ সালে এম.আর.সি.এস, ২০০৯ সালে এফ.সি.পি.এস, ২০১৭ সালে বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় থেকে কলোরেক্টাল সার্জারীতে এম.এস ডিগ্রি এবং ISCP (International Society of Coloproctology) থেকে ফেলোশীপ অর্জন করেন।

ডাঃ মোঃ আহসান হাবিব ২০১০ হতে ২০১৫ সাল পর্যন্ত জুনিয়র কনসালটেন্ট ছিলেন এবং ২০১৮ থেকে ২০২০ সাল পর্যন্ত জাতীয় ক্যান্সার গবেষণা ইন্সটিটিউট ও হাসপাতালে সার্জিক্যাল অনকোলজি বিভাগে সহকারী অধ্যাপক পদে কর্মরত ছিলেন। তিনি ২০২১ সালে ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারী বিভাগে সহযোগী অধ্যাপক পদে যোগদান করেন এবং আজও সেখানে কর্মরত আছেন।

তিনি সরকারী এবং বেসরকারী হাসপাতালে প্রচুর সংখ্যক অপারেশন করে সুনাম অর্জন করেছেন। তিনি জটিল এবং পুনরাবৃত্তিমূলক ফিষ্টুলা অন এবং অন্যান্য কোলোরেক্টাল সমস্যার চিকিৎসায় বিশেষজ্ঞ। তিনি কমপ্লেক্স এবং রিকারেন্ট ফিষ্টুলার জন্য ডায়াগনস্টিক VAAFT অনুসরণ করে এক্সাইশন এবং রিকনস্ট্রাকশন পছন্দ করেন যার সাফল্যের হার অত্যন্ত বেশি। তিনি ভারতের অধ্যাপক পারভেজ শেখের দ্বারা প্রশিক্ষিত এবং দেশে এই পদ্ধতি প্রচলন করার চেষ্টা করছেন।`;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Language Toggle Button */}
        <div className="flex justify-end mb-8">
          <div className="inline-flex border border-gray-300 rounded-lg p-1 bg-gray-50">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 font-medium rounded transition-all ${
                language === "en"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("bn")}
              className={`px-4 py-2 font-medium rounded transition-all ${
                language === "bn"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              বাংলা
            </button>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === "en" ? "About Dr. Ahsan Habib" : "ডাঃ আহসান হাবিব সম্পর্কে"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "A distinguished career in colorectal surgery with pioneering contributions to laser surgery in Bangladesh"
              : "বাংলাদেশে লেজার সার্জারিতে অগ্রণী অবদান রাখা কোলোরেক্টাল সার্জারিতে একজন বিশিষ্ট পেশাদার"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Image and Quick Facts */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/doctor.jpg"
                  alt="Dr. Md. Ahsan Habib"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Quick Facts Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">
                  {language === "en" ? "Years in Practice" : "বছরের অভিজ্ঞতা"}
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                <div className="text-sm text-gray-600">
                  {language === "en" ? "Surgeries Performed" : "অপারেশন সম্পন্ন"}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {language === "en" ? "Career Milestones" : "ক্যারিয়ারের মাইলফলক"}
            </h3>
            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {timeline.map((item, index) => {
                const Icon = item.icon;
                const title = language === "en" ? item.titleEn : item.titleBn;
                const description = language === "en" ? item.descriptionEn : item.descriptionBn;

                return (
                  <div key={index} className="relative flex gap-6">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-mono text-blue-600 mb-1">
                          {item.year}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {title}
                        </h4>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Biography Text Section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <p className={`text-gray-700 leading-relaxed whitespace-pre-line ${
            language === "bn" ? "text-base" : "text-base"
          }`}>
            {language === "en" ? bioEnglish : bioBangla}
          </p>
        </div>

        {/* Specialty Highlight */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en"
                ? "Pioneer in Laser Colorectal Surgery"
                : "লেজার কোলোরেক্টাল সার্জারিতে অগ্রদূত"}
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              {language === "en"
                ? "Dr. Ahsan Habib was the first surgeon in Bangladesh to introduce laser-assisted treatments for piles, fissures, and fistulas. He specializes in complex and recurrent fistula cases using advanced VAAFT (Video-Assisted Anal Fistula Treatment) followed by excision and reconstruction techniques."
                : "ডাঃ আহসান হাবিব বাংলাদেশে প্রথম সার্জন যিনি পাইলস, ফিসার এবং ফিষ্টুলার জন্য লেজার সহায়তাপ্রাপ্ত চিকিৎসা প্রবর্তন করেছেন। তিনি উন্নত VAAFT (ভিডিও-সহায়তাপ্রাপ্ত অ্যানাল ফিষ্টুলা চিকিৎসা) ব্যবহার করে জটিল এবং পুনরাবৃত্তিমূলক ফিষ্টুলার ক্ষেত্রে বিশেষজ্ঞ।"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en"
                    ? "Trained by Prof. Parvez Sheikh, India"
                    : "ভারতের অধ্যাপক পারভেজ শেখের দ্বারা প্রশিক্ষিত"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en"
                    ? "High Success Rate in Complex Cases"
                    : "জটিল ক্ষেত্রে উচ্চ সাফল্যের হার"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}