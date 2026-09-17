"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const NODES = [
  { label: "Request", jitter: -18 },
  { label: "Context", jitter: 22 },
  { label: "Decision", jitter: -14 },
  { label: "Action", jitter: 18 },
  { label: "Result", jitter: -10 },
];

const FAILURES = ["Stale context", "Malformed data", "API timeout", "Incorrect interpretation", "A step finishing unnoticed"];

export function TheGap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = trackRef.current;
    if (prefersReduced) {
      setProgress(1);
      return;
    }
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh * 0.85 - rect.top) / (rect.height * 0.7);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="gap" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            The gap
          </p>
          <h2 className="font-display mt-5 max-w-[680px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Powerful steps are easy. Keeping the whole process together is harder.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            A single request can mean understanding what was asked, checking company
            information, confirming availability, preparing something, updating a system of
            record and triggering the next action. The individual steps are easy. Process breaks
            where those steps meet.
          </p>
        </Reveal>

        <div ref={trackRef} className="mt-16 rounded-[6px] border border-ax-mint/10 bg-ax-black/40 px-6 py-16 lg:mt-20 lg:px-10 lg:py-20">
          <div className="relative hidden md:block">
            <div className="grid grid-cols-5 items-center">
              {NODES.map((node, i) => {
                const activated = progress > i / (NODES.length - 1) - 0.08;
                const settle = 1 - progress;
                return (
                  <div key={node.label} className="relative flex items-center">
                    {i > 0 && (
                      <div className="absolute right-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-ax-mint/12" />
                    )}
                    {i > 0 && (
                      <div
                        className="absolute right-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-ax-mint transition-[opacity] duration-300"
                        style={{
                          opacity: activated ? 1 : 0,
                          transform: `translateY(${node.jitter * settle * 0.3}px)`,
                        }}
                      />
                    )}
                    <div
                      className="relative z-10 mx-auto flex flex-col items-center gap-3 transition-transform duration-300 ease-out"
                      style={{ transform: `translateY(${node.jitter * settle}px)` }}
                    >
                      <span
                        className={`h-[13px] w-[13px] rounded-full border-2 transition-colors duration-300 ${
                          activated ? "border-ax-mint bg-ax-mint" : "border-ax-mint/25 bg-ax-bg-soft"
                        }`}
                      />
                      <span
                        className={`text-[13px] font-medium tracking-[0.04em] transition-colors duration-300 ${
                          activated ? "text-ax-white" : "text-ax-muted"
                        }`}
                      >
                        {node.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: simple vertical sequence, no jitter effect */}
          <div className="flex flex-col gap-4 md:hidden">
            {NODES.map((node) => (
              <div key={node.label} className="flex items-center gap-3">
                <span className="h-[10px] w-[10px] flex-shrink-0 rounded-full border-2 border-ax-mint bg-ax-mint" />
                <span className="text-[15px] font-medium text-ax-white">{node.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-ax-mint/10 pt-8 lg:mt-20">
            {FAILURES.map((failure) => (
              <span key={failure} className="text-[13px] text-ax-muted">
                {failure}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
