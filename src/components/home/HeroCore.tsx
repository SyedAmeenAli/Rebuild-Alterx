"use client";

import Link from "next/link";
import { talkToUsDestination } from "@/content/navigation";
import { AlterxCore } from "./AlterxCore";

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
          <h1 className="hero-reveal mt-5 font-display text-balance text-[42px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[60px] lg:text-[72px]" style={{ animationDelay: "40ms" }}>
            Tell it
            <br />
            what needs
            <br />
            to happen.
          </h1>
          <p className="hero-reveal mt-7 max-w-[420px] text-[17px] leading-[1.55] text-ax-muted" style={{ animationDelay: "80ms" }}>
            You describe the work. ALTERX handles the workflow.
          </p>
          <div className="hero-reveal mt-9" style={{ animationDelay: "140ms" }}>
            <Link href={talkToUsDestination} className="group inline-flex items-center gap-2 text-[15px] font-medium text-ax-white">
              Talk to us
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div
          className="hero-reveal relative mx-auto h-[360px] w-[360px] sm:h-[460px] sm:w-[460px]"
          style={{ animationDelay: "120ms" }}
        >
          <AlterxCore />
        </div>
      </div>
    </section>
  );
}
