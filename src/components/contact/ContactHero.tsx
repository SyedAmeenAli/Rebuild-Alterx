import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative flex min-h-[62svh] flex-col overflow-clip bg-ax-black text-ax-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/08_contact_map.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-drift"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,5,4,0.5) 0%, rgba(2,5,4,0.4) 45%, rgba(2,5,4,0.9) 100%)",
          }}
        />
      </div>

      <div className="relative z-[2] flex flex-1 flex-col justify-end container-ax pb-16 pt-[150px] lg:pb-20">
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
