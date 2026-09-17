import Image from "next/image";

const ANNOTATIONS = [
  { label: "Objective", pos: "left-[8%] top-[18%]" },
  { label: "Systems", pos: "left-[28%] top-[62%]" },
  { label: "Execution", pos: "left-[52%] top-[30%]" },
  { label: "Verification", pos: "left-[72%] top-[58%]" },
  { label: "Outcome", pos: "left-[88%] top-[22%]" },
];

export function FeatureVisual() {
  return (
    <section className="relative aspect-[16/10] w-full overflow-hidden bg-ax-black sm:aspect-[16/7]">
      <Image
        src="/hero/09_solutions_features.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(2,5,4,0.15) 0%, rgba(2,5,4,0.55) 100%)" }}
      />

      <div className="absolute inset-0 hidden sm:block">
        {ANNOTATIONS.map((a) => (
          <div key={a.label} className={`absolute ${a.pos} flex items-center gap-2`}>
            <span className="h-[5px] w-[5px] rounded-full bg-ax-mint" />
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-ax-mint/80">
              {a.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
