"use client";

import { useState, type JSX } from "react";
import { Reveal } from "@/components/shared/Reveal";

const MINT = "#9FFFC0";
const MINT_DIM = "rgba(159,255,192,0.35)";
const GREEN = "#32C97A";

const CAPABILITIES = [
  {
    key: "understand",
    n: "01",
    label: "Understand",
    tag: "STATE / 01",
    title: "Understand",
    copy: "Reads what you want in normal language.",
  },
  {
    key: "plan",
    n: "02",
    label: "Plan",
    tag: "STATE / 02",
    title: "Plan",
    copy: "Turns the intent into a workable path.",
  },
  {
    key: "connect",
    n: "03",
    label: "Connect",
    tag: "STATE / 03",
    title: "Connect",
    copy: "Reaches the systems the work depends on.",
  },
  {
    key: "do",
    n: "04",
    label: "Do",
    tag: "STATE / 04",
    title: "Do",
    copy: "Runs the steps and keeps a record.",
  },
  {
    key: "check",
    n: "05",
    label: "Check",
    tag: "STATE / 05",
    title: "Check",
    copy: "Looks at the result before finishing.",
  },
  {
    key: "recover",
    n: "06",
    label: "Recover",
    tag: "STATE / 06",
    title: "Recover",
    copy: "When something fails, it classifies the issue and continues.",
  },
] as const;

type CapabilityKey = (typeof CAPABILITIES)[number]["key"];

// ---- the six viewport visuals ----

function UnderstandVisual() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <circle cx="48" cy="70" r="16" fill="none" stroke={MINT_DIM} strokeWidth="1.5" />
      <path d="M26 128 C26 100 70 100 70 128" fill="none" stroke={MINT_DIM} strokeWidth="1.5" />
      <rect x="200" y="40" width="90" height="66" rx="3" fill="none" stroke={MINT_DIM} strokeWidth="1.5" />
      <line x1="212" y1="58" x2="270" y2="58" stroke={MINT_DIM} strokeWidth="1.5" className="engine-fade-in" style={{ animationDelay: "300ms" }} />
      <line x1="212" y1="70" x2="255" y2="70" stroke={MINT_DIM} strokeWidth="1.5" className="engine-fade-in" style={{ animationDelay: "400ms" }} />
      <line x1="212" y1="82" x2="262" y2="82" stroke={MINT} strokeWidth="1.5" className="engine-fade-in" style={{ animationDelay: "500ms" }} />
      <path
        d="M70 90 C 120 90 150 90 198 73"
        fill="none"
        stroke={MINT}
        strokeWidth="1.5"
        strokeLinecap="round"
        className="engine-draw"
        style={{ ["--draw-len" as string]: 160 }}
      />
    </svg>
  );
}

function PlanVisual() {
  const paths = [
    { d: "M150 40 C 190 60 220 70 260 60", active: false },
    { d: "M150 40 C 190 80 220 100 260 100", active: true },
    { d: "M150 40 C 185 105 210 130 250 140", active: false },
  ];
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <rect x="90" y="18" width="60" height="44" rx="10" fill="none" stroke={MINT_DIM} strokeWidth="1.5" />
      <circle cx="120" cy="40" r="6" fill="none" stroke={MINT} strokeWidth="1.5" className="engine-fade-in" />
      <text x="120" y="44" textAnchor="middle" fill={MINT} fontSize="9" className="engine-fade-in" style={{ animationDelay: "150ms" }}>?</text>
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill="none"
          stroke={p.active ? MINT : MINT_DIM}
          strokeWidth={p.active ? 2 : 1.2}
          strokeLinecap="round"
          className="engine-draw"
          style={{ ["--draw-len" as string]: 160, animationDelay: `${220 + i * 120}ms` }}
        />
      ))}
      <circle cx="260" cy="100" r="4" fill={MINT} className="engine-fade-in" style={{ animationDelay: "620ms" }} />
      <circle cx="260" cy="60" r="3" fill="none" stroke={MINT_DIM} strokeWidth="1.2" />
      <circle cx="250" cy="140" r="3" fill="none" stroke={MINT_DIM} strokeWidth="1.2" />
    </svg>
  );
}

