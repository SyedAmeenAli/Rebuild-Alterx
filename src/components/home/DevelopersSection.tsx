"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

const LAYERS = [
  {
    key: "planning",
    file: "planning.ts",
    label: "Planning",
    copy: "Structured intention sequence.",
    code: ["alter.core.plan(mission)", "  // Structured intention sequence.", "  return plan.steps"],
  },
  {
    key: "binding",
    file: "binding.ts",
    label: "Binding",
    copy: "Tool and credential mapping.",
    code: ["alter.core.bind(plan)", "  // Tool and credential mapping.", "  return plan.bound"],
  },
  {
    key: "execution",
    file: "execution.ts",
    label: "Durable execution",
    copy: "Engine-level progress checkpointing.",
    code: ["alter.core.execute(plan)", "  // Engine-level progress checkpointing.", "  return run.state"],
  },
  {
    key: "verification",
    file: "verify.ts",
    label: "Verification",
    copy: "Output integrity review.",
    code: ["alter.core.verify(result)", "  // Output integrity review.", "  return result.checked"],
  },
  {
    key: "recovery",
    file: "recover.ts",
    label: "Recovery",
    copy: "Self-correcting failover branches.",
    code: ["alter.core.recover(failure)", "  // Self-correcting failover branches.", "  return run.continued"],
  },
  {
    key: "memory",
    file: "memory.ts",
    label: "Memory",
    copy: "State archival across sessions.",
    code: ["alter.core.memory(session)", "  // State archival across sessions.", "  return session.archived"],
  },
] as const;

export function DevelopersSection() {
  const [selected, setSelected] = useState(0);
  const active = LAYERS[selected];

  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            {/* receding, slightly slanted stack behind the active panel */}
            <div
              aria-hidden="true"
              className="absolute inset-0 origin-bottom-left rounded-[6px] border border-ax-mint/[0.06] bg-ax-black/30"
              style={{ transform: "rotate(-1.4deg) translate(10px, 10px)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 origin-bottom-left rounded-[6px] border border-ax-mint/10 bg-ax-black/45"
              style={{ transform: "rotate(-0.7deg) translate(5px, 5px)" }}
            />

            <div className="relative rounded-[6px] border border-ax-mint/25 bg-ax-black/70 p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-ax-mint/10 pb-4">
                <p className="text-[12px] font-medium text-ax-text">{active.file}</p>
                <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-ax-mint/60">
                  Alter core
                </span>
              </div>

              <div key={active.key} className="dev-panel-fade mt-5 flex flex-col gap-1.5">
                {active.code.map((line, i) => (
                  <p key={i} className="font-mono text-[13px] leading-[1.7] text-ax-text/85">
                    {i === 1 ? (
                      <span className="text-ax-muted/60">{line}</span>
                    ) : i === 0 ? (
                      <>
                        <span className="text-ax-mint">{line.split("(")[0]}</span>
                        {"(" + line.split("(")[1]}
                      </>
                    ) : (
                      <span className="text-ax-text/70">{line}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Developers
            </p>
            <h2 className="font-display mt-5 max-w-[440px] text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[40px]">
              Built so work cannot quietly fail.
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-[1.6] text-ax-muted">
              v1 is a managed service. This is how execution is held — not a public signup.
            </p>

            <div className="mt-9 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
              {LAYERS.map((l, i) => {
                const isSelected = i === selected;
                return (
                  <button
                    key={l.key}
                    onClick={() => setSelected(i)}
                    aria-pressed={isSelected}
                    className="group relative grid grid-cols-[160px_1fr] items-baseline gap-6 px-2 py-3.5 -mx-2 text-left transition-colors duration-200 hover:bg-ax-mint/[0.04]"
                  >
                    <span
                      className="absolute left-0 top-1/2 h-[60%] w-[2px] -translate-y-1/2 transition-colors duration-200"
                      style={{ backgroundColor: isSelected ? "#32C97A" : "transparent" }}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[10px] font-medium text-ax-muted/50">{l.file}</span>
                      <span
                        className="text-[14px] font-medium transition-colors duration-200"
                        style={{ color: isSelected ? "#9FFFC0" : "#E8F7EE" }}
                      >
                        {l.label}
                      </span>
                    </span>
                    <span className="text-[14px] leading-[1.5] text-ax-muted">{l.copy}</span>
                  </button>
                );
              })}
            </div>

            <p className="mt-6 max-w-[420px] text-[13px] leading-[1.6] text-ax-muted/80">
              Operators describe work in plain language. Engineers can see how it is held.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
