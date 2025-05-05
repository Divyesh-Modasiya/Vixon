import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CircleDot, Facebook, Twitter, Instagram } from 'lucide-react';
import slide1 from '../../assets/HomeImg/slide1.jpg'
import slide2 from '../../assets/HomeImg/slide2.jpg'
import slide3 from '../../assets/HomeImg/slide3.jpg'
import banner1 from '../../assets/HomeImg/Banner1.jpg'
import banner2 from '../../assets/HomeImg/Banner2.jpg'
import banner3 from '../../assets/HomeImg/Banner3.jpg'

// Sample data for the slider
const sliderData = [
  {
    id: 1,
    title: "ITALIAN tiles",
    description: "Discover the timeless elegance of our premium Italian tiles collection, crafted with precision and excellence for luxury spaces.",
    image: slide1
  },
  {
    id: 2,
    title: "GREEK tiles",
    description: "Experience the classic beauty of Greek tiles, renowned for its unique veining and exceptional durability for generations.",
    image: slide2
  },
  {
    id: 3,
    title: "LUXURY ONYX",
    description: "Elevate your space with our translucent onyx collection, perfect for creating stunning backlit features and statement pieces.",
    image: slide3
  }
];

// Popular destinations
const popularItems = [
  {
    id: 1,
    title: "White Carrara",
    image: banner1
  },
  {
    id: 2,
    title: "Nero Marquina",
    image: banner2
  },
  {
    id: 3,
    title: "Travertine",
    image: banner3
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Main slider */}
      <div className="relative w-full h-full">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/60 z-10"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content - positioned on the left like in the screenshot */}
            <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16 lg:px-24">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg mb-8 opacity-90 max-w-lg font-light">
                  {slide.description}
                </p>
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center group">
                  Explore
                  <ChevronRight className="ml-1 group-hover:ml-2 transition-all duration-300" size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical dots navigation - left side, centered vertically */}
      <div className="absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-30 hidden md:flex flex-col space-y-4">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-3 h-3' : 'bg-white/50 hover:bg-white/70'
            }`}></div>
          </button>
        ))}
      </div>

      {/* Popular section - positioned bottom right like in screenshot */}
      <div className="absolute right-8 md:right-12 bottom-20 md:bottom-12 z-30">
        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
          <h3 className="text-white text-lg font-medium mb-3">Popular</h3>
          <div className="flex space-x-3">
            {popularItems.map((item) => (
              <div 
                key={item.id}
                className="w-20 h-20 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                aria-label="Previous popular item"
              >
                <ChevronLeft className="text-white w-4 h-4" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                aria-label="Next popular item"  
              >
                <ChevronRight className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social links - bottom left as in screenshot */}
      <div className="absolute left-8 md:left-12 bottom-3 md:bottom-12 z-30 flex space-x-6">
        <a href="#" className="text-white/80 hover:text-white transition-colors duration-300" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors duration-300" aria-label="Twitter">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors duration-300" aria-label="Instagram">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  );
}