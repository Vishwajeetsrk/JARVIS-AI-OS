import { PageIntro } from "../components/PageIntro";

const POSTS = [
  { title: "Designing your first IND-enabling package", date: "Mar 12, 2026" },
  { title: "What Series A biotech investors ask in 2026", date: "Feb 28, 2026" },
  { title: "Building a credible CMC narrative pre-Phase 1", date: "Feb 3, 2026" },
];

export function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Insights from the bench and the boardroom"
        description="Practical guidance for founders navigating science, regulation, and capital in parallel."
      />
      <section className="border-t border-foreground/10 px-5 py-16 lg:px-16">
        <ul className="mx-auto max-w-3xl divide-y divide-foreground/10">
          {POSTS.map((post) => (
            <li key={post.title} className="py-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                {post.date}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
