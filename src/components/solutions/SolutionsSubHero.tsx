import type { ReactNode } from "react";

export function SolutionsSubHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ax-black pb-20 pt-[150px] text-ax-white lg:pb-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />
      <div className="relative container-ax">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          Solutions · {eyebrow}
        </p>
        <h1 className="font-display mt-5 max-w-[680px] text-balance text-[34px] leading-[1.12] tracking-[-0.02em] text-ax-white sm:text-[44px] lg:text-[50px]">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
