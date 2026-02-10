import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

export default function Biography({ language }) {
  const timeline = [
    {
      year: "2000",
      titleEn: "MBBS Degree",
      titleBn: "এমবিবিএস ডিগ্রি",
      descriptionEn: "Graduated with MBBS from MAG Osmani Medical College, Sylhet",
      descriptionBn: "এম এ জি ওসমানী মেডিকেল কলেজ, সিলেট থেকে এমবিবিএস ডিগ্রি অর্জন",
      icon: GraduationCap
    },
    {
      year: "2003-2005",
      titleEn: "Assistant Register (Gynae)",
      titleBn: "সহকারী রেজিস্টার (গাইনি)",
      descriptionEn: "Started career as Assistant Register at ICMH, Dhaka",
      descriptionBn: "আইসিএমএইচ, ঢাকায় সহকারী রেজিস্টার হিসেবে কর্মজীবন শুরু",
      icon: Briefcase
    },
    {
      year: "2005",
      titleEn: "BCS (Health) Cadre",
      titleBn: "বিসিএস (স্বাস্থ্য) ক্যাডার",
      descriptionEn: "Joined Bangladesh Civil Service as Assistant Surgeon/Medical Officer",
      descriptionBn: "সহকারী সার্জন/মেডিকেল অফিসার হিসেবে বাংলাদেশ সিভিল সার্ভিসে যোগদান",
      icon: Award
    },
    {
      year: "2007-2010",
      titleEn: "FCPS Training & Course",
      titleBn: "এফসিপিএস প্রশিক্ষণ ও কোর্স",
      descriptionEn: "Completed FCPS training at Mitford Hospital and course at BSMMU",
      descriptionBn: "মিটফোর্ড হাসপাতালে এফসিপিএস প্রশিক্ষণ এবং বিএসএমএমইউতে কোর্স সম্পন্ন",
      icon: GraduationCap
    },
    {
      year: "2010",
      titleEn: "FCPS (Gynae and Obstetrics)",
      titleBn: "এফসিপিএস (গাইনি এবং অবস)",
      descriptionEn: "Achieved FCPS in Gynecology and Obstetrics from BCPS, Dhaka",
      descriptionBn: "বিসিপিএস, ঢাকা থেকে গাইনিকোলজি ও অবস্টেট্রিক্সে এফসিপিএস অর্জন",
      icon: Award
    },
    {
      year: "2011-2019",
      titleEn: "Junior Consultant",
      titleBn: "জুনিয়র কনসালট্যান্ট",
      descriptionEn: "Served as Junior Consultant at various health complexes across Bangladesh",
      descriptionBn: "বাংলাদেশের বিভিন্ন স্বাস্থ্য কমপ্লেক্সে জুনিয়র কনসালট্যান্ট হিসেবে দায়িত্ব পালন",
      icon: Users
    },
    {
      year: "2019-2025",
      titleEn: "Junior Consultant, Police Hospital",
      titleBn: "জুনিয়র কনসালট্যান্ট, পুলিশ হাসপাতাল",
      descriptionEn: "Junior Consultant (Gynae and Obs) at Central Police Hospital, Rajarbagh",
      descriptionBn: "কেন্দ্রীয় পুলিশ হাসপাতাল, রাজারবাগে জুনিয়র কনসালট্যান্ট (গাইনি ও অবস)",
      icon: Users
    },
    {
      year: "2025-Present",
      titleEn: "Assistant Professor",
      titleBn: "সহকারী অধ্যাপক",
      descriptionEn: "Assistant Professor of Obstetrics and Gynecology at Central Police Hospital",
      descriptionBn: "কেন্দ্রীয় পুলিশ হাসপাতালে প্রসূতি ও স্ত্রীরোগবিদ্যার সহকারী অধ্যাপক",
      icon: Award
    },
  ];

  const bioEnglish = `Dr. Farida Khan completed her SSC from A K High School, Dhaka in 1990 and HSC from Begum Badrunnesa Govt. Women College, Dhaka in 1992. She graduated with MBBS from MAG Osmani Medical College, Sylhet in 2000.

Dr. Farida Khan started her career as Assistant Register (Gynae) at ICMH, Dhaka from 2003 to 2005. She joined Bangladesh Civil Service (BCS Health) in 2005 and served at various government hospitals across Bangladesh. She completed her FCPS training at Mitford Hospital (2007-2008) and course work at BSMMU (2008-2010), achieving FCPS in Gynecology and Obstetrics in 2010.

With over 25 years of working experience, Dr. Farida Khan has performed over 11,000 surgeries in the diagnosis and treatment of gynecologic problems. She specializes in exploratory laparotomy, dilation and curettage, hysterectomy, oophorectomy, tubal ligation, non-descended vaginal hysterectomy and other surgical procedures with management of normal and complicated pregnancy, delivery and the postpartum period. She has been serving at Central Police Hospital, Rajarbagh since 2019 and was promoted to Assistant Professor in 2025.`;

  const bioBangla = `ডা. ফারিদা খান ১৯৯০ সালে এ কে হাই স্কুল, ঢাকা থেকে এসএসসি এবং ১৯৯২ সালে বেগম বদরুন্নেসা সরকারি মহিলা কলেজ, ঢাকা থেকে এইচএসসি সম্পন্ন করেন। তিনি ২০০০ সালে এম এ জি ওসমানী মেডিকেল কলেজ, সিলেট থেকে এমবিবিএস ডিগ্রি অর্জন করেন।

ডা. ফারিদা খান ২০০৩ থেকে ২০০৫ সাল পর্যন্ত আইসিএমএইচ, ঢাকায় সহকারী রেজিস্টার (গাইনি) হিসেবে তার কর্মজীবন শুরু করেন। তিনি ২০০৫ সালে বাংলাদেশ সিভিল সার্ভিসে (বিসিএস স্বাস্থ্য) যোগদান করেন এবং বাংলাদেশের বিভিন্ন সরকারি হাসপাতালে দায়িত্ব পালন করেন। তিনি মিটফোর্ড হাসপাতালে এফসিপিএস প্রশিক্ষণ (২০০৭-২০০৮) এবং বিএসএমএমইউতে কোর্সওয়ার্ক (২০০৮-২০১০) সম্পন্ন করে ২০১০ সালে গাইনিকোলজি ও অবস্টেট্রিক্সে এফসিপিএস অর্জন করেন।

২৫ বছরেরও বেশি কাজের অভিজ্ঞতা সহ, ডা. ফারিদা খান গাইনোকলজিক সমস্যা নির্ণয় এবং চিকিৎসায় ১১,০০০ এর বেশি সার্জারি সম্পাদন করেছেন। তিনি এক্সপ্লোরেটরি ল্যাপারোটমি, ডাইলেশন এবং কিউরেটেজ, হিস্টেরেক্টমি, উফোরেক্টমি, টিউবাল লিগেশন, নন-ডিসেন্ডেড ভ্যাজাইনাল হিস্টেরেক্টমি এবং স্বাভাবিক ও জটিল গর্ভাবস্থা, প্রসব এবং প্রসবোত্তর সময়কাল ব্যবস্থাপনা সহ অন্যান্য অস্ত্রোপচার পদ্ধতিতে বিশেষজ্ঞ। তিনি ২০১৯ সাল থেকে কেন্দ্রীয় পুলিশ হাসপাতাল, রাজারবাগে দায়িত্ব পালন করছেন এবং ২০২৫ সালে সহকারী অধ্যাপক পদে পদোন্নতি পান।`;

  return (
    <section id="about" className="md:py-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === "en" ? "About Dr. Farida Khan" : "ডা. ফারিদা খান সম্পর্কে"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Over 25 years of excellence in gynecology and obstetrics with 11,000+ successful surgeries"
              : "গাইনিকোলজি ও অবস্টেট্রিক্সে ২৫ বছরেরও বেশি অভিজ্ঞতা এবং ১১,০০০+ সফল অস্ত্রোপচার"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Image and Quick Facts */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/farida.jpg"
                  alt="Dr. Farida Khan"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Quick Facts Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="md:text-3xl text-xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">
                  {language === "en" ? "Years in Practice" : "বছরের অভিজ্ঞতা"}
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="md:text-3xl text-xl font-bold text-blue-600 mb-2">11000+</div>
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
                ? "Expert in Women's Health & Advanced Gynecologic Surgery"
                : "মহিলা স্বাস্থ্য এবং উন্নত গাইনোকলজিক সার্জারিতে বিশেষজ্ঞ"}
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              {language === "en"
                ? "Dr. Farida Khan specializes in comprehensive women's healthcare including reproductive disorders, abnormal bleeding, endometriosis, ovarian cysts, and complex gynecologic surgeries. With a holistic approach to patient care, she treats each woman as a physical, emotional, and social being, ensuring complete and speedy recovery."
                : "ডা. ফারিদা খান প্রজনন সংক্রান্ত ব্যাধি, অস্বাভাবিক রক্তপাত, এন্ডোমেট্রিওসিস, ডিম্বাশয়ের সিস্ট এবং জটিল গাইনোকলজিক সার্জারি সহ ব্যাপক মহিলা স্বাস্থ্যসেবায় বিশেষজ্ঞ। রোগীর যত্নে একটি সামগ্রিক দৃষ্টিভঙ্গি সহ, তিনি প্রতিটি মহিলাকে একটি শারীরিক, মানসিক এবং সামাজিক সত্তা হিসাবে চিকিৎসা করেন, সম্পূর্ণ এবং দ্রুত পুনরুদ্ধার নিশ্চিত করেন।"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en"
                    ? "Laparoscopic Surgery Expert"
                    : "ল্যাপারোস্কোপিক সার্জারি বিশেষজ্ঞ"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en"
                    ? "High Risk Pregnancy Management"
                    : "উচ্চ ঝুঁকিপূর্ণ গর্ভাবস্থা ব্যবস্থাপনা"}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-md px-6 py-3">
                <div className="text-sm font-semibold">
                  {language === "en"
                    ? "25+ Years Experience"
                    : "২৫+ বছরের অভিজ্ঞতা"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
