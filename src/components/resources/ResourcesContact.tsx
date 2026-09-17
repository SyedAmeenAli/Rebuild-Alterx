import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

export function ResourcesContact() {
  return (
    <section className="relative bg-ax-black py-20 lg:py-24">
      <div className="container-ax">
        <Reveal>
          <div className="flex flex-col items-start gap-5 border-t border-ax-mint/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-[22px] font-medium text-ax-white sm:text-[26px]">
                Still looking for something?
              </h2>
              <p className="mt-2 text-[15px] text-ax-muted">
                Some questions are easier to answer together.
              </p>
            </div>
            <Link
              href={talkToUsDestination}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-[4px] border border-ax-mint/30 px-6 py-3 text-[15px] font-medium text-ax-white transition-colors hover:border-ax-mint hover:text-ax-mint"
            >
              Talk to us
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
