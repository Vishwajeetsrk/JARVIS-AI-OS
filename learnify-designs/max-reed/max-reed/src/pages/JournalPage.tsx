const POSTS = [
  { title: "Designing motion for product launches", date: "Mar 2026" },
  { title: "Bento grids without losing hierarchy", date: "Jan 2026" },
  { title: "Liquid glass in dark interfaces", date: "Nov 2025" },
] as const;

export function JournalPage() {
  return (
    <section className="border-t border-white/10 px-4 py-20 md:px-14">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-normal tracking-tight">Journal</h2>
        <ul className="mt-8 space-y-4">
          {POSTS.map(({ title, date }) => (
            <li key={title} className="flex justify-between gap-4 border-b border-white/10 py-4">
              <span className="text-sm text-white/90">{title}</span>
              <span className="text-xs text-white/40">{date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
