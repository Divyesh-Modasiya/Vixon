import { useState, useEffect } from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';
import logo from '../../assets/HomeImg/Logo.png'

export default function LuxuryFooter() {
  const [isVisible, setIsVisible] = useState(false);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`Dimg text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
  
      <div className=" mx-auto px-6 pt-10 pb-6">
        {/* Main content area */}
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-10 md:mb-0 transform transition-transform duration-500 hover:translate-y-1 md:px-10">
          <div className='bg-white/50 backdrop-blur-3xl rounded-2xl p-2'>
          <img src={logo} alt="" />
          </div>
            <p className="text-gray-300 my-6">Crafting exceptional experiences that blend sophistication with innovation.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-10 md:mb-0 md:ps-20">
            <h3 className="font-semibold text-lg mb-6 text-[#4A9371]">Quick Links</h3>
            <ul>
              {['Home', 'About Us', 'Product', 'Gallery', 'E-Brochure', 'Contact Us'].map((item, i) => (
                <li key={i} className="mb-3">
                  <a href="#" className="text-gray-300 transition-all duration-300 hover:text-[#4A9371] hover:pl-2 flex items-center group">
                    <span className="opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight size={12} />
                    </span>
                    <span className="ml-1">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 mb-10 md:mb-0 md:px-10">
            <h3 className="font-semibold text-lg mb-6 text-[#4A9371]">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-md transition-all duration-300 group-hover:bg-[#4A9371]">
                  <MapPin size={18} />
                </div>
                <p className="text-gray-300 transition-all duration-300 group-hover:text-white">123 Luxury Avenue, Suite 1500, Rajkot, GJ</p>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-md transition-all duration-300 group-hover:bg-[#4A9371]">
                  <Phone size={18} />
                </div>
                <p className="text-gray-300 transition-all duration-300 group-hover:text-white">+919265187752</p>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-md transition-all duration-300 group-hover:bg-[#4A9371]">
                  <Mail size={18} />
                </div>
                <p className="text-gray-300 transition-all duration-300 group-hover:text-white">Info@vixoninternational.com</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/4 md:px-10">
            <h3 className="font-semibold text-lg mb-6 text-[#4A9371]">Follow Us</h3>
            <p className="text-gray-300 mb-4">Stay connected with us on social media for the latest updates.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-gray-800 rounded-full transition-all duration-300 transform hover:bg-[#4A9371] hover:scale-110 hover:rotate-6">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full transition-all duration-300 transform hover:bg-[#4A9371] hover:scale-110 hover:rotate-6">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full transition-all duration-300 transform hover:bg-[#4A9371] hover:scale-110 hover:rotate-6">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal [#4A9371] line separator with animation */}
        <div className="relative mt-12 mb-8">
          <div className="h-px w-full bg-gray-800"></div>
          <div className="absolute h-px bg-[#4A9371] top-0 left-0 w-0 animate-grow-line"></div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LUXE. All rights reserved.
          </div>
          
         
        </div>
      </div>
      
     
      
      {/* Custom styles injected */}
      <style jsx>{`
        @keyframes growLine {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-grow-line {
          animation: growLine 3s ease-in-out forwards;
        }
        .text-[#4A9371] {
          color: #d4af37;
        }
        .bg-[#4A9371] {
          background-color: #d4af37;
        }
        .border-[#4A9371] {
          border-color: #d4af37;
        }
        .hover\\:bg-[#4A9371]:hover {
          background-color: #d4af37;
        }
        .hover\\:border-[#4A9371]:hover {
          border-color: #d4af37;
        }
        .hover\\:text-[#4A9371]:hover {
          color: #d4af37;
        }
      `}</style>
    </footer>
  );
}