import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowLeft, X } from 'lucide-react';
import pr1 from '../../assets/ProductImg/Marble-1.jpg'
import pr2 from '../../assets/ProductImg/Marble-2.jpg'
import pr3 from '../../assets/ProductImg/Marble-3.jpg'
import pr4 from '../../assets/ProductImg/Marble-4.jpg'
import pr5 from '../../assets/ProductImg/Marble-5.jpg'
import pr6 from '../../assets/ProductImg/Marble-6.jpg'

// Sample data - replace with your actual data
const sizeCategoriesData = [
  { id: 1, name: "800×600 mm", image: pr1},
  { id: 2, name: "600×600 mm", image: pr2, description: "Versatile square format ideal for any room" },
  { id: 3, name: "600×300 mm", image: pr3, description: "Classic rectangular format with timeless appeal" },
  // { id: 4, name: "800×800 mm", image: "/api/placeholder/800/800", description: "Grand square format for luxury spaces" },
  // { id: 5, name: "1200×600 mm", image: "/api/placeholder/1200/600", description: "Modern large format for sophisticated interiors" },
  // { id: 6, name: "Custom Sizes", image: "/api/placeholder/900/600", description: "Bespoke formats tailored to your requirements" }
];

// Sample tiles data for a specific category
const tilesData = [
  {
    id: 101,
    name: "Carrara White",
    categoryId: 1,
    description: "Inspired by the legendary Italian Carrara marble, this exquisite tile features a pristine white background with subtle gray veining. The polished finish enhances the natural beauty of the marble pattern, creating a luminous surface that reflects light beautifully. Ideal for luxury bathrooms, elegant kitchens, and prestigious commercial spaces.",
    images: [
      pr1,pr2,pr3,pr4,pr5
    ],
    size: "800×600 mm",
    finish: "Polished",
    thickness: "9.5mm",
    material: "Porcelain",
    usage: "Floor, Wall",
    price: "$52.99/m²"
  },
  {
    id: 102,
    name: "Calacatta Gold",
    categoryId: 1,
    description: "The epitome of luxury, our Calacatta Gold marble-effect tile features a brilliant white background with dramatic gold-toned veining. This opulent design makes a bold statement in any space, bringing the timeless elegance of Italian marble to your interior. Perfect for creating stunning feature walls and floors in premium residential and hospitality environments.",
    images: [
     pr2,pr3,pr4,pr5,pr6
    ],
    size: "800×600 mm",
    finish: "Polished",
    thickness: "9.5mm",
    material: "Porcelain",
    usage: "Floor, Wall",
    price: "$67.99/m²"
  },
  {
    id: 103,
    name: "Emperador Dark",
    categoryId: 1,
    description: "Rich, deep chocolate brown tones with subtle lighter veining create a warm, sophisticated atmosphere. Our Emperador Dark marble-effect tile brings Spanish-inspired luxury to your space with its intense coloration and elegant movement. These tiles are particularly stunning in libraries, studies, and executive spaces where a sense of gravitas is desired.",
    images: [
      pr3,pr4,pr5,pr6,pr1
    ],
    size: "800×600 mm",
    finish: "Polished",
    thickness: "9.5mm",
    material: "Porcelain",
    usage: "Floor, Wall",
    price: "$59.99/m²"
  },
  
];

