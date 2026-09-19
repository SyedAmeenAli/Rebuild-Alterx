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
                Getting useful work done is different from generating a useful answer.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 text-[17px] leading-[1.6] text-ax-text/80">
                ALTERX exists because of that gap. We are interested in systems that can
                understand an outcome, work through the steps required, deal with real-world
                dependencies, and check what happened.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
