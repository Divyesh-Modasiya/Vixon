import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import g1 from '../../assets/HomeImg/g1.jpg'
import g2 from '../../assets/HomeImg/g2.jpg'
import g3 from '../../assets/HomeImg/g3.jpg'
import g4 from '../../assets/HomeImg/g4.jpg'
import banner1 from '../../assets/HomeImg/Banner1.jpg'
import banner2 from '../../assets/HomeImg/Banner2.jpg'
import banner3 from '../../assets/HomeImg/Banner3.jpg'

// Sample installation project data - replace with your actual data
const installationProjects = [
  {
    id: 1,
    title: "Luxury Bathroom Renovation",
    description: "Complete tiles transformation with premium Calacatta Gold for walls and flooring.",
    location: "Beverly Hills, CA",
    image: g1
  },
  {
    id: 2,
    title: "Modern Kitchen Countertops",
    description: "Custom-cut Nero Marquina tiles countertops with waterfall edge design.",
    location: "Manhattan, NY",
    image: g2
  },
  {
    id: 3,
    title: "Grand Foyer Installation",
    description: "Elegant entrance with custom tiles flooring featuring intricate medallion design.",
    location: "Chicago, IL",
    image: g3
  },
  {
    id: 4,
    title: "Executive Office Walls",
    description: "Book-matched Verde Guatemala tiles wall installation for corporate headquarters.",
    location: "Miami, FL",
    image: g4
  },
  {
    id: 5,
    title: "Luxury Hotel Lobby",
    description: "Massive installation of Statuario tiles with custom inlay design.",
    location: "Las Vegas, NV",
    image: g1
  },
  {
    id: 6,
    title: "Residential Pool Surround",
    description: "Outdoor tiles installation with custom-cut coping and deck tiles.",
    location: "Scottsdale, AZ",
    image: g2
  }
];

export default function tilesInstallationShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  
  // Auto scroll functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimating) {
        handleNextSlide();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, isAnimating]);
  
  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? installationProjects.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === installationProjects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const handleDotClick = (index) => {
    if (isAnimating || currentSlide === index) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchEnd - touchStart > 75) {
      handlePrevSlide();
    } else if (touchStart - touchEnd > 75) {
      handleNextSlide();
    }
  };

  return (
    <div className="w-full bg-gray-100 py-16 relative">
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
      <div className="w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div data-aos="fade-up" className="inline-flex items-center w-full justify-center mb-4">
            <div className="h-px w-8 bg-[#4A9371]"></div>
            <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
            OUR CLIENT
            </span>
            <div className="h-px w-8 bg-[#4A9371]"></div>
          </div>
          
          <h2 data-aos="fade-up" className={`text-4xl md:text-5xl text-center text-gray-900 font-bold mb-6 transition-all duration-1000 transform `}>
          Seamless Installation <br />Process
          </h2>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] rounded mx-auto"></div>
        {/* <div className="flex items-center justify-between mb-8">
            
          <div>
            <p className="text-green-500 font-medium uppercase tracking-wide">OUR CLIENT</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2">Seamless Installation Process</h2>
          </div>
        </div> */}

        {/* Main showcase area */}
        <div className="relative w-full overflow-hidden rounded-xl mt-8 shadow-2xl" style={{height: "560px"}}>
          {/* Slideshow */}
          <div 
            className="h-full w-full" 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd}
            data-aos="fade-up"
          >
            {installationProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < currentSlide || (currentSlide === 0 && index === installationProjects.length - 1)
                      ? 'opacity-0 -translate-x-full z-0' 
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-10">
                  <div className="max-w-3xl">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-2">{project.description}</p>
                    <div className="flex items-center text-[#4A9371]">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#4A9371] mr-2"></span>
                      {project.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full z-20"
            onClick={handlePrevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full z-20"
            onClick={handleNextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {installationProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-6 bg-[#4A9371]' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile view more button */}
        <div className="mt-6 md:hidden">
          <a href="#" className="flex items-center justify-center w-full px-6 py-3 bg-[#4A9371] text-white font-medium rounded-md hover:bg-green-600 transition-colors">
            VIEW MORE <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}