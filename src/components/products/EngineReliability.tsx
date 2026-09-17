import { Reveal } from "@/components/shared/Reveal";

const PRINCIPLES = [
  { label: "Checks the work", copy: "The result is checked before an important action proceeds." },
  { label: "Doesn't lose its place", copy: "Long-running work can continue after interruption." },
  { label: "Diagnoses failure", copy: "Different failures require different responses rather than blindly retrying everything." },
  { label: "Knows when to ask", copy: "Human approval can be part of the process when a decision requires it." },
];

export function EngineReliability() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[540px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px] lg:text-[38px]">
            Built to finish. Or tell you why it couldn&apos;t.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 border-t border-ax-mint/10 sm:grid-cols-2 lg:mt-16">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.label} delay={i * 70}>
              <div className="border-b border-ax-mint/10 py-7">
                <div className="text-[17px] font-medium text-ax-white">{p.label}</div>
                <p className="mt-2 max-w-[320px] text-[14px] leading-[1.6] text-ax-muted">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
