import { useState } from "react";
import { X } from "lucide-react";
import g1 from '../../assets/HomeImg/g1.jpg'
import g2 from '../../assets/HomeImg/g2.jpg'
import g3 from '../../assets/HomeImg/g3.jpg'
import g4 from '../../assets/HomeImg/g4.jpg'

// Sample marble images
const marbleImages = [
  g1,
  g2,
  g3,
  g4,
  g1,
  g2,
  g3,
  g4,
];

export default function MarbleGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-gray-100 text-white py-10">
      {/* Checkerboard background pattern */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 opacity-10">
        {Array(60)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="border border-[#4A9371] transition-all duration-700 opacity-100"
              style={{
                transitionDelay: `${i * 10}ms`,
              }}
            ></div>
          ))}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .gold-gradient { background: linear-gradient(45deg, #FFD700, #B8860B); }
          .marble-overlay {
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4));
            transition: all 0.4s ease;
          }
          .marble-overlay:hover {
            background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2));
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Header Section */}
      <div className="text-center pb-12 px-4">
        <div
          data-aos="fade-up"
          className="inline-flex items-center w-full justify-center mb-4"
        >
          <div className="h-px w-8 bg-[#4A9371]"></div>
          <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
            OUR GALLERY
          </span>
          <div className="h-px w-8 bg-[#4A9371]"></div>
        </div>
        <h2
          data-aos="fade-up"
          className={`text-4xl md:text-5xl text-center text-gray-900 font-bold mb-6 transition-all duration-1000 transform `}
        >
          Our Gallery
        </h2>
        <div
          data-aos="fade-up"
          className="w-24 h-1 bg-[#4A9371] rounded mx-auto"
        ></div>
        <p className="mt-8 max-w-2xl mx-auto text-gray-600">
          Explore our exclusive collection of premium marbles, designed to
          transform your spaces with unparalleled elegance and sophistication.
        </p>
      </div>

      {/* Image Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {marbleImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer marble-overlay group"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Marble ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg bg-black/70 backdrop-blur-2xl bg-opacity-60 px-4 py-2 rounded-full animate-fade-in">
                  View Tiles
                </span>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4A9371]/50 to-[#4A9371] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4A9371]/50 to-[#4A9371] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for expanded image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-90 transition-opacity duration-500"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-0 text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700 z-10 cursor-pointer transition-colors duration-300 animate-float"
              onClick={closeModal}
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full rounded-2xl shadow-2xl border-4 border-gray-800 animate-fade-in"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              {/* <p className="text-sm">
                Premium Marble {marbleImages.indexOf(selectedImage) + 1}
              </p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
