import { Reveal } from "@/components/shared/Reveal";

export function Vision() {
  return (
    <section id="mission" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Where we&apos;re going
          </p>
          <h2 className="font-display mt-5 max-w-[640px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[40px]">
            Describe the outcome. Let the system handle the rest.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            We&apos;re building toward a system where a business can describe an outcome and
            trust it to design, run and maintain what&apos;s needed to reach it — improving from
            verified results and controlled policy, not by quietly rewriting itself in
            production. That&apos;s the direction, not a claim about what exists today.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
