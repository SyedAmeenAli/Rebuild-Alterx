export type Media = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  /** CSS object-position value, e.g. "center", "70% 30%" */
  position?: string;
};

export function image(src: string, alt: string, position?: string): Media {
  return { type: "image", src, alt, position };
}
