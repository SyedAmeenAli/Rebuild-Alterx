import { Reveal } from "@/components/shared/Reveal";

export function EngineWhyItExists() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[640px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            The hard part isn&apos;t one step. It&apos;s keeping the whole job together.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-ax-text/80">
            A process can fail because of ambiguity, stale context, an external API problem,
            malformed data or another failure between steps. ALTER ENGINE is designed around
            durable execution, verification, recovery and controlled decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
