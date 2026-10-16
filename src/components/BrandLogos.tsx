import React from 'react';

/**
 * High-fidelity brand logos for FortuneMakers, Amazon, Flipkart, and Meesho.
 * Supports light/dark color themes and scalable rendering.
 */

export interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color' | 'monochrome';
}

export const AmazonLogo: React.FC<LogoProps> = ({ className = 'h-7', variant = 'monochrome' }) => {
  const isLight = variant === 'light';
  const isColor = variant === 'color';
  const textColor = isColor ? '#181326' : isLight ? '#FFFFFF' : 'currentColor';
  const smileColor = isColor ? '#FF9900' : 'currentColor';

  return (
    <svg
      viewBox="0 0 116 32"
      className={className}
      aria-label="Amazon"
      role="img"
      fill="none"
    >
      {/* "amazon" wordmark */}
      <text
        x="1"
        y="21"
        fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.7"
        fill={textColor}
      >
        amazon
      </text>

      {/* Iconic curved smile arrow under 'a' through 'z' */}
      <path
        d="M6 25.5 C 24 33.5, 62 33.5, 86 24.5"
        fill="none"
        stroke={smileColor}
        strokeWidth="2.7"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M81.5 22.5 L 88.5 25 L 82.8 28.5 C 84.4 26.5, 84.4 24.5, 81.5 22.5 Z"
        fill={smileColor}
      />
    </svg>
  );
};

