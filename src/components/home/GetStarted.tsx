import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";
import BorderGlow from "@/components/shared/BorderGlow";

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
          <h2 className="font-display text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-ax-white sm:text-[40px]">
            How to start
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ROUTES.map((r, i) => (
            <Reveal key={r.label} delay={i * 80}>
              <Link href={r.href} className="group block h-full">
                <BorderGlow borderRadius={6} backgroundColor="rgba(0,0,0,0)" className="h-full">
                  <div className="flex h-full flex-col justify-between p-6">
                    <span className="font-display text-[18px] font-medium text-ax-white transition-colors group-hover:text-ax-mint">
                      {r.label}
                    </span>
                    <span className="mt-4 text-[14px] leading-[1.5] text-ax-muted">{r.copy}</span>
                  </div>
                </BorderGlow>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
