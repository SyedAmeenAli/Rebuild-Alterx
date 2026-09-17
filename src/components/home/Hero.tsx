"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { alterEngineDestination } from '@/content/navigation';

const EXAMPLE_PROMPTS = ["Automate invoices", "Onboard a new vendor", "Analyze sales data"];

const PROCESS_STEPS = [
  { n: "01", label: "Understand", copy: "You tell it the goal." },
  { n: "02", label: "Plan", copy: "It figures out the best way." },
  { n: "03", label: "Execute", copy: "It does the work." },
  { n: "04", label: "Verify", copy: "It checks the results." },
  { n: "05", label: "Keep running", copy: "So you don't have to." },
];

export function Hero() {
  const [prompt, setPrompt] = useState("");

  return (
    <section
      className="hero relative min-h-[100svh] flex flex-col overflow-clip bg-ax-black text-ax-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/home-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-drift"
        />
      </div>

      {/* Legibility scrim: darken toward the bottom so HTML content reads over either side of the image */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,5,4,0.35) 0%, rgba(2,5,4,0.15) 30%, rgba(2,5,4,0.55) 70%, rgba(2,5,4,0.86) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-72 z-[1] pointer-events-none"
        style={{ background: 'var(--ax-gradient-glow)' }}
      />

      <div className="relative z-[2] w-full flex-1 flex flex-col justify-end container-ax pb-16 pt-[140px] lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">
          {/* Left: headline, copy, prompt */}
          <div className="max-w-[640px]">
            <h1 className="hero-reveal font-display text-balance text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[46px] md:text-[56px] lg:text-[62px] font-medium text-ax-white">
              Close the gap between what you want and what gets done.
            </h1>

            <p className="hero-reveal mt-6 max-w-[480px] text-[17px] leading-[1.55] text-ax-text/85">
              Tell ALTERX what you need. It works out the steps, runs them, and checks the result.
            </p>

            <div className="hero-reveal mt-9">
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

          {/* Right: quiet process labels, integrated into the environment */}
          <div className="hero-reveal hidden lg:flex flex-col gap-5 pb-1 pl-8 border-l border-ax-mint/15">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="flex items-baseline gap-3">
                <span className="text-[11px] font-medium tracking-[0.08em] text-ax-mint/70">{step.n}</span>
                <div>
                  <div className="text-[14px] font-medium text-ax-white leading-tight">{step.label}</div>
                  <div className="text-[12px] text-ax-muted leading-tight">{step.copy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
