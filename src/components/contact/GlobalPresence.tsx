import Image from "next/image";

export function GlobalPresence() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden bg-ax-bg-soft sm:aspect-[21/9]">
      <Image
        src="/hero/12_global_presence.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(0deg, rgba(2,5,4,0.6) 0%, rgba(2,5,4,0.1) 60%)" }}
      />
    </section>
  );
}
