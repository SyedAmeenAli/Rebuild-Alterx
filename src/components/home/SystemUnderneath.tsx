import { Reveal } from "@/components/shared/Reveal";

const CARDS = [
  { label: "Understand", copy: "Reads what you want in normal language.", col: "lg:col-span-4", h: "lg:min-h-[140px]" },
  { label: "Plan", copy: "Breaks it into a path.", col: "lg:col-span-5", h: "lg:min-h-[140px]" },
  { label: "Connect", copy: "Hooks the tools the work needs.", col: "lg:col-span-3", h: "lg:min-h-[140px]" },
  { label: "Do", copy: "Runs the steps and keeps a record.", col: "lg:col-span-6", h: "lg:min-h-[190px]", active: true },
  { label: "Check", copy: "Looks at the result before it is finished.", col: "lg:col-span-3", h: "lg:min-h-[190px]" },
  { label: "Recover", copy: "If something fails, it classifies and continues.", col: "lg:col-span-3", h: "lg:min-h-[190px]" },
];

export function SystemUnderneath() {
  return (
    <section id="engine" className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Alter Engine
          </p>
          <h2 className="font-display mt-5 max-w-[640px] text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[44px] lg:text-[52px]">
            The system that runs the work.
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.6] text-ax-muted">
            You do not build the workflow. The engine does.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
            {CARDS.map((c) => (
              <div
                key={c.label}
                className={`relative flex min-h-[150px] flex-col justify-between rounded-[6px] border p-6 ${c.col} ${c.h} ${
                  c.active ? "border-ax-mint bg-ax-mint/[0.06]" : "border-ax-mint/10 bg-ax-surface/40"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-display text-[17px] font-medium uppercase tracking-[0.02em] ${
                      c.active ? "text-ax-mint" : "text-ax-text"
                    }`}
                  >
                    {c.label}
                  </span>
                  {c.active && (
                    <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-ax-mint/70">
                      Active state
                    </span>
                  )}
                </div>
                <span className="mt-4 max-w-[260px] text-[14px] leading-[1.5] text-ax-muted">{c.copy}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
