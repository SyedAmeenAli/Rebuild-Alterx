"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const STAGES = ["Objective", "Understand", "Decide", "Execute", "Verify", "Continue"];

export function ProcessMap() {
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

  const activeIndex = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));

  return (
    <section id="process" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            How ALTERX works
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            From objective to outcome.
          </h2>
        </Reveal>

        <div ref={trackRef} className="relative mx-auto mt-20 max-w-[420px] lg:mt-24">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ax-mint/12" aria-hidden="true" />
          <div
            className="absolute left-[15px] top-2 w-px origin-top bg-ax-mint transition-transform duration-200 ease-out"
            style={{ height: "calc(100% - 16px)", transform: `scaleY(${progress})` }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {STAGES.map((stage, i) => {
              const activated = i <= activeIndex;
              const isCurrent = i === activeIndex && progress < 1;
              return (
                <div key={stage} className="relative flex items-center gap-6 pl-10">
                  <span
                    className={`absolute left-0 h-[15px] w-[15px] flex-shrink-0 rounded-full border-2 transition-colors duration-300 ${
                      activated ? "border-ax-mint bg-ax-bg-soft" : "border-ax-mint/20 bg-ax-bg-soft"
                    } ${activated && i === STAGES.length - 1 ? "bg-ax-mint" : ""}`}
                  />
                  <span
                    className={`font-display font-medium transition-all duration-300 ${
                      activated ? "text-ax-white" : "text-ax-muted"
                    } ${isCurrent ? "text-[24px] sm:text-[28px]" : "text-[19px] sm:text-[22px]"}`}
                  >
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
