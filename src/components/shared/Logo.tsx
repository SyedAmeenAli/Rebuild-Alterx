import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/wordmark-light.png"
      alt="ALTERX"
      width={480}
      height={128}
      priority
      className={className}
      style={{ width: "auto", height: "100%", objectFit: "contain" }}
    />
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/mark-light.png"
      alt="ALTERX"
      width={128}
      height={128}
      className={className}
      style={{ width: "auto", height: "100%", objectFit: "contain" }}
    />
  );
}
