import { useState, useEffect } from "react";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import floor1 from '../../assets/AboutImg/fllor (1) (1).jpg'
import floor2 from '../../assets/AboutImg/fllor (2) (1).jpg'
import floor3 from '../../assets/AboutImg/fllor (3) (1).jpg'
import floor4 from '../../assets/AboutImg/fllor (4) (1).jpg'
import floor5 from '../../assets/AboutImg/fllor (5) (1).jpg'
import floor6 from '../../assets/AboutImg/fllor (6) (1).jpg'

export default function tilesFlooringComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Products data
  const products = [
    {
      name: "Laminated Flooring",
      description: "A stylish and cost-effective option with a natural wood-like appeal.",
      image: floor1,
      color: "bg-amber-50"
    },
    {
      name: "Carpet & Rugs",
      description: "Soft, luxurious, and available in various textures and patterns.",
      image: floor5,
      color: "bg-emerald-50"
    },
    {
      name: "Vinyl Flooring",
      description: "Waterproof and resilient, perfect for modern interiors.",
      image: floor4,
      color: "bg-sky-50"
    },
    {
      name: "Industrial Flooring",
      description: "High-performance solutions built for durability and safety.",
      image: floor3,
      color: "bg-purple-50"
    },
    {
      name: "Wood Flooring",
      description: "Timeless and elegant, adding warmth and character to any space.",
      image: floor2,
      color: "bg-orange-50"
    },
    {
      name: "Oak Flooring",
      description: "A premium choice known for its strength, unique grain, and classic charm.",
      image: floor6,
      color: "bg-rose-50"
    }
  ];

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cycle through tabs automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="max-w-full bg-gray-100 mx-auto px-4 py-16 font-sans relative">
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
      {/* Header Section with Animation */}
      <div className={`transition-all  fle flex-col justify-center items-center duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
      <div data-aos="fade-up" className="inline-flex w-full items-center justify-center mb-4">
                    <div className="h-px w-8 bg-emerald-500"></div>
                    <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
                     WHAT WE OFFER
                    </span>
                    <div className="h-px w-8 bg-emerald-500"></div>
                  </div>
          <h1 data-aos="fade-up" className="text-5xl text-center font-bold mb-6 text-gray-900">
          Growing With Passion
          </h1>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] mb-5 rounded mx-auto"></div>
        
        
        <p data-aos="fade-up" className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
          At Vixon International, we take pride in offering a diverse range of high-quality tiles and flooring solutions 
          designed to elevate any space. With a commitment to excellence and craftsmanship, we provide
          premium materials that combine durability, aesthetics, and functionality.
        </p>
      </div>

      {/* Interactive Product Showcase */}
      <div className="grid md:grid-cols-7 w-[90%] mx-auto gap-8 mb-16">
        {/* Product Navigation */}
        <div data-aos="fade-right" className="md:col-span-2 flex flex-col">
          {products.map((product, index) => (
            <button
              key={index}
              className={`flex items-center py-4 px-4 text-left border-l-4 transition-all duration-300 group ${
                activeTab === index
                  ? "border-green-600 bg-green-50 text-green-800"
                  : "border-transparent hover:bg-gray-50 text-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                activeTab === index ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500 group-hover:bg-gray-300"
              }`}>
                {activeTab === index ? (
                  <Check size={14} />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>
              <span className="font-medium">{product.name}</span>
              <ChevronRight 
                size={16} 
                className={`ml-auto transform transition-transform duration-300 ${
                  activeTab === index ? "text-green-600" : "opacity-50 group-hover:opacity-100"
                } ${activeTab === index ? "rotate-90" : "rotate-0"}`} 
              />
            </button>
          ))}
        </div>
        
        {/* Product Preview */}
        <div data-aos="fade-left" className="md:col-span-5 overflow-hidden rounded-xl shadow-lg">
          {products.map((product, index) => (
            <div
              key={index}
              className={`h-full transition-all duration-700 transform ${
                activeTab === index 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 absolute -translate-x-full"
              }`}
              style={{ display: activeTab === index ? "block" : "none" }}
            >
              <div className={`flex flex-col h-full ${product.color}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full object-cover h-64 transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-white text-2xl font-bold p-6">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <div className="flex items-center text-green-600 font-medium group cursor-pointer">
                    <span>View Details</span>
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div data-aos="fade-up" className={`text-center transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          Whether you're looking for contemporary designs, classic elegance, or industrial durability, 
          <span className="font-bold"> Vixon International</span> delivers superior flooring solutions tailored to your needs. 
          Transform your space with the finest materials and expert craftsmanship.
        </p>
        
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto group">
          <span>VIEW MORE</span>
          <ChevronRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}