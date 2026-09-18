import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

const ROUTES = [
  { label: "Talk to ALTERX", copy: "For businesses with a real workflow to solve.", href: talkToUsDestination },
  { label: "Explore AxInventory", copy: "For people interested in the product.", href: "/products#axinventory" },
  { label: "Understand the Engine", copy: "For people who want to understand the technology.", href: "/developers" },
];

export function GetStarted() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <h2 className="font-display max-w-[500px] text-balance text-[26px] leading-[1.2] tracking-[-0.01em] text-ax-white sm:text-[32px]">
            Choose how to get started.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
          {ROUTES.map((r, i) => (
            <Reveal key={r.label} delay={i * 80}>
              <Link
                href={r.href}
                className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="font-display text-[20px] font-medium text-ax-white transition-colors group-hover:text-ax-mint sm:text-[24px]">
                  {r.label}
                </span>
                <span className="flex items-center gap-3 text-[14px] text-ax-muted">
                  {r.copy}
                  <span aria-hidden="true" className="text-ax-mint opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
