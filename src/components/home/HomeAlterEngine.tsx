import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { alterEngineDestination } from "@/content/navigation";

const LAYERS = ["Plan", "Bind", "Execute", "Verify", "Recover"];

export function HomeAlterEngine() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1fr] lg:items-center lg:gap-0">
        <Reveal>
          <div className="lg:pr-10">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/70">
              Alter Engine
            </p>
            <h2 className="font-display mt-4 max-w-[360px] text-balance text-[28px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[34px]">
              The execution system beneath ALTERX.
            </h2>
            <p className="mt-5 max-w-[380px] text-[16px] leading-[1.6] text-ax-muted">
              It plans, binds, runs, verifies, and recovers. Work does not disappear into a
              chat.
            </p>
            <Link
              href={alterEngineDestination}
              className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ax-mint transition-colors hover:text-ax-emerald"
            >
              Explore Alter Engine
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="group relative -ml-0 lg:-ml-16">
            <div className="relative flex flex-col gap-1.5 rounded-[4px] border border-ax-mint/10 bg-ax-black p-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
              {LAYERS.map((layer, i) => (
                <div
                  key={layer}
                  className="flex items-center justify-between rounded-[3px] border border-ax-mint/10 px-6 py-5"
                  style={{ backgroundColor: `rgba(50, 201, 122, ${0.05 + i * 0.03})` }}
                >
                  <span className="font-display text-[16px] font-medium text-ax-white sm:text-[18px]">
                    {layer}
                  </span>
                  <span className="text-[12px] font-medium tracking-[0.06em] text-ax-mint/60">
                    {String(i + 1).padStart(2, "0")}
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
