import Image from "next/image";
import type { Media } from "@/lib/media";

interface MediaFrameProps {
  media: Media;
  /** Tailwind aspect-ratio class, e.g. "aspect-[21/9]", "aspect-square". Omit for a frame that fills its parent's height. */
  aspect?: string;
  /** Thin 1px border. Off by default — most frames should have none. */
  border?: boolean;
  /** Slow, near-imperceptible scale drift (1.0 → 1.025). */
  drift?: boolean;
  /** Small rounded corners. Off by default — frames are usually sharp-edged. */
  rounded?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MediaFrame({
  media,
  aspect,
  border = false,
  drift = false,
  rounded = false,
  sizes = "100vw",
  priority = false,
  className = "",
  children,
}: MediaFrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${aspect ?? "h-full"} ${
        border ? "border border-ax-mint/10" : ""
      } ${rounded ? "rounded-[6px]" : ""} ${className}`}
    >
      {media.type === "video" ? (
        <video
          className={`h-full w-full object-cover ${drift ? "hero-image-drift" : ""}`}
          style={media.position ? { objectPosition: media.position } : undefined}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-label={media.alt}
        >
          <source src={media.src} />
        </video>
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${drift ? "hero-image-drift" : ""}`}
          style={media.position ? { objectPosition: media.position } : undefined}
        />
      )}
      {children}
    </div>
  );
}
