import { Reveal } from "@/components/shared/Reveal";

const PRINCIPLES = [
  { label: "Works with your tools", copy: "Connect the systems you already use." },
  { label: "Checks the work", copy: "Verifies results before moving forward." },
  { label: "Recovers when needed", copy: "Handles failures and keeps going." },
  { label: "Built for real operations", copy: "Designed around processes that actually matter." },
];

export function Reliability() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[560px] text-balance text-[32px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[40px] lg:text-[44px]">
            More than automation.
            <br />
            <span className="text-ax-mint">A more reliable way to operate.</span>
          </h2>
        </Reveal>

        <div className="mt-16 max-w-[760px] divide-y divide-ax-mint/10 border-t border-ax-mint/10 lg:mt-20">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.label} delay={i * 60}>
              <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                <div className="flex items-center gap-4">
                  <span className="h-[6px] w-[6px] flex-shrink-0 rounded-full bg-ax-mint" />
                  <span className="text-[17px] font-medium text-ax-white sm:text-[18px]">
                    {principle.label}
                  </span>
                </div>
                <span className="pl-[22px] text-[15px] leading-[1.5] text-ax-muted sm:max-w-[320px] sm:pl-0 sm:text-right">
                  {principle.copy}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
