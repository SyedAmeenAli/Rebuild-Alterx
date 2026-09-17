import { Reveal } from "@/components/shared/Reveal";

const FLOW = ["Sale", "Local action", "Offline", "Sync", "Back office"];

export function AxInventoryPos() {
  return (
    <section className="relative bg-ax-bg-soft py-20 lg:py-28">
      <div className="container-ax">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                Point of sale
              </p>
              <h2 className="font-display mt-5 max-w-[420px] text-balance text-[24px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[28px]">
                The till is designed to keep working when the internet drops, then sync later.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
              {FLOW.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full border border-ax-mint/25 px-4 py-2 text-[13px] font-medium text-ax-text/85">
                    {step}
                  </span>
                  {i < FLOW.length - 1 && (
                    <span aria-hidden="true" className="text-ax-mint/50">→</span>
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
