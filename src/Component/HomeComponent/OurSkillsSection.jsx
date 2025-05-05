// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// const OurSkillsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const flooringOptions = [
//     {
//       title: "Carpets & Rugs",
//       description: "Carpets and rugs are popular flooring options for their softness, warmth & noise-reduce quality.",
//       icon: "carpet"
//     },
//     {
//       title: "Laminate Flooring",
//       description: "Laminate Flooring is a versatile flooring option that simulates the look of hardwood or tile.",
//       icon: "laminate"
//     },
//     {
//       title: "tiles Flooring",
//       description: "tiles flooring is a luxurious and elegant flooring option that can add beauty & value any space.",
//       icon: "tiles"
//     },
//     {
//       title: "Ceramic Tile",
//       description: "Ceramic tile is a popular and versatile flooring option that is known for its durability & easy maintenance.",
//       icon: "ceramic"
//     },
//     {
//       title: "Industrial Flooring",
//       description: "Industrial flooring options include concrete, epoxy & other specialized materials that are designed for high-traffic commercial spaces.",
//       icon: "industrial"
//     }
//   ];

//   const renderIcon = (iconName) => {
//     switch (iconName) {
//       case "carpet":
//         return (
//           <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//             <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 8H22M2 16H22" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M8 2V22M16 2V22" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M4 4L6 6M4 6L6 4" stroke="currentColor" strokeWidth="1" />
//             <path d="M4 12L6 14M4 14L6 12" stroke="currentColor" strokeWidth="1" />
//             <path d="M12 4L14 6M12 6L14 4" stroke="currentColor" strokeWidth="1" />
//             <path d="M12 12L14 14M12 14L14 12" stroke="currentColor" strokeWidth="1" />
//           </svg>
//         );
//       case "laminate":
//         return (
//           <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//             <path d="M2 2H22V22H2V2Z" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 22L22 2" stroke="currentColor" strokeWidth="1.5" />
//             <rect x="8" y="8" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
//           </svg>
//         );
//       case "tiles":
//         return (
//           <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//             <rect x="2" y="2" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 7C8 2 16 12 22 7" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 12C8 7 16 17 22 12" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 17C8 12 16 22 22 17" stroke="currentColor" strokeWidth="1.5" />
//           </svg>
//         );
//       case "ceramic":
//         return (
//           <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//             <rect x="2" y="2" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
//             <rect x="13" y="2" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
//             <rect x="2" y="13" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
//             <rect x="13" y="13" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
//           </svg>
//         );
//       case "industrial":
//         return (
//           <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
//             <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 6H22" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 10H22" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 14H22" stroke="currentColor" strokeWidth="1.5" />
//             <path d="M2 18H22" stroke="currentColor" strokeWidth="1.5" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div 
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden relative"
//     >
//       {/* Luxurious geometric pattern background */}
//        {/* Checkerboard background pattern */}
//        <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 opacity-10">
//         {Array(60).fill().map((_, i) => (
//           <div
//             key={i}
//             className="border border-green-500 transition-all duration-700 opacity-100"
//             style={{
//               transitionDelay: `${i * 10}ms`
//             }}
//           ></div>
//         ))}
//       </div>
      
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-200 to-emerald-50 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200 to-amber-50 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={fadeIn}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center justify-center mb-4">
//             <div className="h-px w-8 bg-[#4A9371]"></div>
//             <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
//               OUR SKILL
//             </span>
//             <div className="h-px w-8 bg-[#4A9371]"></div>
//           </div>
          
//           <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           Premium Flooring Installation<br />Services By Vixon
//           </h2>
//           <div className="w-24 h-1 bg-green-600 rounded mx-auto"></div>

//           {/* <div className="relative h-1 max-w-md mx-auto my-6">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4A9371] to-transparent"></div>
//             <div className="absolute inset-y-0 left-1/2 w-16 -translate-x-1/2 bg-[#4A9371] animate-pulse"></div>
//           </div> */}
          
//           <p className="mt-8 max-w-2xl mx-auto text-gray-600">
//             At Vixon, we specialize in high-quality flooring installation services, delivering elegance and durability
//             for residential, commercial, and industrial spaces, with expertise in tiles, granite, limestone, and other natural stones, we ensure precision, superior craftsmanship, and long-lasting results.
//           </p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={staggerChildren}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {flooringOptions.map((option, index) => (
//             <motion.div
//               key={option.title}
//               variants={fadeIn}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative p-6 bg-white rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500"
//               style={{ 
//                 background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
//               }}
//             >
//               {/* Border animation */}
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 via-teal-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ height: "2px", top: "auto" }}></div>
//               <div className="absolute inset-0 bg-gradient-to-b from-emerald-300 via-teal-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: "2px", right: "auto" }}></div>
//               <div className="absolute inset-0 bg-gradient-to-l from-emerald-300 via-teal-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ height: "2px", bottom: "auto" }}></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-emerald-300 via-teal-400 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: "2px", left: "auto" }}></div>
              
//               {/* Corner accent */}
//               <div className="absolute top-0 right-0 w-16 h-16">
//                 <div className="absolute transform rotate-45 bg-gradient-to-br from-emerald-400 to-teal-500 w-20 h-20 -top-10 -right-10 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
//               </div>
              
