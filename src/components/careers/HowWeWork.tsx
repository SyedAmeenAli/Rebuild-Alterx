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
          <div className="mt-8 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10 sm:flex-row sm:divide-x sm:divide-y-0">
            {THEMES.map((theme) => (
              <span
                key={theme}
                className="py-4 font-display text-[17px] font-medium text-ax-white sm:flex-1 sm:px-6 sm:py-0 sm:text-[16px] sm:leading-[1.4] first:sm:pl-0"
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
