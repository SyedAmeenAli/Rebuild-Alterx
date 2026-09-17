import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const STAGES = ["Intent", "Planning", "Execution", "Verification", "Outcome"];

export function IntentToImpact() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div className="absolute inset-0">
        <Image
          src="/hero/02_solutions_hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,5,4,0.92) 0%, rgba(2,5,4,0.55) 30%, rgba(2,5,4,0.55) 70%, rgba(2,5,4,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            From intent to impact
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display mt-5 max-w-[820px] text-balance text-[34px] leading-[1.12] tracking-[-0.02em] text-ax-white sm:text-[44px] lg:text-[52px]">
            Give ALTERX a goal. It works out what needs to happen and turns the objective into real work.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-20 lg:mt-28">
            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div
                className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px sm:block"
                style={{ background: "var(--ax-gradient-edge)" }}
              />
              {STAGES.map((stage, i) => (
                <div key={stage} className="relative flex items-start gap-3 sm:flex-col sm:items-start sm:gap-4">
                  <span
                    className={`relative z-10 mt-[2px] h-[15px] w-[15px] flex-shrink-0 rounded-full border ${
                      i === STAGES.length - 1
                        ? "border-ax-mint bg-ax-mint"
                        : "border-ax-mint/50 bg-ax-black"
                    }`}
                  />
                  <div>
                    <div className="text-[11px] font-medium tracking-[0.08em] text-ax-mint/70">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[16px] font-medium text-ax-white">{stage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
