import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { alterEngineDestination } from "@/content/navigation";

export function AlterEngineSection() {
  return (
    <section className="relative flex min-h-[60svh] flex-col justify-end overflow-hidden bg-ax-black text-ax-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] container-ax pb-16 pt-[150px] lg:pb-20">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Products · Alter Engine
          </p>
          <h1 className="font-display mt-6 max-w-[640px] text-balance text-[34px] leading-[1.1] tracking-[-0.02em] text-ax-white sm:text-[46px] lg:text-[54px]">
            The execution system underneath ALTERX.
          </h1>
          <div className="mt-7 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[480px] text-[16px] leading-[1.6] text-ax-text/80">
              ALTER ENGINE turns an objective into executable work. It plans, runs, verifies and
              recovers across the systems involved.
            </p>
            <Link
              href={alterEngineDestination}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-[4px] bg-ax-mint px-6 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Explore Alter Engine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
