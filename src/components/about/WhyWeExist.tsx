import { Reveal } from "@/components/shared/Reveal";

export function WhyWeExist() {
  return (
    <section id="story" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <div className="flex gap-8 lg:gap-14">
          <div className="hidden w-px flex-shrink-0 bg-ax-mint/20 sm:block" />
          <div className="max-w-[680px]">
            <Reveal>
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                Why we exist
              </p>
              <h2 className="font-display mt-5 text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
                AI can produce an answer. Real work needs something more.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-[17px] leading-[1.6] text-ax-text/80">
                Powerful models already exist. The harder problem is making an entire process
                keep working once real systems, context, failures and decisions are involved.
                That is the part ALTERX is built around.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
