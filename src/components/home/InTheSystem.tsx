import { Reveal } from "@/components/shared/Reveal";
import { CountUp } from "@/components/shared/CountUp";

const METRICS = [
  { value: 186, label: "tests in repo" },
  { value: 42, label: "routes" },
  { value: 97, label: "checks" },
];

export function InTheSystem() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[40px]">
            In the system
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {METRICS.map((m) => (
              <div key={m.label} className="group rounded-[6px] border border-transparent p-2 -m-2 transition-colors duration-300 hover:border-ax-mint/15 hover:bg-ax-mint/[0.03]">
                <CountUp
                  target={m.value}
                  className="font-display text-[40px] font-medium text-ax-mint transition-transform duration-300 group-hover:scale-105 sm:text-[48px]"
                />
                <p className="mt-2 text-[14px] text-ax-text">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
