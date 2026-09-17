export interface NavLink {
  label: string;
  href: string;
  description?: string;
  disabled?: boolean;
}

export const alterEngineDestination = process.env.NEXT_PUBLIC_ALTER_ENGINE_URL ?? "/try-alter-engine";
export const talkToUsDestination = "/contact";

export interface NavMenu {
  id: string;
  trigger: string;
  href?: string;
  links: NavLink[];
  secondaryLinks?: NavLink[];
  visualType: "products" | "solutions" | "developers" | "resources" | "about";
}

export const navigationData: NavMenu[] = [
  {
    id: "products",
    trigger: "Products",
    href: "/products",
    visualType: "products",
    links: [
      { label: "Alter Engine", href: "/products#alter-engine", description: "The execution system underneath ALTERX." },
      { label: "AxInventory", href: "/products#axinventory", description: "Inventory, POS, purchasing, GST and accounting." },
    ],
  },
  {
    id: "solutions",
    trigger: "Solutions",
    href: "/solutions",
    visualType: "solutions",
    links: [
      { label: "The gap", href: "/solutions#gap" },
      { label: "Where it fits", href: "/solutions#fits" },
      { label: "How it works", href: "/solutions#process" },
      { label: "Reliability", href: "/solutions#reliability" },
    ],
  },
  {
    id: "developers",
    trigger: "Developers",
    href: "/developers",
    visualType: "developers",
    links: [
      { label: "Developer overview", href: "/developers#overview" },
      { label: "Documentation", href: "/developers#documentation" },
      { label: "APIs / SDKs", href: "/developers#apis", disabled: true },
      { label: "Playground", href: "/developers#playground", disabled: true },
    ],
  },
  {
    id: "resources",
    trigger: "Resources",
    href: "/resources",
    visualType: "resources",
    links: [
      { label: "Resource hub", href: "/resources" },
      { label: "Case studies", href: "/resources#case-studies", disabled: true },
      { label: "Guides", href: "/resources#guides", disabled: true },
      { label: "Research and updates", href: "/resources#research", disabled: true },
    ],
  },
  {
    id: "about",
    trigger: "About",
    href: "/about",
    visualType: "about",
    links: [
      { label: "Our story", href: "/about#story" },
      { label: "Mission", href: "/about#mission" },
      { label: "Company", href: "/about#company" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
