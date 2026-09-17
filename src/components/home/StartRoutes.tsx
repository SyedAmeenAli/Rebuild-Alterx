"use client";

import React from 'react';
import Link from 'next/link';

const START_ROUTES = [
  {
    title: 'Explore Alter Engine',
    description: 'Understand how an objective becomes planned and reviewable work.',
    cta: 'Explore Alter Engine',
    href: '/engine'
  },
  {
    title: 'Explore Cognitive AI',
    description: 'See how AlterX applies this approach to inventory operations.',
    cta: 'Explore Cognitive AI',
    href: '/cognitive-ai'
  },
  {
    title: 'Discuss a custom workflow',
    description: 'Plan a workflow around your systems, decisions and operating process.',
    cta: 'Talk to AlterX',
    href: '/request-access'
  },
  {
    title: 'Build with AlterX',
    description: 'Explore bringing Alter Engine workflows into a product or internal environment.',
    cta: 'Request developer access',
    href: '/request-access?type=developer'
  }
];

export function StartRoutes() {
  return (
    <section className="w-full bg-ax-black py-32 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <h2 className="text-[clamp(34px,4vw,48px)] font-medium leading-[1] text-ax-warm-white max-w-2xl">
            Start with the path that fits the work.
          </h2>
        </div>

        <div className="flex flex-col border-t border-[rgba(255,255,255,0.1)]">
          {START_ROUTES.map((route, idx) => (
            <Link
              key={idx}
              href={route.href}
              className="group block relative border-b border-[rgba(255,255,255,0.1)] py-10 lg:py-12 outline-none focus-visible:bg-ax-carbon overflow-hidden"
            >
              {/* Registration line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-ax-orange-core transform scale-y-0 origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-y-100 group-hover:origin-top" />
              
              {/* Refinement 09: Gradient hover indicator */}
              <div 
                className="absolute inset-y-0 left-0 w-[300px] pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-20"
                style={{ background: 'var(--ax-gradient-edge)' }}
              />
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pl-6 md:pl-10 pr-4 relative z-10">
                
                <div className="w-full lg:w-1/2 flex flex-col mb-6 lg:mb-0 transform transition-transform duration-300 ease-out group-hover:translate-x-[2px]">
                  <h3 className="text-2xl lg:text-3xl font-medium text-ax-warm-white mb-3 transition-colors duration-300">
                    {route.title}
                  </h3>
                  <p className="text-lg text-white/70 transition-colors duration-300">
                    {route.description}
                  </p>
                </div>

                <div className="flex items-center text-ax-orange-core font-semibold text-lg transform transition-transform duration-300 ease-out group-hover:translate-x-[2px]">
                  <span>{route.cta}</span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="ml-3 transform transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                  </svg>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
