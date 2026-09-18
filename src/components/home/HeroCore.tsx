"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { alterEngineDestination, talkToUsDestination } from "@/content/navigation";

export function HeroCore() {
  const coreRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0.32, y: 0.28 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = coreRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: Math.min(1, Math.max(0, px)), y: Math.min(1, Math.max(0, py)) });
  };

  return (
    <section className="hero relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ax-black pb-16 pt-[120px] text-ax-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 70% 20%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="container-ax relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
        <div>
          <h1 className="hero-reveal font-display text-balance text-[38px] font-medium uppercase leading-[1.02] tracking-[-0.02em] sm:text-[54px] lg:text-[68px]">
            Tell it what needs to happen.
          </h1>
          <p className="hero-reveal mt-7 max-w-[440px] text-[17px] leading-[1.55] text-ax-muted" style={{ animationDelay: "80ms" }}>
            ALTERX turns plain-language intent into executed, verified work across the systems
            your business already uses.
          </p>
          <div className="hero-reveal mt-9 flex flex-wrap items-center gap-x-8 gap-y-3" style={{ animationDelay: "140ms" }}>
            <Link href={talkToUsDestination} className="group inline-flex items-center gap-2 text-[15px] font-medium text-ax-white">
              Talk to us
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <a href="#engine" className="text-[15px] font-medium text-ax-muted transition-colors hover:text-ax-white">
              Explore the system
            </a>
          </div>
        </div>

        <div
          ref={coreRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0.32, y: 0.28 })}
          className="hero-reveal relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[360px] sm:w-[360px]"
          style={{ animationDelay: "120ms" }}
        >
          <div
            className="alterx-core h-[76%] w-[76%]"
            style={{
              ["--core-x" as string]: `${tilt.x * 100}%`,
              ["--core-y" as string]: `${tilt.y * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
