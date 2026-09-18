"use client";

import { useEffect, useMemo, useRef, type ReactNode } from "react";
import gsap from "gsap";
import "./CardSwap.css";

interface CardSwapItem {
  key: string;
  content: ReactNode;
}

interface CardSwapProps {
  items: CardSwapItem[];
  selected: number;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  skewAmount?: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

export function CardSwap({
  items,
  selected,
  width = 540,
  height = 420,
  cardDistance = 26,
  verticalDistance = 20,
  skewAmount = 3,
}: CardSwapProps) {
  const refs = useMemo(() => items.map(() => ({ current: null as HTMLDivElement | null })), [items.length]);
  const orderRef = useRef<number[]>(items.map((_, i) => i));
  const mounted = useRef(false);

  useEffect(() => {
    const total = refs.length;
    orderRef.current.forEach((idx, slot) => {
      const el = refs[idx].current;
      if (!el) return;
      const s = makeSlot(slot, cardDistance, verticalDistance, total);
      gsap.set(el, {
        x: s.x,
        y: s.y,
        z: s.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skewAmount,
        transformOrigin: "center center",
        zIndex: s.zIndex,
        force3D: true,
      });
    });
    mounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    const total = refs.length;
    const current = orderRef.current;
    if (current[0] === selected) return;

    const rest = current.filter((i) => i !== selected);
    const newOrder = [selected, ...rest];
    orderRef.current = newOrder;

    const tl = gsap.timeline();
    newOrder.forEach((idx, slot) => {
      const el = refs[idx].current;
      if (!el) return;
      const s = makeSlot(slot, cardDistance, verticalDistance, total);
      tl.set(el, { zIndex: s.zIndex }, 0);
      tl.to(
        el,
        { x: s.x, y: s.y, z: s.z, duration: 0.9, ease: "elastic.out(0.75,0.9)" },
        slot === 0 ? 0 : 0.05 * slot
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="card-swap-container" style={{ width, height }}>
      {items.map((item, i) => (
        <div
          key={item.key}
          ref={(el) => {
            refs[i].current = el;
          }}
          className="card-swap-card"
          style={{ width, height }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
