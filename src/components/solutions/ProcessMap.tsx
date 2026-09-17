import { Reveal } from "@/components/shared/Reveal";

const STEPS = [
  { n: "01", label: "Understand", copy: "Gets the intent and context." },
  { n: "02", label: "Decide", copy: "Determines what needs to happen." },
  { n: "03", label: "Execute", copy: "Runs the work across the systems involved." },
  { n: "04", label: "Verify", copy: "Checks the result before moving forward." },
  { n: "05", label: "Recover", copy: "Responds when something goes wrong." },
];

export function ProcessMap() {
  return (
    <section id="process" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            From intent to execution
          </p>
          <h2 className="font-display mt-5 max-w-[600px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Give ALTERX the objective. It works out the rest.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-20 max-w-[640px] lg:mt-24">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ax-mint/12 sm:left-1/2" />

          <div className="flex flex-col gap-12">
            {STEPS.map((step, i) => {
              const alignRight = i % 2 === 1;
              return (
                <Reveal key={step.n} delay={i * 70}>
                  <div
                    className={`relative flex items-start gap-6 sm:w-1/2 ${
                      alignRight ? "sm:ml-auto sm:flex-row sm:pl-10 sm:text-left" : "sm:pr-10 sm:text-right sm:flex-row-reverse"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1 z-10 h-[15px] w-[15px] flex-shrink-0 rounded-full border-2 border-ax-mint bg-ax-bg-soft ${
                        alignRight ? "sm:-left-[8px]" : "sm:left-auto sm:-right-[8px]"
                      }`}
                    />
                    <div>
                      <span className="text-[13px] font-medium tracking-[0.06em] text-ax-mint">{step.n}</span>
                      <div className="font-display mt-2 text-[22px] font-medium text-ax-white sm:text-[26px]">
                        {step.label}
                      </div>
                      <div className="mt-2 text-[15px] leading-[1.5] text-ax-muted">{step.copy}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={STEPS.length * 70}>
            <div className="mt-14 flex items-center justify-center gap-3 text-[13px] text-ax-muted">
              <span className="h-px w-10 bg-ax-mint/40" />
              <span>Loops back to Understand when the work continues</span>
              <span className="h-px w-10 bg-ax-mint/40" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
