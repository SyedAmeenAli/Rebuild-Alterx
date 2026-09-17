import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const PATH = [
  { label: "Start", state: "normal" },
  { label: "Step 01", state: "normal" },
  { label: "Step 02", state: "normal" },
  { label: "Interruption", state: "fault" },
  { label: "Resume", state: "recover" },
  { label: "Step 03", state: "normal" },
  { label: "Done", state: "done" },
] as const;

export function DurableExecution() {
  return (
    <section className="relative overflow-hidden bg-ax-bg-soft py-28 lg:py-36">
      <div className="container-ax">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-ax-mint/10 lg:aspect-auto lg:h-full lg:min-h-[440px]">
              <Image
                src="/hero/11_how_it_works.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
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
                Execution
              </p>
              <h2 className="font-display mt-5 max-w-[440px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px]">
                Work that keeps its place.
              </h2>
              <p className="mt-5 max-w-[440px] text-[16px] leading-[1.6] text-ax-text/80">
                Long-running work needs durable state. If an interruption happens during
                execution, the process can continue from its stored state rather than
                disappearing.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-3">
                {PATH.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2">
                    <span
                      className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${
                        step.state === "fault"
                          ? "border-ax-mint/60 text-ax-mint"
                          : step.state === "recover"
                            ? "border-ax-mint/40 text-ax-white"
                            : step.state === "done"
                              ? "border-ax-mint bg-ax-mint text-ax-black"
                              : "border-ax-mint/20 text-ax-text/80"
                      }`}
                    >
                      {step.label}
                    </span>
                    {i < PATH.length - 1 && (
                      <span aria-hidden="true" className="text-ax-mint/40">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
