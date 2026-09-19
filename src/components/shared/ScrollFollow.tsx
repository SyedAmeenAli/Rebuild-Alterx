"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFollowProps {
  children: ReactNode;
  range?: number;
  className?: string;
}

/**
 * Subtle scroll-linked vertical drift, not a sticky/parallax effect —
 * the element travels a small total distance (2x `range`) across the
 * time its own section is in the viewport, then leaves with it.
 */
export function ScrollFollow({ children, range = 20, className }: ScrollFollowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)", reduced: "(prefers-reduced-motion: reduce)" },
        (context) => {
          const conditions = context.conditions as { desktop: boolean; reduced: boolean };
          if (conditions.reduced) return;
          const amount = conditions.desktop ? range : range * 0.3;
          gsap.fromTo(
            el,
            { y: -amount },
            {
              y: amount,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      );
      return () => mm.revert();
    }, ref);

    return () => ctx.revert();
  }, [range]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
