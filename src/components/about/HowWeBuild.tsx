import { Reveal } from "@/components/shared/Reveal";

const LAYERS = ["Idea", "System", "Execution", "Product"];

export function HowWeBuild() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              How we build
            </p>
            <h2 className="font-display mt-5 max-w-[440px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
              We&apos;d rather build the hard part first.
            </h2>
            <p className="mt-5 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
              Alter Engine is a headless execution core: planning, binding, compilation, durable
              execution, verification, recovery and memory. That foundation comes before a
              polished interface, not after.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col-reverse gap-1">
              {LAYERS.map((layer, i) => {
                const distanceFromBase = LAYERS.length - 1 - i;
                const glow = 0.08 + distanceFromBase * 0.09;
                return (
                  <div
                    key={layer}
                    className="flex items-center justify-between rounded-[4px] border border-ax-mint/15 px-6 py-5"
                    style={{ backgroundColor: `rgba(50, 201, 122, ${glow})` }}
                  >
                    <span className="font-display text-[16px] font-medium text-ax-white sm:text-[18px]">
                      {layer}
                    </span>
                    <span className="text-[12px] font-medium tracking-[0.06em] text-ax-mint/70">
                      {String(LAYERS.length - i).padStart(2, "0")}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
