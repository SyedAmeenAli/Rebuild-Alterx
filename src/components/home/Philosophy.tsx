import { Reveal } from "@/components/shared/Reveal";

export function Philosophy() {
  return (
    <section className="relative bg-ax-bg-soft py-32 lg:py-44">
      <div className="container-ax">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <p className="font-display text-balance text-[26px] leading-[1.3] tracking-[-0.01em] text-ax-white sm:text-[34px] lg:text-[40px]">
              Easy to show AI doing something once.
              <br />
              Harder to trust it with work that matters.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-[16px] text-ax-muted">
              That is the part ALTERX is being built around.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
