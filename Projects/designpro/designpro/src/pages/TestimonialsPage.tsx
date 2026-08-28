import PageShell from "../components/PageShell";
import { TESTIMONIALS } from "../constants";

export function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Testimonials"
      title="Outcomes our alumni talk about"
      description="Graduates join product orgs at startups and enterprises with portfolios and narratives that hiring panels remember."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <blockquote
            key={item.author}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm leading-relaxed text-white/85">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-4 text-xs font-medium uppercase tracking-wide text-white/50">
              {item.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </PageShell>
  );
}
