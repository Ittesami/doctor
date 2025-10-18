import { MapPin, Phone, Clock, Calendar as CalendarIcon } from "lucide-react";

export default function Appointment() {
  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our state-of-the-art Laser Colorectal Center for expert consultation and treatment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Laser Colorectal Center</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Rupayan Kahn Plaza (Lift button 8)<br />
                      Dhanmondi - 7, House - 18<br />
                      Mirpur Road, Dhaka
                    </p>
                    <button 
                      className="px-0 mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                      onClick={() => window.open('https://www.google.com/maps/place/Rupayan+Prime,+Green+Rd,+Dhaka+1205/@23.7454722,90.382763,17z', '_blank')}
                    >
                      View on Google Maps →
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">For Appointment Serial</h4>
                    <a 
                      href="tel:+8801721036644" 
                      className="text-blue-600 text-lg font-semibold hover:underline"
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
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Available Days</h4>
                    <p className="text-gray-600">
                      Saturday, Sunday, Monday, Wednesday
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Consultation Hours</h4>
                    <p className="text-gray-600">
                      7:00 PM to 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  onClick={() => window.location.href = 'tel:+8801721036644'}
                >
                  <Phone className="w-5 h-5" />
                  Call Now to Book
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-lg p-0 overflow-hidden h-full min-h-[500px] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8982448424744!2d90.38276299999999!3d23.7454722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ba1a809179%3A0x29144ff6d1cfc3b9!2sRupayan%20Prime%2C%20Green%20Rd%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laser Colorectal Center Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
