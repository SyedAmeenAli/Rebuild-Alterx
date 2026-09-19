export function FaqHero() {
  return (
    <section className="relative flex min-h-[40svh] flex-col justify-end overflow-hidden bg-ax-black text-ax-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] container-ax pb-16 pt-[150px] lg:pb-20">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          Company · FAQ
        </p>
        <h1 className="font-display mt-6 max-w-[600px] text-balance text-[34px] leading-[1.12] tracking-[-0.02em] text-ax-white sm:text-[44px] lg:text-[50px]">
          Questions, answered plainly.
        </h1>
      </div>
    </section>
  );
}
