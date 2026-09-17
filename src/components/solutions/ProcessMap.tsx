import { MediaFrame } from "@/components/frames/MediaFrame";
import { Reveal } from "@/components/shared/Reveal";
import { image } from "@/lib/media";

const STEPS = [
  { n: "01", label: "Understand", copy: "Gets the intent and context." },
  { n: "02", label: "Decide", copy: "Determines what needs to happen." },
  { n: "03", label: "Execute", copy: "Runs the work across the systems involved." },
  { n: "04", label: "Verify", copy: "Checks the result before moving forward." },
  { n: "05", label: "Recover", copy: "Responds when something goes wrong." },
];

export function ProcessMap() {
  return (
    <section id="process" className="relative bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            From intent to execution
          </p>
          <h2 className="font-display mt-5 max-w-[600px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Give ALTERX the objective. It works out the rest.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ax-mint/12" />
            <div className="flex flex-col gap-10">
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 70}>
                  <div className="relative flex items-start gap-6 pl-10">
                    <span className="absolute left-0 top-1 z-10 h-[15px] w-[15px] flex-shrink-0 rounded-full border-2 border-ax-mint bg-ax-bg-soft" />
                    <div>
                      <span className="text-[13px] font-medium tracking-[0.06em] text-ax-mint">{step.n}</span>
                      <div className="font-display mt-2 text-[20px] font-medium text-ax-white sm:text-[24px]">
                        {step.label}
                      </div>
                      <div className="mt-2 text-[14px] leading-[1.5] text-ax-muted">{step.copy}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={STEPS.length * 70}>
              <div className="mt-10 flex items-center gap-3 pl-10 text-[13px] text-ax-muted">
                <span className="h-px w-10 bg-ax-mint/40" />
                <span>Loops back to Understand</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <MediaFrame
              media={image("/hero/11_how_it_works.jpg", "", "center 60%")}
              aspect="aspect-[3/4] lg:aspect-auto lg:h-full"
              className="min-h-[360px]"
              drift
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
