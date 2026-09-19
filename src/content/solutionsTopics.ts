export interface SolutionsTopic {
  slug: string;
  label: string;
  eyebrow: string;
  summary: string;
}

export const SOLUTIONS_TOPICS: SolutionsTopic[] = [
  { slug: "the-gap", label: "The gap", eyebrow: "01", summary: "Where plain software stops short of real execution." },
  { slug: "where-it-fits", label: "Where it fits", eyebrow: "02", summary: "How ALTERX sits alongside the systems you already run." },
  { slug: "how-it-works", label: "How it works", eyebrow: "03", summary: "From a plain-language objective to verified execution." },
  { slug: "reliability", label: "Reliability", eyebrow: "04", summary: "How the system holds up when execution changes." },
];
