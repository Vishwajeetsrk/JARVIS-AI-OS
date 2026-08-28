import { Globe, Linkedin, MapPin, Play, Twitter, Youtube } from "lucide-react";
import { AVATAR_URLS, HERO_HEADLINE } from "../constants";
import { FadeDown } from "./FadeDown";
import { StaggeredFade } from "./StaggeredFade";

export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-28 pt-6 md:px-10 md:pb-32">
      <FadeDown delay={0.2}>
        <span className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-heading/90">
          <span aria-hidden>⚡</span>
          <span aria-hidden>🌿</span>
          <span>Clean grid · Solar & storage</span>
        </span>
      </FadeDown>

      <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-heading sm:text-5xl md:text-6xl lg:text-7xl">
        <StaggeredFade text={HERO_HEADLINE} delay={0.35} />
      </h1>

      <FadeDown delay={0.75} className="mt-6 max-w-xl">
        <p className="text-base leading-relaxed text-heading/70 md:text-lg">
          Deploy community-scale renewable systems with real-time monitoring and transparent impact
          reporting.
        </p>
      </FadeDown>

      <FadeDown delay={0.9} className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          className="btn-green-gradient rounded-full px-7 py-3 text-sm font-semibold transition md:px-8 md:py-3.5 md:text-base"
        >
          Start your project
        </button>
        <button
          type="button"
          className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-heading transition hover:bg-white/50 md:px-8 md:py-3.5 md:text-base"
        >
          View case studies
        </button>
      </FadeDown>

      <div className="pointer-events-none absolute inset-x-0 bottom-24 z-20 flex items-end justify-between px-6 md:bottom-28 md:px-10">
        <FadeDown
          delay={1}
          className="pointer-events-auto flex max-w-[200px] items-start gap-2 text-sm text-heading/80"
        >
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-heading/60" strokeWidth={1.75} />
          <span>
            1200 Solar Way
            <br />
            Austin, TX 78701
          </span>
        </FadeDown>

        <FadeDown delay={1.05} className="pointer-events-auto absolute left-1/2 -translate-x-1/2">
          <button
            type="button"
            className="liquid-glass flex h-14 w-14 items-center justify-center rounded-full text-heading transition hover:scale-105 md:h-16 md:w-16"
            aria-label="Play overview video"
          >
            <Play className="h-6 w-6 fill-heading/80 text-heading/80 md:h-7 md:w-7" />
          </button>
        </FadeDown>

        <FadeDown delay={1.1} className="pointer-events-auto flex flex-col items-end gap-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {AVATAR_URLS.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-canvas object-cover md:h-10 md:w-10"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-heading">+37k</span>
          </div>
          <div className="flex items-center gap-2">
            {[Globe, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <button
                key={i}
                type="button"
                className="liquid-glass flex h-9 w-9 items-center justify-center rounded-full text-heading/70 transition hover:text-heading"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </button>
            ))}
          </div>
        </FadeDown>
      </div>
    </section>
  );
}
