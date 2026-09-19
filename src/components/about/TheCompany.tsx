import { Reveal } from "@/components/shared/Reveal";

export function TheCompany() {
  return (
    <section id="company" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <div className="mx-auto max-w-[600px] text-center">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              ALTERX
            </p>
            <h2 className="font-display mt-5 text-balance text-[28px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[36px] lg:text-[40px]">
              A small team. One difficult problem.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[16px] leading-[1.6] text-ax-muted">
              ALTERX is a small engineering team focused on making autonomous execution
              trustworthy enough for a business to hand it a process that matters.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[14px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
              Outcome first. Governed by design. Proven in use.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
