import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiGreensock, SiWebgl } from "react-icons/si";
import LogoLoop from "@/components/shared/LogoLoop";

const TECH_LOGOS = [
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGreensock />, title: "GSAP", href: "https://gsap.com" },
  { node: <SiWebgl />, title: "WebGL", href: "https://www.khronos.org/webgl/" },
];

export function TechLoop() {
  return (
    <section className="relative border-t border-ax-mint/10 bg-ax-bg-soft py-14">
      <div className="container-ax">
        <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ax-muted/60">
          Built with
        </p>
      </div>
      <div style={{ height: 40, position: "relative" }}>
        <LogoLoop
          logos={TECH_LOGOS}
          speed={40}
          direction="left"
          logoHeight={28}
          gap={64}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#06110B"
          ariaLabel="Technology this site is built with"
        />
      </div>
    </section>
  );
}
