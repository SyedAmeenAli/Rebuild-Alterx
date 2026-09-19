import { Reveal } from "@/components/shared/Reveal";
import GlareHover from "@/components/shared/GlareHover";

const STAGES = [
  { label: "Objective", copy: null },
  { label: "Plan", copy: null },
  { label: "Execute", copy: null },
  { label: "Verify", copy: "Result checked." },
  { label: "Recover", copy: "Continues after interruption." },
  { label: "Done", copy: null },
] as const;

export function EngineInOneView() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Engine, in one view
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Complicated underneath. Understandable from here.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-3">
            {STAGES.map((s, i) => (
              <GlareHover
                key={s.label}
                height="auto"
                className="!h-auto"
                background={i === STAGES.length - 1 ? "#123D27" : "#06110B"}
              >
                <div className="flex h-full flex-col gap-2 p-5">
                  <span className="text-[12px] font-medium tracking-[0.04em] text-ax-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="font-display text-[16px] font-medium"
                    style={{ color: i === STAGES.length - 1 ? "#9FFFC0" : "#F4FFF8" }}
                  >
                    {s.label}
                  </p>
                  {s.copy && <p className="text-[13px] leading-[1.5] text-ax-muted">{s.copy}</p>}
                </div>
              </GlareHover>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
