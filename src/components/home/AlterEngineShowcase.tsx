import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const LABELS = ["Plan", "Orchestrate", "Execute", "Verify", "Recover"];

export function AlterEngineShowcase() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-4">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Alter Engine
            </p>
            <h2 className="font-display mt-5 text-balance text-[32px] leading-[1.15] tracking-[-0.015em] text-ax-white sm:text-[40px] lg:text-[44px]">
              The engine underneath the simplicity.
            </h2>
            <p className="mt-6 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
              ALTER ENGINE turns an objective into executable work. It plans, runs, verifies and
              recovers across the systems involved.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {LABELS.map((label) => (
                <span key={label} className="text-[13px] text-ax-muted">
                  {label}
                </span>
              ))}
            </div>

            <Link
              href="/products#alter-engine"
              className="mt-9 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore Alter Engine
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-ax-mint/10 lg:aspect-[16/11]">
              <Image
                src="/hero/11_how_it_works.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.35) 0%, rgba(2,5,4,0) 45%)" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
