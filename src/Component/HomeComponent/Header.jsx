// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import logo from '../../assets/HomeImg/Logo.png'

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#products' },
//     { name: 'Product', href: '#about' },
//     { name: 'Gallery', href: '#contact' },
//     { name: 'E-Brochure', href: '#contact' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header className="bg-transparent w-full shadow-lg z-50 fixed top-0">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
//           <img
//             src={logo}
//             alt="tiles Logo"
//             className="h-12 w-auto"
//             onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50?text=tiles+Logo')}
//           />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-14">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-lg font-medium relative group hover:text-[#4A9371] transition-colors duration-300"
//             >
//               {link.name}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
//             </a>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <button className="bg-[#4A9371] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4A9371] transform hover:scale-105 transition-all duration-300 shadow-md">
//             Get Started
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <X className="w-8 h-8 transform rotate-180 transition-transform duration-300" />
//           ) : (
//             <Menu className="w-8 h-8 transform rotate-0 transition-transform duration-300" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <nav className="flex flex-col items-center space-y-4 py-6 bg-gray-900">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-lg font-medium hover:text-[#4A9371] transition-colors duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
//           <button className="bg-[#4A9371] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4A9371] transform hover:scale-105 transition-all duration-300">
//             Get Started
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/HomeImg/Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Change header style after scrolling 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#products' },
    { name: 'Product', href: '#about' },
    { name: 'Gallery', href: '#contact' },
    { name: 'E-Brochure', href: '#contact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/50 backdrop-blur-2xl shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
          <img
            src={logo}
            alt="tiles Logo"
            className="h-12 w-auto"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50?text=tiles+Logo')}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-14">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium relative group transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-[#4A9371]' 
                  : 'text-white hover:text-[#4A9371]'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                isScrolled ? 'bg-[#4A9371]' : 'bg-[#4A9371]'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className={`px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-md ${
            isScrolled 
              ? 'bg-[#4A9371] text-white hover:bg-[#4A9371]' 
              : 'bg-white text-[#4A9371] hover:bg-gray-100'
          }`}>
            Language
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`w-8 h-8 transform rotate-180 transition-transform duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`} />
          ) : (
            <Menu className={`w-8 h-8 transform rotate-0 transition-transform duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className={`flex flex-col items-center space-y-4 py-6 ${
          isScrolled ? 'bg-white' : 'bg-gray-900'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-[#4A9371]' 
                  : 'text-white hover:text-[#4A9371]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#4A9371] text-white hover:bg-[#4A9371]' 
              : 'bg-[#4A9371] text-white hover:bg-[#4A9371]'
          }`}>
            Language
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;