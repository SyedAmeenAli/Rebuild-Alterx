import { Reveal } from "@/components/shared/Reveal";

const CHAIN = [
  { label: "Working", x: 50, y: 6 },
  { label: "Problem", x: 50, y: 26 },
  { label: "Identify", x: 50, y: 46 },
];
const DECISION = { x: 50, y: 60 };
const BRANCHES = [
  { label: "Wait", x: 18, y: 82 },
  { label: "Recover", x: 50, y: 82 },
  { label: "Ask", x: 82, y: 82 },
];
const CONTINUE = { label: "Continue", x: 50, y: 100 };

export function FailureHandling() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            When something goes wrong
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[42px]">
            Failure is information.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            Different failures need different responses. Not every failure is the same. A rate
            limit, a crashed sandbox and a wrong model response call for different handling.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 rounded-[6px] border border-ax-mint/10 bg-ax-black/40 px-6 py-14 lg:mt-20 lg:px-10 lg:py-16">
            <div className="relative mx-auto aspect-[5/4] w-full max-w-[460px] sm:aspect-[3/2]">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <line x1={50} y1={6} x2={50} y2={46} stroke="rgba(159,255,192,0.2)" strokeWidth={0.4} />
                <line x1={50} y1={46} x2={50} y2={60} stroke="rgba(159,255,192,0.2)" strokeWidth={0.4} />
                {BRANCHES.map((b) => (
                  <line key={b.label} x1={DECISION.x} y1={DECISION.y} x2={b.x} y2={b.y} stroke="rgba(159,255,192,0.25)" strokeWidth={0.4} />
                ))}
                <line x1={50} y1={82} x2={50} y2={100} stroke="rgba(159,255,192,0.35)" strokeWidth={0.5} />
              </svg>

              {CHAIN.map((n) => (
                <span
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-ax-mint/25 bg-ax-bg-soft px-4 py-1.5 text-[13px] font-medium text-ax-text/85"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  {n.label}
                </span>
              ))}

              <span
                className="absolute h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ax-mint bg-ax-black"
                style={{ left: `${DECISION.x}%`, top: `${DECISION.y}%` }}
                aria-hidden="true"
              />

              {BRANCHES.map((b) => (
                <span
                  key={b.label}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-4 py-1.5 text-[13px] font-medium ${
                    b.label === "Recover"
                      ? "border-ax-mint bg-ax-mint/10 text-ax-mint"
                      : "border-ax-mint/25 text-ax-text/85"
                  }`}
                  style={{ left: `${b.x}%`, top: `${b.y}%` }}
                >
                  {b.label}
                </span>
              ))}

              <span
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ax-mint px-5 py-2 text-[13px] font-medium text-ax-black"
                style={{ left: `${CONTINUE.x}%`, top: `${CONTINUE.y}%` }}
              >
                {CONTINUE.label}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
