import { useState } from 'react';
import g1 from '../../assets/HomeImg/g1.jpg'
import g2 from '../../assets/HomeImg/g2.jpg'
import g3 from '../../assets/HomeImg/g3.jpg'
import g4 from '../../assets/HomeImg/g4.jpg'

// Sample marble data - replace with your actual data
const marbleData = [
  {
    id: 1,
    title: "Carrara White",
    description: "Classic Italian white marble with subtle gray veining, perfect for elegant interiors and sculptures.",
    imageUrl: g1
  },
  {
    id: 2,
    title: "Emperador Dark",
    description: "Rich brown marble with intricate veining from Spain, adds warmth and luxury to any space.",
    imageUrl: g2
  },
  {
    id: 3,
    title: "Calacatta Gold",
    description: "Premium Italian marble featuring dramatic gold veining on white background, the epitome of luxury.",
    imageUrl: g3
  },
  {
    id: 4,
    title: "Verde Guatemala",
    description: "Stunning green marble with distinctive patterns, sourced from the mountains of Guatemala.",
    imageUrl: g4
  },
  {
    id: 5,
    title: "Nero Marquina",
    description: "Deep black marble with striking white veins, creating bold contrast and sophisticated appeal.",
    imageUrl: g1
  },
  {
    id: 6,
    title: "Statuario",
    description: "Premium white marble with elegant gray veining, traditionally used for fine sculpture and luxury interiors.",
    imageUrl: g2
  }
];

export default function MarbleShowcase() {
  return (
    <div className="Dimg min-h-screen p-8 text-white">
      <div className="max-w-full mx-auto">
      <div data-aos="fade-up" className="inline-flex items-center w-full justify-center mb-4 mt-10">
            <div className="h-px w-8 bg-emerald-500"></div>
            <span  className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
              OUR COLLECTION
            </span>
            <div className="h-px w-8 bg-emerald-500"></div>
          </div>
          
          <h2 data-aos="fade-up" className={`text-4xl md:text-5xl text-center text-gray-300 font-bold mb-6 transition-all duration-1000 transform `}>
          Exquisite Tiles <br />Collection
          </h2>
          <div className="w-24 h-1 bg-[#4A9371] rounded mx-auto"></div>
        {/* <h1 className="text-4xl font-bold text-center mb-12">Exquisite Marble Collection</h1> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {marbleData.map((marble) => (
            <MarbleCard key={marble.id} marble={marble} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MarbleCard({ marble }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
    >
      {/* Image and gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={marble.imageUrl} 
          alt={marble.title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
      </div>
      
      {/* Title - always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 ease-in-out">
        <h2 className="text-xl font-bold text-white mb-2 text-center">{marble.title}</h2>
        
        {/* Description - only visible on hover */}
        <p 
          className={`text-gray-200 overflow-hidden text-center transition-all duration-300 ease-in-out ${
            isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {marble.description}
        </p>
      </div>
    </div>
  );
}