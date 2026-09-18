"use client";

import React, { useState } from "react";
import Link from "next/link";
import { alterEngineDestination, talkToUsDestination } from "@/content/navigation";

export function Hero() {
  const [value, setValue] = useState("Close the stock gap in store 14");

  return (
    <section className="hero relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ax-black pb-16 pt-[140px] text-ax-white lg:pb-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 0%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="container-ax relative grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-8">
        <div>
          <h1
            className="hero-reveal font-display text-balance text-[36px] font-medium uppercase leading-[1.02] tracking-[-0.02em] sm:text-[52px] lg:text-[72px] xl:text-[84px]"
            style={{ animationDelay: "0ms" }}
          >
            Tell it what needs to happen.
          </h1>

          <p
            className="hero-reveal mt-7 max-w-[440px] text-[18px] leading-[1.5] text-ax-muted"
            style={{ animationDelay: "80ms" }}
          >
            You describe the work. ALTERX handles the workflow.
          </p>

          <div className="hero-reveal mt-9" style={{ animationDelay: "140ms" }}>
            <Link
              href={talkToUsDestination}
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-ax-white"
            >
              Talk to us
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              <span className="relative -ml-1 block h-px w-0 bg-ax-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-6" />
            </Link>
          </div>
        </div>

        <div
          className="hero-reveal relative ml-auto w-full lg:w-[92%]"
          style={{ animationDelay: "120ms" }}
        >
          <div className="rounded-[4px] border border-ax-mint/15 bg-ax-bg-soft/50 p-6 backdrop-blur-md sm:p-7">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
              What needs to happen
            </p>
            <div className="mt-4 flex items-center gap-3 border-b border-ax-mint/15 pb-4">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-[16px] text-ax-white outline-none placeholder:text-ax-muted"
              />
              <Link
                href={alterEngineDestination}
                aria-label="Get started"
                className="flex-shrink-0 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
              >
                →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
