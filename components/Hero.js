
import { Calendar, Phone } from "lucide-react";
import heroBackground from "@/public/images/hero_background.png";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
            Dr. Md. Ahsan Habib
          </h1>
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-md px-6 py-3 mb-8 animate-scale-in">
            <p className="text-lg md:text-xl text-blue-100 font-medium tracking-wide">
              MBBS (DMC) • BCS (Health) • FCPS (Surgery) • MRCS (Edinburgh) • MS (Colorectal Surgery)
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-semibold mb-4">
            Associate Professor of Colorectal Surgery
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Pioneer Laser Colorectal Surgeon in Bangladesh
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            <button 
              className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md border-2 border-blue-700/50 transition-all font-medium flex items-center justify-center gap-2"
              onClick={() => scrollToSection('appointment')}
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </button>
            <button 
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-md hover:bg-white/20 transition-all font-medium"
              onClick={() => scrollToSection('services')}
            >
              View Services
            </button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
          {[
            { number: "15+", label: "Years of Experience" },
            { number: "5000+", label: "Successful Surgeries" },
            { number: "100%", label: "Patient Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-6 hover:bg-white/20 transition-all transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl font-bold text-blue-100 mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
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