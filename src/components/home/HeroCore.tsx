"use client";

import Link from "next/link";
import { talkToUsDestination } from "@/content/navigation";
import MetaBalls from "@/components/shared/MetaBalls";
import RotatingText from "@/components/shared/RotatingText";

const ROTATING_VERBS = ["run.", "automate.", "execute.", "ship.", "build."];

export function HeroCore() {
  return (
    <section className="hero relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ax-black pb-16 pt-[120px] text-ax-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 70% 20%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="container-ax relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
        <div>
          <p className="hero-reveal text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            ALTERX
          </p>
          <h1
            className="hero-reveal mt-5 font-display text-balance text-[42px] font-medium leading-[1.05] tracking-[-0.03em] sm:text-[60px] lg:text-[72px]"
            style={{ animationDelay: "40ms" }}
          >
            One system for
            <br />
            everything you{" "}
            <RotatingText
              texts={ROTATING_VERBS}
              mainClassName="inline-flex text-ax-mint overflow-hidden"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.02}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2200}
              splitBy="characters"
              auto
              loop
            />
          </h1>
          <p className="hero-reveal mt-7 max-w-[400px] text-[17px] leading-[1.55] text-ax-muted" style={{ animationDelay: "80ms" }}>
            Planning, execution, verification, and recovery.
            <br />
            Managed end to end, so you don&apos;t have to.
          </p>
          <div className="hero-reveal mt-9" style={{ animationDelay: "140ms" }}>
            <Link href={talkToUsDestination} className="group inline-flex items-center gap-2 text-[15px] font-medium text-ax-white">
              Talk to us
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div
          className="hero-reveal relative mx-auto h-[460px] w-[460px] sm:h-[560px] sm:w-[560px]"
          style={{ animationDelay: "120ms" }}
        >
          <MetaBalls
            color="#9FFFC0"
            cursorBallColor="#9FFFC0"
            cursorBallSize={1}
            ballCount={30}
            animationSize={34}
            enableMouseInteraction
            enableTransparency
            hoverSmoothness={0.11}
            clumpFactor={0.9}
            speed={0.6}
          />
        </div>
      </div>
    </section>
  );
}
