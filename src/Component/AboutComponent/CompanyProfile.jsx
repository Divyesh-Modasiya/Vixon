import React, { useState, useEffect, useRef } from 'react';
import g1 from '../../assets/HomeImg/g1.jpg'
import g2 from '../../assets/HomeImg/g2.jpg'
import g3 from '../../assets/HomeImg/g3.jpg'
import g4 from '../../assets/HomeImg/g4.jpg'

export default function CompanyProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const companyInfoRef = useRef(null);
  
  // Company information
  const companyData = {
    name: "Vixon International",
    founded: "1995",
    headquarters: "Milan, Italy",
    presence: "37 countries worldwide",
    specialists: "250+ stone specialists",
    projects: "10,000+ completed projects",
    description: "Vixon International is a global leader in premium tiles, granite, and natural stone solutions. For over 25 years, we've been transforming spaces with nature's finest materials, combining traditional craftsmanship with innovative technology to deliver unparalleled quality.",
    // longDescription: "Our journey began in the quarries of Carrara, Italy, where the world's finest tiles has been sourced for centuries. Today, we operate state-of-the-art facilities across three continents, offering an extensive range of natural stones for residential, commercial, and architectural projects. Each stone is hand-selected by our experts, ensuring only the highest quality materials make it to our clients. Our commitment to sustainability and ethical sourcing practices has made us a trusted partner for designers, architects, and homeowners seeking to bring the timeless beauty of natural stone to their projects."
  };
  
  // Gallery images - replace with actual image paths in production
  const galleryImages = [
    { 
      url: g1, 
      alt: "Modern kitchen with tiles countertops",
      caption: "Premium tiles kitchen installation"
    },
    { 
      url: g2, 
      alt: "Luxury bathroom with stone fixtures",
      caption: "Elegant bathroom stone solutions" 
    },
    { 
      url: g3, 
      alt: "Corporate headquarters with stone facade",
      caption: "Our Milan headquarters" 
    },
    { 
      url: g4, 
      alt: "Stone quarry operations",
      caption: "Sustainable quarry operations" 
    }
  ];

  // Animation for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (companyInfoRef.current) {
      observer.observe(companyInfoRef.current);
    }
    
    // Auto rotate gallery
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => {
      if (companyInfoRef.current) observer.unobserve(companyInfoRef.current);
      clearInterval(interval);
    };
  }, [galleryImages.length]);

  return (
    <section ref={companyInfoRef} className="py-20 bg-gray-100 overflow-hidden relative">
      
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
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Company Logo and Name */}
        <div className="flex flex-col justify-center items-center mx-auto mb-12">
        <div data-aos="fade-up" className="inline-flex items-center justify-center mb-4">
                    <div className="h-px w-8 bg-emerald-500"></div>
                    <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
                     COMPNEY
                    </span>
                    <div className="h-px w-8 bg-emerald-500"></div>
                  </div>
          <h2 data-aos="fade-up" className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 transform`}>
          Vixon International
          </h2>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] rounded mx-auto"></div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Company Information */}
          <div data-aos="fade-right" className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="prose prose-lg max-w-none px-5">
              <p className="text-md font-semibold text-gray-700 leading-relaxed">
                {companyData.description}
              </p>
             
            </div>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { 
                  icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z", 
                  label: "Founded", 
                  value: companyData.founded 
                },
                { 
                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 
                  label: "Global Presence", 
                  value: companyData.presence 
                },
                { 
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", 
                  label: "Specialists", 
                  value: companyData.specialists 
                },
                { 
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", 
                  label: "Projects", 
                  value: companyData.projects 
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white flex flex-col justify-center items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-medium">{stat.label}</span>
                  </div>
                  <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                </div>
              ))}
            </div>
            
            {/* Call to Action Button */}
            <div className="mt-8">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-green-700 rounded-lg overflow-hidden transition-all duration-300 hover:bg-green-800">
                <span className="relative z-10">Contact Our Specialists</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-full left-0 w-full h-full bg-white/20 group-hover:top-0 transition-all duration-500"></span>
              </button>
            </div>
          </div>
          
          {/* Right Column - Gallery */}
          <div data-aos="fade-left" className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2 h-96">
              {/* Image Gallery with animation */}
              <div className="relative h-full overflow-hidden rounded-xl">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      activeSlide === index 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 translate-x-full scale-90'
                    }`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p className="font-medium">{image.caption}</p>
                    </div>
                  </div>
                ))}
                
                {/* Gallery Controls */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeSlide === index 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Animated Watermark */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 text-8xl font-bold text-green-900/5 z-0 transform rotate-12 select-none pointer-events-none flex items-center justify-center">
              EST. 1995
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5%, 5%) rotate(5deg); }
          50% { transform: translate(0, 10%) rotate(0deg); }
          75% { transform: translate(-5%, 5%) rotate(-5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-5%, -5%) rotate(-5deg); }
          50% { transform: translate(0, -10%) rotate(0deg); }
          75% { transform: translate(5%, -5%) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 18s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
          animation-delay: 9s;
        }
        
        .animate-on-scroll {
          transition: all 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        }
        
        .animate-on-scroll.opacity-0 {
          opacity: 0;
        }
        
        ${isVisible ? `
        .animate-on-scroll {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        ` : ''}
      `}</style>
    </section>
  );
}