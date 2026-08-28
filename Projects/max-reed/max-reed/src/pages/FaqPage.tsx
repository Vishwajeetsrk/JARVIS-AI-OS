const FAQ_ITEMS = [
  {
    q: "What kinds of projects do you take on?",
    a: "Product design, brand systems, launch films, and motion-led marketing sites—typically 4–12 week engagements.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. Most collaborations are async-friendly with London timezone overlap for reviews and workshops.",
  },
  {
    q: "How do we get started?",
    a: "Share a brief over email. We align on scope, timeline, and deliverables before kicking off discovery.",
  },
] as const;

export function FaqPage() {
  return (
    <section className="border-t border-white/10 px-4 py-20 md:px-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">FAQ</p>
        <h2 className="mt-2 text-3xl font-normal tracking-tight">Common questions</h2>
        <ul className="mt-10 space-y-6">
          {FAQ_ITEMS.map(({ q, a }) => (
            <li key={q} className="rounded-2xl border border-white/10 bg-card/50 p-6">
              <h3 className="text-sm font-medium text-white/90">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
