import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { talkToUsDestination } from "@/content/navigation";
import "./HoverLinks.css";

const RESOURCES = [
  { label: "Alter Engine", copy: "What Alter Engine is and how it fits into ALTERX.", href: "/products/alter-engine" },
  { label: "Technical notes", copy: "Writing on how the system is built.", href: "/resources" },
  { label: "Talk to us", copy: "Talk to the team about the architecture.", href: talkToUsDestination },
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

        <Reveal delay={100}>
          <div className="hover-links mt-8">
            {RESOURCES.map((r) => (
              <Link key={r.label} href={r.href} className="hover-links__panel">
                <span className="hover-links__label">{r.label}</span>
                <span className="hover-links__copy">{r.copy}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
