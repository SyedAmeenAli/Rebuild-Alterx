"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const PATH = ["Objective", "Plan", "Bind", "Compile", "Execute", "Verify", "Recover", "Done"];

export function SystemOverview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }
    const el = trackRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh * 0.8 - rect.top) / (rect.height * 0.75);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.min(PATH.length - 1, Math.floor(progress * PATH.length));

  return (
    <section id="system" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              The system
            </p>
            <h2 className="font-display mt-5 max-w-[480px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[40px]">
              Simple on the surface. Structured underneath.
            </h2>
            <p className="mt-6 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
              A natural-language request is only the beginning. The system has to determine what
              needs to happen, connect the required systems, execute the work, verify the result
              and respond when something fails.
            </p>
          </Reveal>

          <div ref={trackRef} className="relative rounded-[6px] border border-ax-mint/10 bg-ax-black/30 py-9 pl-8 pr-7 sm:py-11 sm:pl-10 sm:pr-9">
            <div className="absolute left-8 top-9 bottom-9 w-px bg-ax-mint/15 sm:left-10 sm:top-11 sm:bottom-11" aria-hidden="true" />
            <div
              className="absolute left-8 top-9 w-px origin-top bg-ax-mint transition-transform duration-200 ease-out sm:left-10 sm:top-11"
              style={{ height: "calc(100% - 72px)", transform: `scaleY(${progress})` }}
              aria-hidden="true"
            />
            <div className="flex flex-col gap-7">
              {PATH.map((step, i) => {
                const activated = i <= activeIndex;
                const isDone = i === PATH.length - 1 && activated;
                return (
                  <div key={step} className="relative flex items-baseline gap-5 pl-7">
                    <span
                      className={`absolute left-0 top-[6px] h-[8px] w-[8px] -translate-x-1/2 rounded-full transition-colors duration-300 ${
                        isDone ? "bg-ax-mint" : activated ? "bg-ax-mint/70" : "bg-ax-mint/25"
                      }`}
                    />
                    <span className="text-[13px] font-medium tracking-[0.04em] text-ax-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-[20px] font-medium transition-colors duration-300 sm:text-[24px] ${
                        isDone ? "text-ax-mint" : activated ? "text-ax-white" : "text-ax-muted"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
