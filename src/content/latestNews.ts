export type NewsVisualType = "engine" | "inventory" | "engineering" | "update";

export interface NewsItem {
  category: string;
  title: string;
  href: string;
  visualType: NewsVisualType;
}

/**
 * Real ALTERX surfaces only — no fabricated launches, dates, or products.
 * Add here when something real ships; NewsVisual renders per visualType.
 */
export const LATEST_NEWS: NewsItem[] = [
  {
    category: "Product",
    title: "Inside Alter Engine.",
    href: "/products#alter-engine",
    visualType: "engine",
  },
  {
    category: "Product",
    title: "Counter, stock, and books in one place.",
    href: "/products#axinventory",
    visualType: "inventory",
  },
  {
    category: "Engineering",
    title: "Execution that survives failure.",
    href: "/developers",
    visualType: "engineering",
  },
  {
    category: "Update",
    title: "Where the technical notes will live.",
    href: "/resources",
    visualType: "update",
  },
];
