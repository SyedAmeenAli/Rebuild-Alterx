"use client";

import { useEffect, useRef, useState } from "react";

const BELIEFS = [
  {
    label: "Reliability is an architecture problem",
    copy: "A system that cannot explain what it did should not be trusted with work that matters.",
  },
  {
    label: "Failure should be diagnosed",
    copy: "The response to failure should be intentional, not endless blind retrying.",
  },
  {
    label: "Be honest about what the system did",
    copy: "A system should make clear what happened, including when it could not complete something.",
  },
  {
    label: "Ship what you can explain",
    copy: "If the reasoning behind a result can't be explained, it isn't ready to ship.",
  },
];

export function WhatWeBelieve() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          What we believe
        </p>

        <div className="mt-14 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10 lg:mt-16">
          {BELIEFS.map((belief, i) => (
            <div
              key={belief.label}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`py-8 transition-opacity duration-500 lg:py-10 ${
                active === i ? "opacity-100" : "opacity-65"
              }`}
            >
              <h3 className="font-display max-w-[640px] text-balance text-[22px] font-medium leading-[1.3] text-ax-white sm:text-[28px]">
                {belief.label}
              </h3>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.6] text-ax-muted">
                {belief.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
