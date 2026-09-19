import { Reveal } from "@/components/shared/Reveal";

const BRANCHES = ["Wait", "Recover", "Ask"];

export function FailureHandling() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            When something goes wrong
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[42px]">
            Failure is information.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            Different failures need different responses. A rate limit, a crashed sandbox and a
            wrong model response call for different handling — the process classifies the failure
            first, then chooses to wait, recover, or ask, before continuing.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {BRANCHES.map((b) => (
              <span
                key={b}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${
                  b === "Recover" ? "border-ax-mint bg-ax-mint/10 text-ax-mint" : "border-ax-mint/25 text-ax-text/85"
                }`}
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
