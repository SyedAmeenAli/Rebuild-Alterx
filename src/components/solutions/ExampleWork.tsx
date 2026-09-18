import { Reveal } from "@/components/shared/Reveal";

const EXAMPLES = [
  {
    n: "01",
    label: "A lead arrives",
    copy: "The process can understand the request, apply the relevant information, and move the lead to the next step.",
  },
  {
    n: "02",
    label: "An order moves",
    copy: "Information needs to move across systems without losing context.",
  },
  {
    n: "03",
    label: "A report needs to finish",
    copy: "Information is collected, processed, checked, and delivered.",
  },
];

export function ExampleWork() {
  return (
    <section className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Put it to work
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col border-t border-ax-mint/10">
          {EXAMPLES.map((ex, i) => (
            <Reveal key={ex.n} delay={i * 90}>
              <div className="flex flex-col gap-3 border-b border-ax-mint/10 py-9 sm:flex-row sm:items-baseline sm:gap-10">
                <span className="text-[13px] font-medium tracking-[0.06em] text-ax-mint sm:w-10 sm:flex-shrink-0">
                  {ex.n}
                </span>
                <h3 className="font-display text-[22px] font-medium text-ax-white sm:w-[280px] sm:flex-shrink-0 sm:text-[26px]">
                  {ex.label}
                </h3>
                <p className="max-w-[440px] text-[15px] leading-[1.6] text-ax-muted">{ex.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-[520px] text-[13px] leading-[1.6] text-ax-muted/70">
          Illustrative examples of the kinds of work ALTERX is designed around.
        </p>
      </div>
    </section>
  );
}
