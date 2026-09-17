import { Reveal } from "@/components/shared/Reveal";

export function WhyThisProblem() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <div className="mx-auto max-w-[600px] text-center">
          <Reveal>
            <h2 className="font-display text-balance text-[26px] leading-[1.3] tracking-[-0.01em] text-ax-white sm:text-[32px] lg:text-[36px]">
              Because making AI useful is only half the problem.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[16px] leading-[1.6] text-ax-muted">
              Getting a model to say the right thing is one problem. Getting a whole process to
              run, verify itself and recover when something breaks is the other, harder one —
              that&apos;s the work.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
