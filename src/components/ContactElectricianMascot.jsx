import React from 'react';
import { motion } from 'framer-motion';

/**
 * ContactElectricianMascot:
 * - 2D Vector Electrician Mascot optimized for Contact Page interactions
 * - Holds a sleek smartphone in left hand
 * - Responds dynamically with waving, pointing towards the submit button, and thumbs-up on success
 * - Safety helmet, navy blue workwear, leather belt with tools
 */
export default function ContactElectricianMascot({
  reaction = 'idle', // 'idle' | 'pointing' | 'thumbsup' | 'waving'
  className = ''
}) {
  return (
    <div className={`relative select-none pointer-events-none flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 240 320"
        className="w-full h-full drop-shadow-2xl overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="contactHelmet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE033" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="contactUniform" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A5F" />
            <stop offset="70%" stopColor="#142B45" />
            <stop offset="100%" stopColor="#0B1929" />
          </linearGradient>

          <linearGradient id="contactOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8E01" />
            <stop offset="100%" stopColor="#FFAA33" />
          </linearGradient>

          <linearGradient id="contactSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDDFBA" />
            <stop offset="100%" stopColor="#F5B984" />
          </linearGradient>

          <filter id="glowContact" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ground Shadow */}
        <ellipse cx="115" cy="305" rx="55" ry="10" fill="#0B1929" fillOpacity="0.25" />

        {/* Legs & Boots */}
        <g>
          {/* Left Leg */}
          <path d="M88 205 L96 270 L90 295 L110 295 L110 270 L106 205 Z" fill="url(#contactUniform)" />
          <rect x="91" y="255" width="18" height="5" rx="2" fill="url(#contactOrange)" />
          <path d="M86 293 L112 293 L114 305 L78 305 L80 297 Z" fill="#1E293B" />

          {/* Right Leg */}
          <path d="M118 205 L126 270 L120 295 L140 295 L140 270 L134 205 Z" fill="url(#contactUniform)" />
          <rect x="121" y="255" width="18" height="5" rx="2" fill="url(#contactOrange)" />
          <path d="M116 293 L142 293 L144 305 L108 305 L110 297 Z" fill="#334155" />
        </g>

        {/* Torso & Uniform */}
        <g>
          <path d="M76 130 L150 130 L144 212 L82 212 Z" fill="url(#contactUniform)" />
          {/* Reflective Stripes */}
          <path d="M86 130 L94 212 L102 212 L94 130 Z" fill="url(#contactOrange)" />
          <path d="M140 130 L132 212 L124 212 L132 130 Z" fill="url(#contactOrange)" />
          <rect x="80" y="178" width="66" height="6" fill="#CBD5E1" opacity="0.9" />
          <rect x="80" y="184" width="66" height="4" fill="url(#contactOrange)" />

          {/* Collar */}
          <path d="M102 130 L113 148 L124 130 Z" fill="url(#contactSkin)" />

          {/* Badge */}
          <rect x="86" y="145" width="14" height="12" rx="2" fill="#0F172A" />
          <text x="88" y="154" fontSize="5" fontWeight="bold" fill="#FF8E01" fontFamily="sans-serif">VRL</text>

          {/* Leather Tool Belt */}
          <rect x="76" y="204" width="74" height="11" rx="2" fill="#78350F" />
          <rect x="105" y="202" width="16" height="15" rx="3" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
          <rect x="110" y="206" width="6" height="7" rx="1" fill="#78350F" />
          {/* Tools */}
          <rect x="82" y="212" width="5" height="14" rx="1.5" fill="#EAB308" />
          <path d="M136 212 L140 230 L143 230 L142 212" fill="#EF4444" />
        </g>

        {/* Head, Helmet & Cheerful Face */}
        <g>
          <rect x="105" y="115" width="16" height="18" fill="url(#contactSkin)" rx="3" />
          <circle cx="113" cy="98" r="24" fill="url(#contactSkin)" />

          {/* Ears */}
          <ellipse cx="89" cy="99" rx="3.5" ry="5.5" fill="url(#contactSkin)" />
          <ellipse cx="137" cy="99" rx="3.5" ry="5.5" fill="url(#contactSkin)" />

          {/* Eyes with friendly sparkle */}
          <ellipse cx="106" cy="95" rx="3.5" ry="4.5" fill="#0F172A" />
          <circle cx="107" cy="93" r="1.5" fill="#FFFFFF" />
          <ellipse cx="124" cy="95" rx="3.5" ry="4.5" fill="#0F172A" />
          <circle cx="125" cy="93" r="1.5" fill="#FFFFFF" />

          {/* Cheerful Smile */}
          <path d="M106 106 Q113 115 122 106" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" fill="#DC2626" />
          <path d="M108 106 Q113 110 120 106" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <circle cx="100" cy="103" r="3.5" fill="#F87171" opacity="0.45" />
          <circle cx="128" cy="103" r="3.5" fill="#F87171" opacity="0.45" />

          {/* Yellow Safety Helmet */}
          <path d="M86 87 Q113 71 140 87 L144 92 Q113 79 82 92 Z" fill="#B45309" />
          <path d="M84 87 C84 55 96 45 113 45 C130 45 142 55 142 87 Z" fill="url(#contactHelmet)" />
          <path d="M109 45 C109 43 117 43 117 45 L116 85 C116 85 110 85 110 85 Z" fill="#FDE047" />
          <path d="M78 89 Q113 81 148 89 C150 91 147 95 143 94 Q113 85 83 94 C79 95 76 91 78 89 Z" fill="#F59E0B" />
          <rect x="108" y="77" width="10" height="7" rx="2" fill="#1E293B" />
          <circle cx="113" cy="80.5" r="3" fill="#38BDF8" />
        </g>

        {/* LEFT ARM: Holds Smartphone */}
        <g transform="rotate(-25 78 135)">
          <path d="M72 135 L56 175 L62 205 L74 202 L70 175 L82 136 Z" fill="url(#contactUniform)" />
          <rect x="58" y="166" width="14" height="4" rx="1.5" fill="url(#contactOrange)" />
          <circle cx="68" cy="210" r="8" fill="url(#contactSkin)" />

          {/* The Smartphone held in hand */}
          <g transform="translate(56, 186) rotate(15)">
            <rect x="0" y="0" width="22" height="38" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" filter="url(#glowContact)" />
            {/* Screen */}
            <rect x="2" y="3" width="18" height="32" rx="2" fill="#1E293B" />
            {/* Message Bubble on Screen */}
            <rect x="4" y="6" width="12" height="6" rx="2" fill="#FF8E01" />
            <rect x="6" y="14" width="12" height="6" rx="2" fill="#38BDF8" />
            <circle cx="11" cy="30" r="1.5" fill="#64748B" />
          </g>
        </g>

        {/* RIGHT ARM: Dynamic based on Reaction */}
        {reaction === 'thumbsup' ? (
          // Thumbs Up Gesture
          <g transform="translate(142, 135) rotate(-45)">
            <path d="M0 0 L16 40 L10 70 L-2 67 L2 40 L-10 1 Z" fill="url(#contactUniform)" />
            <rect x="4" y="31" width="14" height="4" rx="1.5" fill="url(#contactOrange)" />
            <circle cx="6" cy="74" r="8" fill="url(#contactSkin)" />
            {/* Thumbs up fist */}
            <g transform="translate(4, 68) rotate(45)">
              <rect x="0" y="-8" width="5" height="12" rx="2.5" fill="url(#contactSkin)" />
              <circle cx="2" cy="0" r="6" fill="url(#contactSkin)" />
            </g>
          </g>
        ) : reaction === 'pointing' ? (
          // Pointing towards Form
          <g transform="translate(142, 135) rotate(-20)">
            <path d="M0 0 L25 35 L45 35 L45 47 L20 47 L-10 1 Z" fill="url(#contactUniform)" />
            <rect x="18" y="27" width="14" height="4" rx="1.5" fill="url(#contactOrange)" />
            <circle cx="48" cy="41" r="8" fill="url(#contactSkin)" />
            {/* Pointing index finger */}
            <rect x="48" y="38" width="14" height="5" rx="2.5" fill="url(#contactSkin)" />
          </g>
        ) : reaction === 'waving' ? (
          // Cheerful High Wave
          <g transform="translate(142, 135) rotate(-135)">
            <path d="M0 0 L16 40 L10 70 L-2 67 L2 40 L-10 1 Z" fill="url(#contactUniform)" />
            <rect x="4" y="31" width="14" height="4" rx="1.5" fill="url(#contactOrange)" />
            <circle cx="6" cy="74" r="8" fill="url(#contactSkin)" />
            {/* Open Waving Hand */}
            <g transform="translate(2, 68)">
              <rect x="-4" y="-8" width="3.5" height="10" rx="1.7" fill="url(#contactSkin)" />
              <rect x="1" y="-12" width="3.5" height="14" rx="1.7" fill="url(#contactSkin)" />
              <rect x="6" y="-10" width="3.5" height="12" rx="1.7" fill="url(#contactSkin)" />
              <rect x="11" y="-5" width="3.2" height="9" rx="1.6" fill="url(#contactSkin)" />
            </g>
          </g>
        ) : (
          // Idle resting arm
          <g transform="translate(142, 135)">
            <path d="M0 0 L16 40 L10 70 L-2 67 L2 40 L-10 1 Z" fill="url(#contactUniform)" />
            <rect x="4" y="31" width="14" height="4" rx="1.5" fill="url(#contactOrange)" />
            <circle cx="6" cy="74" r="8" fill="url(#contactSkin)" />
          </g>
        )}
      </svg>
    </div>
  );
}

