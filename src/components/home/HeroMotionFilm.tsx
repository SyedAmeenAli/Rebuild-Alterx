"use client";

import React from 'react';

export function HeroMotionFilm() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-ax-carbon">
      <video
        src="/hero_particles.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
    </div>
  );
}