function ConnectVisual() {
  const nodes = [
    { x: 260, y: 30 },
    { x: 290, y: 90 },
    { x: 260, y: 150 },
    { x: 190, y: 165 },
    { x: 140, y: 150 },
    { x: 120, y: 90 },
  ];
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      {nodes.map((n, i) => (
        <line
          key={i}
          x1="190"
          y1="90"
          x2={n.x}
          y2={n.y}
          stroke={MINT_DIM}
          strokeWidth="1.2"
          className="engine-draw"
          style={{ ["--draw-len" as string]: 140, animationDelay: `${i * 90}ms` }}
        />
      ))}
      {nodes.map((n, i) => (
        <rect
          key={`n${i}`}
          x={n.x - 7}
          y={n.y - 7}
          width="14"
          height="14"
          rx="3"
          fill="none"
          stroke={MINT_DIM}
          strokeWidth="1.3"
          className="engine-fade-in"
          style={{ animationDelay: `${180 + i * 90}ms` }}
        />
      ))}
      <circle cx="190" cy="90" r="17" fill="none" stroke={MINT} strokeWidth="1.6" />
      <circle cx="190" cy="90" r="5" fill={MINT} />
    </svg>
  );
}

function DoVisual() {
  const stages = ["START", "STEP 1", "STEP 2", "STEP 3", "DONE"];
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <line x1="40" y1="90" x2="280" y2="90" stroke={MINT_DIM} strokeWidth="1.2" />
      {stages.map((s, i) => {
        const x = 40 + i * 60;
        return (
          <g key={s}>
            <circle cx={x} cy="90" r="5" fill={i === 2 ? MINT : "none"} stroke={i === 2 ? MINT : MINT_DIM} strokeWidth="1.4" />
            <text x={x} y="112" textAnchor="middle" fill={i === 2 ? MINT : "rgba(232,247,238,0.45)"} fontSize="8" letterSpacing="0.5">
              {s}
            </text>
          </g>
        );
      })}
      <circle r="6" fill={MINT}>
        <animateMotion dur="1.6s" begin="0.1s" fill="freeze" path="M40 90 L280 90" />
      </circle>
    </svg>
  );
}

function CheckVisual() {
  const rows = [
    { label: "MATCHED", done: true },
    { label: "VERIFIED", done: true },
    { label: "CONSISTENT", done: true },
    { label: "REVIEW", done: false },
  ];
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <text x="70" y="26" fill="rgba(232,247,238,0.6)" fontSize="9" letterSpacing="1">RESULT</text>
      {rows.map((r, i) => (
        <g key={r.label} className="engine-fade-in" style={{ animationDelay: `${300 + i * 120}ms` }}>
          <text x="70" y={52 + i * 26} fill={r.done ? MINT : "rgba(232,247,238,0.4)"} fontSize="12">
            {r.done ? "✓" : "○"}
          </text>
          <text x="90" y={52 + i * 26} fill={r.done ? "rgba(232,247,238,0.85)" : "rgba(232,247,238,0.45)"} fontSize="10" letterSpacing="0.6">
            {r.label}
          </text>
        </g>
      ))}
      <rect x="55" y="40" width="200" height="10" fill={GREEN} opacity="0.12" className="engine-scan" />
    </svg>
  );
}

function RecoverVisual() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <text x="55" y="30" fill="rgba(232,247,238,0.5)" fontSize="8" letterSpacing="0.6">START</text>
      <path
        d="M55 40 L 150 40"
        fill="none"
        stroke={MINT}
        strokeWidth="1.6"
        className="engine-draw"
        style={{ ["--draw-len" as string]: 100 }}
      />
      <rect x="150" y="30" width="20" height="20" rx="3" fill="rgba(9,23,15,0.9)" stroke="rgba(232,247,238,0.35)" strokeWidth="1.2" />
      <text x="160" y="66" textAnchor="middle" fill="rgba(232,247,238,0.5)" fontSize="8" letterSpacing="0.6">BLOCKED</text>
      <path
        d="M150 44 C 130 90 200 100 160 130 L 260 130"
        fill="none"
        stroke={MINT}
        strokeWidth="1.6"
        strokeLinecap="round"
        className="engine-draw"
        style={{ ["--draw-len" as string]: 220, animationDelay: "650ms" }}
      />
      <text x="245" y="150" textAnchor="middle" fill={MINT} fontSize="8" letterSpacing="0.6" className="engine-fade-in" style={{ animationDelay: "1200ms" }}>
        CONTINUE
      </text>
    </svg>
  );
}

