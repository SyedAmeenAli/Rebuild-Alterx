import { Reveal } from "@/components/shared/Reveal";
import GlareHover from "@/components/shared/GlareHover";

const PATH = [
  {
    label: "Intent",
    copy: "ALTER ENGINE starts with an intent representation rather than a raw prompt-response loop.",
  },
  {
    label: "Plan",
    copy: "The planner converts intent into structured steps with dependencies, constraints, and expected outcomes.",
  },
  {
    label: "Bind",
    copy: "Binding resolves each step to the tool, credential, or external system required for execution.",
  },
  {
    label: "Execute",
    copy: "The execution layer persists state and progress so work can survive interruptions.",
  },
  {
    label: "Verify",
    copy: "Verification runs before completion is recorded, comparing expected and observed outcomes rather than trusting generation alone.",
  },
  {
    label: "Recover",
    copy: "When execution fails, recovery logic classifies the failure and selects an available path forward.",
  },
  {
    label: "Memory",
    copy: "Relevant state is retained as memory across the execution lifecycle.",
  },
];

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
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            A controlled execution pipeline, not a raw prompt-response loop: intent, plan, bind,
            execute, verify, recover.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {PATH.map((step, i) => (
              <GlareHover
                key={step.label}
                height="auto"
                className={`!h-auto${i === PATH.length - 1 ? " sm:col-span-2 lg:col-span-1" : ""}`}
                glass
              >
                <div className="flex h-full flex-col gap-2 p-5">
                  <span className="text-[12px] font-medium tracking-[0.04em] text-ax-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="font-display text-[16px] font-medium"
                    style={{ color: i === PATH.length - 1 ? "#9FFFC0" : "#F4FFF8" }}
                  >
                    {step.label}
                  </p>
                  <p className="text-[13px] leading-[1.55] text-ax-muted">{step.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