export const FlipkartLogo: React.FC<LogoProps> = ({ className = 'h-7', variant = 'monochrome' }) => {
  const maskId = React.useId().replace(/:/g, '');
  const isLight = variant === 'light';
  const isColor = variant === 'color';

  if (isColor) {
    return (
      <svg
        viewBox="0 0 128 32"
        className={className}
        aria-label="Flipkart"
        role="img"
        fill="none"
      >
        <g transform="translate(1, 3.5)">
          {/* Bag Handle */}
          <path
            d="M8.5 4 C 8.5 1.5, 15.5 1.5, 15.5 4"
            fill="none"
            stroke="#2874F0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Bag Body */}
          <rect x="1" y="4" width="22" height="21" rx="4" fill="#2874F0" />
          {/* Speed motion lines */}
          <path d="M-1 9.5 H-3 M-2 14.5 H-4.5" stroke="#FFE500" strokeWidth="1.6" strokeLinecap="round" />
          {/* 'f' inside bag */}
          <path
            d="M15.5 7.5 H11.5 C10 7.5 9.2 8.3 9.2 9.5 V11.5 H14 V13.5 H9.2 V20 H6.5 V7.5 H15.5 Z"
            fill="#FFE500"
          />
        </g>
        <text
          x="30"
          y="22"
          fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="21"
          fontWeight="800"
          fontStyle="italic"
          letterSpacing="-0.5"
          fill="#181326"
        >
          Flipkart
        </text>
        <circle cx="118" cy="12" r="2.5" fill="#FFE500" />
        <path d="M118 7.5 V16.5 M113.5 12 H122.5" stroke="#2874F0" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }

  const baseColor = isLight ? '#FFFFFF' : 'currentColor';

  return (
    <svg
      viewBox="0 0 128 32"
      className={className}
      aria-label="Flipkart"
      role="img"
      fill="none"
    >
      <defs>
        <mask id={`fk-mask-${maskId}`}>
          {/* White reveals everything */}
          <rect width="100%" height="100%" fill="#FFFFFF" />
          {/* Black cuts out the 'f' so background shows through */}
          <path
            d="M16.5 11 H12.5 C11 11 10.2 11.8 10.2 13 V15 H15 V17 H10.2 V23.5 H7.5 V11 H16.5 Z"
            fill="#000000"
          />
        </mask>
      </defs>

      {/* Bag & Handle with mask cut out */}
      <g mask={`url(#fk-mask-${maskId})`}>
        {/* Bag Handle */}
        <path
          d="M9.5 7.5 C 9.5 4.5, 16.5 4.5, 16.5 7.5"
          fill="none"
          stroke={baseColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Bag Body */}
        <rect x="2" y="7.5" width="22" height="21" rx="4" fill={baseColor} />
      </g>

      {/* Speed lines */}
      <path d="M0 13 H-1.8 M-0.8 18 H-3.2" stroke={baseColor} strokeWidth="1.5" strokeLinecap="round" />

      {/* Flipkart Wordmark */}
      <text
        x="31"
        y="23"
        fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="21"
        fontWeight="800"
        fontStyle="italic"
        letterSpacing="-0.5"
        fill={baseColor}
      >
        Flipkart
      </text>

      {/* Flipkart Spark Plus Accent */}
      <path
        d="M118 8.5 L119.2 11.5 L122.2 12.5 L119.2 13.5 L118 16.5 L116.8 13.5 L113.8 12.5 L116.8 11.5 Z"
        fill={baseColor}
        opacity="0.8"
      />
    </svg>
  );
};

export const MeeshoLogo: React.FC<LogoProps> = ({ className = 'h-7', variant = 'monochrome' }) => {
  const maskId = React.useId().replace(/:/g, '');
  const isLight = variant === 'light';
  const isColor = variant === 'color';

  if (isColor) {
    return (
      <svg
        viewBox="0 0 120 32"
        className={className}
        aria-label="Meesho"
        role="img"
        fill="none"
      >
        <g transform="translate(1, 4.5)">
          <rect x="0" y="0" width="23" height="23" rx="6" fill="#F43397" />
          <path
            d="M5.5 18 V9.5 C5.5 7.5 7.2 6.2 9 6.2 C10.8 6.2 11.8 7.5 11.8 9.5 V18"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M11.8 9.5 C11.8 7.5 13.5 6.2 15.2 6.2 C17 6.2 18 7.5 18 9.5 V18"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>
        <text
          x="30"
          y="22.5"
          fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="-0.6"
          fill="#181326"
        >
          meesho
        </text>
      </svg>
    );
  }

  const baseColor = isLight ? '#FFFFFF' : 'currentColor';

  return (
    <svg
      viewBox="0 0 120 32"
      className={className}
      aria-label="Meesho"
      role="img"
      fill="none"
    >
      <defs>
        <mask id={`meesho-mask-${maskId}`}>
          {/* White reveals everything */}
          <rect width="100%" height="100%" fill="#FFFFFF" />
          {/* Black cuts out the signature double-arch 'M' */}
          <path
            d="M6.5 22.5 V14 C6.5 12 8.2 10.5 10 10.5 C11.8 10.5 12.8 12 12.8 14 V22.5"
            fill="none"
            stroke="#000000"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M12.8 14 C12.8 12 14.5 10.5 16.2 10.5 C18 10.5 19 12 19 14 V22.5"
            fill="none"
            stroke="#000000"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </mask>
      </defs>

      {/* Rounded Squircle Emblem with transparent cutout double-arch 'M' */}
      <rect
        x="1"
        y="4.5"
        width="23"
        height="23"
        rx="6"
        fill={baseColor}
        mask={`url(#meesho-mask-${maskId})`}
      />

      {/* meesho wordmark */}
      <text
        x="30"
        y="22.5"
        fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.6"
        fill={baseColor}
      >
        meesho
      </text>
    </svg>
  );
};

export const FortuneMakersMark: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 36 36"
    className={className}
    aria-label="FortuneMakers Emblem"
    role="img"
    fill="none"
  >
    <defs>
      <linearGradient id="fm-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A58BFF" />
        <stop offset="50%" stopColor="#6545D9" />
        <stop offset="100%" stopColor="#2A1359" />
      </linearGradient>
      <linearGradient id="fm-arrow" x1="6" y1="30" x2="30" y2="6" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#EAE3FF" />
      </linearGradient>
    </defs>
    <rect width="36" height="36" rx="10" fill="url(#fm-grad)" />
    
    {/* Stylized Modern 'F' and 'M' Growth Arrow Vector */}
    <path
      d="M9 26 V11 H23 M9 18 H19"
      stroke="#FFFFFF"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 26 V17 L21.5 21.5 L26 17 V26"
      stroke="url(#fm-arrow)"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="26" cy="11" r="2.2" fill="#EAE3FF" />
  </svg>
);

export const FortuneMakersLogo: React.FC<{ className?: string; variant?: 'light' | 'dark' }> = ({
  className = 'h-8',
  variant = 'dark',
}) => {
  const isDark = variant === 'dark';
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <FortuneMakersMark className="w-8 h-8 shrink-0 shadow-md shadow-[#6545D9]/25" />
      <div className="flex flex-col leading-none">
        <span
          className={`font-black text-sm sm:text-base tracking-tight ${
            isDark ? 'text-white' : 'text-[#160D35]'
          }`}
        >
          FORTUNEMAKERS
        </span>
        <span
          className={`text-[9px] font-bold tracking-[0.2em] uppercase ${
            isDark ? 'text-[#A58BFF]' : 'text-[#6545D9]'
          }`}
        >
          SERVICES
        </span>
      </div>
    </div>
  );
};
