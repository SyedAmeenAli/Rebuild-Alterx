import { Reveal } from "@/components/shared/Reveal";

const SUCCESS_PATH = ["Execute", "Verify", "Continue"];
const FAILURE_PATH = ["Fail", "Classify", "Respond", "Recover"];

export function WhyAlterx() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="font-display mx-auto max-w-[520px] text-balance text-center text-[28px] leading-[1.25] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[42px]">
            Successful execution isn&apos;t enough.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-center gap-10 lg:mt-16">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {SUCCESS_PATH.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span
                    className={`rounded-full border px-5 py-2 text-[14px] font-medium ${
                      i === SUCCESS_PATH.length - 1
                        ? "border-ax-mint bg-ax-mint text-ax-black"
                        : "border-ax-mint/25 text-ax-text/85"
                    }`}
                  >
                    {step}
                  </span>
                  {i < SUCCESS_PATH.length - 1 && (
                    <span aria-hidden="true" className="text-ax-mint/40">→</span>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[13px] text-ax-muted">If something changes —</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {FAILURE_PATH.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-ax-mint/20 px-5 py-2 text-[14px] font-medium text-ax-text/80">
                    {step}
                  </span>
                  {i < FAILURE_PATH.length - 1 && (
                    <span aria-hidden="true" className="text-ax-mint/40">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
