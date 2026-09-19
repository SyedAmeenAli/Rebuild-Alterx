import { Reveal } from "@/components/shared/Reveal";
import "./FlipCard.css";

const PRINCIPLES = [
  { label: "Build the hard part", copy: "Solve the part most products leave to someone else." },
  { label: "Know what happened", copy: "Systems should be able to explain the state of their work." },
  { label: "Make failure visible", copy: "A failure that is understood can be handled." },
  { label: "Keep the interface simple", copy: "Complexity belongs underneath the experience." },
  { label: "Ship with discipline", copy: "If it can't be explained, it isn't ready to ship." },
];

export function WhatWeCareAbout() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax">
        <Reveal>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ax-mint/70">
            What we care about
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.label} tabIndex={0} className="flip-card">
                <p className="flip-card__back">{p.copy}</p>
                <div className="flip-card__cover">
                  <span className="flip-card__cover-label">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
