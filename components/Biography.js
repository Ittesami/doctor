import { Award, Briefcase, GraduationCap, Users, Globe } from "lucide-react";

export default function Biography({ language }) {
  const timeline = [
    {
      year: "1993",
      titleEn: "Dhaka Medical College",
      titleBn: "ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Ranked 28th in the medical admission test and admitted to Dhaka Medical College",
      descriptionBn: "মেডিকেল ভর্তি পরীক্ষায় ২৮তম স্থান অধিকার করে ঢাকা মেডিকেল কলেজে ভর্তি হন",
      icon: GraduationCap
    },
    {
      year: "2003",
      titleEn: "BCS (Health)",
      titleBn: "বি.সি.এস (স্বাস্থ্য)",
      descriptionEn: "Ranked 33rd in the 22nd BCS examination and joined government service",
      descriptionBn: "২২তম বি.সি.এস পরীক্ষায় ৩৩তম স্থান অধিকার করে সরকারি চাকুরিতে যোগদান করেন",
      icon: Briefcase
    },
    {
      year: "2008–2009",
      titleEn: "MRCS & FCPS",
      titleBn: "এম.আর.সি.এস এবং এফ.সি.পি.এস",
      descriptionEn: "Achieved MRCS (Edinburgh) in 2008 and FCPS (Surgery) in 2009",
      descriptionBn: "২০০৮ সালে এম.আর.সি.এস (এডিনবরা) এবং ২০০৯ সালে এফ.সি.পি.এস (সার্জারি) অর্জন করেন",
      icon: Award
    },
    {
      year: "2017",
      titleEn: "MS & Fellowship",
      titleBn: "এম.এস এবং ফেলোশিপ",
      descriptionEn: "MS in Colorectal Surgery from Bangladesh Medical University and Fellowship from ISCP (International Society of Coloproctology)",
      descriptionBn: "বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয় থেকে কলোরেক্টাল সার্জারিতে এম.এস ডিগ্রি এবং ISCP থেকে ফেলোশিপ অর্জন করেন",
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
      year: "2018",
      titleEn: "Training Abroad — Witten, Germany",
      titleBn: "বিদেশে প্রশিক্ষণ — উইটেন, জার্মানি",
      descriptionEn: "Laser proctology training with Prof. Thomas Deska at Atarien Hospital, Witten, Germany — advanced laser techniques for colorectal procedures",
      descriptionBn: "জার্মানির উইটেনে অ্যাটারিয়েন হাসপাতালে অধ্যাপক টমাস ডেস্কার অধীনে লেজার প্রক্টোলজি প্রশিক্ষণ — কোলোরেক্টাল পদ্ধতির জন্য উন্নত লেজার কৌশল",
      icon: Globe
    },
    {
      year: "2019",
      titleEn: "Training Abroad — Saifee Hospital, India",
      titleBn: "বিদেশে প্রশিক্ষণ — সাইফি হাসপাতাল, ভারত",
      descriptionEn: "12-day training on recurrent fistula in ano under Prof. Parvez Sheikh at Saifee Hospital, India",
      descriptionBn: "ভারতের সাইফি হাসপাতালে অধ্যাপক পারভেজ শেখের তত্ত্বাবধানে পুনরাবৃত্তিমূলক ফিস্টুলা ইন অ্যানো বিষয়ে ১২ দিনের প্রশিক্ষণ",
      icon: Globe
    },
    {
      year: "2021–2025",
      titleEn: "Associate Professor, Dhaka Medical College",
      titleBn: "সহযোগী অধ্যাপক, ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Associate Professor of Colorectal Surgery at Dhaka Medical College",
      descriptionBn: "ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারি বিভাগে সহযোগী অধ্যাপক পদে কর্মরত",
      icon: Users
    },
    {
      year: "2023",
      titleEn: "Training Abroad — Zhengzhou, China",
      titleBn: "বিদেশে প্রশিক্ষণ — ঝেংঝো, চীন",
      descriptionEn: "12-day Interventional Colonoscopy training at Zhengzhou Medical University, China under Prof. Bing Rong Liu (September 2023)",
      descriptionBn: "সেপ্টেম্বর ২০২৩ সালে চীনের ঝেংঝো মেডিকেল বিশ্ববিদ্যালয়ে অধ্যাপক বিং রং লিউয়ের অধীনে ইন্টারভেনশনাল কোলোনোস্কপি বিষয়ে ১২ দিনের প্রশিক্ষণ",
      icon: Globe
    },
    {
      year: "2025",
      titleEn: "Head of Department, Colorectal Surgery — Dhaka Medical College",
      titleBn: "বিভাগীয় প্রধান, কলোরেক্টাল সার্জারি — ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Appointed Head of Department, Colorectal Surgery at Dhaka Medical College",
      descriptionBn: "ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারি বিভাগের প্রধান পদে নিযুক্ত হন",
      icon: Users
    },
    {
      year: "2025–present",
      titleEn: "Professor, Dhaka Medical College",
      titleBn: "অধ্যাপক, ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Professor of Colorectal Surgery at Dhaka Medical College",
      descriptionBn: "ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারি বিভাগের অধ্যাপক পদে কর্মরত",
      icon: Users
    },
    {
      year: "2026",
      titleEn: "Training Abroad — Basingstoke, UK",
      titleBn: "বিদেশে প্রশিক্ষণ — বেসিংস্টোক, যুক্তরাজ্য",
      descriptionEn: "1-month Cytoreductive Surgery and HIPEC training at Basingstoke and North Hampshire Hospital, UK (April 2026)",
      descriptionBn: "এপ্রিল ২০২৬ সালে যুক্তরাজ্যের বেসিংস্টোক ও নর্থ হ্যাম্পশায়ার হাসপাতালে সাইটোরিডাক্টিভ সার্জারি ও HIPEC বিষয়ে ১ মাসের প্রশিক্ষণ",
      icon: Globe
    },
  ];

  const bioEnglish = `Dr. Md. Ahsan Habib passed SSC and HSC from Rajshahi Cadet College. He stood 28th in the medical admission test in 1993 and was admitted to Dhaka Medical College. He stood 33rd in the 22nd BCS examination and joined government service in 2003. He passed MRCS (Edinburgh) in 2008, FCPS (Surgery) in 2009, MS (Colorectal Surgery) in 2017 from Bangladesh Medical University, and Fellowship from ISCP (International Society of Coloproctology) in 2017.

Dr. Md. Ahsan Habib worked as Junior Consultant of Surgery from 2010 to 2015 and as Assistant Professor at the National Institute of Cancer Research and Hospital, Mohakhali from 2018 to 2020. He joined Dhaka Medical College as Associate Professor of Colorectal Surgery in 2021, became Head of Department in 2025, and currently serves as Professor of Colorectal Surgery.

He has trained internationally at Atarien Hospital, Witten, Germany under Prof. Thomas Deska for laser proctology; at Saifee Hospital, India (2019) under Prof. Parvez Sheikh for complex and recurrent fistula in ano; at Zhengzhou Medical University, China (2023) under Prof. Bing Rong Liu for Interventional Colonoscopy; and at Basingstoke and North Hampshire Hospital, UK (2026) for Cytoreductive Surgery and HIPEC. He has performed thousands of operations in government and private hospitals with outstanding outcomes. His expertise spans the full spectrum of colorectal surgery including laser procedures, VAAFT, laparoscopic colorectal cancer surgery, and advanced procedures such as HIPEC for peritoneal malignancies.`;

  const bioBangla = `ডাঃ মোঃ আহসান হাবিব রাজশাহী ক্যাডেট কলেজ থেকে এস.এস.সি ও এইচ.এস.সি পাশ করেন। ১৯৯৩ সালে মেডিকেল ভর্তি পরীক্ষায় ২৮তম স্থান অধিকার করে ঢাকা মেডিকেল কলেজে ভর্তি হন। ২২তম বি.সি.এস পরীক্ষায় ৩৩তম স্থান অধিকার করে ২০০৩ সালে সরকারি চাকুরিতে যোগদান করেন। তিনি ২০০৮ সালে এম.আর.সি.এস (এডিনবরা), ২০০৯ সালে এফ.সি.পি.এস (সার্জারি), ২০১৭ সালে বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয় থেকে কলোরেক্টাল সার্জারিতে এম.এস ডিগ্রি এবং ISCP থেকে ফেলোশিপ অর্জন করেন।

ডাঃ মোঃ আহসান হাবিব ২০১০ থেকে ২০১৫ সাল পর্যন্ত জুনিয়র কনসালটেন্ট হিসেবে এবং ২০১৮ থেকে ২০২০ সাল পর্যন্ত জাতীয় ক্যান্সার গবেষণা ইন্সটিটিউট ও হাসপাতালে সহকারী অধ্যাপক পদে কর্মরত ছিলেন। তিনি ২০২১ সালে ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারি বিভাগে সহযোগী অধ্যাপক হিসেবে যোগদান করেন, ২০২৫ সালে বিভাগীয় প্রধান হন এবং বর্তমানে অধ্যাপক হিসেবে কর্মরত আছেন।

তিনি আন্তর্জাতিকভাবে প্রশিক্ষিত — জার্মানির উইটেনে অধ্যাপক টমাস ডেস্কার অধীনে লেজার প্রক্টোলজিতে, ২০১৯ সালে ভারতের সাইফি হাসপাতালে অধ্যাপক পারভেজ শেখের অধীনে জটিল ফিস্টুলা চিকিৎসায়, ২০২৩ সালে চীনের ঝেংঝো মেডিকেল বিশ্ববিদ্যালয়ে অধ্যাপক বিং রং লিউয়ের অধীনে ইন্টারভেনশনাল কোলোনোস্কপিতে এবং ২০২৬ সালে যুক্তরাজ্যের বেসিংস্টোক ও নর্থ হ্যাম্পশায়ার হাসপাতালে সাইটোরিডাক্টিভ সার্জারি ও HIPEC বিষয়ে। তিনি সরকারি ও বেসরকারি হাসপাতালে হাজার হাজার সফল অপারেশন সম্পন্ন করেছেন।`;

  return (
    <section id="about" className="md:py-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === "en" ? "About Dr. Ahsan Habib" : "ডাঃ আহসান হাবিব সম্পর্কে"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "A distinguished career in colorectal surgery with pioneering contributions to laser surgery and international training in advanced procedures"
              : "বাংলাদেশে লেজার সার্জারিতে অগ্রণী ভূমিকা এবং আন্তর্জাতিক প্রশিক্ষণসহ কলোরেক্টাল সার্জারিতে একজন বিশিষ্ট পেশাদার"}
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
                <div className="md:text-3xl text-xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-sm text-gray-600">
                  {language === "en" ? "Years in Practice" : "বছরের অভিজ্ঞতা"}
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="md:text-3xl text-xl font-bold text-blue-600 mb-2">15000+</div>
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
                const isTraining = item.icon === Globe;

                return (
                  <div key={index} className="relative flex gap-6">
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isTraining ? 'bg-green-600' : 'bg-blue-600'}`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className={`bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${isTraining ? 'border-green-200' : 'border-gray-200'}`}>
                        <div className={`text-sm font-mono mb-1 ${isTraining ? 'text-green-600' : 'text-blue-600'}`}>
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
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {language === "en" ? bioEnglish : bioBangla}
          </p>
        </div>

        {/* Specialty Highlight */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en"
                ? "Pioneer in Colorectal Surgery & Internationally Trained"
                : "কলোরেক্টাল সার্জারিতে অগ্রদূত ও আন্তর্জাতিকভাবে প্রশিক্ষিত"}
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              {language === "en"
                ? "Dr. Ahsan Habib is among the first surgeons in Bangladesh to introduce laser-assisted colorectal treatments. He has trained internationally in India, China, and the UK, bringing world-class expertise in complex fistula surgery, interventional colonoscopy, and cytoreductive surgery with HIPEC."
                : "ডাঃ আহসান হাবিব বাংলাদেশে লেজার কলোরেক্টাল চিকিৎসা প্রবর্তনকারী অগ্রণী সার্জনদের একজন। তিনি ভারত, চীন ও যুক্তরাজ্যে আন্তর্জাতিক প্রশিক্ষণ গ্রহণ করে জটিল ফিস্টুলা সার্জারি, ইন্টারভেনশনাল কোলোনোস্কপি এবং HIPEC-সহ সাইটোরিডাক্টিভ সার্জারিতে বিশ্বমানের দক্ষতা অর্জন করেছেন।"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en" ? "Trained in India, China & UK" : "ভারত, চীন ও যুক্তরাজ্যে প্রশিক্ষিত"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en" ? "HIPEC & Laser Surgery Expert" : "HIPEC ও লেজার সার্জারি বিশেষজ্ঞ"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en" ? "High Success Rate in Complex Cases" : "জটিল ক্ষেত্রে উচ্চ সাফল্যের হার"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
