import { Reveal } from "@/components/shared/Reveal";

const THEMES = ["Small team", "High ownership", "Technical depth", "Clear reasoning", "Strong product and design collaboration"];

export function HowWeWork() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            How we work
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-3">
            {THEMES.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-ax-mint/20 px-4 py-2 text-[14px] text-ax-text/85"
              >
                {theme}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
