export function ContactHero() {
  return (
    <section className="relative flex min-h-[50svh] flex-col justify-end overflow-hidden bg-ax-black text-ax-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 55% 90% at 30% 10%, rgba(50,201,122,0.1) 0%, rgba(91,234,153,0.03) 45%, rgba(0,0,0,0) 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] container-ax pb-16 pt-[150px] lg:pb-20">
        <p className="hero-reveal text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
          Contact
        </p>
        <h1 className="hero-reveal font-display mt-6 max-w-[420px] text-balance text-[40px] leading-[1.05] tracking-[-0.02em] text-ax-white sm:text-[52px] lg:text-[60px]">
          Let&apos;s talk.
        </h1>
        <p className="hero-reveal mt-6 max-w-[440px] text-[17px] leading-[1.55] text-ax-text/85">
          Tell us what you&apos;re working on. We&apos;ll figure out where ALTERX fits.
        </p>
      </div>
    </section>
  );
}
