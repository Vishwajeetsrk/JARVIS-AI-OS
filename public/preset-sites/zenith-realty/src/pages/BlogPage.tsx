import { PageShell } from "../components/PageShell";

const POSTS = [
  { title: "Designing sanctuaries in Malibu", date: "May 2026" },
  { title: "VR walk-throughs that close faster", date: "April 2026" },
  { title: "Island portfolios worth watching", date: "March 2026" },
];

export function BlogPage() {
  return (
    <PageShell
      title="Blog"
      subtitle="Market notes, design stories, and tools for modern property search."
    >
      <div className="space-y-4">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="flex flex-wrap items-center justify-between gap-4 border border-black/10 bg-white px-8 py-6"
          >
            <h2 className="text-lg font-medium text-[#141414]">{post.title}</h2>
            <span className="text-[13px] text-[#A5A5A5]">{post.date}</span>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