const VISUALS: Record<CapabilityKey, () => JSX.Element> = {
  understand: UnderstandVisual,
  plan: PlanVisual,
  connect: ConnectVisual,
  do: DoVisual,
  check: CheckVisual,
  recover: RecoverVisual,
};

export function SystemUnderneath() {
  const [selected, setSelected] = useState<CapabilityKey>("understand");
  const [pulse, setPulse] = useState(0);
  const active = CAPABILITIES.find((c) => c.key === selected)!;
  const Visual = VISUALS[selected];

  const select = (key: CapabilityKey) => {
    if (key === selected) return;
    setSelected(key);
    setPulse((p) => p + 1);
  };

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
          <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* LEFT: technical viewport */}
            <div className="relative">
              {/* receding stack behind the frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[4px] border border-ax-mint/[0.05] bg-ax-surface/30"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[4px] border border-ax-mint/[0.08] bg-ax-surface/50"
              />

              <div
                key={`frame-${pulse}`}
                className={`relative rounded-[4px] border bg-ax-black/70 backdrop-blur-[1px] ${pulse > 0 ? "engine-border-pulse" : ""}`}
                style={{ borderColor: "rgba(159,255,192,0.22)" }}
              >
                {/* corner markers */}
                <span aria-hidden="true" className="absolute left-0 top-0 h-2 w-2 border-l border-t border-ax-mint/40" />
                <span aria-hidden="true" className="absolute right-0 top-0 h-2 w-2 border-r border-t border-ax-mint/40" />
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-ax-mint/40" />
                <span aria-hidden="true" className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-ax-mint/40" />

                <div className="flex items-center justify-between border-b border-ax-mint/10 px-5 py-4">
                  <div>
                    <p className="font-display text-[13px] font-medium text-ax-white">Alter Engine</p>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-ax-muted/70">Execution core</p>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-ax-mint/60">
                    {active.tag}
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="Alter Engine capabilities"
                  className="grid grid-cols-2 gap-x-4 gap-y-1 border-b border-ax-mint/10 px-5 py-4 sm:grid-cols-3"
                >
                  {CAPABILITIES.map((c) => {
                    const isSelected = c.key === selected;
                    return (
                      <button
                        key={c.key}
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => select(c.key)}
                        className="group flex items-baseline gap-2 py-1.5 text-left transition-transform duration-200 hover:translate-x-[2px] focus-visible:outline-none"
                      >
                        <span
                          className="text-[10px] tabular-nums transition-colors duration-200"
                          style={{ color: isSelected ? MINT : "rgba(145,168,155,0.55)" }}
                        >
                          {c.n}
                        </span>
                        <span
                          className="text-[13px] font-medium transition-colors duration-200"
                          style={{ color: isSelected ? "#E8F7EE" : "rgba(145,168,155,0.6)" }}
                        >
                          {c.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div key={selected} className="engine-fade-in relative h-[220px] px-2 py-2 sm:h-[260px]">
                  <Visual />
                </div>
              </div>
            </div>

            {/* RIGHT: explanation */}
            <div className="flex flex-col justify-center">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-ax-mint/60">
                Alter Engine
              </p>
              <div key={selected} className="engine-fade-in mt-3">
                <h3 className="font-display text-[26px] font-medium text-ax-white sm:text-[30px]">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-[380px] text-[15px] leading-[1.6] text-ax-muted">
                  {active.copy}
                </p>
              </div>
              <p className="mt-8 text-[12px] leading-[1.6] text-ax-muted/60">
                System / ready &middot; {active.tag}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
