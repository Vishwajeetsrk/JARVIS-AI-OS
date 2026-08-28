import SiteLayout from "../components/SiteLayout";

export default function ContactPage({ embedded }: { embedded?: boolean }) {
  const content = (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/80">Contact</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground">
          Talk with Terra
        </h2>
        <p className="mt-4 text-muted-foreground">
          hello@terra.maps · Solutions team responds within one business day.
        </p>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/50"
          />
          <textarea
            rows={4}
            placeholder="Tell us about your geospatial stack…"
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/50"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          >
            Request demo
          </button>
        </form>
      </div>
    </section>
  );

  if (embedded) return content;

  return <SiteLayout>{content}</SiteLayout>;
}
