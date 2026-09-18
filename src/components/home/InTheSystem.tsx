import { Reveal } from "@/components/shared/Reveal";

const METRICS = [
  { value: "000", label: "tests in repo" },
  { value: "000", label: "routes" },
  { value: "000", label: "checks" },
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
              <div key={m.label}>
                <span className="font-display text-[40px] font-medium text-ax-mint sm:text-[48px]">
                  {m.value}
                </span>
                <p className="mt-2 text-[14px] text-ax-text">{m.label}</p>
                <p className="mt-1 text-[12px] text-ax-muted/60">placeholder, do not ship unverified</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
