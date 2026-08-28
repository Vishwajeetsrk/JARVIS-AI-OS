import SiteLayout from "../components/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28">
        <div className="mx-auto max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">
            Talk with Stellar.ai
          </h2>
          <p className="mt-4 text-white/55">
            hello@stellar.ai · Solutions team responds within one business day.
          </p>
          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your AI stack…"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Request demo
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
