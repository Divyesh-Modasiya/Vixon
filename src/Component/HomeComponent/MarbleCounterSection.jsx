import { useState, useEffect, useRef } from 'react';

// Sample counter data - customize with your actual statistics
const counterData = [
  {
    id: 1,
    value: 750,
    label: "Projects Completed",
    icon: "📋",
    suffix: "+"
  },
  {
    id: 2,
    value: 25,
    label: "Years of Experience",
    icon: "🏆",
    suffix: "+"
  },
  {
    id: 3,
    value: 1500,
    label: "Happy Clients",
    icon: "😊",
    suffix: "+"
  },
  {
    id: 4,
    value: 85,
    label: "tiles Varieties",
    icon: "🌈",
    suffix: ""
  }
];

export default function tilesCounterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section comes into view, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we no longer need the observer
          observer.disconnect();
        }
      },
      // Start animation when element is 20% visible
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 Dimg overflow-hidden"
    >
      {/* Background tiles pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px), 
                            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Content container */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16" >
                  <div data-aos="fade-up" className="inline-flex items-center justify-center mb-4">
                    <div className="h-px w-8 bg-emerald-500"></div>
                    <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
                      OUR NUMBERS
                    </span>
                    <div className="h-px w-8 bg-emerald-500"></div>
                  </div>
                  
                  <h2 data-aos="fade-up" className={`text-4xl md:text-5xl font-bold text-gray-300 mb-6 transition-all duration-1000 transform`}>
                  Our tiles Excellence<br /> By The Numbers
                  </h2>
                  <div data-aos="fade-up" className="w-24 h-1 bg-green-600 rounded mx-auto"></div>
                  
                  <p data-aos="fade-up" className="mt-8 max-w-2xl mx-auto text-gray-400">
                  Decades of dedication to craftsmanship and customer satisfaction have made us the premier tiles installation company.
                  </p>
                </div>
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Our tiles Excellence By The Numbers
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              Decades of dedication to craftsmanship and customer satisfaction have made us the premier tiles installation company.
            </p>
          </div>
        </div> */}

        {/* Counter grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterData.map((item) => (
            <CounterCard 
              key={item.id} 
              data={item} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual counter card component
function CounterCard({ data, isVisible }) {
  const { value, label, icon, suffix } = data;
  const [count, setCount] = useState(0);
  
  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;
    
    // Calculate duration based on value for smoother animation
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.min(duration / frameDuration, value); 
    const increment = value / totalFrames;
    
    let currentCount = 0;
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      currentCount += increment;
      
      if (frame <= totalFrames) {
        setCount(Math.floor(currentCount));
      } else {
        setCount(value);
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [isVisible, value]);

  return (
    <div className="bg-transparent  rounded-xl p-8 border border-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-900/20">
      <div className="flex flex-col items-center text-center">
        <span className="text-4xl mb-4">{icon}</span>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-[#4A9371] tabular-nums tracking-tight">
            {count}
          </span>
          <span className="text-2xl text-[#4A9371] font-semibold ml-1">
            {suffix}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-medium text-gray-200">{label}</h3>
        
        {/* Animated progress bar */}
        <div className="w-full mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#4A9371] rounded-full transition-all duration-2000 ease-out"
            style={{ 
              width: isVisible ? '100%' : '0%',
              transitionDelay: '300ms'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}