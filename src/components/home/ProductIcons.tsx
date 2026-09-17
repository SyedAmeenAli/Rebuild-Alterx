import React from 'react';

type IconProps = {
  isActive: boolean;
  className?: string;
  themeContext: 'light' | 'dark' | 'orange';
};

const commonSvgProps = {
  viewBox: "0 0 100 100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

export function EngineIcon({ isActive, className = "", themeContext }: IconProps) {
  const baseColor = themeContext === 'light' ? 'rgba(9,9,9,0.25)' : 'rgba(255,255,255,0.18)';
  const activeColor = 'var(--ax-orange-bright)';

  return (
    <svg {...commonSvgProps} className={`w-full h-full transition-all duration-[440ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-1 scale-110' : 'translate-y-0 scale-100'} ${className}`}>
      <g style={{ transformOrigin: '50% 50%', transform: 'scale(0.7) rotateX(55deg) rotateZ(45deg)' }}>
        {/* Base frames */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={10 + i * 14}
            y={10 + i * 14}
            width={44}
            height={44}
            fill={isActive && i === 4 ? 'rgba(255, 90, 31, 0.08)' : 'transparent'}
            stroke={isActive && i < 4 ? activeColor : baseColor}
            strokeWidth={2.5}
            className="transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ 
              transform: isActive ? `translateZ(${i * 12}px)` : `translateZ(0px)`,
              transitionDelay: isActive ? `${i * 60}ms` : '0ms',
              filter: isActive && i === 4 ? `drop-shadow(0 0 15px rgba(255,90,31,0.35))` : 'none'
            }}
          />
        ))}
        {/* Signal Path */}
        <path
          d="M 10 32 L 102 124"
          stroke={activeColor}
          strokeWidth={4}
          strokeDasharray="220"
          strokeDashoffset={isActive ? 0 : 220}
          className="transition-all duration-[750ms] ease-out"
        />
      </g>
    </svg>
  );
}

export function CognitiveIcon({ isActive, className = "", themeContext }: IconProps) {
  const baseColor = themeContext === 'light' ? 'rgba(9,9,9,0.25)' : 'rgba(255,255,255,0.18)';
  const activeColor = 'var(--ax-orange-bright)';
  
  return (
    <svg {...commonSvgProps} className={`w-full h-full transition-all duration-[440ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-1 scale-110' : 'translate-y-0 scale-100'} ${className}`}>
      <g style={{ transformOrigin: '50% 50%', transform: 'scale(0.7) rotateX(55deg) rotateZ(45deg)' }}>
        {/* Three planes */}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={12}
            y={12}
            width={64}
            height={64}
            fill={isActive && i === 1 ? 'rgba(255, 90, 31, 0.1)' : 'transparent'}
            stroke={isActive && i === 1 ? activeColor : baseColor}
            strokeWidth={2.5}
            className="transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ 
              transform: isActive ? `translateZ(${i * 24}px)` : `translateZ(${i * 8}px)`,
              transitionDelay: isActive ? `${i * 80}ms` : '0ms',
              filter: isActive && i === 1 ? `drop-shadow(0 0 15px rgba(255,90,31,0.35))` : 'none'
            }}
          />
        ))}
        {/* Inventory Markers */}
        <circle cx={44} cy={44} r={5} fill={isActive ? activeColor : baseColor} className="transition-colors duration-500" style={{ transform: 'translateZ(24px)' }} />
        <circle cx={66} cy={30} r={5} fill={baseColor} style={{ transform: 'translateZ(48px)' }} />
        <circle cx={30} cy={66} r={5} fill={baseColor} style={{ transform: 'translateZ(0px)' }} />
      </g>
    </svg>
  );
}

