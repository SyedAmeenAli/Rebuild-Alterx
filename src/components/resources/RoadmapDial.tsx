"use client";

import { useState } from "react";
import "./RoadmapDial.css";

const DIRECTIONS = [
  {
    label: "Browser control",
    copy: "Allowing execution to reach work that happens inside the web, not only through structured integrations.",
  },
  {
    label: "Voice",
    copy: "Making it possible to describe work through conversation and move from spoken intent into execution.",
  },
  {
    label: "Embedded execution layer",
    copy: "Extending how planning, action, verification, and recovery can work together underneath ALTERX.",
  },
];

export function RoadmapDial() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-14">
      <div className="roadmap-dial" role="radiogroup" aria-label="Roadmap direction">
        {DIRECTIONS.map((d, i) => (
          <input
            key={d.label}
            type="radio"
            name="roadmap-dial"
            id={`rd-${i}`}
            checked={active === i}
            onChange={() => setActive(i)}
          />
        ))}
        <div className="roadmap-dial__stops">
          {DIRECTIONS.map((d, i) => (
            <label key={d.label} htmlFor={`rd-${i}`} className="roadmap-dial__stop" aria-label={d.label} />
          ))}
        </div>
        <div className="roadmap-dial__needle" aria-hidden="true" />
        <div className="roadmap-dial__pivot" aria-hidden="true" />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap gap-2">
          {DIRECTIONS.map((d, i) => (
            <button
              key={d.label}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                active === i ? "border-ax-mint bg-ax-mint/10 text-ax-mint" : "border-ax-mint/20 text-ax-muted"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
        <p className="mt-5 max-w-[480px] text-[16px] leading-[1.6] text-ax-white">
          {DIRECTIONS[active].copy}
        </p>
      </div>
    </div>
  );
}
