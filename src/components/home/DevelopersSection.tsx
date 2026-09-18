import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const PATH = ["Intent", "Planning", "Binding", "Execution", "Verification", "Recovery"];

export function DevelopersSection() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
            Developers
          </p>
          <h2 className="font-display mt-4 max-w-[420px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px]">
            Under the surface, there is a real system.
          </h2>
          <p className="mt-5 max-w-[420px] text-[16px] leading-[1.6] text-ax-muted">
            Intelligence handles judgment where it&apos;s needed. The execution system handles
            state, sequencing and control.
          </p>
          <Link
            href="/developers"
            className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
          >
            See how it works
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative pl-1">
            <div className="absolute left-[3px] top-1 bottom-1 w-px bg-ax-mint/15" />
            <div className="flex flex-col gap-6">
              {PATH.map((step, i) => (
                <div key={step} className="relative flex items-baseline gap-5 pl-7">
                  <span className="absolute left-0 top-[6px] h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-ax-mint/40" />
                  <span className="text-[13px] font-medium tracking-[0.04em] text-ax-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[18px] font-medium text-ax-white sm:text-[20px]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
