import { Reveal } from "@/components/shared/Reveal";

const RESPONSES = ["Recover", "Wait", "Ask", "Stop"];

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
            Not every failure is the same. A rate limit, a crashed sandbox and a wrong model
            response call for different handling. The architecture classifies failures and
            chooses a response through explicit policy, rather than blindly retrying everything.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 flex flex-col items-center gap-8 rounded-[6px] border border-ax-mint/10 bg-ax-black/40 px-6 py-14 lg:mt-20 lg:px-10 lg:py-16">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-ax-mint/20 px-5 py-2 text-[14px] font-medium text-ax-text/80">
                Failure
              </span>
              <span aria-hidden="true" className="text-ax-mint/40">→</span>
              <span className="rounded-full border border-ax-mint/40 px-5 py-2 text-[14px] font-medium text-ax-white">
                Identify
              </span>
              <span aria-hidden="true" className="text-ax-mint/40">→</span>
              <span className="rounded-full border border-ax-mint bg-ax-mint/10 px-5 py-2 text-[14px] font-medium text-ax-mint">
                Choose response
              </span>
            </div>

            <span aria-hidden="true" className="text-ax-mint/40">↓</span>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {RESPONSES.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-ax-mint/25 px-5 py-2 text-[14px] font-medium text-ax-text/85"
                >
                  {r}
                </span>
              ))}
            </div>

            <span aria-hidden="true" className="text-ax-mint/40">↓</span>

            <span className="rounded-full bg-ax-mint px-6 py-2.5 text-[14px] font-medium text-ax-black">
              Continue
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
