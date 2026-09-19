import { NewsVisual } from "@/components/home/latest/NewsVisual";

function AlterxVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 bg-[#06110B] px-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">ALTERX</p>
      <p className="font-display max-w-[280px] text-[22px] font-medium leading-[1.2] text-ax-white">
        One system for everything you run.
      </p>
      <p className="max-w-[260px] text-[13px] leading-[1.6] text-ax-muted">
        Say what you need done, once. It takes care of the rest, on its own.
      </p>
    </div>
  );
}

export function ProductVisual({ visual }: { visual: "alterx" | "engine" | "inventory" }) {
  if (visual === "alterx") return <AlterxVisual />;
  return <NewsVisual type={visual} />;
}
