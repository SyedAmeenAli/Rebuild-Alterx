import { Reveal } from "@/components/shared/Reveal";

const PRINCIPLES = [
  "Clear steps",
  "People stay in control",
  "Work is checked",
  "Failures are handled deliberately",
];

export function WhyAlterx() {
  return (
    <section className="relative bg-ax-black py-28 lg:py-36">
      <div className="container-ax grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <h2 className="font-display text-balance text-[30px] leading-[1.2] tracking-[-0.015em] text-ax-white sm:text-[38px] lg:text-[44px]">
            Most AI either chats or acts blindly. ALTERX sits in the middle.
          </h2>
          <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-ax-text/80">
            It organizes the work, keeps the steps clear, and gives the process somewhere to go
            when reality gets in the way.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col divide-y divide-ax-mint/10 border-t border-ax-mint/10">
            {PRINCIPLES.map((p, i) => (
              <div key={p} className="flex items-center gap-4 py-5">
                <span className="text-[13px] font-medium tracking-[0.06em] text-ax-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[17px] font-medium text-ax-white">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
