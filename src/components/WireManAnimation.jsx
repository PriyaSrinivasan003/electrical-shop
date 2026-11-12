import React from 'react';

/**
 * WireManAnimation Component
 * 
 * Uses the exact 3D electrician mascot holding wire cables provided by the user.
 * Seamless infinite walking loop:
 * - Walks from left to right along the bottom of the screen.
 * - Flips direction smoothly and walks back right to left.
 * - Adds natural walking bob, body sway, and ground contact shadow.
 * - Positioned with `pointer-events-none` so it never blocks any user interactions or website content.
 */
export default function WireManAnimation() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-40 sm:h-48 z-40 overflow-hidden select-none">
      
      {/* Walking Patrol Track */}
      <div className="wireman-patrol-track w-full h-full relative">
        <div className="wireman-walker absolute bottom-1 left-0 w-32 sm:w-36 md:w-44 h-36 sm:h-40 md:h-48 flex flex-col items-center justify-end">
          
          {/* Dynamic Ground Shadow */}
          <div className="wireman-shadow w-24 sm:w-28 h-4 bg-[#0B1929]/30 rounded-full blur-[2px] mb-[-6px]" />

          {/* User's Exact Electrician Mascot Holding Wire Cables */}
          <div className="wireman-body-bounce w-full h-full relative flex items-center justify-center">
            <img
              src="/images/wireman-electrician-transparent.png"
              alt="YaaWires Electrician Mascot"
              className="max-h-full max-w-full object-contain drop-shadow-[0_10px_20px_rgba(20,43,69,0.35)]"
              loading="eager"
            />
          </div>

        </div>
      </div>

      {/* Embedded High-Performance Natural Keyframe Animations */}
      <style>{`
        /* 1. Track Patrol Animation: Walks Left to Right, flips, and walks back smoothly */
        @keyframes wiremanPatrol {
          0% {
            transform: translateX(-160px) scaleX(1);
          }
          48% {
            transform: translateX(calc(100vw - 20px)) scaleX(1);
          }
          50% {
            transform: translateX(calc(100vw - 20px)) scaleX(-1);
          }
          98% {
            transform: translateX(-160px) scaleX(-1);
          }
          100% {
            transform: translateX(-160px) scaleX(1);
          }
        }

        .wireman-patrol-track {
          animation: wiremanPatrol 26s linear infinite;
          will-change: transform;
        }

        /* 2. Natural Walking Stride: vertical bobbing and gentle stride sway */
        @keyframes wiremanGait {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-9px) rotate(2.5deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(-9px) rotate(-2.5deg);
          }
        }

        .wireman-body-bounce {
          animation: wiremanGait 0.75s ease-in-out infinite;
          transform-origin: bottom center;
        }

        /* 3. Shadow pulse in sync with the walking stride */
        @keyframes wiremanShadowPulse {
          0%, 50%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }
          25%, 75% {
            transform: scale(0.8);
            opacity: 0.18;
          }
        }

        .wireman-shadow {
          animation: wiremanShadowPulse 0.75s ease-in-out infinite;
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
