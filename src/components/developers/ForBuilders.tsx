import { Reveal } from "@/components/shared/Reveal";

const CONSIDERATIONS = ["Objectives", "Execution", "Verification", "Recovery", "System boundaries", "Integrations"];

export function ForBuilders() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              For builders
            </p>
            <h2 className="font-display mt-5 max-w-[440px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
              Start with the outcome. Design the system behind it.
            </h2>
            <p className="mt-5 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
              Technical teams working with ALTERX think in terms of objectives, execution,
              verification, recovery, system boundaries and integrations, rather than stitching
              every failure path together by hand.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[8px] border border-ax-mint/15 bg-ax-surface/60 p-8">
              <div className="flex items-center gap-2 border-b border-ax-mint/10 pb-4">
                <span className="h-[7px] w-[7px] rounded-full bg-ax-mint/40" />
                <span className="h-[7px] w-[7px] rounded-full bg-ax-mint/40" />
                <span className="h-[7px] w-[7px] rounded-full bg-ax-mint/40" />
                <span className="ml-2 text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                  System states
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                {CONSIDERATIONS.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <span className="h-[5px] w-[5px] rounded-full bg-ax-mint" />
                    <span className="text-[15px] font-medium text-ax-text/90">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
