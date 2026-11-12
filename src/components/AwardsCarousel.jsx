import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AWARDS = [
  {
    id: 1,
    title: "Make In India",
    image: "/images/award2.png"
  },
  {
    id: 2,
    title: "RoHS Compliant",
    image: "/images/award3.png"
  },
  {
    id: 3,
    title: "Eco Friendly",
    image: "/images/awards1.png"
  },
  {
    id: 4,
    title: "CE European Certification",
    image: "/images/award4.png"
  }
];

export default function AwardsCarousel() {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicating the items 4 times creates a seamless continuous ribbon
  const loopList = [...AWARDS, ...AWARDS, ...AWARDS, ...AWARDS];

  const handleManualScroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = 260;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-14 bg-white border-t border-gray-100 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: "OUR AWARDS & ACHIEVEMENTS" with thin side rules */}
        <div className="flex items-center justify-center mb-10">
          <div className="hidden sm:block h-[1px] bg-gray-200 w-16 md:w-32 mr-6" />
          <h2 className="text-xl sm:text-2xl font-black text-[#142B45] tracking-[0.2em] uppercase text-center">
            OUR AWARDS & ACHIEVEMENTS
          </h2>
          <div className="hidden sm:block h-[1px] bg-gray-200 w-16 md:w-32 ml-6" />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative flex items-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Chevron Button in Brand Safety Orange */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 sm:left-2 z-30 w-10 h-10 flex items-center justify-center text-[#FF8E01] hover:text-[#e57e00] active:scale-95 transition-all hover:scale-110 cursor-pointer bg-white/90 rounded-full shadow-sm hover:shadow"
            aria-label="Previous Award"
          >
            <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
          </button>

          {/* Continuous Infinite CSS Marquee Track */}
          <div 
            ref={trackRef}
            className="w-full overflow-hidden py-4 px-10 flex items-center"
          >
            <div 
              className="flex items-center gap-12 sm:gap-20 awards-infinite-marquee"
              style={{
                animationPlayState: isHovered ? 'paused' : 'running'
              }}
            >
              {loopList.map((award, index) => (
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
          </div>

          {/* Right Chevron Button in Brand Safety Orange */}
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 sm:right-2 z-30 w-10 h-10 flex items-center justify-center text-[#FF8E01] hover:text-[#e57e00] active:scale-95 transition-all hover:scale-110 cursor-pointer bg-white/90 rounded-full shadow-sm hover:shadow"
            aria-label="Next Award"
          >
            <ChevronRight className="w-8 h-8 stroke-[2.5]" />
          </button>
        </div>

      </div>

      {/* Seamless Infinite Marquee CSS Animation */}
      <style>{`
        @keyframes awardsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .awards-infinite-marquee {
          display: flex;
          width: max-content;
          animation: awardsMarquee 22s linear infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .awards-infinite-marquee {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
