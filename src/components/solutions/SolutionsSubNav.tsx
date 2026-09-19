import Link from "next/link";
import { SOLUTIONS_TOPICS } from "@/content/solutionsTopics";

export function SolutionsSubNav({ current }: { current: string }) {
  const index = SOLUTIONS_TOPICS.findIndex((t) => t.slug === current);
  const next = SOLUTIONS_TOPICS[(index + 1) % SOLUTIONS_TOPICS.length];

  return (
    <div className="border-t border-ax-mint/10 py-10">
      <div className="container-ax flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/solutions" className="text-[13px] font-medium text-ax-muted transition-colors hover:text-ax-mint">
          ← All solutions
        </Link>
        <Link
          href={`/solutions/${next.slug}`}
          className="group flex items-center gap-2 text-[15px] font-medium text-ax-white transition-colors hover:text-ax-mint"
        >
          Next: {next.label}
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