//               {/* Content */}
//               <div className="relative z-10">
//                 <div className="text-emerald-600 mb-4 transform group-hover:scale-110 transition-transform duration-300 group-hover:text-[#4A9371]">
//                   {renderIcon(option.icon)}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-800 transition-colors duration-300">{option.title}</h3>
//                 <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
//                   {option.description}
//                 </p>
//               </div>
              
//               {/* Subtle bottom glow */}
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={fadeIn}
//           transition={{ duration: 0.5, delay: 0.8 }}
//           className="text-center mt-16"
//         >
//           <button className="px-8 py-3 bg-gradient-to-r from-[#4A9371] to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-emerald-200">
//             EXPLORE MORE
//           </button>
          
//           {/* Decorative line under button */}
//           <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OurSkillsSection;


import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const OurSkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const flooringOptions = [
    {
      title: "Carpets & Rugs",
      description: "Carpets and rugs are popular flooring options for their softness, warmth & noise-reduce quality.",
      icon: "carpet"
    },
    {
      title: "Laminate Flooring",
      description: "Laminate Flooring is a versatile flooring option that simulates the look of hardwood or tile.",
      icon: "laminate"
    },
    {
      title: "tiles Flooring",
      description: "tiles flooring is a luxurious and elegant flooring option that can add beauty & value any space.",
      icon: "tiles"
    },
    {
      title: "Ceramic Tile",
      description: "Ceramic tile is a popular and versatile flooring option that is known for its durability & easy maintenance.",
      icon: "ceramic"
    },
    {
      title: "Industrial Flooring",
      description: "Industrial flooring options include concrete, epoxy & other specialized materials that are designed for high-traffic commercial spaces.",
      icon: "industrial"
    }
  ];

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "carpet":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 8H22M2 16H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 2V22M16 2V22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 4L6 6M4 6L6 4" stroke="currentColor" strokeWidth="1" />
            <path d="M4 12L6 14M4 14L6 12" stroke="currentColor" strokeWidth="1" />
            <path d="M12 4L14 6M12 6L14 4" stroke="currentColor" strokeWidth="1" />
            <path d="M12 12L14 14M12 14L14 12" stroke="currentColor" strokeWidth="1" />
          </svg>
        );
      case "laminate":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
            <path d="M2 2H22V22H2V2Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 22L22 2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="8" y="8" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case "tiles":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 7C8 2 16 12 22 7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 12C8 7 16 17 22 12" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 17C8 12 16 22 22 17" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case "ceramic":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
            <rect x="13" y="2" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
            <rect x="2" y="13" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
            <rect x="13" y="13" width="9" height="9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      case "industrial":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 6H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 10H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 14H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 18H22" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="py-20 bg-gray-100 overflow-hidden relative"
    >
      {/* Checkerboard background pattern */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 opacity-10">
        {Array(60).fill().map((_, i) => (
          <div
            key={i}
            className="border border-green-500 transition-all duration-700 opacity-100"
            style={{
              transitionDelay: `${i * 10}ms`
            }}
          ></div>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-200 to-emerald-50 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200 to-amber-50 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="mx-auto px-6 relative z-10">
        <div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-[#4A9371]"></div>
            <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
              OUR SKILL
            </span>
            <div className="h-px w-8 bg-[#4A9371]"></div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Premium Flooring Installation<br />Services By Vixon
          </h2>
          <div className="w-24 h-1 bg-[#4A9371] rounded mx-auto"></div>
          
          <p className="mt-8 max-w-2xl mx-auto text-gray-600">
            At Vixon, we specialize in high-quality flooring installation services, delivering elegance and durability
            for residential, commercial, and industrial spaces, with expertise in tiles, granite, limestone, and other natural stones, we ensure precision, superior craftsmanship, and long-lasting results.
          </p>
        </div>

        <div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {flooringOptions.map((option, index) => (
            <div
              key={option.title}
              data-aos="fade-up"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500"
              style={{ 
                background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
              }}
            >
              {/* Smooth border animation */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[transparent] transition-all duration-700"
                     style={{
                       background: 'linear-gradient(90deg, transparent, transparent) padding-box, linear-gradient(45deg, #34d399, #2dd4bf) border-box',
                       borderImage: 'linear-gradient(45deg, #34d399, #2dd4bf) 1',
                       transform: 'scale(0)',
                       transformOrigin: 'top left',
                       transition: 'transform 0.7s ease-in-out'
                     }}
                    //  style={{
                    //    transform: 'scale(1)'
                    //  }}
                ></div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute transform rotate-45 bg-gradient-to-br from-emerald-400 to-teal-500 w-20 h-20 -top-10 -right-10 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-emerald-600 mb-4 transform group-hover:scale-110 transition-transform duration-300 group-hover:text-[#4A9371]">
                  {renderIcon(option.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-800 transition-colors duration-300">{option.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {option.description}
                </p>
              </div>
              
              {/* Subtle bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
          data-aos="fade-up"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-[#4A9371] to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-emerald-200">
            EXPLORE MORE
          </button>
          
          {/* Decorative line under button */}
          <div className="h-px w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default OurSkillsSection;