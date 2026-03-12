import { MapPin, Phone, Clock, Calendar as CalendarIcon } from "lucide-react";

export default function Appointment({ language }) {
  const translations = {
    en: {
      title: "Book an Appointment",
      subtitle: "Visit our state-of-the-art Laser Colorectal Center for expert consultation and treatment",
      centerName: "Laser Colorectal Center",
      location: "Location",
      locationDetails: "Rupayan Prime, Green Rd\nDhanmondi, Dhaka 1205",
      viewMaps: "View on Google Maps →",
      phone: "For Appointment Serial",
      schedule: "Available Days",
      scheduleDetails: "Saturday, Sunday, Monday, Wednesday",
      time: "Consultation Hours",
      timeDetails: "7:00 PM to 9:00 PM",
      callNow: "Call Now to Book",
      viewLocation: "View Location on Google Maps",
      clickToOpen: "Click to open"
    },
    bn: {
      title: "অ্যাপয়েন্টমেন্ট বুক করুন",
      subtitle: "বিশেষজ্ঞ পরামর্শ এবং চিকিৎসার জন্য আমাদের অত্যাধুনিক লেজার কোলোরেক্টাল সেন্টার পরিদর্শন করুন",
      centerName: "লেজার কোলোরেক্টাল সেন্টার",
      location: "অবস্থান",
      locationDetails: "রুপায়ন প্রাইম, গ্রীন রোড\nধানমন্ডি, ঢাকা ১২০৫",
      viewMaps: "গুগল ম্যাপে দেখুন →",
      phone: "অ্যাপয়েন্টমেন্ট সিরিয়ালের জন্য",
      schedule: "উপলব্ধ দিনগুলি",
      scheduleDetails: "শনিবার, রবিবার, সোমবার, বুধবার",
      time: "পরামর্শের সময়",
      timeDetails: "সন্ধ্যা ৭:০০ থেকে ৯:০০ পর্যন্ত",
      callNow: "এখনই কল করুন এবং বুক করুন",
      viewLocation: "গুগল ম্যাপে অবস্থান দেখুন",
      clickToOpen: "খোলার জন্য ক্লিক করুন"
    }
  };

  const t = translations[language];

  return (
    <section id="appointment" className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center md:mb-16 mb-7">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">{t.centerName}</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{t.location}</h4>
                    <p className="text-gray-600 text-sm md:text-base whitespace-pre-line">
                      {t.locationDetails}
                    </p>
                    <button 
                      className="px-0 mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      onClick={() => window.open('https://maps.app.goo.gl/UYXpwRkvYaK19pj2A', '_blank')}
                    >
                      {t.viewMaps}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{t.phone}</h4>
                    <a 
                      href="tel:+8801721036644" 
                      className="text-blue-600 text-base md:text-lg font-semibold hover:underline"
                    >
                      +880 1721-036644
                    </a>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CalendarIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{t.schedule}</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      {t.scheduleDetails}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{t.time}</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      {t.timeDetails}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                  onClick={() => window.location.href = 'tel:+8801721036644'}
                >
                  <Phone className="w-5 h-5" />
                  {t.callNow}
                </button>
              </div>
            </div>
          </div>

          {/* Location Image - Clickable */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-lg p-0 overflow-hidden h-full min-h-[400px] md:min-h-[500px] shadow-sm">
              <button
                onClick={() => window.open('https://maps.app.goo.gl/UYXpwRkvYaK19pj2A', '_blank')}
                className="relative w-full h-full min-h-[400px] md:min-h-[500px] group cursor-pointer overflow-hidden"
                title="Click to open location in Google Maps"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: 'url(/images/map.png)',
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 group-hover:from-black/40 group-hover:via-black/50 group-hover:to-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-white font-bold text-lg md:text-xl">
                      {t.viewLocation}
                    </p>
                    <p className="text-white/90 text-sm md:text-base mt-2">
                      {t.clickToOpen}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}