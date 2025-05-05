import { useState, useEffect, useRef } from 'react';
import { Check, Award, Users, Truck, Globe, Shield, ArrowRight } from 'lucide-react';
import g1 from '../../assets/HomeImg/g1.jpg'


export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Sample data representing tiles features
  const features = [
    {
      icon: <Users size={24} />,
      title: "Expert Consultation",
      description: "Our team provides personalized guidance to help you choose the perfect tiles for your project."
    },
    {
      icon: <Award size={24} />,
      title: "Premium Selection",
      description: "We source only the highest quality tiles from renowned quarries around the world."
    },
    {
      icon: <Truck size={24} />,
      title: "Reliable Delivery",
      description: "With our professional logistics team, your tiles arrives safely and on schedule."
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Guaranteed",
      description: "Each slab undergoes rigorous quality checks to ensure flawless perfection."
    }
  ];

  const achievements = [
    { number: "25+", label: "Years Experience" },
    { number: "1000+", label: "Projects Completed" },
    { number: "50+", label: "Global Partners" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div ref={aboutRef} id="about" className="relative pt-24 w-full pb-16 bg-gray-100 overflow-hidden">
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

      <div className="w-full mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16">
        <div data-aos="fade-up" className="inline-flex items-center justify-center mb-4">
                    <div className="h-px w-8 bg-emerald-500"></div>
                    <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
                     ABOUT US
                    </span>
                    <div className="h-px w-8 bg-emerald-500"></div>
                  </div>
          <h2 data-aos="fade-up" className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Supplying Excellence In<br />Natural Stones & Slabs
          </h2>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] rounded"></div>
        </div>

        {/* Main content section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left column - Image */}
          <div data-aos="fade-right" className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={g1} 
                alt="tiles Showroom" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating highlight box */}
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-xl w-64 transition-all duration-500 delay-500 transform opacity-0 animate-fadeInUp">
              <div className="flex items-center mb-3">
                <Globe className="text-[#4A9371] mr-3" size={20} />
                <h3 className="font-bold text-gray-900">Global Sourcing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We travel the world to source rare and exceptional tiles varieties for our discerning clients.
              </p>
            </div>
          </div>

          {/* Right column - Text content */}
          <div data-aos="fade-left" className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Where Expertise Meets Innovation
            </h3>
            <p className="text-gray-600 mb-6">
              Providing solutions to its customers, we take a consultative approach, working closely with clients to understand their needs & preferences.
            </p>
            <p className="text-gray-700 font-medium mb-8">
              As a trusted supplier of premium stones and slabs, we ensure exceptional quality, durability, and aesthetic appeal. With a commitment to excellence, we deliver customized solutions tailored for residential, commercial, and industrial projects.
            </p>
            
            {/* Feature list */}
            <ul className="space-y-4 mb-8">
              {["Come to Our Store for a Visit", "Take Your time to choose our collection", "Let's Find the Best Natural Stone", "Delivery & Installation"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="text-[#4A9371]" size={16} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="inline-flex items-center bg-[#4A9371] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 group">
              READ MORE
              <ArrowRight className="ml-2 group-hover:ml-3 transition-all duration-300" size={18} />
            </button>
          </div>
        </div>

        {/* Features section */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-lg border border-gray-100 transition-all duration-700 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <div className="text-[#4A9371]">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div> */}

        {/* Achievements */}
        {/* <div className="bg-gradient-to-r from-[#063B62] to-[#056E95] rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-1000 delay-${index * 150} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.number}</div>
                <div className="text-green-400 uppercase tracking-wide text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
          animation-delay: 0.3s;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s forwards;
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}