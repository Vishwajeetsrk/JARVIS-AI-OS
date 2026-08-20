import { HERO_BADGE, HERO_HEADLINE, HERO_SUBTITLE } from "../constants";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-8 text-center sm:px-8"
    >
      <p
        className="animate-blur-fade-up mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 sm:text-sm"
        style={{ animationDelay: "150ms" }}
      >
        {HERO_BADGE}
      </p>

      <h1
        className="animate-blur-fade-up eos-gradient-text max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ animationDelay: "300ms" }}
      >
        {HERO_HEADLINE}
      </h1>

      <p
        className="animate-blur-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
        style={{ animationDelay: "450ms" }}
      >
        {HERO_SUBTITLE}
      </p>

      <div className="animate-blur-fade-up mt-10" style={{ animationDelay: "600ms" }} id="waitlist">
        <PresetNavLink target={{ kind: "route", path: "waitlist" }}>
          <button
            type="button"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:px-10 sm:text-base"
          >
            Join Waitlist
          </button>
        </PresetNavLink>
      </div>
    </section>
  );
}
