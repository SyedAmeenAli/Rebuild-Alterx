import { Reveal } from "@/components/shared/Reveal";
import { HoverConcepts } from "./HoverConcepts";

export function ForBuilders() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              For builders
            </p>
            <h2 className="font-display mt-5 max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
              Start with the outcome. The system handles the machinery.
            </h2>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
              Technical teams working with ALTERX think in terms of objectives, execution,
              verification, recovery and system boundaries, rather than stitching every failure
              path together by hand.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <HoverConcepts />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
