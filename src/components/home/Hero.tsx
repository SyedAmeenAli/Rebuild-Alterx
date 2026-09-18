"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { alterEngineDestination } from '@/content/navigation';

const EXAMPLE_PROMPTS = ["Automate invoices", "Onboard a new vendor", "Analyze sales data"];

export function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section className="hero relative flex flex-col items-center overflow-hidden bg-ax-black pb-24 pt-[160px] text-ax-white lg:pb-32 lg:pt-[180px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(50,201,122,0.14) 0%, rgba(91,234,153,0.04) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="container-ax relative flex flex-col items-center text-center">
        <h1 className="hero-reveal font-display max-w-[820px] text-balance text-[38px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[52px] md:text-[62px] lg:text-[70px]">
          Work that stays <span className="text-ax-mint">clear</span>, even
          when AI is doing it.
        </h1>

        <p className="hero-reveal mt-7 max-w-[520px] text-[17px] leading-[1.55] text-ax-text/80">
          Tell ALTERX what you need. It works out the steps, runs them, and keeps the work
          moving.
        </p>

        <div className="hero-reveal mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={alterEngineDestination}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Try Engine
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
          <a
            href="#how"
            className="inline-flex h-12 items-center justify-center rounded-full border border-ax-mint/20 px-7 text-[15px] font-medium text-ax-white/85 transition-colors hover:border-ax-mint/50 hover:text-ax-white"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="hero-reveal mt-16 w-full lg:mt-20">
        <div className="container-ax max-w-[760px]">
          <label htmlFor="hero-prompt" className="sr-only">What do you want to get done?</label>
          <div className="flex items-center gap-2 rounded-[10px] border border-ax-mint/15 bg-ax-bg-soft/60 px-5 py-4 backdrop-blur-md transition-colors focus-within:border-ax-mint/50 sm:gap-3 sm:px-6">
            <input
              id="hero-prompt"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="What do you want to get done?"
              className="min-w-0 flex-1 bg-transparent text-[15px] text-ax-white outline-none placeholder:text-ax-muted sm:text-[16px]"
            />
            <Link
              href={alterEngineDestination}
              aria-label="Get started"
              className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ax-mint text-ax-black transition-all hover:bg-ax-emerald"
            >
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {EXAMPLE_PROMPTS.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => setPrompt(example)}
                className="rounded-full border border-ax-mint/15 px-4 py-1.5 text-[13px] text-ax-text/70 transition-colors hover:border-ax-mint/40 hover:text-ax-mint"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
