import type { NewsVisualType } from "@/content/latestNews";

const ENGINE_STEPS = ["Understand", "Plan", "Connect", "Do", "Check", "Recover"];
const ACTIVE_ENGINE_STEP = 3; // "Do"

function EngineVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center bg-[#06110B] px-5">
      <div className="relative flex items-center">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ax-mint/15" />
        <div className="news-visual-travel absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-ax-mint shadow-[0_0_8px_rgba(91,234,153,0.8)]" />
        <div className="relative flex w-full items-center justify-between gap-1">
          {ENGINE_STEPS.map((step, i) => (
            <div key={step} className="flex min-w-0 flex-col items-center gap-2">
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors duration-300"
                style={{ backgroundColor: i === ACTIVE_ENGINE_STEP ? "#5BEA99" : "rgba(159,255,192,0.25)" }}
              />
              <span
                className="whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.04em] transition-colors duration-300 sm:text-[9px] sm:tracking-[0.06em]"
                style={{ color: i === ACTIVE_ENGINE_STEP ? "#9FFFC0" : "rgba(232,247,238,0.35)" }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InventoryVisual() {
  const rows = [
    { label: "Kashmiri Chilli Powder", value: "115 bags" },
    { label: "Sona Masoori Rice 25kg", value: "88 bags" },
    { label: "Cold Pressed Coconut Oil", value: "204 bottles" },
  ];
  return (
    <div className="flex h-full w-full flex-col justify-center bg-[#06110B] px-5 py-4">
      <div className="flex items-center justify-between border-b border-ax-mint/10 pb-2">
        <span className="text-[10px] font-medium text-ax-text/70">Counter · Live</span>
        <span className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.06em] text-ax-mint/70">
          <span className="news-visual-pulse h-1.5 w-1.5 rounded-full bg-ax-mint" />
          Synced
        </span>
      </div>
      <div className="mt-2 flex flex-col divide-y divide-ax-mint/[0.06]">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-1.5 text-[10.5px]">
            <span className="truncate pr-3 text-ax-muted">{row.label}</span>
            <span className="shrink-0 text-ax-text/80">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EngineeringVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-[#050a07] px-5 py-4 font-mono text-[10.5px] leading-[1.7]">
      <div className="text-ax-mint/60">import {"{"} core {"}"} from &quot;@alterx/engine&quot;</div>
      <div className="mt-1 text-ax-text/70">
        const checked = await core.verify(run.result, {"{"}
      </div>
      <div className="relative pl-3 text-ax-text/70">
        <span className="news-visual-highlight absolute -left-0.5 top-0 h-full w-[2px] rounded-full bg-ax-mint" />
        criteria: mission.criteria,
      </div>
      <div className="text-ax-text/70">{"}"})</div>
      <div className="mt-1 text-ax-muted/50">// checked: {"{"} matched, verified, consistent {"}"}</div>
    </div>
  );
}

function UpdateVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 bg-[#06110B] px-5">
      <div className="h-1.5 w-3/5 rounded-full bg-ax-mint/15" />
      <div className="h-1.5 w-2/5 rounded-full bg-ax-text/10" />
      <div className="flex items-center gap-1">
        <div className="h-1.5 w-1/3 rounded-full bg-ax-text/10" />
        <span className="news-visual-pulse inline-block h-2.5 w-[1.5px] bg-ax-mint/60" />
      </div>
    </div>
  );
}

export function NewsVisual({ type }: { type: NewsVisualType }) {
  switch (type) {
    case "engine":
      return <EngineVisual />;
    case "inventory":
      return <InventoryVisual />;
    case "engineering":
      return <EngineeringVisual />;
    case "update":
      return <UpdateVisual />;
  }
}
