import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { CAREER_TIMELINE } from "../constants";

export function AboutPage() {
  return (
    <section className="border-t border-white/10 px-4 py-20 md:px-14">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-normal tracking-tight">About Max Reed</h2>
        <p className="mt-4 text-sm text-white/60 leading-relaxed">
          London-based creator crafting bold digital products, brand systems, and motion-led
          interfaces for teams worldwide.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CAREER_TIMELINE.map(({ year, role }) => (
            <div key={year} className="rounded-2xl border border-white/10 bg-card p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">{year}</p>
              <p className="mt-2 text-sm text-white/90">{role}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="liquid-glass mt-8 rounded-full px-6 py-3 text-sm font-medium"
          onClick={() => navigateToRoute("contact")}
        >
          Let&apos;s Team Up Today
        </button>
      </div>
    </section>
  );
}
