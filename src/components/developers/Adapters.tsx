import { Reveal } from "@/components/shared/Reveal";

const NODES = [
  { label: "Model", top: 8, left: 50 },
  { label: "Search", top: 27, left: 86.6 },
  { label: "Messaging", top: 73, left: 86.6 },
  { label: "Payments", top: 92, left: 50 },
  { label: "Data", top: 73, left: 13.4 },
  { label: "Other systems", top: 27, left: 13.4 },
];

export function Adapters() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Adapters
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Your systems shouldn&apos;t dictate the architecture.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-ax-text/80">
            External providers sit behind interfaces ALTERX owns. A provider can change without
            rewriting the planning, execution or verification system around it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 rounded-[6px] border border-ax-mint/10 bg-ax-bg-soft/40 px-6 py-14 lg:mt-20 lg:px-10 lg:py-20">
            <div className="relative mx-auto aspect-square w-full max-w-[480px]">
              <svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {NODES.map((n) => (
                  <line
                    key={n.label}
                    x1={50}
                    y1={50}
                    x2={n.left}
                    y2={n.top}
                    stroke="rgba(159,255,192,0.16)"
                    strokeWidth={0.4}
                  />
                ))}
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[6px] border border-ax-mint bg-ax-mint/10 px-5 py-3 text-center font-display text-[15px] font-medium text-ax-mint sm:text-[16px]">
                Alter Engine
              </div>

              {NODES.map((n, i) => (
                <Reveal key={n.label} delay={140 + i * 60}>
                  <span
                    className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-ax-mint/20 bg-ax-black px-3 py-1.5 text-center text-[11px] font-medium text-ax-text/80 sm:px-4 sm:text-[13px]"
                    style={{ top: `${n.top}%`, left: `${n.left}%` }}
                  >
                    {n.label}
                  </span>
                </Reveal>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-[420px] text-center text-[13px] leading-[1.6] text-ax-muted lg:mt-14">
              The center stays stable. The outer systems can change.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
