import { navigateToRoute } from "../../../_shared/preset-site-routing";

export function ContactPage() {
  return (
    <section className="scroll-mt-20 border-t border-white/8 bg-background px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-xl">
        <p className="section-eyebrow mb-3">Contact</p>
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">Begin your ritual</h2>
        <p className="mt-4 text-muted">
          Tell us about your schedule and goals — we respond within one business day.
        </p>
        <form
          className="liquid-glass mt-8 space-y-4 rounded-2xl p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block text-sm font-medium">
            Name
            <input
              type="text"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input
              type="email"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50"
              placeholder="you@studio.com"
            />
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea
              rows={4}
              className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-accent/50"
              placeholder="What balance are you seeking?"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-accent py-3 text-sm font-semibold text-background"
          >
            Send message
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">
          Prefer email?{" "}
          <a href="mailto:hello@equilibrium.studio" className="text-accent hover:underline">
            hello@equilibrium.studio
          </a>
        </p>
        <button
          type="button"
          className="mx-auto mt-6 block text-sm text-muted underline-offset-2 hover:underline"
          onClick={() => navigateToRoute("")}
        >
          Back to home
        </button>
      </div>
    </section>
  );
}
