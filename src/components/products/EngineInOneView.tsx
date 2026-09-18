"use client";

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { label: "Objective", state: "normal" },
  { label: "Plan", state: "normal" },
  { label: "Execute", state: "normal" },
  { label: "Verify", state: "checkpoint" },
  { label: "Recover", state: "recover" },
  { label: "Done", state: "done" },
] as const;

export function EngineInOneView() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDrawn(true);
      return;
    }
    const el = ref.current;
    if (!el) {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    const fallback = setTimeout(() => setDrawn(true), 2500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          Engine, in one view
        </p>
        <h2 className="font-display mt-5 max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
          Complicated underneath. Understandable from here.
        </h2>

        <div ref={ref} className="relative mt-20 lg:mt-24">
          <div className="hidden lg:block">
            <div className="relative h-px w-full bg-ax-mint/10">
              <div
                className={`absolute inset-y-0 left-0 h-px w-full origin-left bg-ax-mint/50 ${
                  drawn ? "engine-path-draw" : "scale-x-0"
                }`}
              />
            </div>
            <div className="mt-8 grid grid-cols-6 gap-4">
              {STAGES.map((s, i) => (
                <div
                  key={s.label}
                  style={{ transitionDelay: drawn ? `${300 + i * 220}ms` : "0ms" }}
                  className={`flex flex-col items-start gap-3 transition-all duration-500 ${
                    drawn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  <span
                    className={`h-[10px] w-[10px] rounded-full ${
                      s.state === "done"
                        ? "bg-ax-mint"
                        : s.state === "checkpoint"
                          ? "bg-ax-mint/70"
                          : s.state === "recover"
                            ? "bg-ax-mint/50"
                            : "bg-ax-mint/25"
                    }`}
                  />
                  <span
                    className={`font-display text-[16px] font-medium ${
                      s.state === "done" || s.state === "checkpoint" ? "text-ax-mint" : "text-ax-white"
                    }`}
                  >
                    {s.label}
                  </span>
                  {s.state === "checkpoint" && (
                    <span className="text-[12px] leading-[1.5] text-ax-muted">Result checked.</span>
                  )}
                  {s.state === "recover" && (
                    <span className="text-[12px] leading-[1.5] text-ax-muted">Continues after interruption.</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:hidden">
            <div className="absolute left-[4px] top-1 bottom-1 w-px bg-ax-mint/12" aria-hidden="true" />
            {STAGES.map((s, i) => (
              <div
                key={s.label}
                style={{ transitionDelay: drawn ? `${150 + i * 120}ms` : "0ms" }}
                className={`relative flex items-baseline gap-4 pl-6 transition-all duration-500 ${
                  drawn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <span
                  className={`absolute left-0 top-[6px] h-[8px] w-[8px] -translate-x-1/2 rounded-full ${
                    s.state === "done"
                      ? "bg-ax-mint"
                      : s.state === "checkpoint"
                        ? "bg-ax-mint/70"
                        : s.state === "recover"
                          ? "bg-ax-mint/50"
                          : "bg-ax-mint/25"
                  }`}
                />
                <span
                  className={`font-display text-[18px] font-medium ${
                    s.state === "done" || s.state === "checkpoint" ? "text-ax-mint" : "text-ax-white"
                  }`}
                >
                  {s.label}
                </span>
                {s.state === "checkpoint" && (
                  <span className="text-[12px] text-ax-muted">Result checked</span>
                )}
                {s.state === "recover" && (
                  <span className="text-[12px] text-ax-muted">Resumes after interruption</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
