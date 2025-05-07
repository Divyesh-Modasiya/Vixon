import React, { useState } from 'react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      title: "Wide Color Selection",
      description: "From deep mahogany to light oak, find the perfect shade to match your style.",
      color: "from-amber-400 to-amber-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Superior Quality & Durability",
      description: "Crafted from high-grade tiles for long-lasting beauty and strength.",
      color: "from-emerald-400 to-emerald-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Eco-Friendly & Sustainable",
      description: "Responsibly sourced materials for an environmentally conscious choice to design the look.",
      color: "from-blue-400 to-blue-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-gray-100 py-24 overflow-hidden">
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
      {/* Background Elements */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-700/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-green-700/10 to-transparent"></div>
        <div className="absolute top-40 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-green-600/20 rounded-full blur-3xl"></div>
      </div> */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* tiles Texture Ball */}
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
        <div data-aos="fade-up" className="inline-flex items-center justify-center mb-4">
                    <div className="h-px w-8 bg-emerald-500"></div>
                    <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
                     COLORS
                    </span>
                    <div className="h-px w-8 bg-emerald-500"></div>
                  </div>
          <h1 data-aos="fade-up" className="text-5xl font-bold mb-6 text-gray-900">
            Choose The Perfect Color To Match Your Choice
          </h1>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] rounded mx-auto"></div>
          
          <p data-aos="fade-up" className="text-gray-700 text-lg leading-relaxed mt-6">
            Whether you prefer the rich, dark hues of granite for a bold statement or the subtle
            beauty of tiles for a timeless appeal, our expertly crafted stone products bring
            sophistication and strength to any setting. Choose the perfect stone and transform
            your interiors with the luxury and natural charm of Vixon International.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
            data-aos="fade-up"
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`h-3 bg-gradient-to-r ${feature.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}