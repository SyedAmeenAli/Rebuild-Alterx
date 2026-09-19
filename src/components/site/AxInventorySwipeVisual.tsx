"use client";

import { useState } from "react";
import SwipeRow, { type SwipeAction } from "@/components/shared/SwipeRow";

const INITIAL_ROWS = [
  { id: "chilli", label: "Kashmiri Chilli Powder", value: "115 bags" },
  { id: "rice", label: "Sona Masoori Rice 25kg", value: "88 bags" },
  { id: "oil", label: "Cold Pressed Coconut Oil", value: "204 bottles" },
];

const ARCHIVE_ACTION: SwipeAction = { id: "archive", label: "Archive" };

export function AxInventorySwipeVisual() {
  const [rows, setRows] = useState(INITIAL_ROWS);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-2.5 bg-[#06110B] px-5 py-4">
      <div className="flex items-center justify-between pb-1">
        <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-ax-muted">Counter · Live</span>
        <span className="text-[9px] font-medium uppercase tracking-[0.06em] text-ax-mint/70">Swipe to archive</span>
      </div>
      {rows.map((row) => (
        <SwipeRow
          key={row.id}
          actions={[ARCHIVE_ACTION]}
          height={40}
          radius={8}
          actionWidth={72}
          label={row.label}
          onCommit={() => setRows((prev) => prev.filter((r) => r.id !== row.id))}
        >
          <div className="flex w-full items-center justify-between text-[11.5px]">
            <span className="truncate pr-2 text-ax-muted">{row.label}</span>
            <span className="shrink-0 text-ax-text/80">{row.value}</span>
          </div>
        </SwipeRow>
      ))}
      {rows.length === 0 && (
        <p className="py-2 text-center text-[11px] text-ax-muted">All archived. Refresh the menu to reset.</p>
      )}
    </div>
  );
}
