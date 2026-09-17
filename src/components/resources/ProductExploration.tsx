import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
  { label: "Alter Engine", copy: "The execution system underneath ALTERX.", href: "/products#alter-engine" },
  { label: "AxInventory", copy: "A real product built around that execution technology.", href: "/products#axinventory" },
];

export function ProductExploration() {
  return (
    <section className="relative overflow-hidden bg-ax-bg-soft py-24 lg:py-32">
      <div className="relative aspect-[16/9] w-full lg:aspect-[21/9]">
        <Image src="/hero/10_products_showcase.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(6,17,11,0) 40%, rgba(6,17,11,0.92) 100%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 container-ax pb-10 lg:pb-14">
          <Reveal>
            <h2 className="font-display max-w-[440px] text-balance text-[26px] leading-[1.25] tracking-[-0.01em] text-ax-white sm:text-[32px]">
              See the systems in practice.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-10">
              {ITEMS.map((item) => (
                <Link key={item.label} href={item.href} className="group flex items-baseline gap-3">
                  <span className="font-display text-[18px] font-medium text-ax-white transition-colors group-hover:text-ax-mint">
                    {item.label}
                  </span>
                  <span className="text-[13px] text-ax-muted">{item.copy}</span>
                  <span aria-hidden="true" className="text-ax-mint opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
