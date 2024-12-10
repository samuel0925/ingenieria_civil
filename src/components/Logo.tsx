import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main triangle shape */}
        <path 
          d="M10 80L50 20L90 80H10Z" 
          fill="#4A4A4A"
          className="text-secondary"
        />
        {/* Gold accent line */}
        <path 
          d="M40 80L50 60L60 80H40Z" 
          fill="#FFB800"
          className="text-primary"
        />
        {/* Inner lines */}
        <path 
          d="M30 80L50 40L70 80" 
          stroke="#4A4A4A" 
          strokeWidth="2"
        />
      </svg>
      <span className="ml-2 text-lg font-bold text-secondary">Ingeniería y Alturas S.A.S</span>
    </div>
  );
}