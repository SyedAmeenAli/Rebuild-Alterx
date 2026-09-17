import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";

const RESOURCES = [
  { label: "Engine", copy: "What Alter Engine is and how it fits into ALTERX.", href: "/products#alter-engine" },
  { label: "Documentation", copy: "Not published yet — coming once there's a public API.", href: "/docs" },
  { label: "Contact", copy: "Talk to the team about the architecture.", href: talkToUsDestination },
];

export function DeveloperResources() {
  return (
    <section className="relative bg-ax-black py-24 lg:py-32">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            Resources
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-ax-mint/10 pt-8 sm:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.label} delay={i * 80}>
              <Link href={r.href} className="group block">
                <div className="font-display flex items-center gap-2 text-[19px] font-medium text-ax-white transition-colors group-hover:text-ax-mint">
                  {r.label}
                  <span aria-hidden="true" className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </div>
                <p className="mt-2 text-[14px] leading-[1.6] text-ax-muted">{r.copy}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
