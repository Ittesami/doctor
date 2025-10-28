import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

export default function Biography({ language }) {
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
      descriptionBn: "२२ তম বি.সি.এস পরীক্ষায় ३३तম স্थान अধिकार करके सरकारी चाकुरीतে योगदान करेन",
      icon: Briefcase
    },
    {
      year: "2008-2009",
      titleEn: "MRCS & FCPS",
      titleBn: "এম.আর.সি.এস এবং এফ.সি.পি.এস",
      descriptionEn: "Achieved MRCS (Edinburgh) in 2008 and FCPS (Surgery) in 2009",
      descriptionBn: "२००८ सালें एम.आर.सी.एस एवं २००९ सालें एफ.सी.पी.एस अर्जन करेन",
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
      year: "2021-2025",
      titleEn: "Associate Professor, Dhaka Medical College",
      titleBn: "সহযোগী অধ্যাপক, ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Associate Professor of Colorectal Surgery at Dhaka Medical College",
      descriptionBn: "ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারী বিভাগে সহযোগী অধ্যাপক পদে কর্মরত",
      icon: Users
    },
    {
      year: "2025",
      titleEn: "Head of Department, Colorectal Surgery at Dhaka Medical College",
      titleBn: "কলোরেক্টাল সার্জারী বিভাগের প্রধান, ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Head of Department, Colorectal Surgery at Dhaka Medical College",
      descriptionBn: "ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারী বিভাগের প্রধান পদে কর্মরত",
      icon: Users
    },
    {
      year: "2025-present",
      titleEn: "Professor, Dhaka Medical College",
      titleBn: "অধ্যাপক, ঢাকা মেডিকেল কলেজ",
      descriptionEn: "Professor of Colorectal Surgery at Dhaka Medical College",
      descriptionBn: "ঢাকা মেডিকেল কলেজে কলোরেক্টাল সার্জারী বিভাগের অধ্যাপক পদে কর্মরত",
      icon: Users
    },
  ];

  const bioEnglish = `Dr. Md. Ahsan Habib passed SSC and HSC from Rajshahi Cadet College. He stood 28th position in the medical admission test in 1993 and got admitted to Dhaka Medical College. He stood 33rd position in 22nd BCS and joined in 2003. He passed MRCS in 2008, FCPS in 2009, MS (Colorectal Surgery) in 2017 from Bangladesh Medical University, and Fellowship in ISCP (International Society of Coloproctology) in 2017.

Dr. Md. Ahsan Habib has been working as a junior consultant of surgery from 2010 to 2015 and as Assistant Professor of Surgery at National Institute of Cancer Research and Hospital, Mohakhali from 2018 to 2020. He joined Dhaka Medical College as Associate Professor of Colorectal Surgery in 2021 and continues there till today.

He has performed numerous operations in government and private hospitals with great reputation. He frequently deals with recurrent fistula in ano (previously operated in Bangladesh or abroad) successfully. He prefers diagnostic VAAFT followed by excision and reconstruction for complex and recurrent fistula in ano with high success rate. He was trained by Professor Parvez Sheikh (India) for complex and recurrent fistula in ano and is working to adopt excision and reconstruction techniques in the country.`;

  const bioBangla = `ডাঃ মোঃ আহসান হাবিব রাজশাহী ক্যাডেট কলেজ হতে এইচ. এস.সি পাশের পর ১৯৯३ সালে মেডিকেল ভর্তি পরীক্ষায় २८তম स्थान अधिकार करके ढाका मेडिकेल कलेजे भर्ति हन। २००३ साले २२ तम बि.सी.एस परीक्षায় ३३तम स्थान अधिकार करके सरकारी चाकुरीते योगदान करेन। तिनी २००८ साले एम.आर.सी.एस, २००९ साले एफ.सी.पी.एस, २०१७ साले बङ्गबन्धु शेख मुजिब मेडिकेल विश्ववियालय থেকे कलोरेकटाल सार्जरीते एम.एस डिग्री एवং ISCP (International Society of Coloproctology) থेके फेलोशिप अर्जन करेन।

ডাঃ মোঃ আহসান হাবিব २०१० हते २०१५ साल पर्यন्त जुनिएर कनसलटेन्ट छिलेन एवং २०१८ थेके २०२० साल पर्यन्त जातीय क्यान्सर गबेषण इन्सटिटुट ओ हास्पतालeme सार्जिकल अनकोलजी विभागeme सहकारी अध्यापक पदeme कर्मरत छिलेन। तिनी २०२१ सालeme ढाका मेडिकेल कलेजeme कलोरेकटाल सार्जरी विभागeme सहयोगी अध्यापक पदeme योगदान करेन एवङ् आज सेखane कर्मरत आछन।

तिनी सरकारी एवङ् बेसरकारी हास्पतालeme प्रचुर सङ्ख्यक अपेरेशन करे सुनाम अर्जन करेछन। तिनी जटिल एवङ् पुनरावृत्तिमूलक फिषटुला अन एवङ् अन्य कलोरेकटाल समस्याने चिकिङ्सyme विशेषज्ञ। तिनी कमपलेक्स एवङ् रिकारेन्ट फिषटुलाне डायाग्नस्टिक VAAFT अनुसरण करे एक्साइशन एवङ् रिकनस्ट्रक्शन पछन्द करेन यारne साफल्यne हार अत्यन्त बेसी। तिनी भारतne अध्यापक पारवेज शेखne द्वारा प्रशिक्षित एवङ् देशme एही पद्धति प्रचलन गराएरne चेष्टा गरिराछन।`;

  return (
    <section id="about" className="md:py-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
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