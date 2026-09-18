import { Reveal } from "@/components/shared/Reveal";

const MANIFEST = [
  { n: "01", code: "alter.core.plan()" },
  { n: "02", code: "alter.core.bind()" },
  { n: "03", code: "alter.core.execute()" },
  { n: "04", code: "alter.core.verify()" },
  { n: "05", code: "alter.core.recover()" },
];

const LAYERS = [
  { label: "Planning", copy: "Structured intention sequence." },
  { label: "Binding", copy: "Tool and credential mapping." },
  { label: "Durable execution", copy: "Engine-level progress checkpointing." },
  { label: "Verification", copy: "Output integrity review." },
  { label: "Recovery", copy: "Self-correcting failover branches." },
  { label: "Memory", copy: "State archival across sessions." },
];

export function DevelopersSection() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="rounded-[6px] border border-ax-mint/10 bg-ax-black/40 p-6 sm:p-7">
            <p className="text-[12px] font-medium text-ax-muted">manifest.alterx</p>
            <div className="mt-5 flex flex-col gap-3">
              {MANIFEST.map((m) => (
                <div key={m.code} className="flex items-center gap-4 text-[14px]">
                  <span className="text-ax-muted/60">{m.n}</span>
                  <span className="font-mono text-ax-text/80">
                    alter.core.<span className="text-ax-mint">{m.code.split(".")[2]}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Developers
            </p>
            <h2 className="font-display mt-5 max-w-[440px] text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[40px]">
              Built so work cannot quietly fail.
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-[1.6] text-ax-muted">
              v1 is a managed service. This is how execution is held — not a public signup.
            </p>

            <div className="mt-9 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
              {LAYERS.map((l) => (
                <div key={l.label} className="grid grid-cols-[160px_1fr] items-baseline gap-6 py-3.5">
                  <span className="text-[14px] font-medium text-ax-white">{l.label}</span>
                  <span className="text-[14px] leading-[1.5] text-ax-muted">{l.copy}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-[420px] text-[13px] leading-[1.6] text-ax-muted/80">
              Operators describe work in plain language. Engineers can see how it is held.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
