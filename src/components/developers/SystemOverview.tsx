import { Reveal } from "@/components/shared/Reveal";
import GlareHover from "@/components/shared/GlareHover";

const PATH = ["Objective", "Plan", "Bind", "Compile", "Execute", "Verify", "Recover", "Done"];

export function SystemOverview() {
  return (
    <section id="system" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            The system
          </p>
          <h2 className="font-display mt-5 max-w-[480px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[40px]">
            Simple on the surface. Structured underneath.
          </h2>
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.6] text-ax-text/80">
            A natural-language request is only the beginning. The system has to determine what
            needs to happen, connect the required systems, execute the work, verify the result
            and respond when something fails.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4">
            {PATH.map((step, i) => (
              <GlareHover
                key={step}
                height="auto"
                className="!h-auto"
                background={i === PATH.length - 1 ? "#123D27" : "#06110B"}
              >
                <div className="flex h-full flex-col gap-2 p-5">
                  <span className="text-[12px] font-medium tracking-[0.04em] text-ax-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="font-display text-[16px] font-medium"
                    style={{ color: i === PATH.length - 1 ? "#9FFFC0" : "#F4FFF8" }}
                  >
                    {step}
                  </p>
                </div>
              </GlareHover>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
