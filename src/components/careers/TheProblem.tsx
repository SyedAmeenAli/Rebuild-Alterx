import { Reveal } from "@/components/shared/Reveal";

export function TheProblem() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[560px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[40px]">
            It&apos;s not another AI wrapper.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            The work sits at the intersection of AI, systems, execution, reliability and product
            design — planning, verification, recovery and the interface that keeps all of it
            simple for the person using it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
