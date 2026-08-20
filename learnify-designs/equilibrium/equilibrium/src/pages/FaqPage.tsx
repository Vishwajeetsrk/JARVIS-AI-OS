const FAQ = [
  {
    q: "Do I need prior yoga or meditation experience?",
    a: "No — coaches adapt breath pacing and mobility progressions to your baseline on day one.",
  },
  {
    q: "Are programs in-person or virtual?",
    a: "Most rituals are hybrid: virtual check-ins with optional studio immersions in select cities.",
  },
  {
    q: "Can teams enroll together?",
    a: "Yes. We offer cohort pricing with shared recovery metrics and executive coaching office hours.",
  },
] as const;

export function FaqPage() {
  return (
    <section className="scroll-mt-20 border-t border-white/8 bg-surface px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="section-eyebrow mb-3">FAQ</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Questions before you begin
        </h2>
        <dl className="mt-10 space-y-4">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="liquid-glass rounded-2xl p-5">
              <dt className="font-medium text-foreground">{q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
