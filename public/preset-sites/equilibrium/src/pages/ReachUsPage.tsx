import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { PageShell } from "../components/PageShell";

export function ReachUsPage({ embedded = false }: { embedded?: boolean }) {
  const form = (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <label className="block text-sm font-medium text-foreground">
        Name
        <input
          type="text"
          className="mt-1.5 w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-foreground"
          placeholder="Your name"
        />
      </label>
      <label className="block text-sm font-medium text-foreground">
        Email
        <input
          type="email"
          className="mt-1.5 w-full rounded-xl border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-foreground"
          placeholder="you@studio.com"
        />
      </label>
      <label className="block text-sm font-medium text-foreground">
        Message
        <textarea
          rows={4}
          className="mt-1.5 w-full resize-none rounded-xl border border-black/15 px-4 py-2.5 text-sm outline-none focus:border-foreground"
          placeholder="Tell us about your workflow"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-foreground py-3 text-sm text-white transition hover:scale-[1.03]"
      >
        Begin Journey
      </button>
      <p className="text-center text-sm text-muted">
        Or email{" "}
        <a
          href="mailto:hello@aethera.studio"
          className="text-foreground underline-offset-2 hover:underline"
        >
          hello@aethera.studio
        </a>
      </p>
    </form>
  );

  if (embedded) {
    return (
      <section className="border-t border-black/8 bg-background px-6 py-24 md:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Reach Us</p>
          <h2 className="font-display mt-3 text-4xl font-normal tracking-[-1.5px]">
            Start a journey
          </h2>
          <p className="mt-4 text-muted">We respond within one business day.</p>
          <div className="mt-8">{form}</div>
        </div>
      </section>
    );
  }

  return (
    <PageShell eyebrow="Reach Us" title="Start a journey">
      <p>Share your workflow goals — we respond within one business day.</p>
      {form}
      <button
        type="button"
        className="text-sm text-muted underline-offset-2 hover:underline"
        onClick={() => navigateToRoute("")}
      >
        Back to home
      </button>
    </PageShell>
  );
}
