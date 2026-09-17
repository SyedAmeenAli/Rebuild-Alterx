import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { alterEngineDestination } from "@/content/navigation";

const FLOW = ["Objective", "Plan", "Execute", "Verify", "Recover", "Done"];

export function AlterEngineSection() {
  return (
    <section id="alter-engine" className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-ax-mint/10 lg:aspect-auto lg:h-full lg:min-h-[520px]">
              <Image
                src="/hero/11_how_it_works.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.4) 0%, rgba(2,5,4,0) 40%)" }}
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
                Alter Engine
              </p>
              <h2 className="font-display mt-5 text-balance text-[30px] leading-[1.18] tracking-[-0.015em] text-ax-white sm:text-[36px] lg:text-[40px]">
                The engine underneath the simplicity.
              </h2>
              <p className="mt-5 max-w-[420px] text-[16px] leading-[1.6] text-ax-text/80">
                ALTER ENGINE turns an objective into executable work. It plans, runs, verifies
                and recovers across the systems involved.
              </p>

              <div className="relative mt-10 pl-1">
                <div className="absolute left-[3px] top-1 bottom-1 w-px bg-ax-mint/15" />
                <div className="flex flex-col gap-5">
                  {FLOW.map((step, i) => {
                    const isDone = i === FLOW.length - 1;
                    return (
                      <div key={step} className="relative flex items-center gap-4 pl-6">
                        <span
                          className={`absolute left-0 h-[7px] w-[7px] -translate-x-1/2 rounded-full ${
                            isDone ? "bg-ax-mint" : "bg-ax-mint/40"
                          }`}
                        />
                        <span
                          className={`text-[15px] font-medium ${
                            isDone ? "text-ax-mint" : "text-ax-white/85"
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Link
                href={alterEngineDestination}
                className="mt-10 inline-flex w-fit items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
              >
                Explore Alter Engine
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
