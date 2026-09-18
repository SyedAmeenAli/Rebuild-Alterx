import { Reveal } from "@/components/shared/Reveal";

const INTELLIGENCE = ["Models", "Reasoning", "Decision points"];
const CONTROL = ["State", "Policy", "Verification", "Recovery"];

export function IntelligenceControl() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Designed separately
          </p>
          <h2 className="font-display mt-5 max-w-[600px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Intelligence can change. Control still needs to hold.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            Models can reason and produce useful work. The system around them still needs
            predictable state, policy, verification and recovery.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[6px] border border-dashed border-ax-mint/25 bg-ax-bg-soft/20 p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                Intelligence — can vary
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {INTELLIGENCE.map((item) => (
                  <span key={item} className="font-display text-[18px] font-medium text-ax-text/90">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[6px] border border-ax-mint bg-ax-mint/[0.06] p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/80">
                Control — stays structured
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {CONTROL.map((item) => (
                  <span key={item} className="font-display text-[18px] font-medium text-ax-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
