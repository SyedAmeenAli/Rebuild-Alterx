import { Reveal } from "@/components/shared/Reveal";

export function EngineProductRelationship() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <div className="mx-auto max-w-[680px] text-center">
          <Reveal>
            <h2 className="font-display text-balance text-[28px] leading-[1.25] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[40px]">
              One engine. Different work.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[16px] leading-[1.6] text-ax-muted">
              ALTER ENGINE provides the execution layer. AxInventory is one example of what can
              be built on top of it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
