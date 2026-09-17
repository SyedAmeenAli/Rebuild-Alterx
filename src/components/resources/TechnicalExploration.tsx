import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function TechnicalExploration() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <Reveal>
            <h2 className="font-display max-w-[440px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[32px]">
              Want to know how it works?
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-[1.6] text-ax-muted">
              Go beneath the interface and explore the execution architecture.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[13px] text-ax-muted">
                <span className="rounded-full border border-ax-mint/20 px-3 py-1">Plan</span>
                <span aria-hidden="true" className="text-ax-mint/40">→</span>
                <span className="rounded-full border border-ax-mint/20 px-3 py-1">Execute</span>
                <span aria-hidden="true" className="text-ax-mint/40">→</span>
                <span className="rounded-full border border-ax-mint/20 px-3 py-1">Verify</span>
              </div>
            </div>
            <Link
              href="/developers"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore Developers
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