export default function ProductShowcase() {
  const [view, setView] = useState('categories'); // 'categories', 'products', 'detail'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTile, setSelectedTile] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    if (selectedTile) {
      setMainImage(selectedTile.images[0]);
    }
  }, [selectedTile]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setView('products');
    
  };

  const handleTileClick = (tile) => {
    setSelectedTile(tile);
    setView('detail');
   
  };

  const handleBackToCategories = () => {
    setView('categories');
    setSelectedCategory(null);
  };

  const handleBackToProducts = () => {
    setView('products');
    setSelectedTile(null);
  };

  const filteredTiles = selectedCategory 
    ? tilesData.filter(tile => tile.categoryId === selectedCategory.id) 
    : [];

  return (
    <div className={`min-h-screen bg-gray-100 pt-20 pb-16 transition-opacity duration-1000 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Page Header */}
      <div className="text-center pb-5 px-4">
        <div
          data-aos="fade-up"
          className="inline-flex items-center w-full justify-center mb-4"
        >
          <div className="h-px w-8 bg-[#4A9371]"></div>
          <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
            PRODUCTS
          </span>
          <div className="h-px w-8 bg-[#4A9371]"></div>
        </div>
        <h2
          data-aos="fade-up"
          className={`text-4xl md:text-5xl text-center text-gray-900 font-bold mb-6 transition-all duration-1000 transform `}
        >
          Our Collections
        </h2>
        <div
          data-aos="fade-up"
          className="w-24 h-1 bg-[#4A9371] rounded mx-auto"
        ></div>
        <p className="mt-8 max-w-2xl mx-auto text-gray-600">
        Explore our exquisite marble collections organized by size. Each piece reflects unparalleled craftsmanship and timeless elegance.
        </p>
      </div>
      

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center text-sm">
          <button 
            onClick={handleBackToCategories} 
            className="text-gray-600 hover:text-[#4A9371] transition-colors duration-300"
          >
            Collections
          </button>
          
          {view !== 'categories' && (
            <>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {view === 'products' ? (
                <span className="text-[#4A9371]">{selectedCategory?.name}</span>
              ) : (
                <>
                  <button 
                    onClick={handleBackToProducts} 
                    className="text-gray-600 hover:text-[#4A9371] transition-colors duration-300"
                  >
                    {selectedCategory?.name}
                  </button>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                  <span className="text-[#4A9371]">{selectedTile?.name}</span>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Categories View */}
      {view === 'categories' && (
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {sizeCategoriesData.map((category, index) => (
              <div 
                key={category.id}
                className={`group relative overflow-hidden rounded-xl shadow-xl cursor-pointer bg-white transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                onClick={() => handleCategoryClick(category)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-black transition-colors duration-300">{category.name}</h3>
                  <div className="h-0.5 w-12 bg-[#4A9371] mb-3 transform origin-left transition-all duration-500 group-hover:w-20"></div>
                  {/* <p className="text-gray-200 text-sm opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{category.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products View */}
      {view === 'products' && (
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-8 py-8">
          <button 
            onClick={handleBackToCategories}
            className="flex items-center mb-8 text-gray-600 hover:text-[#4A9371] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Collections</span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTiles.map((tile, index) => (
              <div 
                key={tile.id}
                className={`group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                onClick={() => handleTileClick(tile)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={tile.images[0]} 
                    alt={tile.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-[#4A9371] text-white px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Details</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-serif text-gray-800 group-hover:text-[#4A9371] transition-colors duration-300">{tile.name}</h3>
                  <div className="h-0.5 w-8 bg-[#4A9371] my-2 transform origin-left transition-all duration-500 group-hover:w-16"></div>
                  {/* <p className="text-gray-600 text-sm line-clamp-2 mt-2">{tile.description}</p> */}
                  {/* <p className="text-right mt-4 font-medium text-[#4A9371]">{tile.price}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Detail View */}
      {view === 'detail' && selectedTile && (
        <div className="container mx-auto px-4 md:px-8 py-8 animate-fade-in">
          <button 
            onClick={handleBackToProducts}
            className="flex items-center mb-8 text-gray-600 hover:text-[#4A9371] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to {selectedCategory?.name}</span>
          </button>

          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className=' h-150'>
              {/* Main Image */}
              <div className="relative h-100 flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                <img 
                  src={mainImage} 
                  alt={selectedTile.name} 
                  className="w-auto h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-5 gap-3">
                {selectedTile.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`relative rounded-md overflow-hidden cursor-pointer transform transition-all duration-300 ${mainImage === img ? 'ring-2 ring-[#4A9371] shadow-md' : 'hover:shadow-md'}`}
                    onClick={() => setMainImage(img)}
                  >
                    <div className="h-25">
                      <img 
                        src={img} 
                        alt={`${selectedTile.name} thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {mainImage === img && (
                      <div className="absolute inset-0 bg-[#4A9371]/20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="rounded-lg p-8 animate-slide-in-right">
              <h2 className="text-3xl font-serif text-gray-800 mb-2 mt-10 ">{selectedTile.name}</h2>
              <div className="h-1 w-16 bg-[#4A9371] mb-6"></div>
              
              {/* <p className="text-2xl font-medium text-[#4A9371] mb-6">{selectedTile.price}</p> */}
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p>{selectedTile.description}</p>
              </div>
              
              {/* <div className="space-y-4 mb-8">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Size</span>
                  <span className="text-gray-600">{selectedTile.size}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Finish</span>
                  <span className="text-gray-600">{selectedTile.finish}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Thickness</span>
                  <span className="text-gray-600">{selectedTile.thickness}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Material</span>
                  <span className="text-gray-600">{selectedTile.material}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Recommended Use</span>
                  <span className="text-gray-600">{selectedTile.usage}</span>
                </div>
              </div> */}
              
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#4A9371] hover:bg-amber-700 text-white py-3 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A9371] flex-1 transform hover:scale-105 transition-transform duration-300">
                  Request Quote
                </button>
                <button className="border-2 border-gray-300 hover:border-[#4A9371] text-gray-700 hover:text-[#4A9371] py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A9371] flex-1">
                  Add to Project
                </button>
              </div> */}
              
              {/* <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Need Assistance?</h4>
                <p className="text-gray-600 mb-4">Contact our marble specialists for custom requirements and installation advice.</p>
                <div className="flex items-center">
                  <button className="text-[#4A9371] hover:text-amber-700 font-medium transition-colors duration-300 flex items-center">
                    Contact Us
                    <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}