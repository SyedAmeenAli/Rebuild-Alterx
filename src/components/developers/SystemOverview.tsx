import { Reveal } from "@/components/shared/Reveal";

const PATH = ["Objective", "Plan", "Bind", "Compile", "Execute", "Verify", "Recover", "Done"];

export function SystemOverview() {
  return (
    <section id="system" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              The system
            </p>
            <h2 className="font-display mt-5 max-w-[480px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[40px]">
              The interface is simple. The system underneath isn&apos;t.
            </h2>
            <p className="mt-6 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
              A natural-language request is only the beginning. The system has to determine what
              needs to happen, connect the required systems, execute the work, verify the result
              and respond when something fails.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative pl-1">
              <div className="absolute left-[3px] top-1 bottom-1 w-px bg-ax-mint/15" />
              <div className="flex flex-col gap-7">
                {PATH.map((step, i) => {
                  const isDone = i === PATH.length - 1;
                  return (
                    <div key={step} className="relative flex items-baseline gap-5 pl-7">
                      <span
                        className={`absolute left-0 top-[6px] h-[8px] w-[8px] -translate-x-1/2 rounded-full ${
                          isDone ? "bg-ax-mint" : "bg-ax-mint/40"
                        }`}
                      />
                      <span className="text-[13px] font-medium tracking-[0.04em] text-ax-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-[20px] font-medium sm:text-[24px] ${
                          isDone ? "text-ax-mint" : "text-ax-white"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
