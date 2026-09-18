import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

const ROUTES = [
  { label: "Talk to us", copy: "Tell us the work. We run it with you.", href: talkToUsDestination },
  { label: "See AxInventory", copy: "The product already doing retail work.", href: "/products#axinventory" },
  { label: "Read the system", copy: "How execution is built.", href: "/developers" },
];

export function GetStarted() {
  return (
    <section className="relative bg-ax-bg-soft pb-24 lg:pb-32">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display text-[26px] leading-[1.2] tracking-[-0.01em] text-ax-white sm:text-[32px]">
            How to start
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ROUTES.map((r, i) => (
            <Reveal key={r.label} delay={i * 80}>
              <Link
                href={r.href}
                className="group flex h-full flex-col justify-between rounded-[6px] border border-ax-mint/10 p-6 transition-colors hover:border-ax-mint/30"
              >
                <span className="font-display text-[18px] font-medium text-ax-white transition-colors group-hover:text-ax-mint">
                  {r.label}
                </span>
                <span className="mt-4 text-[14px] leading-[1.5] text-ax-muted">{r.copy}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
