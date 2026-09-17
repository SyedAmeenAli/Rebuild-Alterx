import { Reveal } from "@/components/shared/Reveal";

const PRINCIPLES = [
  { n: "01", label: "Nothing fails silently", copy: "Every run ends with an explicit result." },
  { n: "02", label: "Decisions stay controlled", copy: "Policy and recovery decisions are deterministic rather than hidden inside arbitrary model calls." },
  { n: "03", label: "Failure is diagnosed", copy: "Different failures require different responses. Nothing is blindly retried." },
  { n: "04", label: "Systems stay replaceable", copy: "External providers sit behind interfaces so they don't dictate the entire workflow." },
];

export function WhyItHoldsTogether() {
  return (
    <section id="reliability" className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Built for the real world
          </p>
          <h2 className="font-display mt-5 max-w-[560px] text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Reliability is a system, not a prompt.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-ax-mint/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <div
                className={`h-full border-b border-ax-mint/10 py-9 pr-6 sm:border-r ${
                  i % 2 === 0 ? "" : "sm:pl-8"
                } lg:border-b-0 lg:pl-8 lg:first:pl-0 lg:last:border-r-0`}
              >
                <span className="text-[13px] font-medium tracking-[0.06em] text-ax-mint">{p.n}</span>
                <div className="font-display mt-4 text-[19px] font-medium leading-[1.25] text-ax-white">
                  {p.label}
                </div>
                <p className="mt-3 text-[14px] leading-[1.6] text-ax-muted">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
