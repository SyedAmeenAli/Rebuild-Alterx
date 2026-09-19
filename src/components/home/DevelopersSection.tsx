"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CardSwap } from "@/components/shared/CardSwap";
import { ScrollFollow } from "@/components/shared/ScrollFollow";

const LAYERS = [
  {
    key: "planning",
    file: "planning.ts",
    label: "Planning",
    copy: "Structured intention sequence.",
    ts: `import { core } from "@alterx/engine"

const steps = await core.plan(mission, {
  context: mission.records,
  constraints: mission.rules,
})

// steps: [{ id, action, dependsOn }]`,
    py: `from alterx.core import plan

steps = plan(
    mission,
    context=mission.records,
    constraints=mission.rules,
)

# steps: [{ id, action, depends_on }]`,
  },
  {
    key: "binding",
    file: "binding.ts",
    label: "Binding",
    copy: "Tool and credential mapping.",
    ts: `import { core } from "@alterx/engine"

const bound = await core.bind(plan, {
  systems: ["axinventory", "email"],
  scope: connector.scope,
})

// bound: { tools, credentials }`,
    py: `from alterx.core import bind

bound = bind(
    plan,
    systems=["axinventory", "email"],
    scope=connector.scope,
)

# bound: { tools, credentials }`,
  },
  {
    key: "execution",
    file: "execution.ts",
    label: "Durable execution",
    copy: "Engine-level progress checkpointing.",
    ts: `import { core } from "@alterx/engine"

const run = await core.execute(bound, {
  checkpoint: true,
})

// run.state: "running" | "waiting_approval" | "completed"`,
    py: `from alterx.core import execute

run = execute(bound, checkpoint=True)

# run.state: "running" | "waiting_approval" | "completed"`,
  },
  {
    key: "verification",
    file: "verify.ts",
    label: "Verification",
    copy: "Output integrity review.",
    ts: `import { core } from "@alterx/engine"

const checked = await core.verify(run.result, {
  criteria: mission.criteria,
})

// checked: { matched, verified, consistent }`,
    py: `from alterx.core import verify

checked = verify(run.result, criteria=mission.criteria)

# checked: { matched, verified, consistent }`,
  },
  {
    key: "recovery",
    file: "recover.ts",
    label: "Recovery",
    copy: "Self-correcting failover branches.",
    ts: `import { core } from "@alterx/engine"

const continued = await core.recover(run.failure, {
  classify: true,
})

// continued.state: "recovered" | "blocked"`,
    py: `from alterx.core import recover

continued = recover(run.failure, classify=True)

# continued.state: "recovered" | "blocked"`,
  },
  {
    key: "memory",
    file: "memory.ts",
    label: "Memory",
    copy: "State archival across sessions.",
    ts: `import { core } from "@alterx/engine"

const archived = await core.memory(session, {
  retain: ["decisions", "evidence"],
})

// archived: { sessionId, timeline }`,
    py: `from alterx.core import memory

archived = memory(session, retain=["decisions", "evidence"])

# archived: { session_id, timeline }`,
  },
] as const;

type Lang = "ts" | "py";

function highlight(line: string) {
  if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
    return <span className="text-ax-muted/55">{line}</span>;
  }
  if (line.trim().startsWith("import") || line.trim().startsWith("from")) {
    return <span className="text-ax-mint/70">{line}</span>;
  }
  return <span className="text-ax-text/80">{line}</span>;
}

function CardBody({ item, lang, setLang }: { item: (typeof LAYERS)[number]; lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="relative h-full w-full p-6 sm:p-7">
      <div className="flex items-center justify-between border-b border-ax-mint/15 pb-4">
        <p className="text-[13px] font-medium text-ax-white">{item.file}</p>
        <div className="flex items-center gap-1 rounded-[3px] border border-ax-mint/15 p-0.5">
          {(["ts", "py"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="rounded-[2px] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.06em] transition-colors duration-150"
              style={{
                color: lang === l ? "#020504" : "rgba(232,247,238,0.5)",
                backgroundColor: lang === l ? "#9FFFC0" : "transparent",
              }}
            >
              {l === "ts" ? "TypeScript" : "Python"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="font-display text-[17px] font-medium text-ax-white">{item.label}</p>
        <pre className="mt-3 overflow-x-auto font-mono text-[13px] leading-[1.85]">
          {(lang === "ts" ? item.ts : item.py).split("\n").map((line, i) => (
            <div key={i}>{line.length ? highlight(line) : " "}</div>
          ))}
        </pre>
      </div>

      <p className="absolute inset-x-6 bottom-6 border-t border-ax-mint/10 pt-3 text-[10.5px] leading-[1.5] text-ax-muted/55 sm:inset-x-7">
        Conceptual, internal execution shown for clarity. Not a public API.
      </p>
    </div>
  );
}

export function DevelopersSection() {
  const [selected, setSelected] = useState(0);
  const [lang, setLang] = useState<Lang>("ts");

  const select = (i: number) => {
    if (i === selected) return;
    setSelected(i);
  };

  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Developers
            </p>
            <h2 className="font-display mt-5 max-w-[440px] text-balance text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[40px]">
              Built so work cannot quietly fail.
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-[1.6] text-ax-muted">
              v1 is a managed service. This is how execution is held, not a public signup.
            </p>

            <div className="mt-9 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
              {LAYERS.map((l, i) => {
                const isSelected = i === selected;
                return (
                  <button
                    key={l.key}
                    onClick={() => select(i)}
                    aria-pressed={isSelected}
                    className="group relative grid grid-cols-[160px_1fr] items-baseline gap-6 px-2 py-3.5 -mx-2 text-left transition-colors duration-200 hover:bg-ax-mint/[0.04]"
                  >
                    <span
                      className="absolute left-0 top-1/2 h-[60%] w-[2px] -translate-y-1/2 transition-colors duration-200"
                      style={{ backgroundColor: isSelected ? "#32C97A" : "transparent" }}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[10px] font-medium text-ax-muted/50">{l.file}</span>
                      <span
                        className="text-[14px] font-medium transition-colors duration-200"
                        style={{ color: isSelected ? "#9FFFC0" : "#E8F7EE" }}
                      >
                        {l.label}
                      </span>
                    </span>
                    <span className="text-[14px] leading-[1.5] text-ax-muted">{l.copy}</span>
                  </button>
                );
              })}
            </div>

            <p className="mt-6 max-w-[420px] text-[13px] leading-[1.6] text-ax-muted/80">
              Operators describe work in plain language. Engineers can see how it is held.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ScrollFollow className="mx-auto mr-6 mt-6">
            <CardSwap
              selected={selected}
              width={520}
              height={400}
              items={LAYERS.map((item) => ({
                key: item.key,
                content: <CardBody item={item} lang={lang} setLang={setLang} />,
              }))}
            />
          </ScrollFollow>
        </Reveal>
      </div>
    </section>
  );
}
