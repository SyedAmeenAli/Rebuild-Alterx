import { Reveal } from "@/components/shared/Reveal";

export function ProductsHero() {
  return (
    <section className="relative flex min-h-[60svh] flex-col justify-end overflow-hidden bg-ax-black text-ax-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] container-ax pb-16 pt-[150px] lg:pb-20">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Products
          </p>
          <h1 className="font-display mt-6 max-w-[720px] text-balance text-[38px] leading-[1.08] tracking-[-0.02em] text-ax-white sm:text-[52px] lg:text-[64px]">
            Built for the work behind the work.
          </h1>
          <p className="mt-7 max-w-[460px] text-[17px] leading-[1.55] text-ax-text/80">
            ALTERX brings together an execution system and the products built on top of it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
