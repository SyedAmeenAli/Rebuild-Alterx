import { Reveal } from "@/components/shared/Reveal";

const PATH = [
  { label: "Start", state: "normal" },
  { label: "Step 01", state: "normal" },
  { label: "Step 02", state: "normal" },
  { label: "Interruption", state: "fault" },
  { label: "Resume", state: "recover" },
  { label: "Step 03", state: "normal" },
  { label: "Done", state: "done" },
] as const;

export function DurableExecution() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Execution
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Work should not disappear when something stops.
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            Long-running work needs durable state. If an interruption happens during execution,
            the process can continue from its stored state rather than disappearing.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {PATH.map((step) => (
              <span
                key={step.label}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${
                  step.state === "fault"
                    ? "border-ax-mint/60 text-ax-mint"
                    : step.state === "recover"
                      ? "border-ax-mint/40 text-ax-white"
                      : step.state === "done"
                        ? "border-ax-mint bg-ax-mint text-ax-black"
                        : "border-ax-mint/20 text-ax-text/80"
                }`}
              >
                {step.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
