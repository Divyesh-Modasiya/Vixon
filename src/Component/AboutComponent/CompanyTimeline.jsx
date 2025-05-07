import React, { useState, useEffect, useRef } from 'react';

export default function CompanyTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  // Milestone data
  const milestones = [
    {
      year: "1995",
      title: "Founded in Milan",
      description: "Established with a vision to deliver the world's finest stone products"
    },
    {
      year: "2003",
      title: "International Expansion",
      description: "Opened facilities in North America and Asia"
    },
    {
      year: "2010",
      title: "Sustainability Initiative",
      description: "Pioneered eco-friendly extraction and production methods"
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched virtual stone selection technology"
    },
    {
      year: "2023",
      title: "Carbon Neutral",
      description: "Achieved carbon neutrality across all operations"
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
    
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    
    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, []);

  return (
    <section ref={timelineRef} className="bg-gray-50 Dimg py-10">
      <div className="container mx-auto px-6">
        {/* Company Timeline */}
        <div className="">
        <div data-aos="fade-up" className="inline-flex items-center w-full justify-center mb-4 mt-10">
            <div className="h-px w-8 bg-emerald-500"></div>
            <span  className="uppercase tracking-wider text-xs font-bold text-[#4A9371] mx-3 inline-block">
              STORY
            </span>
            <div className="h-px w-8 bg-emerald-500"></div>
          </div>
          
          <h2 data-aos="fade-up" className={`text-4xl md:text-5xl text-center text-gray-300 font-bold mb-6 transition-all duration-1000 transform `}>
          Our Journey
          </h2>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] rounded mx-auto mb-10"></div>
          
          
          <div className="relative">
            {/* Timeline Line */}
            <div data-aos="fade-right" className="absolute top-0 left-1/2 w-1 h-full bg-green-200 transform -translate-x-1/2"></div>
            
            {/* Timeline Events */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center mb-12 animate-on-scroll opacity-0 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    transform: index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)'
                  }}
                >
                  {/* Year Bubble */}
                  <div data-aos="fade-right" className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#4A9371] border-4 border-black shadow-xl flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  
                  {/* Content Box */}
                  <div data-aos="fade-right" className={`bg-black  p-6 rounded-xl shadow-sm shadow-[#4A9371] w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'
                  } relative`}>
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-white ${
                      index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    }`}></div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                  
                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
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