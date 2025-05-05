import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import user from '../../assets/HomeImg/user.jpeg'

// Sample testimonial data - replace with your actual testimonials
const testimonials = [
  {
    id: 1,
    name: "Alexandra Richards",
    designation: "Interior Designer",
    message: "Working with this tiles company was a seamless experience. The quality of their stone and craftsmanship elevated our project to new heights. The clients were absolutely thrilled with the final result.",
    image: user
  },
  {
    id: 2,
    name: "Michael Thornton",
    designation: "Architect",
    message: "I've specified their tiles for multiple high-end residential projects. Their attention to detail and ability to match veining across large installations is unmatched in the industry.",
    image: user
  },
  {
    id: 3,
    name: "Sarah Johnson",
    designation: "Homeowner",
    message: "My kitchen renovation was transformed by their stunning tiles countertops. Their team was professional, punctual and the installation was flawless. Worth every penny!",
    image: user
  },
  {
    id: 4,
    name: "Robert Chen",
    designation: "Hotel Developer",
    message: "We needed consistent tiles quality across 200+ bathrooms and they delivered perfection. Their project management skills made a complex job run smoothly and on schedule.",
    image: user
  },
  {
    id: 5,
    name: "Emily Patel",
    designation: "Restaurant Owner",
    message: "Our custom tiles bar top gets compliments every day. They helped us select the perfect stone that's both beautiful and durable, even in our high-traffic environment.",
    image: user
  },
  {
    id: 6,
    name: "David Wilson",
    designation: "Real Estate Developer",
    message: "We've used their tiles installations in multiple luxury properties. Their craftsmanship adds significant value to our developments and helps us stand out in a competitive market.",
    image: user
  },
  {
    id: 7,
    name: "Jennifer Lopez",
    designation: "Spa Owner",
    message: "The tiles features in our wellness center create exactly the luxurious atmosphere we wanted. Their team understood our vision perfectly and executed it flawlessly.",
    image: user
  },
  {
    id: 8,
    name: "Thomas Wright",
    designation: "Custom Home Builder",
    message: "After trying several tiles suppliers, we've found our go-to partner. Their selection, quality control and installation expertise is unmatched in the industry.",
    image: user
  }
];

export default function tilesTestimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const sliderRef = useRef(null);
  
  // Calculate how many testimonials to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
      
      // Ensure startIndex is valid when resizing
      setStartIndex(prev => Math.min(prev, testimonials.length - itemsToShow));
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsToShow]);
  
  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setStartIndex(prev => Math.min(testimonials.length - itemsToShow, prev + 1));
  };
  
  // Visible testimonials based on startIndex and itemsToShow
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="py-16 bg-gray-100 overflow-hidden relative">
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
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div data-aos="fade-up" className="inline-flex items-center w-full justify-center mb-4">
            <div className="h-px w-8 bg-[#4A9371]"></div>
            <span className="uppercase tracking-wider text-xs font-bold text-emerald-700 mx-3 inline-block">
            OUR CLIENT
            </span>
            <div className="h-px w-8 bg-[#4A9371]"></div>
          </div>
          
          <h2 data-aos="fade-up" className={`text-4xl md:text-5xl text-center text-gray-900 font-bold mb-6 transition-all duration-1000 transform `}>
          What Our Clients <br />Say
          </h2>
          <div data-aos="fade-up" className="w-24 h-1 bg-[#4A9371] rounded mx-auto"></div>
        
        <div className="relative mt-10">
          {/* Main testimonials container */}
          <div 
            ref={sliderRef}
            data-aos="fade-up"
            className="flex transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(0px)`,
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`p-3 rounded-full ${
                startIndex === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#4A9371] text-white hover:bg-emerald-600'
              } transition-colors shadow-md`}
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={startIndex >= testimonials.length - itemsToShow}
              className={`p-3 rounded-full ${
                startIndex >= testimonials.length - itemsToShow
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-[#4A9371] text-white hover:bg-emerald-600'
              } transition-colors shadow-md`}
              aria-label="Next testimonials"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-6 space-x-1">
            {Array.from({ length: Math.max(1, testimonials.length - itemsToShow + 1) }).map((_, index) => (
              <div 
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === startIndex ? 'w-8 bg-[#4A9371]' : 'w-2 bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div data-aos="fade-up" className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] h-full flex flex-col">
      {/* Quote icon */}
      <div className="mb-6 text-[#4A9371]">
        <Quote size={36} className="fill-emerald-50" />
      </div>
      
      {/* Testimonial message */}
      <div className="flex-grow mb-6">
        <p className="text-gray-700 leading-relaxed">"{testimonial.message}"</p>
      </div>
      
      {/* Client info */}
      <div className="flex items-center mt-auto">
        <div className="mr-4 flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-100">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-emerald-600 text-sm">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
}