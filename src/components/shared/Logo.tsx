import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 120 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AlterX Logo"
    >
      <text x="0" y="24" fontFamily="var(--font-hanken)" fontSize="24" fontWeight="600" fill="currentColor" letterSpacing="-0.02em">
        AlterX
      </text>
    </svg>
  );
}
