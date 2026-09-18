import { Reveal } from "@/components/shared/Reveal";

const STATES = ["Objective", "Ready", "Running", "Checking", "Recovering", "Complete"];

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
              Start with the outcome. The system handles the machinery.
            </h2>
            <p className="mt-5 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
              Technical teams working with ALTERX think in terms of objectives, execution,
              verification, recovery and system boundaries, rather than stitching every failure
              path together by hand.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[8px] border border-ax-mint/15 bg-ax-surface/60 p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                System state
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-2">
                {STATES.map((s, i) => (
                  <div key={s} className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${
                        i === STATES.length - 1
                          ? "border-ax-mint bg-ax-mint text-ax-black"
                          : "border-ax-mint/25 text-ax-text/85"
                      }`}
                    >
                      {s}
                    </span>
                    {i < STATES.length - 1 && (
                      <span aria-hidden="true" className="text-ax-mint/40">→</span>
                    )}
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
