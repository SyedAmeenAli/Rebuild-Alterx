import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function FinalCta() {
  return (
    <section className="relative bg-ax-black py-32 lg:py-44">
      <div className="container-ax text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-[560px] text-balance text-[30px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[40px]">
            Tell ALTERX what needs to happen.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Link
            href={talkToUsDestination}
            className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-ax-white"
          >
            Talk to us
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
