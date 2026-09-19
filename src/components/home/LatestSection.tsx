import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import BorderGlow from "@/components/shared/BorderGlow";
import { NewsVisual } from "@/components/home/latest/NewsVisual";
import { LATEST_NEWS } from "@/content/latestNews";

export function LatestSection() {
  return (
    <section className="relative bg-ax-bg-soft py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-ax-white sm:text-[34px]">
              Latest news
            </h2>
            <Link
              href="/resources"
              className="group flex items-center gap-1.5 text-[13px] font-medium text-ax-muted transition-colors duration-200 hover:text-ax-mint"
            >
              All posts
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 sm:mt-14 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {LATEST_NEWS.map((item, i) => (
            <Reveal key={item.href} delay={i * 90} className="w-[78%] shrink-0 sm:w-[45%] lg:w-auto">
              <Link
                href={item.href}
                className="group block h-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
              >
                <BorderGlow borderRadius={10} backgroundColor="rgba(6,17,11,0.72)" className="h-full">
                  <div className="flex h-full flex-col">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-[9px] border-b border-ax-mint/10">
                      <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]">
                        <NewsVisual type={item.visualType} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-ax-muted/70 transition-colors duration-300 group-hover:text-ax-muted">
                        <span className="text-[#D8FFE7]">{item.category}</span>
                      </p>
                      <p className="font-display mt-3 flex items-start justify-between gap-3 text-[15px] font-medium leading-[1.35] text-[#F4FFF8]">
                        <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
                          {item.title}
                        </span>
                        <span
                          className="mt-0.5 shrink-0 text-[#D8FFE7] transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </p>
                    </div>
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
