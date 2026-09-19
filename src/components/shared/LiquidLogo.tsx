"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * Reactive brand lockup: crisp "ALTER" text + liquid "X" mark, continuous
 * wobble via SVG feTurbulence + feDisplacementMap. At scrollY===0 it renders
 * full form (mark + wordmark) centered on screen; scrolling away streams the
 * text into the mark and docks it as a small top-left icon. Always clickable
 * to "/", same as Header's previous static Logo.
 */
export function LiquidLogo({ scrollRange = 60 }: { scrollRange?: number }) {
  const lockupRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLImageElement>(null);
  const markBoxRef = useRef<HTMLDivElement>(null);
  const dispMarkRef = useRef<SVGFEDisplacementMapElement>(null);
  const dispTextRef = useRef<SVGFEDisplacementMapElement>(null);
  const blurTextRef = useRef<SVGFEGaussianBlurElement>(null);
  const textWidthRef = useRef(0);

  // Sized to sit inside a 72px header without covering nav links or page
  // headlines — the original 170px hero size assumed an empty demo page.
  const TEXT_H_HERO = 30;
  const MARK_HERO = 48;
  const MARK_DOCK = 32;
  const MARK_INFLATE = 14;
  const GAP_HERO = 10;
  const DOCK_X = 28;
  const DOCK_Y = 36; // fixed header vertical center (72px header / 2)

  useEffect(() => {
    const lockup = lockupRef.current;
    const text = textRef.current;
    const markBox = markBoxRef.current;
    const dispMark = dispMarkRef.current;
    const dispText = dispTextRef.current;
    const blurText = blurTextRef.current;
    if (!lockup || !text || !markBox || !dispMark || !dispText || !blurText) return;

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const measure = () => {
      if (text.naturalWidth && text.naturalHeight) {
        textWidthRef.current = text.naturalWidth * (TEXT_H_HERO / text.naturalHeight);
      }
    };
    if (text.complete) measure();
    else text.addEventListener("load", () => { measure(); render(); });

    function render() {
      // Below the lg breakpoint the header has no room for the wordmark
      // beside "Talk to us" and the hamburger — stay docked always.
      const mobile = window.innerWidth < 1024;
      const raw = mobile ? 1 : clamp01(window.scrollY / scrollRange);
      const p = easeInOutCubic(raw);

      const flow = clamp01(p / 0.75);
      const settle = clamp01((p - 0.75) / 0.25);
      const bell = 4 * flow * (1 - flow);

      text!.style.opacity = String(Math.max(0, 1 - flow * 1.15));
      text!.style.height = TEXT_H_HERO + "px";
      text!.style.transform =
        `translateX(${flow * 46}px) scale(${1 - flow * 0.55}, ${1 + bell * 0.35})`;
      text!.style.marginRight =
        lerp(GAP_HERO, -(textWidthRef.current + GAP_HERO), flow) + "px";
      dispText!.setAttribute("scale", (flow * 130).toFixed(1));
      blurText!.setAttribute("stdDeviation", (flow * 10).toFixed(1));

      const inflatedSize = MARK_HERO + bell * MARK_INFLATE;
      const markSize = lerp(inflatedSize, MARK_DOCK, settle);
      const finalSize = settle > 0 ? markSize : inflatedSize;
      markBox!.style.width = finalSize + "px";
      markBox!.style.height = finalSize + "px";

      const squash = 1 + bell * 0.3;
      const stretch = 1 - bell * 0.22;
      const wobbleRotate = Math.sin(raw * Math.PI * 2.5) * bell * 12;
      markBox!.style.transform = `scale(${stretch}, ${squash}) rotate(${wobbleRotate}deg)`;

      // Box left edge stays pinned at DOCK_X in both states (hero box is
      // wider because the wordmark is visible, so its center sits further
      // right) and Y stays fixed at the header's vertical center — the mark
      // grows/shrinks in place instead of migrating, so it never drifts
      // into the nav links or off the top/bottom of the header.
      const heroWidth = textWidthRef.current + GAP_HERO + MARK_HERO;
      const startX = DOCK_X + heroWidth / 2;
      const x = lerp(startX, DOCK_X + finalSize / 2, p);
      const y = DOCK_Y;
      lockup!.style.left = x + "px";
      lockup!.style.top = y + "px";

      const restWobble = lerp(60, 16, settle);
      const burst = bell * 90;
      dispMark!.setAttribute("scale", (restWobble + burst).toFixed(1));
    }

    const onScroll = () => requestAnimationFrame(render);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", render);
    render();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", render);
    };
  }, [scrollRange]);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="liquidMark" x="-100%" y="-100%" width="300%" height="300%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.010" numOctaves={3} seed={7} result="noise">
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.006 0.010;0.010 0.006;0.005 0.013;0.006 0.010"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap ref={dispMarkRef} in="SourceGraphic" in2="noise" scale={60} xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="liquidText" x="-100%" y="-100%" width="300%" height="300%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.014" numOctaves={3} seed={3} result="noise2">
              <animate
                attributeName="baseFrequency"
                dur="9s"
                values="0.008 0.014;0.014 0.008;0.006 0.018;0.008 0.014"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap ref={dispTextRef} in="SourceGraphic" in2="noise2" scale={0} xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur ref={blurTextRef} stdDeviation={0} />
          </filter>
        </defs>
      </svg>

      <Link
        ref={lockupRef}
        href="/"
        aria-label="ALTERX Homepage"
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          transform: "translate(-50%,-50%)",
          zIndex: "var(--z-header)" as string,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={textRef}
          src="/brand/alter-text-light.png"
          alt="ALTER"
          style={{ display: "block", height: "100%", width: "auto", maxWidth: "none", flexShrink: 0, filter: "url(#liquidText)" }}
        />
        <div ref={markBoxRef} style={{ position: "relative", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/mark-light.png"
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", filter: "url(#liquidMark)" }}
          />
        </div>
      </Link>
    </>
  );
}
