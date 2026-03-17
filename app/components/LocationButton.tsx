'use client';

import React from 'react';

const LocationButton: React.FC = () => {
  return (
    <a 
      href="https://share.google/bEm11VbYgwYXW1kbs" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-46 right-6 md:right-10 z-[100] bg-white text-gold p-4 rounded-full shadow-2xl hover:bg-gold hover:text-white transition-all duration-300 group cursor-pointer border border-gold/20"
      aria-label="Google Haritalar'da konumumuzu görün"
    >
      <svg 
        className="w-8 h-8 fill-current" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-charcoal text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl border-l-2 border-gold hidden md:block">
        Yol Tarifi Al
      </span>
    </a>
  );
};

export default LocationButton;
