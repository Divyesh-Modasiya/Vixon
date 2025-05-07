import React, { useState, useEffect } from 'react';

export default function MissionVisionQuality() {
  const [activeSection, setActiveSection] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const renderContent = () => {
    switch(activeSection) {
      case 'mission':
        return (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              To transform spaces with nature's finest materials, providing unparalleled quality and craftsmanship 
              in every stone we deliver. We aim to exceed expectations through innovation, sustainability, 
              and a deep commitment to bringing the timeless beauty of natural stone to modern living spaces.
            </p>
            <div className="h-64 bg-gradient-to-br from-green-700 to-green-900 rounded-2xl overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Excellence in Every Slab</h4>
                  <p className="text-sm text-white/80">Setting the industry standard since 1995</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'vision':
        return (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-blue-600 mb-6">Our Vision</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              To be the world's most trusted source of premium natural stone, recognized for our 
              dedication to environmental responsibility, design excellence, and customer satisfaction. 
              We envision a world where the beauty of nature enhances every architectural space.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { year: "2025", goal: "Carbon Neutral Operations" },
                { year: "2027", goal: "Global Design Leadership" },
                { year: "2030", goal: "Industry Sustainability Standard" }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-blue-600 font-bold text-2xl mb-2">{item.year}</div>
                  <div className="text-gray-700">{item.goal}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'quality':
        return (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-green-700 mb-6">Our Quality</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Quality is the cornerstone of our business. Every piece of stone undergoes rigorous 
              inspection and meets the highest international standards. Our master craftsmen combine 
              traditional techniques with cutting-edge technology to ensure flawless finishes and enduring beauty.
            </p>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 to-green-600/80"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full">
                  <div className="flex justify-between px-8">
                    {[
                      { percent: "99.8%", label: "Quality Inspection Pass Rate" },
                      { percent: "100%", label: "Satisfaction Guarantee" },
                      { percent: "25+", label: "Years of Excellence" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-white text-4xl font-bold mb-2">{stat.percent}</div>
                        <div className="text-white/90 text-sm max-w-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b Dimg overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Moving Background Elements */}
        {/* <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 right-32 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
         */}
        {/* Header with animated underline */}
        <div className="text-center relative z-10 mb-16">
        <div data-aos="fade-up" className="inline-flex items-center justify-center mb-4">
                    <div className="h-px w-8 bg-emerald-500"></div>
                    <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
                        CORE VALUE
                    </span>
                    <div className="h-px w-8 bg-emerald-500"></div>
                  </div>
          <h2 data-aos="fade-up" className="text-5xl font-bold text-white mb-4 relative">
            Our Core Values
          </h2>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] rounded mx-auto"></div>
          <p data-aos="fade-up" className="text-xl text-gray-400 max-w-3xl mx-auto mt-5">
            Delivering exceptional quality with unwavering integrity since 1995
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div data-aos="fade-up" className="flex justify-center mb-12 relative z-10">
          <div className="inline-flex bg-gray-100 p-1 rounded-full shadow-inner">
            {['mission', 'vision', 'quality'].map((section, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setActiveSection(section);
                    setIsVisible(true);
                  }, 300);
                }}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-white/80 backdrop-blur-3xl text-gray-800 shadow-md' 
                    : 'bg-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Content Display Area */}
        <div data-aos="fade-up" className="relative z-10 p-8 bg-white/70 backdrop-blur-2xl rounded-3xl shadow-xl">
          {renderContent()}
        </div>
        
        {/* Animated Stone Quality Features */}
        <div data-aos="fade-up" className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Pure Materials", desc: "Sourced from the finest quarries" },
            { icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z", title: "Expert Craftsmanship", desc: "Precision in every detail" },
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Quality Assurance", desc: "Rigorous testing standards" },
            { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Global Standards", desc: "Excellence recognized worldwide" }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`animate-on-scroll bg-white/50 backdrop-blur-3xl p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8 flex flex-col items-center text-center`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-800">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-grow {
          animation: grow 3s infinite;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes grow {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.1); }
        }
      `}</style>
    </section>
  );
}