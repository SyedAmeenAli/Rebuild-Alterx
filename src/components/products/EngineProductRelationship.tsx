import { Reveal } from "@/components/shared/Reveal";

export function EngineProductRelationship() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-0">
              <span className="rounded-[6px] border border-ax-mint/25 px-5 py-2.5 text-[14px] font-medium text-ax-text/85">
                Alter Engine
              </span>
              <span aria-hidden="true" className="h-8 w-px bg-ax-mint/20" />
              <span className="rounded-[6px] border border-ax-mint bg-ax-mint/10 px-5 py-2.5 text-[14px] font-medium text-ax-mint">
                AxInventory
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display mt-10 text-balance text-[28px] leading-[1.25] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[40px]">
              One engine. A product built on it.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[16px] leading-[1.6] text-ax-muted">
              ALTER ENGINE provides the execution foundation. AxInventory is one real product
              built around it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
