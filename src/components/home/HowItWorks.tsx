"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const STEPS = [
  { n: "01", label: "Understand", copy: "Gets the intent." },
  { n: "02", label: "Connect", copy: "Finds the right tools and systems." },
  { n: "03", label: "Execute", copy: "Runs the work." },
  { n: "04", label: "Verify", copy: "Checks the result." },
  { n: "05", label: "Continue", copy: "Handles what happens next." },
];

export function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = trackRef.current;
    if (prefersReduced || !el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh * 0.7 - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));

  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[640px] text-balance text-[32px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[40px] lg:text-[46px]">
            Tell it what you need. It handles the rest.
          </h2>
        </Reveal>

        <div ref={trackRef} className="mt-24 lg:mt-32">
          {/* Progress line, desktop */}
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-[9px] h-px bg-ax-mint/12" />
            <div
              className="absolute left-0 top-[9px] h-px bg-ax-mint transition-[width] duration-300 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
            <div className="grid grid-cols-5">
              {STEPS.map((step, i) => (
                <div key={step.n} className="relative pr-8">
                  <span
                    className={`relative z-10 mb-6 block h-[19px] w-[19px] rounded-full border-2 transition-colors duration-300 ${
                      i <= activeIndex
                        ? "border-ax-mint bg-ax-mint"
                        : "border-ax-mint/25 bg-ax-bg-soft"
                    }`}
                  />
                  <div
                    className={`text-[13px] font-medium tracking-[0.06em] transition-colors duration-300 ${
                      i <= activeIndex ? "text-ax-mint" : "text-ax-muted"
                    }`}
                  >
                    {step.n}
                  </div>
                  <div className="font-display mt-2 text-[22px] font-medium text-ax-white">
                    {step.label}
                  </div>
                  <div className="mt-2 max-w-[180px] text-[14px] leading-[1.5] text-ax-muted">
                    {step.copy}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet: quiet vertical list, no cards */}
          <div className="flex flex-col divide-y divide-ax-mint/10 lg:hidden">
            {STEPS.map((step) => (
              <Reveal key={step.n} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                <span className="mt-1 text-[13px] font-medium tracking-[0.06em] text-ax-mint">
                  {step.n}
                </span>
                <div>
                  <div className="font-display text-[19px] font-medium text-ax-white">{step.label}</div>
                  <div className="mt-1 text-[14px] leading-[1.5] text-ax-muted">{step.copy}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
