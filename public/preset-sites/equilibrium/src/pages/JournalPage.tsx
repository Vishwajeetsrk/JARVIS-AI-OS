import { PageShell } from "../components/PageShell";

const POSTS = [
  { title: "Silence as infrastructure", date: "Mar 2026" },
  { title: "Designing for deep work", date: "Feb 2026" },
  { title: "Loops that breathe", date: "Jan 2026" },
];

export function JournalPage({ embedded = false }: { embedded?: boolean }) {
  const list = (
    <ul className="divide-y divide-black/10">
      {POSTS.map((post) => (
        <li key={post.title} className="flex items-baseline justify-between gap-4 py-5">
          <span className="font-display text-xl text-foreground">{post.title}</span>
          <span className="shrink-0 text-sm text-muted">{post.date}</span>
        </li>
      ))}
    </ul>
  );

  if (embedded) {
    return (
      <section className="border-t border-black/8 bg-background px-6 py-24 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Journal</p>
          <h2 className="font-display mt-3 text-4xl font-normal tracking-[-1.5px]">Field notes</h2>
          <div className="mt-8">{list}</div>
        </div>
      </section>
    );
  }

  return (
    <PageShell eyebrow="Journal" title="Field notes">
      {list}
    </PageShell>
  );
}
