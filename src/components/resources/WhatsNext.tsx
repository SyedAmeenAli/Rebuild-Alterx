import { Reveal } from "@/components/shared/Reveal";
import GlareHover from "@/components/shared/GlareHover";

const DIRECTIONS = [
  {
    label: "Browser control",
    copy: "Allowing execution to reach work that happens inside the web, not only through structured integrations.",
  },
  {
    label: "Voice",
    copy: "Making it possible to describe work through conversation and move from spoken intent into execution.",
  },
  {
    label: "Embedded execution layer",
    copy: "Extending how planning, action, verification, and recovery can work together underneath ALTERX.",
  },
];

export function WhatsNext() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What&apos;s next
          </p>
          <h2 className="font-display mt-5 max-w-[520px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[30px]">
            We&apos;re continuing to expand what ALTERX can work with.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {DIRECTIONS.map((d) => (
              <GlareHover key={d.label} height="auto" className="!h-auto" glass>
                <div className="flex h-full flex-col gap-2 p-6">
                  <p className="font-display text-[17px] font-medium text-ax-white">{d.label}</p>
                  <p className="text-[14px] leading-[1.6] text-ax-muted">{d.copy}</p>
                </div>
              </GlareHover>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-[560px] text-[13px] leading-[1.6] text-ax-muted/70">
            These are directions we&apos;re exploring and building toward, not promises tied to a
            specific release date.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
