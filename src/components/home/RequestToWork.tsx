import { Reveal } from "@/components/shared/Reveal";

const STEPS = ["Request", "Plan", "Execute"];

export function RequestToWork() {
  return (
    <section id="how" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[620px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            You describe the work. ALTERX handles the workflow.
          </h2>
          <p className="mt-5 max-w-[480px] text-[16px] leading-[1.6] text-ax-text/80">
            You don&apos;t need to build the process yourself. Start with what you need to
            happen.
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="container-ax mt-14 lg:mt-16">
          <div className="relative flex aspect-[21/9] items-center justify-center rounded-[10px] border border-ax-mint/10 bg-ax-bg-soft/40 px-10">
            <div className="relative flex w-full max-w-[640px] items-center justify-between">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ax-mint/20" aria-hidden="true" />
              {STEPS.map((step) => (
                <div key={step} className="relative z-10 flex flex-col items-center gap-3 bg-ax-bg-soft/40 px-3">
                  <span className="h-3 w-3 rounded-full border-2 border-ax-mint bg-ax-black" />
                  <span className="text-[13px] font-medium text-ax-text/80">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
