import { Reveal } from "@/components/shared/Reveal";

const EXAMPLES = [
  {
    n: "01",
    label: "Lead qualification",
    steps: ["A request arrives.", "Relevant context is checked.", "The lead is classified.", "The next action happens."],
  },
  {
    n: "02",
    label: "Order coordination",
    steps: ["An order needs information from multiple systems.", "ALTERX coordinates the process and checks the result."],
  },
  {
    n: "03",
    label: "Reporting",
    steps: ["Information is collected,", "processed,", "checked,", "and delivered as a completed result."],
  },
];

export function ExampleWork() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Put it to work
          </p>
          <h2 className="font-display mt-5 max-w-[600px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Some work is simple to automate. Some work needs a system.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-ax-mint/10 pt-12 sm:grid-cols-3 sm:gap-8 lg:mt-20">
          {EXAMPLES.map((ex, i) => (
            <Reveal key={ex.n} delay={i * 90}>
              <span className="text-[13px] font-medium tracking-[0.06em] text-ax-mint">
                Example {ex.n}
              </span>
              <h3 className="font-display mt-3 text-[22px] font-medium text-ax-white">{ex.label}</h3>
              <div className="mt-4 flex flex-col gap-1.5">
                {ex.steps.map((step, si) => (
                  <p key={si} className="text-[14px] leading-[1.55] text-ax-muted">
                    {step}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 max-w-[520px] text-[13px] leading-[1.6] text-ax-muted/70">
          Illustrative examples of the process classes ALTERX is designed around, not a record of
          current deployments.
        </p>
      </div>
    </section>
  );
}
