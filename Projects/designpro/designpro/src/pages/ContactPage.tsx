import PageShell from "../components/PageShell";

export function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact us"
      title="Apply for the next enrollment cohort"
      description="Share your background and goals. Admissions reviews applications on a rolling basis until seats fill."
    >
      <form
        className="max-w-xl space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-white/70">
            First name
            <input
              type="text"
              className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
            />
          </label>
          <label className="block text-sm text-white/70">
            Last name
            <input
              type="text"
              className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
            />
          </label>
        </div>
        <label className="block text-sm text-white/70">
          Email
          <input
            type="email"
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
          />
        </label>
        <label className="block text-sm text-white/70">
          Why DesignPro?
          <textarea
            rows={4}
            className="mt-1.5 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/30"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Submit application
        </button>
      </form>
      <p className="mt-8 text-sm text-white/50">
        hello@designpro.studio · We respond within 2 business days.
      </p>
    </PageShell>
  );
}
