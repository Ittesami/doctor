import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";

export default function Navbar({ language, setLanguage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      about: "About",
      services: "Services",
      publications: "Publications",
      gallery: "Gallery",
      appointment: "Book Now",
      appointmentFull: "Make an Appointment",
      callFor: "Call for appointments",
      available: "Available 24/7"
    },
    bn: {
      about: "আমাদের সম্পর্কে",
      services: "সেবা",
      publications: "প্রকাশনা",
      gallery: "গ্যালারি",
      appointment: "বুক করুন",
      appointmentFull: "অ্যাপয়েন্টমেন্ট নিন",
      callFor: "অ্যাপয়েন্টমেন্টের জন্য কল করুন",
      available: "২৪/৭ উপলব্ধ"
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: t.about, href: "about" },
    { label: t.services, href: "services" },
    { label: t.publications, href: "publications" },
    { label: t.gallery, href: "gallery" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo/Brand */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm sm:text-lg font-bold hover:text-blue-700 transition-colors flex-shrink-0"
          >
            <span className={isScrolled ? 'text-blue-600' : 'text-transparent'}>
              <span className="hidden sm:inline">
                {language === 'en' ? 'Dr. Ahsan Habib' : 'ডা. আহসান হাবিব'}
              </span>
              <span className="inline sm:hidden">
                {language === 'en' ? 'Dr. Habib' : 'ডা. হাবিব'}
              </span>
            </span>
          </button>

          {/* Desktop Navigation - Hidden on md and below */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors hover:text-blue-600 text-xs lg:text-sm ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('appointment')}
              className="bg-blue-600 text-white px-4 lg:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 text-xs lg:text-sm"
            >
              <Phone className="w-4 h-4" />
              {t.appointment}
            </button>
          </div>

          {/* Right side: Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-md font-medium transition-all text-xs ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              title="Toggle Language"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline text-xs">
                {language === 'en' ? 'বাংলা' : 'EN'}
              </span>
              <span className="inline sm:hidden text-xs">
                {language === 'en' ? 'BN' : 'EN'}
              </span>
            </button>

            {/* Mobile Menu Button - Show on md and below */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Visible on md and below */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${
            isScrolled 
              ? 'bg-white border-gray-200' 
              : 'bg-white/95 backdrop-blur-md border-gray-100'
          }`}>
            <div className="px-4 py-4 space-y-2">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-blue-50 rounded-lg transition-colors font-medium text-sm"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Divider */}
              <div className="border-t border-gray-200 my-2"></div>

              {/* Appointment Button */}
              <button 
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 text-sm"
                onClick={() => {
                  scrollToSection('appointment');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Phone className="w-4 h-4" />
                <span>{t.appointmentFull}</span>
              </button>

              {/* Contact Info Section */}
              <div className="bg-blue-50 border border-blue-200 px-4 py-3 rounded-lg">
                <p className="text-xs text-gray-600">
                  {t.callFor}
                </p>
                <p className="text-base font-bold text-blue-600 mt-1">+88 01XXXXXXXX</p>
                <p className="text-xs text-gray-600 mt-1">
                  {t.available}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}