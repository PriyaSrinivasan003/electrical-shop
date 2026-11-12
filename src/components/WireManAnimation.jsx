import React, { useRef, useEffect } from 'react';

/**
 * WireManAnimation Component
 * 
 * - Increases the size of the animated electrician character so it stands out cleanly.
 * - Continuous infinite seamless walk loop:
 *   - Walks across the screen from left to right.
 *   - Turns around and walks back right to left.
 *   - Video video element explicitly handles loop & playback guarantee.
 * - pointer-events-none ensures it never blocks clicks or website interactivity.
 */
export default function WireManAnimation() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video is playing and looping smoothly
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: muted video guaranteed to play
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-56 sm:h-64 md:h-72 z-40 overflow-hidden select-none">
      
      {/* Walking Patrol Track */}
      <div className="wireman-patrol-track w-full h-full relative">
        <div className="wireman-walker absolute bottom-1 left-0 w-44 sm:w-52 md:w-64 h-52 sm:h-60 md:h-68 flex flex-col items-center justify-end">

          {/* Dynamic Ground Shadow scaled to new character size */}
          <div className="wireman-shadow w-32 sm:w-40 h-5 bg-[#0B1929]/35 rounded-full blur-[3px] mb-[-4px]" />

          {/* User's Exact Animated Video Electrician Mascot with Background Removed */}
          <div className="wireman-body-bounce w-full h-full relative flex items-center justify-center">
            {/* Preferred High-Efficiency Transparent Video (WebM VP9 Alpha) */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(20,43,69,0.4)]"
            >
              <source src="/electrician-walking-nobg.webm" type="video/webm" />
              {/* Universal Fallback Transparent Animated GIF */}
              <img
                src="/electrician-walking-nobg.gif"
                alt="VRL Wires and Cables Electrician Mascot"
                className="w-full h-full object-contain"
              />
            </video>
          </div>

        </div>
      </div>

      {/* Embedded High-Performance Natural Keyframe Animations */}
      <style>{`
        /* 1. Track Patrol Animation: Walks Left to Right, flips, and walks back in a continuous seamless loop */
        @keyframes wiremanPatrol {
          0% {
            transform: translateX(-240px) scaleX(1);
          }
          48% {
            transform: translateX(calc(100vw - 30px)) scaleX(1);
          }
          50% {
            transform: translateX(calc(100vw - 30px)) scaleX(-1);
          }
          98% {
            transform: translateX(-240px) scaleX(-1);
          }
          100% {
            transform: translateX(-240px) scaleX(1);
          }
        }

        .wireman-patrol-track {
          animation: wiremanPatrol 28s linear infinite;
          will-change: transform;
        }

        /* 2. Soft walking pace bounce complementing the video walk cycle */
        @keyframes wiremanGait {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .wireman-body-bounce {
          animation: wiremanGait 0.5s ease-in-out infinite;
          transform-origin: bottom center;
        }

        /* 3. Shadow pulse in sync with the walking stride */
        @keyframes wiremanShadowPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(0.85);
            opacity: 0.2;
          }
        }

        .wireman-shadow {
          animation: wiremanShadowPulse 0.5s ease-in-out infinite;
        }

        /* Respect accessibility reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .wireman-patrol-track,
          .wireman-body-bounce,
          .wireman-shadow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