export function CustomWorkflowsIcon({ isActive, className = "", themeContext }: IconProps) {
  const baseColor = themeContext === 'light' ? 'rgba(9,9,9,0.25)' : 'rgba(255,255,255,0.18)';
  const activeColor = 'var(--ax-orange-bright)';

  return (
    <svg {...commonSvgProps} className={`w-full h-full transition-all duration-[440ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-1 scale-110' : 'translate-y-0 scale-100'} ${className}`}>
      <g style={{ transformOrigin: '50% 50%', transform: 'scale(0.7) rotateX(55deg) rotateZ(45deg)' }}>
        {/* Branching Structure */}
        <g className="transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: isActive ? 'translateZ(12px)' : 'translateZ(0)' }}>
          <path d="M 10 50 L 40 50" stroke={baseColor} strokeWidth={2.5} />
          <path d="M 40 50 L 40 20 L 70 20" stroke={baseColor} strokeWidth={2.5} />
          <path d="M 40 50 L 40 80 L 70 80" stroke={baseColor} strokeWidth={2.5} />
          <path d="M 70 20 L 96 20" stroke={baseColor} strokeWidth={2.5} />
          <path d="M 70 80 L 96 80" stroke={baseColor} strokeWidth={2.5} />
        </g>
        
        {/* Gates */}
        <rect x={68} y={12} width={5} height={16} fill={isActive ? activeColor : baseColor} className="transition-all duration-300" style={{ opacity: isActive ? 0 : 1, transform: isActive ? 'translateZ(12px)' : 'translateZ(0)' }} />
        <rect x={68} y={72} width={5} height={16} fill={baseColor} style={{ transform: isActive ? 'translateZ(12px)' : 'translateZ(0)' }} className="transition-transform duration-[600ms]" />

        {/* Signal Path */}
        <path 
          d="M 10 50 L 40 50 L 40 20 L 96 20" 
          stroke={activeColor} 
          strokeWidth={4} 
          strokeDasharray="160" 
          strokeDashoffset={isActive ? 0 : 160} 
          className="transition-all duration-[750ms] ease-in-out" 
          style={{ transform: isActive ? 'translateZ(12px)' : 'translateZ(0)', filter: isActive ? `drop-shadow(0 0 12px rgba(255,90,31,0.4))` : 'none' }}
        />
      </g>
    </svg>
  );
}

export function BuildIcon({ isActive, className = "", themeContext }: IconProps) {
  const baseColor = themeContext === 'light' ? 'rgba(9,9,9,0.25)' : 'rgba(255,255,255,0.18)';
  const activeColor = 'var(--ax-orange-bright)';

  return (
    <svg {...commonSvgProps} className={`w-full h-full transition-all duration-[440ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-1 scale-110' : 'translate-y-0 scale-100'} ${className}`}>
      <g style={{ transformOrigin: '50% 50%', transform: 'scale(0.7) rotateX(55deg) rotateZ(45deg)' }}>
        {/* Brackets */}
        <path d="M 32 16 L 16 16 L 16 84 L 32 84" stroke={baseColor} strokeWidth={3} className="transition-transform duration-[600ms]" style={{ transform: isActive ? 'translateX(-10px) translateZ(8px)' : 'none' }} />
        <path d="M 68 16 L 84 16 L 84 84 L 68 84" stroke={baseColor} strokeWidth={3} className="transition-transform duration-[600ms]" style={{ transform: isActive ? 'translateX(10px) translateZ(8px)' : 'none' }} />
        
        {/* Engine Module */}
        <rect x={38} y={32} width={24} height={36} stroke={baseColor} strokeWidth={2.5} fill={isActive ? 'rgba(255, 90, 31, 0.12)' : 'transparent'} className="transition-colors duration-[600ms]" style={{ filter: isActive ? `drop-shadow(0 0 15px rgba(255,90,31,0.3))` : 'none' }} />
        
        {/* Connectors */}
        <path d="M 0 50 L 38 50" stroke={baseColor} strokeWidth={2.5} />
        <path d="M 62 50 L 100 50" stroke={baseColor} strokeWidth={2.5} />

        {/* Signal */}
        <path d="M 0 50 L 38 50" stroke={activeColor} strokeWidth={4} strokeDasharray="40" strokeDashoffset={isActive ? 0 : 40} className="transition-all duration-[400ms]" />
        <rect x={44} y={44} width={12} height={12} fill={activeColor} className="transition-all duration-[400ms]" style={{ opacity: isActive ? 1 : 0, transitionDelay: '300ms', filter: isActive ? `drop-shadow(0 0 10px rgba(255,90,31,0.5))` : 'none' }} />
        <path d="M 62 50 L 100 50" stroke={activeColor} strokeWidth={4} strokeDasharray="40" strokeDashoffset={isActive ? 0 : 40} className="transition-all duration-[400ms]" style={{ transitionDelay: '600ms' }} />
      </g>
    </svg>
  );
}
