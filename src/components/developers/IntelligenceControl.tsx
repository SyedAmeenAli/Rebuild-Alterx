import { Reveal } from "@/components/shared/Reveal";

export function IntelligenceControl() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Designed separately
          </p>
          <h2 className="font-display mt-5 max-w-[600px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Intelligence can change. Control still needs to hold.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            Models can make intelligent decisions, but the parts responsible for policy, state,
            verification and recovery don&apos;t depend on unpredictable model behavior. Policy
            and recovery decisions sit in a deterministic control plane, separate from the model
            calls.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
