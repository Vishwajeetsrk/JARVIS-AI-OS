/** Scroll targets for nav anchors — green palette below hero. */
export function LinkFlowSections() {
  const block =
    "border-t border-[#1f2a1d]/10 py-20 md:py-28 px-6 md:px-10 scroll-mt-24 bg-[#f4f7f2]";
  const title = "text-3xl md:text-4xl font-normal tracking-tight text-[#336443]";
  const body = "text-[#4b5b47] text-base leading-relaxed max-w-2xl mt-4";

  return (
    <>
      <section id="mission" className={block}>
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#85AB8B]">Purpose</p>
          <h2 className={`${title} mt-3`}>Unite signals into outcomes</h2>
          <p className={body}>
            LinkFlow connects the tools your team already uses so data moves between systems without
            brittle scripts or manual handoffs.
          </p>
        </div>
      </section>

      <section id="how" className={`${block} bg-white`}>
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#85AB8B]">The Process</p>
          <h2 className={`${title} mt-3`}>How we build workflows</h2>
          <p className={body}>
            Map integrations, define triggers, and let FluxEngine orchestrate AI-assisted paths from
            raw signals to verified actions.
          </p>
        </div>
      </section>

      <section id="pricing" className={block}>
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#85AB8B]">Tariffs</p>
          <h2 className={`${title} mt-3`}>Plans that scale with you</h2>
          <p className={body}>
            Start free, add connectors as you grow, and upgrade when your automation volume needs
            dedicated throughput.
          </p>
        </div>
      </section>

      <section id="signup" className={`${block} bg-[#1f2a1d] text-white`}>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight">Sign Me Up!</h2>
          <p className="mt-4 text-white/75 max-w-md mx-auto">
            Create your workspace and connect your first integrations in minutes.
          </p>
          <button
            type="button"
            className="mt-8 bg-white text-[#1f2a1d] hover:bg-white/90 text-sm font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Try it Live
          </button>
        </div>
      </section>

      <section id="login" className={`${block} bg-white`}>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className={title}>Enter</h2>
          <p className={body + " mx-auto"}>Sign in to your LinkFlow dashboard.</p>
          <button
            type="button"
            className="mt-8 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Log in
          </button>
        </div>
      </section>
    </>
  );
}
