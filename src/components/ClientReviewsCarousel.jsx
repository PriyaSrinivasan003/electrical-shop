import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    quote: "A trustworthy manufacturing partner with solid technical expertise. The team clearly understands project requirements and delivers products that meet both quality expectations.",
    author: "SENTHIL RAJ"
  },
  {
    id: 2,
    rating: 5,
    quote: "Working with this team has been a smooth experience from start to finish. Their understanding of electrical wire manufacturing standards, quality control, and delivery timelines is excellent.",
    author: "RAJESH KUMAR"
  },
  {
    id: 3,
    rating: 5,
    quote: "Their electrical wires perform reliably even in demanding applications. What stands out is their focus on safety, quality control, and continuous improvement in manufacturing practices.",
    author: "KARTHIKEYAN M"
  },
  {
    id: 4,
    rating: 5,
    quote: "VRL Wires and Cables provided the complete electrical cable and UPVC pipe supply for our commercial high-rise. Zero delays, pristine quality, and the test certificates passed inspection without a hitch.",
    author: "RAJESHWAR RAO"
  },
  {
    id: 5,
    rating: 5,
    quote: "Their FR-LSH house wires have the best flexibility and copper density we've used in years of contracting. The conduit pipes don't crack under heavy slab casting.",
    author: "VENKATESH PRASAD"
  },
  {
    id: 6,
    rating: 5,
    quote: "Switching to VRL Wires and Cables for our industrial CPVC and drainage installations cut our plumbing material costs by 14% while delivering superior pressure tolerance.",
    author: "ANITA SHARMA"
  }
];

export default function ClientReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const totalSlides = Math.ceil(REVIEWS.length / 3);

  const scrollToSlide = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % totalSlides;
    scrollToSlide(next);
  };

  const handlePrev = () => {
    const prev = (activeIndex - 1 + totalSlides) % totalSlides;
    scrollToSlide(prev);
  };

  // Sync scroll indicator on drag/swipe
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Exact reference style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-[#142B45] mb-3">
            WHAT OUR CLIENTS ARE SAYING
          </h2>
          {/* Centered red underline */}
          <div className="w-16 h-1 bg-[#D9231E] mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-gray-700 hover:text-[#D9231E] hover:scale-110 transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-gray-700 hover:text-[#D9231E] hover:scale-110 transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-6 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white p-8 rounded-xl border border-gray-100 shadow-[0_6px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 5 Golden Stars */}
                  <div className="flex gap-1 mb-5 text-[#FBBF24]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                    "{review.quote}"
                  </p>
                </div>

                {/* Author Name in Bold Uppercase */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-extrabold text-xs sm:text-sm text-black tracking-wider uppercase">
                    {review.author}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? 'w-6 bg-[#D9231E]'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

