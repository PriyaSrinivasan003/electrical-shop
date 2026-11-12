import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AWARDS = [
  {
    id: 1,
    title: "RoHS Compliant",
    image: "/images/award3.png"
  },
  {
    id: 2,
    title: "Eco Friendly",
    image: "/images/awards1.png"
  },
  {
    id: 3,
    title: "Make In India",
    image: "/images/award2.png"
  },
  {
    id: 4,
    title: "CE European Certification",
    image: "/images/award4.png"
  },
  {
    id: 5,
    title: "RoHS Compliant",
    image: "/images/award3.png"
  },
  {
    id: 6,
    title: "Eco Friendly",
    image: "/images/awards1.png"
  },
  {
    id: 7,
    title: "Make In India",
    image: "/images/award2.png"
  },
  {
    id: 8,
    title: "CE European Certification",
    image: "/images/award4.png"
  }
];

export default function AwardsCarousel() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const handleScroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 260;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Auto-scroll ticker that gently moves and loops infinitely
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScroll();

    const interval = setInterval(() => {
      if (isPaused) return;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        // Seamless reset for infinite illusion
        el.scrollLeft = 0;
      } else {
        el.scrollBy({ left: 1.5, behavior: 'auto' });
      }
      checkScroll();
    }, 25);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-14 bg-white border-t border-gray-100 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching user screenshot: "OUR AWARDS & ACHIEVEMENTS" with thin side rules */}
        <div className="flex items-center justify-center mb-10">
          <div className="hidden sm:block h-[1px] bg-gray-200 w-16 md:w-32 mr-6" />
          <h2 className="text-xl sm:text-2xl font-black text-[#142B45] tracking-[0.2em] uppercase text-center">
            OUR AWARDS & ACHIEVEMENTS
          </h2>
          <div className="hidden sm:block h-[1px] bg-gray-200 w-16 md:w-32 ml-6" />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Red Chevron Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 sm:left-2 z-20 w-10 h-10 flex items-center justify-center text-red-600 hover:text-red-700 active:scale-95 transition-all hover:scale-110 cursor-pointer bg-white/80 rounded-full shadow-sm hover:shadow"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
          </button>

          {/* Smooth Horizontal Scroll Track */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="w-full flex items-center gap-10 sm:gap-16 overflow-x-auto scroll-smooth py-6 px-12 sm:px-16 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {AWARDS.map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-3 transition-transform duration-300 hover:scale-110"
              >
                <div className="w-32 h-32 sm:w-44 sm:h-36 flex items-center justify-center">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm select-none pointer-events-none"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Red Chevron Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 sm:right-2 z-20 w-10 h-10 flex items-center justify-center text-red-600 hover:text-red-700 active:scale-95 transition-all hover:scale-110 cursor-pointer bg-white/80 rounded-full shadow-sm hover:shadow"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-8 h-8 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}
