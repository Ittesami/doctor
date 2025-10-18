"use client";
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Youtube, Twitter, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-900 text-white py-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Dr. Md. Ahsan Habib</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Associate Professor of Colorectal Surgery at Dhaka Medical College. 
              Pioneer in laser colorectal surgery in Bangladesh with over 15 years of experience.
            </p>
            <div className="text-sm text-white/70">
              MBBS • BCS • FCPS • MRCS • MS
            </div>
            <div className="flex justify-start gap-6 my-8">
            <a
              href="https://www.facebook.com/Dr.MAhsanHabib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
              title="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.youtube.com/watch?v=1t8k_SKT078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
              title="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            
          </div>
          </div> */}
          

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Publications", href: "#publications" },
                { label: "Gallery", href: "#gallery" },
                { label: "Appointment", href: "#appointment" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Rupayan Kahn Plaza, Dhanmondi-7<br />
                  Mirpur Road, Dhaka
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+8801721036644" className="text-white/80 hover:text-white transition-colors">
                  +880 1721-036644
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Sat, Sun, Mon, Wed<br />
                  7:00 PM - 9:00 PM
                </span>
              </li>
            </ul>
          </div> */}
          
        </div>

      

        {/* Bottom Bar */}
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            © Copyright 2025 Dr. Md. Ahsan Habib. | Developed by Ittehad Sami
          </p>
           <div className="flex justify-start gap-6 ">
            <a
              href="https://www.facebook.com/Dr.MAhsanHabib/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
              title="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.youtube.com/watch?v=1t8k_SKT078"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
              title="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            
          </div>
          
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}