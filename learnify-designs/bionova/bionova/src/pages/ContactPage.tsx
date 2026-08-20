import { PageIntro } from "../components/PageIntro";

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start a conversation"
        description="Tell us about your program stage, therapeutic area, and timeline—we respond within two business days."
      />
      <section className="border-t border-foreground/10 px-5 pb-24 lg:px-16">
        <form className="mx-auto max-w-xl space-y-4">
          <label className="block text-sm font-medium">
            Name
            <input
              type="text"
              className="mt-1 w-full rounded-xl border border-foreground/15 px-4 py-3 text-sm outline-none focus:border-hero-btn"
              placeholder="Alex Chen"
            />
          </label>
          <label className="block text-sm font-medium">
            Work email
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-foreground/15 px-4 py-3 text-sm outline-none focus:border-hero-btn"
              placeholder="alex@biotech.co"
            />
          </label>
          <label className="block text-sm font-medium">
            How can we help?
            <textarea
              rows={4}
              className="mt-1 w-full rounded-xl border border-foreground/15 px-4 py-3 text-sm outline-none focus:border-hero-btn"
              placeholder="Series A prep, IND strategy, partnering…"
            />
          </label>
          <button
            type="button"
            className="rounded-full bg-hero-btn px-6 py-3 text-sm font-semibold text-white"
          >
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
