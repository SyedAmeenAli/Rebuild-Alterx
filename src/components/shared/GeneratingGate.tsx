"use client";

import { useEffect, useState, type ReactNode } from "react";
import { GeneratingLoader } from "./GeneratingLoader";

export function GeneratingGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setReady(true);
      return;
    }
    const t = setTimeout(() => setReady(true), 1100);
    return () => clearTimeout(t);
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-[240px] items-center justify-center">
        <GeneratingLoader />
      </div>
    );
  }

  return <div className="animate-[fadeIn_0.5s_ease-out]">{children}</div>;
}
