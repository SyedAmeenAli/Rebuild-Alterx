export const alterEngineDestination = process.env.NEXT_PUBLIC_ALTER_ENGINE_URL ?? "/try-alter-engine";
export const talkToUsDestination = "/contact";

export interface ListItem {
  label: string;
  href: string;
  desc?: string;
}

export interface ProductItem extends ListItem {
  visual: "alterx" | "engine" | "inventory";
}

export interface NavMenu {
  id: string;
  label: string;
  type: "mega" | "list" | "link";
  href?: string;
  items?: ListItem[];
  footerLabel?: string;
  footerHref?: string;
}

/**
 * Real routes only. Every href below points at a section that
 * actually exists in the repo (anchors verified against each page's
 * own `id="..."` — grep before adding, don't invent one). Pricing is
 * intentionally omitted: no pricing page or model exists yet, and the
 * alternative is inventing one.
 */
export const PRODUCTS: ProductItem[] = [
  {
    label: "ALTERX",
    href: "/",
    desc: "One system for everything you run.",
    visual: "alterx",
  },
  {
    label: "Alter Engine",
    href: "/products#alter-engine",
    desc: "The execution core beneath ALTERX.",
    visual: "engine",
  },
  {
    label: "AxInventory",
    href: "/products#axinventory",
    desc: "Inventory, POS and accounting for Indian retail.",
    visual: "inventory",
  },
];

export const navigationData: NavMenu[] = [
  {
    id: "products",
    label: "Products",
    type: "mega",
    href: "/products",
  },
  {
    id: "solutions",
    label: "Solutions",
    type: "list",
    href: "/solutions",
    items: [
      { label: "The gap", href: "/solutions/the-gap", desc: "Where plain software stops short of real execution." },
      { label: "Where it fits", href: "/solutions/where-it-fits", desc: "How ALTERX sits alongside the systems you already run." },
      { label: "How it works", href: "/solutions/how-it-works", desc: "From a plain-language objective to verified execution." },
      { label: "Reliability", href: "/solutions/reliability", desc: "How the system holds up when execution changes." },
    ],
    footerLabel: "Explore solutions",
    footerHref: "/solutions",
  },
  {
    id: "developer",
    label: "Developer",
    type: "list",
    href: "/developers",
    items: [
      { label: "Developer overview", href: "/developers", desc: "How execution is planned, run, verified and recovered." },
      { label: "Documentation", href: "/docs", desc: "Reference material for building on ALTERX." },
    ],
    footerLabel: "Read the system",
    footerHref: "/developers",
  },
  {
    id: "company",
    label: "Company",
    type: "list",
    href: "/about",
    items: [
      { label: "About", href: "/about", desc: "Why ALTERX exists." },
      { label: "Careers", href: "/careers", desc: "Build the systems behind the work." },
      { label: "Contact", href: "/contact", desc: "Tell us what needs to happen." },
      { label: "FAQ", href: "/faq", desc: "Common questions about ALTERX." },
    ],
  },
  {
    id: "news",
    label: "News",
    type: "link",
    href: "/resources",
  },
];
