import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import slide1 from '../../assets/HomeImg/slide1.jpg'
import { Link } from 'react-router-dom';

export default function PageHeaderContact({ 
  currentPage = 'Contact Us', 
  backgroundImage = slide1,
  logoImage = '/api/placeholder/150/150'
}) {
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Generate random particles for background effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 15 + 5,
          opacity: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 20 + 10
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Animate entry
    setTimeout(() => {
      setLoaded(true);
    }, 100);

    // Simulate image loading
    setTimeout(() => {
      setImageLoaded(true);
    }, 300);
  }, []);

  // Animation for marble texture particles
  useEffect(() => {
    if (!loaded) return;
    
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + 0.1 * (particle.speed / 20)) % 100,
          y: (particle.y + 0.05 * (particle.speed / 20)) % 100
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, [loaded]);

  return (
    <div className="relative w-full h-64 md:h-120 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60" />
      </div>
      
      {/* Animated marble particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-gray-300 transform transition-all duration-1000 
                    ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            filter: 'blur(1px)'
          }}
        />
      ))}
      
      {/* Marble pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)]"></div>
      
      {/* Content with animation */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center">
        <h1 
          className={`text-4xl md:text-6xl font-bold text-white mb-4 transform transition-all duration-1000 
                    ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            textShadow: '2px 4px 8px rgba(0,0,0,0.6)',
            fontFamily: 'serif'
          }}
        >
          {currentPage}
        </h1>
        
        <div 
          className={`flex z-10 items-center text-lg text-white/80 transform transition-all duration-1000 delay-300
                    ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <Link 
            to="/" 
            className="hover:text-white transition-colors duration-300 font-light"
          >
            Home
          </Link>
          <ChevronRight size={16} className="mx-2 opacity-70" />
          <span className="font-medium">{currentPage}</span>
        </div>
        
        {/* Animated line */}
        <div className="relative mt-6 w-24">
          <div className="absolute h-0.5 bg-white/30 w-full"></div>
          <div 
            className={`absolute h-0.5 bg-white w-0 transition-all duration-1500 delay-500
                     ${loaded ? 'w-full' : 'w-0'}`}
          ></div>
        </div>
      </div>
      
      {/* Animated overlay gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/50 
                  transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      ></div>
      
      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}