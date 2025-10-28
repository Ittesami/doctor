import { Calendar, Phone } from "lucide-react";

export default function HeroSection({ language }) {
  const translations = {
    en: {
      title: "Dr. Md. Ahsan Habib",
      credentials: "MBBS (DMC) • BCS (Health) • FCPS (Surgery) • MRCS (Edinburgh) • MS (Colorectal Surgery)",
      subtitle: "Professor of Colorectal Surgery, Dhaka Medical College",
      tagline: "Pioneer Laser Colorectal Surgeon in Bangladesh",
      bookBtn: "Book Appointment",
      servicesBtn: "View Services",
      experience: "Years of Experience",
      surgeries: "Successful Surgeries",
      satisfaction: "Patient Satisfaction"
    },
    bn: {
      title: "ডা. এম ডি আহসান হাবিব",
      credentials: "এমবিবিএস (ডিএমসি) • বিসিএস (স্বাস্থ্য) • এফসিপিএস (সার্জারি) • এমআরসিএস (এডিনবার্গ) • এমএস (কোলোরেক্টাল সার্জারি)",
      subtitle: "ঢাকা মেডিক্যাল কলেজের কোলোরেক্টাল সার্জারির অধ্যাপক",
      tagline: "বাংলাদেশে লেজার কোলোরেক্টাল সার্জারির অগ্রদূত",
      bookBtn: "অ্যাপয়েন্টমেন্ট বুক করুন",
      servicesBtn: "সেবা দেখুন",
      experience: "বছরের অভিজ্ঞতা",
      surgeries: "সফল অপারেশন",
      satisfaction: "রোগী সন্তুষ্টি"
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-20 ">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero_background.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-blue-600/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-md px-6 py-3 mb-8 animate-scale-in">
            <p className="text-lg md:text-xl text-blue-100 font-medium tracking-wide">
              {t.credentials}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold mb-4">
            {t.subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            {t.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <button 
              className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md border-2 border-blue-700/50 transition-all font-medium flex items-center justify-center gap-2"
              onClick={() => scrollToSection('appointment')}
            >
              <Calendar className="w-5 h-5" />
              {t.bookBtn}
            </button>
            <button 
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-md hover:bg-white/20 transition-all font-medium"
              onClick={() => scrollToSection('services')}
            >
              {t.servicesBtn}
            </button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { number: "20+", labelKey: "experience" },
            { number: "15000+", labelKey: "surgeries" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl font-bold text-blue-100 mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{t[stat.labelKey]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}