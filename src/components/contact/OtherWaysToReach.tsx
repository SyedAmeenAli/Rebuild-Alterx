import { Reveal } from "@/components/shared/Reveal";

const CONTACT_EMAIL = "hello@alterx.com";

export function OtherWaysToReach() {
  return (
    <section className="relative bg-ax-black py-20 lg:py-24">
      <div className="container-ax">
        <Reveal>
          <div className="flex flex-col items-start gap-4 border-t border-ax-mint/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
              Other ways to reach us
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-display text-[18px] font-medium text-ax-white transition-colors hover:text-ax-mint"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
