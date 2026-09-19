import Link from "next/link";
import { talkToUsDestination } from "@/content/navigation";

export function SolutionsHero() {
  return (
    <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-ax-black text-ax-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] container-ax pb-20 pt-[150px] lg:pb-24">
        <p className="hero-reveal text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          Solutions
        </p>

        <h1 className="hero-reveal font-display mt-6 max-w-[720px] text-balance text-[38px] leading-[1.08] tracking-[-0.02em] text-ax-white sm:text-[48px] lg:text-[58px]">
          Where work gets complicated.
        </h1>

        <p className="hero-reveal mt-6 max-w-[480px] text-[17px] leading-[1.55] text-ax-text/85">
          ALTERX helps turn a goal into a process that can actually run.
        </p>

        <div className="hero-reveal mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href={talkToUsDestination}
            className="inline-flex h-12 items-center justify-center rounded-[4px] bg-ax-mint px-7 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
          >
            Talk to us
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
          <a
            href="#gap"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-ax-white/85 transition-colors hover:text-ax-mint"
          >
            See how it works
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
