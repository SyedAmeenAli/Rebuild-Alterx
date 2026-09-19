import { Reveal } from "@/components/shared/Reveal";
import GlareHover from "@/components/shared/GlareHover";

const STAGES = [
  {
    label: "Intent parsing",
    copy: "Turns a plain-language request into structured intent: what needs to happen, what information matters, and what constraints apply.",
  },
  {
    label: "Planning",
    copy: "Turns that intent into an ordered execution plan, representing dependencies between steps instead of treating them as isolated actions.",
  },
  {
    label: "Tool binding",
    copy: "Maps each planned action to the systems, credentials, and capabilities required to perform it.",
  },
  {
    label: "Durable execution",
    copy: "Keeps progress and state through the workflow. A step can continue from recorded state instead of starting from zero.",
  },
  {
    label: "Verification",
    copy: "Checks the result before execution is considered complete.",
  },
  {
    label: "Recovery",
    copy: "Handles failures as part of the execution path. A failed step is classified and followed by an available recovery path.",
  },
  {
    label: "Memory",
    copy: "Preserves relevant state where needed across the execution lifecycle.",
  },
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
          <p className="mt-5 max-w-[600px] text-[16px] leading-[1.6] text-ax-text/80">
            Intent, plan, bind, execute, verify, recover — a controlled execution pipeline, not a
            raw prompt-response loop.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {STAGES.map((s, i) => (
              <GlareHover
                key={s.label}
                height="auto"
                className={`!h-auto${i === STAGES.length - 1 ? " sm:col-span-2 lg:col-span-1" : ""}`}
                glass
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

                  <p className="text-[13px] leading-[1.55] text-ax-muted">{s.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
