import { ArrowRight } from "lucide-react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { HERO_VIDEO } from "../constants";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <div className="max-w-2xl text-left">
          <h1
            data-editable
            className="animate-blur-fade-up text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-[3.35rem]"
            style={{ animationDelay: "180ms" }}
          >
            Live Better, Feel Whole Every Day
          </h1>
          <div
            className="animate-blur-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "380ms" }}
          >
            <PresetNavLink
              target={{ kind: "route", path: "contact" }}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-background transition hover:brightness-110"
              data-editable
            >
              Start Today
              <ArrowRight className="h-4 w-4" aria-hidden />
            </PresetNavLink>
            <PresetNavLink
              target={{ kind: "section", id: "wellness" }}
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-foreground"
              data-editable
            >
              Discover How
            </PresetNavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
