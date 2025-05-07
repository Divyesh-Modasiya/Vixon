import { useState } from 'react';
import { Download, Eye, X, Check, Loader2 } from 'lucide-react';
import coverImg from '../../assets/HomeImg/black.jpg'

export default function EBrochure() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const triggerDownload = () => {
    // Simulate download - in real implementation, this would be an actual file download
    console.log("Downloading brochure...");
    // Here you would typically have:
    // window.location.href = '/path-to-your-brochure.pdf';
  };

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
    
    // Reset form state after closing
    if (formSubmitted) {
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: ''
        });
      }, 300);
    }
  };

  return (
    <div className=" bg-gray-100 relative  py-16">
          {/* Checkerboard background pattern */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 opacity-10">
        {Array(60).fill().map((_, i) => (
          <div
            key={i}
            className="border border-[#4A9371] transition-all duration-700 opacity-100"
            style={{
              transitionDelay: `${i * 10}ms`
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-4 max-w-6xl">

         {/* Header Section */}
      <div className="text-center pb-12 px-4">
        <div
          data-aos="fade-up"
          className="inline-flex items-center w-full justify-center mb-4"
        >
          <div className="h-px w-8 bg-[#4A9371]"></div>
          <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
            CATALOGUE
          </span>
          <div className="h-px w-8 bg-[#4A9371]"></div>
        </div>
        <h2
          data-aos="fade-up"
          className={`text-4xl md:text-5xl text-center text-gray-900 font-bold mb-6 transition-all duration-1000 transform `}
        >
         Exquisite tiles Collection
        </h2>
        <div
          data-aos="fade-up"
          className="w-24 h-1 bg-[#4A9371] rounded mx-auto"
        ></div>
        <p className="mt-8 max-w-2xl mx-auto text-gray-600">
        Discover our premium selection of natural stone masterpieces, meticulously curated 
        to transform your spaces into timeless expressions of elegance and sophistication.
        </p>
      </div>

        {/* Brochure Display Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Brochure Cover Image */}
          <div className="relative rounded-lg shadow-2xl overflow-hidden group transition-all duration-500 transform hover:scale-105 opacity-0 animate-slide-in-left">
            <img 
              src={coverImg}
              alt="tiles Brochure Cover" 
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button 
                onClick={openModal}
                className="bg-white/70 cursor-pointer backdrop-blur-2xl text-gray-800 px-6 py-3 rounded-lg flex items-center gap-2 font-medium transform scale-95 transition-transform duration-300 hover:scale-100 hover:shadow-lg"
              >
                <Eye size={20} />
                View Brochure
              </button>
            </div>
          </div>

          {/* Brochure Details */}
          <div className="space-y-8 opacity-0 animate-slide-in-right">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">2025 Designer tiles Catalog</h2>
              <div className="w-16 h-1 bg-[#4A9371] mb-6 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our latest catalog showcases an exclusive collection of tiles varieties sourced from the world's most renowned quarries. Each piece tells a story of natural beauty, geological wonder, and artisanal craftsmanship.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From classic Carrara to exotic onyx, explore how our premium stone selections can elevate your architectural projects to new heights of luxury and distinction.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4A9371]"></div>
                <p className="text-gray-700">48 Pages of Premium Content</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4A9371]"></div>
                <p className="text-gray-700">High-Resolution Photography</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4A9371]"></div>
                <p className="text-gray-700">Complete Material Specifications</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#4A9371]"></div>
                <p className="text-gray-700">Design Inspiration Gallery</p>
              </div>
            </div>
            
            <button 
              onClick={openModal}
              className="mt-8 bg-gradient-to-r from-[#4A9371]/50 to-[#4A9371] cursor-pointer text-white px-8 py-4 rounded-lg flex items-center gap-3 font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download E-Brochure</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden transform transition-all duration-300 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button 
              className="absolute top-4 cursor-pointer right-4 text-gray-500 hover:text-gray-700 z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {!formSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Get Your E-Brochure</h3>
                    <p className="text-gray-600 mt-2">Please fill in your details to download our exclusive catalog</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    
                    <button 
                      onClick={handleSubmit} 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#4A9371]/50 to-[#4A9371] cursor-pointer text-white py-3 rounded-lg font-medium mt-2 transition-all hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Submit & Download</span>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 space-y-6">
                  <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Check size={32} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Thank You!</h3>
                    <p className="text-gray-600 mt-2">Your brochure is ready to download</p>
                  </div>
                  <button 
                    onClick={triggerDownload}
                    className="w-full bg-gradient-to-r from-[#4A9371]/50 to-[#4A9371] text-white py-3 rounded-lg font-medium mt-2 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Download size={20} className="animate-bounce" />
                    <span>Download Now</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Add custom animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInLeft {
    from { 
      opacity: 0;
      transform: translateX(-50px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from { 
      opacity: 0;
      transform: translateX(50px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes scaleIn {
    from { 
      opacity: 0;
      transform: scale(0.95);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 1s ease-out 0.3s forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 1s ease-out 0.5s forwards;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.3s ease-out forwards;
  }
`;
document.head.appendChild(style);