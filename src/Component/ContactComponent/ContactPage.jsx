import { useState, useEffect } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    // Trigger animations after component mount
    setTimeout(() => {
      setAnimateForm(true);
    }, 300);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[#4A9371]" />,
      title: "Our Location",
      content: "123 Luxury Avenue, Suite 1500, Rajkot, GJ",
    },
    {
      icon: <Phone className="text-[#4A9371]" />,
      title: "Phone Number",
      content: "+919265187752",
    },
    {
      icon: <Mail className="text-[#4A9371]" />,
      title: "Email Address",
      content: "Info@vixoninternational.com",
    },
    {
      icon: <Clock className="text-[#4A9371]" />,
      title: "Working Hours",
      content: "Mon - Fri: 9AM - 6PM",
    },
  ];

  return (
    <div className="bg-gray-100 relative min-h-screen">
      {/* Checkerboard background pattern */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 opacity-10">
        {Array(60)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="border border-[#4A9371] transition-all duration-700 opacity-100"
              style={{
                transitionDelay: `${i * 10}ms`,
              }}
            ></div>
          ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center pb-12 px-4">
          <div
            data-aos="fade-up"
            className="inline-flex items-center w-full justify-center mb-4"
          >
            <div className="h-px w-8 bg-[#4A9371]"></div>
            <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
              CONTACT US
            </span>
            <div className="h-px w-8 bg-[#4A9371]"></div>
          </div>
          <h2
            data-aos="fade-up"
            className={`text-4xl md:text-5xl text-center text-gray-900 font-bold mb-6 transition-all duration-1000 transform `}
          >
            Get In Touch
          </h2>
          <div
            data-aos="fade-up"
            className="w-24 h-1 bg-[#4A9371] rounded mx-auto"
          ></div>
          <p className="mt-8 max-w-2xl mx-auto text-gray-600">
            We're here to answer any questions about our exquisite tiles
            collections and services.
          </p>
        </div>
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {/* Contact Information */}
          <div
            className={`lg:col-span-1 transition-all duration-1000 delay-300 transform ${
              animateForm
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white shadow-xl rounded-lg p-8 h-full">
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#4A9371]/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="h-10 w-10 rounded-full bg-gray-100 hover:bg-[#4A9371]/30 flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-5 w-5 bg-gray-400 rounded-sm"></div>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 transform ${
              animateForm
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white shadow-xl rounded-lg p-8 relative overflow-hidden">
              {/* Decorative tiles texture overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gray-100 to-transparent opacity-50 rounded-bl-full"></div>

              <h3 className="text-2xl font-serif text-gray-900 mb-6 relative z-10">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900">
                    Thank you for your message!
                  </h4>
                  <p className="text-gray-600 mt-2">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 outline-0 rounded-lg focus:ring-2 focus:ring-[#4A9371] focus:border-[#4A9371] transition-all duration-300 bg-gray-50"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 outline-0 rounded-lg focus:ring-2 focus:ring-[#4A9371] focus:border-[#4A9371] transition-all duration-300 bg-gray-50"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 outline-0 rounded-lg focus:ring-2 focus:ring-[#4A9371] focus:border-[#4A9371] transition-all duration-300 bg-gray-50"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 outline-0 rounded-lg focus:ring-2 focus:ring-[#4A9371] focus:border-[#4A9371] transition-all duration-300 bg-gray-50"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleSubmit}
                      className="flex items-center justify-center w-full px-6 py-4 rounded-lg shadow-sm text-white bg-gradient-to-r from-[#4A9371]/50 to-[#4A9371] transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="mr-2">Send Message</span>
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            animateForm
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div
            data-aos="fade-up"
            className="inline-flex items-center w-full justify-center mb-4"
          >
            <div className="h-px w-8 bg-[#4A9371]"></div>
            <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
              Reach Us
            </span>
            <div className="h-px w-8 bg-[#4A9371]"></div>
          </div>
          <h2
            data-aos="fade-up"
            className={`text-4xl md:text-5xl text-center text-gray-900 font-bold mb-6 transition-all duration-1000 transform `}
          >
            Visite Our Showroom
          </h2>
          <div
            data-aos="fade-up"
            className="w-24 h-1 bg-[#4A9371] rounded mx-auto"
          ></div>

          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl mt-10">
            {/* Placeholder for the map - in a real application, you would embed Google Maps or another map provider here */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-gray-500 mb-2" />
                <p className="text-gray-700">
                  Interactive Map would be displayed here
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  1234 Luxury Avenue, tiles District, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
