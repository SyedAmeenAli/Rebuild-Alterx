import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function CareersCta() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <div className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[10px] lg:grid-cols-[1fr_1fr]">
          <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[320px]">
            <Image src="/hero/15_cta.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <Reveal>
            <div className="py-4 lg:py-0">
              <h2 className="font-display max-w-[420px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[32px]">
                Do difficult work. With people who care about it.
              </h2>
              <Link
                href={talkToUsDestination}
                className="mt-7 inline-flex items-center gap-2 rounded-[4px] bg-ax-mint px-6 py-3 text-[15px] font-medium text-ax-black transition-colors hover:bg-ax-emerald"
              >
                Talk to us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
