"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFollowProps {
  children: ReactNode;
  className?: string;
  /** Ref to the enclosing section — scroll progress is measured across
   * this element's full viewport transit, not the (much shorter) visual
   * box's own transit, so the movement is actually visible. */
  sectionRef: RefObject<HTMLElement | null>;
  from?: number;
  to?: number;
  mobileFrom?: number;
  mobileTo?: number;
}

/**
 * Moves the WHOLE wrapped element (border, background, contents) as one
 * object, tied to its section's scroll progress. Not sticky, not fixed,
 * not pinned — stays in normal document flow and leaves with the section.
 */
export function ScrollFollow({
  children,
  className,
  sectionRef,
  from = -15,
  to = 30,
  mobileFrom = -5,
  mobileTo = 15,
}: ScrollFollowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const trigger = sectionRef.current;
    if (!el || !trigger) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 768px)", reduced: "(prefers-reduced-motion: reduce)" },
        (context) => {
          const { desktop, reduced } = context.conditions as { desktop: boolean; reduced: boolean };
          if (reduced) return;
          const [start, end] = desktop ? [from, to] : [mobileFrom, mobileTo];
          gsap.fromTo(
            el,
            { y: start },
            {
              y: end,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      );
      return () => mm.revert();
    }, ref);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [sectionRef, from, to, mobileFrom, mobileTo]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
