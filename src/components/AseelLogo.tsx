import React from 'react';

interface AseelLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const AseelLogo: React.FC<AseelLogoProps> = ({
  className = "w-10 h-10",
  size,
  showText = true,
}) => {
  return (
    <svg
      viewBox="0 0 600 600"
      className={`${className} transition-transform duration-200`}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Aseel Alharbi Logo - Physics & Energy Technologies"
    >
      <defs>
        {/* Background gradient */}
        <radialGradient id="aseelLogoBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0a1640" />
          <stop offset="60%" stopColor="#050b24" />
          <stop offset="100%" stopColor="#030614" />
        </radialGradient>

        {/* Glow Filters */}
        <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rounded Container Card */}
      <rect width="600" height="600" rx="48" fill="url(#aseelLogoBg)" />
      <rect width="600" height="600" rx="48" stroke="#3478ff" strokeWidth="3" strokeOpacity="0.3" fill="none" />

      {/* ---------------- 1. TOP-LEFT: ATOM ORBITALS (Physics) ---------------- */}
      <g filter="url(#cyanGlow)" transform="translate(40, 40)">
        {/* Orbital 1 */}
        <ellipse cx="90" cy="90" rx="65" ry="24" transform="rotate(30 90 90)" stroke="#38bdf8" strokeWidth="4.5" fill="none" strokeOpacity="0.85" />
        {/* Orbital 2 */}
        <ellipse cx="90" cy="90" rx="65" ry="24" transform="rotate(-30 90 90)" stroke="#38bdf8" strokeWidth="4.5" fill="none" strokeOpacity="0.85" />
        {/* Orbital 3 (Vertical) */}
        <ellipse cx="90" cy="90" rx="24" ry="65" stroke="#38bdf8" strokeWidth="4.5" fill="none" strokeOpacity="0.85" />
        
        {/* Electrons */}
        <circle cx="36" cy="60" r="5" fill="#67e8f9" />
        <circle cx="145" cy="120" r="5" fill="#67e8f9" />
        <circle cx="90" cy="25" r="5" fill="#67e8f9" />

        {/* Nucleus */}
        <circle cx="90" cy="90" r="14" fill="#3b82f6" />
        <circle cx="87" cy="87" r="5" fill="#93c5fd" />
      </g>

      {/* ---------------- 2. TOP-RIGHT: SUN & SOLAR PANEL (Solar Energy) ---------------- */}
      <g filter="url(#goldGlow)" transform="translate(420, 40)">
        {/* Sun */}
        <circle cx="50" cy="40" r="16" stroke="#fbbf24" strokeWidth="3.5" fill="#fef08a" fillOpacity="0.2" />
        {/* Sun rays */}
        <line x1="50" y1="14" x2="50" y2="20" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="50" y1="60" x2="50" y2="66" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="24" y1="40" x2="30" y2="40" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="70" y1="40" x2="76" y2="40" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="32" y1="22" x2="36" y2="26" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <line x1="64" y1="54" x2="68" y2="58" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="58" x2="36" y2="54" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <line x1="64" y1="26" x2="68" y2="22" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />

        {/* Solar Panel (Angled grid) */}
        <g transform="translate(10, 60)">
          {/* Panel Base stand */}
          <path d="M50 78 L50 94 M36 94 L64 94" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
          {/* Panel Frame (Perspective polygon) */}
          <polygon points="16,10 88,14 78,76 4,72" stroke="#38bdf8" strokeWidth="3.5" fill="#07183d" fillOpacity="0.6" strokeLinejoin="round" />
          {/* Grid lines horizontal */}
          <line x1="12" y1="31" x2="84" y2="35" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.8" />
          <line x1="8" y1="52" x2="81" y2="56" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.8" />
          {/* Grid lines vertical */}
          <line x1="40" y1="12" x2="28" y2="74" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.8" />
          <line x1="64" y1="13" x2="52" y2="75" stroke="#fbbf24" strokeWidth="2" strokeOpacity="0.8" />
        </g>
      </g>

      {/* ---------------- 3. CENTER: TYPOGRAPHY (Aseel Alharbi) ---------------- */}
      {showText && (
        <g>
          <text
            x="300"
            y="320"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="'Cinzel', 'Playfair Display', 'Times New Roman', serif"
            fontSize="54"
            fontWeight="500"
            letterSpacing="1.5"
          >
            Aseel Alharbi
          </text>
        </g>
      )}

      {/* ---------------- 4. BOTTOM-LEFT: WIND TURBINE & LEAF (Clean Energy) ---------------- */}
      <g filter="url(#cyanGlow)" transform="translate(30, 360)">
        {/* Ground line */}
        <line x1="15" y1="195" x2="135" y2="195" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
        
        {/* Tower */}
        <polygon points="56,80 62,80 66,195 52,195" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Rotor Hub */}
        <circle cx="59" cy="80" r="5" fill="#ffffff" />

        {/* 3 Blades */}
        {/* Blade 1 (Top) */}
        <path d="M59 80 Q56 35 59 10 Q62 35 59 80" stroke="#38bdf8" strokeWidth="3" fill="#38bdf8" fillOpacity="0.3" />
        {/* Blade 2 (Bottom Left) */}
        <path d="M59 80 Q30 100 12 120 Q38 112 59 80" stroke="#38bdf8" strokeWidth="3" fill="#38bdf8" fillOpacity="0.3" />
        {/* Blade 3 (Bottom Right) */}
        <path d="M59 80 Q88 100 106 120 Q80 112 59 80" stroke="#38bdf8" strokeWidth="3" fill="#38bdf8" fillOpacity="0.3" />

        {/* Plant leaf sprout at base */}
        <g filter="url(#greenGlow)" transform="translate(75, 140)">
          <path d="M12 55 Q16 35 32 25 Q35 45 12 55 Z" stroke="#4ade80" strokeWidth="3" fill="#22c55e" fillOpacity="0.2" />
          <path d="M12 55 Q28 60 44 48 Q32 35 12 55 Z" stroke="#4ade80" strokeWidth="3" fill="#22c55e" fillOpacity="0.2" />
          <path d="M12 55 Q10 40 18 20" stroke="#4ade80" strokeWidth="2.5" fill="none" />
        </g>
      </g>

      {/* ---------------- 5. BOTTOM-RIGHT: LIGHT BULB, LEAF & E=mc² ---------------- */}
      <g transform="translate(370, 370)">
        {/* E = mc² Formula */}
        <text
          x="20"
          y="150"
          fill="#60a5fa"
          fontFamily="'Caveat', 'Comic Sans MS', cursive, sans-serif"
          fontSize="36"
          fontWeight="bold"
          transform="rotate(-10 20 150)"
          filter="url(#cyanGlow)"
        >
          E = mc²
        </text>

        {/* Lightbulb */}
        <g filter="url(#goldGlow)" transform="translate(100, 20)">
          {/* Bulb Outline */}
          <path
            d="M50 15 C26 15 12 32 12 52 C12 68 24 80 28 95 L28 110 L72 110 L72 95 C76 80 88 68 88 52 C88 32 74 15 50 15 Z"
            stroke="#facc15"
            strokeWidth="3.5"
            fill="#fef08a"
            fillOpacity="0.1"
            strokeLinejoin="round"
          >
          </path>
          
          {/* Screw Base */}
          <path d="M30 110 L70 110 M32 118 L68 118 M36 126 L64 126 M40 134 L60 134" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />

          {/* Plant Leaves inside Bulb */}
          <g filter="url(#greenGlow)" transform="translate(30, 42)">
            <path d="M20 45 Q20 25 10 12 Q5 28 20 45 Z" stroke="#4ade80" strokeWidth="2.5" fill="#22c55e" fillOpacity="0.25" />
            <path d="M20 45 Q22 24 35 15 Q34 32 20 45 Z" stroke="#4ade80" strokeWidth="2.5" fill="#22c55e" fillOpacity="0.25" />
            <path d="M20 45 L20 18" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
};
