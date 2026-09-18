"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { alterEngineDestination } from '@/content/navigation';

const EXAMPLE_PROMPTS = ["Automate invoices", "Onboard a new vendor", "Analyze sales data"];

export function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section
      className="hero relative min-h-[100svh] flex flex-col overflow-clip bg-ax-black text-ax-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/alterx/01_home_hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-drift"
        />
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,5,4,0.35) 0%, rgba(2,5,4,0.15) 30%, rgba(2,5,4,0.55) 70%, rgba(2,5,4,0.88) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-72 z-[1] pointer-events-none"
        style={{ background: 'var(--ax-gradient-glow)' }}
      />

      <div className="relative z-[2] w-full flex-1 flex flex-col justify-end container-ax pb-16 pt-[140px] lg:pb-20">
        <div className="max-w-[720px]">
          <h1 className="hero-reveal font-display text-balance text-[40px] leading-[1.04] tracking-[-0.02em] sm:text-[52px] md:text-[64px] lg:text-[74px] font-medium text-ax-white">
            Work that stays clear, even when AI is doing it.
          </h1>

          <p className="hero-reveal mt-7 max-w-[480px] text-[17px] leading-[1.55] text-ax-text/85">
            Tell ALTERX what you need. It works out the steps, runs them, and keeps the work
            moving.
          </p>

          <div className="hero-reveal mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href={alterEngineDestination}
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Try Engine
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ax-white/85 transition-colors hover:text-ax-mint"
            >
              See how it works
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-reveal mt-10">
            <label htmlFor="hero-prompt" className="sr-only">What do you want to get done?</label>
            <div className="flex items-center gap-2 sm:gap-3 rounded-[6px] border border-ax-mint/25 bg-ax-black/45 backdrop-blur-md px-4 sm:px-5 py-4 focus-within:border-ax-mint/60 transition-colors">
              <input
                id="hero-prompt"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="What do you want to get done?"
                className="min-w-0 flex-1 bg-transparent outline-none text-[15px] sm:text-[16px] text-ax-white placeholder:text-ax-muted"
              />
              <Link
                href={alterEngineDestination}
                aria-label="Get started"
                className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[4px] bg-ax-mint text-ax-black transition-all hover:bg-ax-emerald"
              >
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {EXAMPLE_PROMPTS.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setPrompt(example)}
                  className="rounded-full border border-ax-mint/20 px-4 py-1.5 text-[13px] text-ax-text/80 transition-colors hover:border-ax-mint/50 hover:text-ax-mint"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
