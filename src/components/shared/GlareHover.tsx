// Ported from React Bits (reactbits.dev/animations/glare-hover). Pure CSS,
// no new dependency. Defaults recolored to ALTERX (mint glare on a dark
// bordered surface instead of the original white-glare-on-black demo).
import type { CSSProperties, ReactNode } from "react";
import "./GlareHover.css";

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: CSSProperties;
  glass?: boolean;
}

export default function GlareHover({
  width = "100%",
  height = "100%",
  background = "#06110B",
  borderRadius = "8px",
  borderColor = "rgba(159,255,192,0.14)",
  children,
  glareColor = "#9FFFC0",
  glareOpacity = 0.22,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {},
  glass = false,
}: GlareHoverProps) {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const vars = {
    "--gh-width": width,
    "--gh-height": height,
    "--gh-bg": background,
    "--gh-br": borderRadius,
    "--gh-angle": `${glareAngle}deg`,
    "--gh-duration": `${transitionDuration}ms`,
    "--gh-size": `${glareSize}%`,
    "--gh-rgba": rgba,
    "--gh-border": borderColor,
  } as CSSProperties;

  return (
    <div
      className={`glare-hover${playOnce ? " glare-hover--play-once" : ""}${glass ? " glare-hover--glass" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...vars, ...style }}
    >
      {children}
    </div>
  );
}
