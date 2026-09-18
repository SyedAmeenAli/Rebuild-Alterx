"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { talkToUsDestination } from "@/content/navigation";

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
          <p className="hero-reveal text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            ALTERX
          </p>
          <h1 className="hero-reveal mt-5 font-display text-balance text-[42px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[60px] lg:text-[72px]" style={{ animationDelay: "40ms" }}>
            Tell it
            <br />
            what needs
            <br />
            to happen.
          </h1>
          <p className="hero-reveal mt-7 max-w-[420px] text-[17px] leading-[1.55] text-ax-muted" style={{ animationDelay: "80ms" }}>
            You describe the work. ALTERX handles the workflow.
          </p>
          <div className="hero-reveal mt-9" style={{ animationDelay: "140ms" }}>
            <Link href={talkToUsDestination} className="group inline-flex items-center gap-2 text-[15px] font-medium text-ax-white">
              Talk to us
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div
          ref={coreRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0.32, y: 0.28 })}
          className="hero-reveal relative mx-auto flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px]"
          style={{ animationDelay: "120ms" }}
        >
          <svg
            className="absolute inset-0 h-0 w-0"
            aria-hidden="true"
            focusable="false"
          >
            <filter id="alterx-goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              />
            </filter>
          </svg>

          <div
            className="alterx-core-goo relative h-[78%] w-[78%]"
            style={{ filter: "url(#alterx-goo)" }}
          >
            {[
              { top: "0%", left: "22%" },
              { top: "22%", left: "0%" },
              { top: "22%", left: "44%" },
              { top: "44%", left: "22%" },
            ].map((pos, i) => (
              <div
                key={i}
                className="alterx-core-petal absolute h-[56%] w-[56%]"
                style={{
                  top: pos.top,
                  left: pos.left,
                  ["--core-x" as string]: `${tilt.x * 100}%`,
                  ["--core-y" as string]: `${tilt.y * 100}%`,
                  animationDelay: `${i * 1.4}s`,
                }}
              />
            ))}
          </div>

          <div className="alterx-core-hole pointer-events-none absolute left-1/2 top-1/2 h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        </div>
      </div>
    </section>
  );
}
