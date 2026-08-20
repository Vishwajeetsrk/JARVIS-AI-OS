import { PageShell } from "../components/PageShell";

export function ContactPage() {
  return (
    <PageShell
      eyebrow="Get in touch"
      title={
        <>
          Contact <span className="font-serif italic">Acreage</span>
        </>
      }
      description="Partnerships, press, wholesale, and product questions—our team responds within two business days."
    >
      <form
        className="mt-12 max-w-lg space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-white/50">Name</span>
          <input
            type="text"
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-white/50">Email</span>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40"
            placeholder="you@email.com"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-white/50">Message</span>
          <textarea
            rows={4}
            className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-white/40"
            placeholder="How can we help?"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-[#DA3A16] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#c43312]"
        >
          Send message
        </button>
      </form>
    </PageShell>
  );
}
