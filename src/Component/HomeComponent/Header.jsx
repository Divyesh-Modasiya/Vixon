// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import logo from '../../assets/HomeImg/Logo.png'
// import { Link } from 'react-router-dom';
// import LanguageSelector from './LanguageSelector';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Add scroll event listener
//   useEffect(() => {
//     const handleScroll = () => {
//       // Change header style after scrolling 50px
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navLinks = [
//     { name: 'Home', to: '/' },
//     { name: 'About', to: '/about' },
//     { name: 'Product', to: '/product' },
//     { name: 'Gallery', to: '/gallery' },
//     { name: 'E-Brochure', to: '/ebrochure' },
//     { name: 'Contact', to: '/contact' },
//   ];

//   return (
//     <header 
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/50 backdrop-blur-2xl shadow-lg' 
//           : 'bg-transparent'
//       }`}
//     >
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
//             <Link
//               key={link.name}
//               to={link.to}
//               className={`text-lg font-medium relative group transition-colors duration-300 ${
//                 isScrolled 
//                   ? 'text-gray-800 hover:text-[#4A9371]' 
//                   : 'text-white hover:text-[#4A9371]'
//               }`}
//             >
//               {link.name}
//               <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
//                 isScrolled ? 'bg-[#4A9371]' : 'bg-[#4A9371]'
//               }`}></span>
//             </Link>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden md:block">
//           <button className={`rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-md ${
//             isScrolled 
//               ? 'bg-[#4A9371] text-white hover:bg-[#4A9371]' 
//               : 'bg-white text-[#4A9371] hover:bg-gray-100'
//           }`}>
//             <LanguageSelector />
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <X className={`w-8 h-8 transform rotate-180 transition-transform duration-300 ${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             }`} />
//           ) : (
//             <Menu className={`w-8 h-8 transform rotate-0 transition-transform duration-300 ${
//               isScrolled ? 'text-gray-800' : 'text-white'
//             }`} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//           isMenuOpen ? 'max-h-120 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <nav className={`flex flex-col h-screen items-center space-y-4 py-6 ${
//           isScrolled ? 'bg-white' : 'bg-gray-900'
//         }`}>
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.to}
//               className={`text-lg font-medium transition-colors duration-300 ${
//                 isScrolled 
//                   ? 'text-gray-800 hover:text-[#4A9371]' 
//                   : 'text-white hover:text-[#4A9371]'
//               }`}
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <button className={`px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 ${
//             isScrolled 
//               ? 'bg-[#4A9371] text-white hover:bg-[#4A9371]' 
//               : 'bg-[#4A9371] text-white hover:bg-[#4A9371]'
//           }`}>
//             <LanguageSelector />
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
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Product', to: '/product' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'E-Brochure', to: '/ebrochure' },
    { name: 'Contact', to: '/contact' },
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
            <Link
              key={link.name}
              to={link.to}
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
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className={`rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-md ${
            isScrolled 
              ? 'bg-[#4A9371] text-white hover:bg-[#4A9371]' 
              : 'bg-white text-[#4A9371] hover:bg-gray-100'
          }`}>
            <LanguageSelector />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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

      {/* Mobile Menu - Slide from left */}
      <div
        className={`fixed top-0 left-0 w-full h-full md:hidden transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Menu Content */}
        <div className={`relative h-full w-4/5 max-w-sm flex flex-col ${
          isScrolled ? 'bg-white' : 'bg-black'
        } shadow-2xl transform transition-transform duration-500`}>
          
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 border-opacity-20">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="tiles Logo"
                className="h-10 w-auto"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50?text=tiles+Logo')}
              />
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col flex-1 overflow-y-auto py-8 px-6">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`block text-xl font-medium transition-colors duration-300 border-b border-gray-700 border-opacity-20 pb-2 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-[#4A9371]' 
                      : 'text-white hover:text-[#4A9371]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Language Selector at Bottom */}
          <div className="p-6 border-t border-gray-700 border-opacity-20">
            <button className={`w-full py-3 rounded-full font-semibold text-center transform hover:scale-105 transition-all duration-300 ${
              'bg-[#4A9371] text-white hover:bg-[#4A9371]/90'
            }`}>
              <LanguageSelector />
            </button>
          </div>
          </nav>
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;