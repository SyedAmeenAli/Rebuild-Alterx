import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function DevelopersCta() {
  return (
    <section className="relative overflow-hidden bg-ax-black py-28 lg:py-36">
      <div className="absolute inset-0">
        <Image
          src="/hero/15_cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(2,5,4,0.92) 0%, rgba(2,5,4,0.55) 45%, rgba(2,5,4,0.3) 100%)",
          }}
        />
      </div>

      <div className="relative container-ax flex justify-end">
        <div className="max-w-[460px] text-right">
          <Reveal>
            <h2 className="font-display text-balance text-[30px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[42px]">
              Build on something that takes execution seriously.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-[16px] leading-[1.6] text-ax-text/85">
              ALTERX is being built from the hard part outward.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <Link
              href={talkToUsDestination}
              className="mt-9 inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-7 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
            >
              Talk to us
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
