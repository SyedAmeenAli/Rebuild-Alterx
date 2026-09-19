import { Reveal } from "@/components/shared/Reveal";

const EXAMPLES = ["Sending a message", "Writing a record", "Approving a transaction"];

export function Verification() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Verification
          </p>
          <h2 className="font-display mt-5 max-w-[480px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Doing the work is not enough. The result has to hold.
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            Before an action reaches the outside world, the result is checked. That includes
            things like {EXAMPLES[0].toLowerCase()}, {EXAMPLES[1].toLowerCase()} or{" "}
            {EXAMPLES[2].toLowerCase()}.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[6px] border border-ax-mint bg-ax-mint/[0.06] p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/80">
                Pass
              </p>
              <p className="mt-4 text-[16px] leading-[1.6] text-ax-white">
                The check clears and execution continues to the next step.
              </p>
            </div>

            <div className="rounded-[6px] border border-dashed border-ax-mint/25 bg-ax-bg-soft/20 p-8">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-muted">
                Fail
              </p>
              <p className="mt-4 text-[16px] leading-[1.6] text-ax-text/90">
                The system recovers, asks, or stops — depending on what the failure allows.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
