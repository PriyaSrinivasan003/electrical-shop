import React from 'react';

/**
 * VRL Logo Component:
 * - Perfectly tailored to the website's Cream + Navy (#142B45) + Safety Orange (#FF8E01) theme.
 * - Displays "VRL" in bold geometric industrial letterforms with the distinctive angled 'R' kick.
 * - Displays "WIRES & CABLES" in clean, tracked, bold industrial typography.
 * - Supports light (for white / cream header) and dark (for dark navy footer) modes seamlessly.
 */
export default function VRLLogo({ variant = "light", className = "h-11 sm:h-12 w-auto" }) {
  const isDark = variant === "dark";

  return (
    <svg 
      viewBox="0 0 320 88" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="VRL Wires & Cables Logo"
    >
      <defs>
        {/* Safety Orange to Electric Gold Gradient matching the site theme */}
        <linearGradient id="vrlGoldOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA600" />
          <stop offset="50%" stopColor="#FF8E01" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>

        <linearGradient id="navyShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#142B45" />
        </linearGradient>

        <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#FF8E01" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Group: VRL Typography */}
      <g filter="url(#subtleGlow)">
        {/* Letter 'V' */}
        <path
          d="M 12 10 L 38 10 L 58 56 L 78 10 L 104 10 L 68 70 L 48 70 Z"
          fill="url(#vrlGoldOrange)"
        />

        {/* Letter 'R' with dynamic electrical cut and sharp forward stroke */}
        <path
          d="M 112 10 L 166 10 C 182 10 193 18 193 32 C 193 42 185 49 173 52 L 196 70 L 167 70 L 148 53 L 138 53 L 138 70 L 112 70 Z M 138 24 L 138 40 L 160 40 C 166 40 170 37 170 32 C 170 27 166 24 160 24 Z"
          fill="url(#vrlGoldOrange)"
        />

        {/* Letter 'L' */}
        <path
          d="M 204 10 L 230 10 L 230 54 L 278 54 L 278 70 L 204 70 Z"
          fill="url(#vrlGoldOrange)"
        />

        {/* Registered Trademark ® Symbol */}
        <circle 
          cx="292" 
          cy="18" 
          r="8" 
          stroke="url(#vrlGoldOrange)" 
          strokeWidth="1.8" 
          fill="none" 
        />
        <text 
          x="292" 
          y="21.5" 
          textAnchor="middle" 
          fill="url(#vrlGoldOrange)" 
          fontSize="9" 
          fontWeight="900" 
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          R
        </text>
      </g>

      {/* Subtitle: "WIRES & CABLES" */}
      <text
        x="152"
        y="84"
        textAnchor="middle"
        fill={isDark ? "#FFFFFF" : "#142B45"}
        fontSize="12"
        fontWeight="900"
        letterSpacing="0.32em"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      >
        WIRES &amp; CABLES
      </text>

      {/* Subtle Electric Accent Dots */}
      <circle cx="16" cy="81" r="2" fill="#FF8E01" />
      <circle cx="288" cy="81" r="2" fill="#FF8E01" />
    </svg>
  );
}

