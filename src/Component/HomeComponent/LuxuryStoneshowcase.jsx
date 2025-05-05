import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Calendar, MapPin, Star } from 'lucide-react';
import g1 from '../../assets/HomeImg/g1.jpg'
import g2 from '../../assets/HomeImg/g2.jpg'
import g3 from '../../assets/HomeImg/g3.jpg'
import g4 from '../../assets/HomeImg/g4.jpg'

export default function LuxuryStoneShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced stone types with more detailed information
  const stoneTypes = [
    {
      id: 1,
      name: "Premium tiles",
      description: "Exquisite tiles selections sourced from the finest quarries worldwide. Known for elegance and timeless beauty, our tiles collection features unique veining patterns and rich color variations.",
      origin: "Italy & Greece",
      bestFor: "Countertops, Flooring, Wall Cladding",
      durability: "High",
      maintenanceLevel: "Moderate",
      priceRange: "Premium"
    },
    {
      id: 2,
      name: "Exotic Granite",
      description: "Rare granite varieties with unique patterns and exceptional durability. Our granite selection offers unmatched strength and character with distinctive crystalline structures.",
      origin: "Brazil & India",
      bestFor: "Kitchen Countertops, Outdoor Features",
      durability: "Very High",
      maintenanceLevel: "Low",
      priceRange: "Moderate to Premium"
    },
    {
      id: 3,
      name: "Luxury Onyx",
      description: "Translucent onyx slabs perfect for statement walls and backlit features. Our onyx collection transforms spaces with its luminous quality and dramatic patterns.",
      origin: "Mexico & Iran",
      bestFor: "Feature Walls, Backlit Counters, Art Pieces",
      durability: "Moderate",
      maintenanceLevel: "High",
      priceRange: "Ultra Premium"
    }
  ];

  // Gallery images (using placeholder images)
  const galleryImages = [
   g1,g2,g3,g4
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Interior Designer",
      quote: "The quality and variety of stone offered is unmatched. My clients are always impressed with the final results.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      quote: "The onyx countertops transformed our kitchen into a true masterpiece. Worth every penny.",
      rating: 5
    }
  ];

  // Auto-rotate gallery images
  useEffect(() => {
    if (!isHovering) {
      const timer = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryImages.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isHovering, galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + galleryImages.length) % galleryImages.length);
  };

  // Featured projects using these stones
  const featuredProjects = [
    {
      title: "Azure Villa",
      description: "Luxury beachfront property featuring our Premium tiles throughout.",
      image: "/api/placeholder/400/300"
    },
    {
      title: "The Grand Hotel",
      description: "Exotic Granite showcased in the lobby and common areas.",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="flex flex-col Dimg text-gray-100">
      {/* Hero Section */}
     

      {/* Main Content */}
      <div className="w-full mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Stone Showcase */}
          <div data-aos="fade-right" className="md:w-1/2 mb-12 md:mb-0">
            <div 
              className="relative h-full rounded-lg overflow-hidden bg-transparent p-8 shadow-2xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Image Gallery */}
              <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex justify-center transition-opacity duration-500">
                  {galleryImages.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Stone gallery ${idx+1}`} 
                      className={`absolute inset-0 w-full h-full object-fit object-center transition-opacity duration-500 ${
                        idx === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Navigation controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button 
                    onClick={prevSlide}
                    className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {galleryImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentSlide 
                          ? 'bg-[#4A9371] w-6' 
                          : 'bg-gray-400 bg-opacity-50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-2">
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 transition duration-300 ${
                      idx === currentSlide 
                        ? 'border-[#4A9371] ring-2 ring-[#4A9371] ring-opacity-50' 
                        : 'border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-20 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Info */}
          <div data-aos="fade-left" className="md:w-2/5 md:pl-12">
            <div className="text-[#4A9371] uppercase tracking-wider text-sm mb-2 flex items-center">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Premium Collection
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Exclusive Stone Gallery</h2>
            
            <div className="mb-8">
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our premium stone gallery features rare and exclusive selections of tiles, granite, and exotic stones sourced from the world's finest quarries.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Each piece is hand-selected by our experts for its unique patterns, exceptional quality, and timeless elegance that will transform any space into a masterpiece.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Global Sourcing</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  <span>Expert Selected</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Limited Availability</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
           

            {/* Bottom section */}
            <div className="bg-black/50 backdrop-blur-2xl p-6 rounded-lg shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl text-white font-semibold">Ready to transform your space?</h3>
              </div>
              <p className="text-gray-300 mb-6">Book a personal tour of our display warehouse to see our full collection and receive expert guidance.</p>
              <button className="w-full bg-[#4A9371] hover:bg-emerald-600 text-white py-3 rounded-md transition duration-300 font-medium flex items-center justify-center">
                <Calendar className="mr-2 w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      
     
      
     
    </div>
  );
}