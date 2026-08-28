import { ArrowUpRight, Sparkle } from "lucide-react";
import { CAREER_TIMELINE, VIDEO_BACKGROUND, VIDEO_DAILY_SOFTWARE, VIDEO_STATS } from "../constants";
import { BackgroundVideo } from "./BackgroundVideo";
import { IconMarquee } from "./IconMarquee";

const STROKE = 1.5;

export function FeaturesSection() {
  return (
    <section className="min-h-screen bg-canvas px-4 py-6 text-white sm:px-6 sm:py-8 md:px-10 md:py-10 lg:flex lg:h-screen lg:flex-col lg:px-14">
      <header className="mb-6 flex flex-col gap-6 lg:mb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="max-w-3xl">
          <h1 className="text-[28px] font-normal leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-[44px]">
            Hi, I&apos;m Max Reed!
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-[1.6] text-white/60 md:text-[15px]">
            A London-based creator crafting bold digital products, brand systems, and motion-led
            interfaces for teams who want clarity without losing personality.
          </p>
        </div>
        <button
          type="button"
          className="liquid-glass shrink-0 self-start rounded-full px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 md:px-7 md:py-3.5"
        >
          Let&apos;s Team Up Today
        </button>
      </header>

      <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5">
        {/* Col 1 — Background + timeline */}
        <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl bg-black md:min-h-[480px] lg:min-h-0">
          <BackgroundVideo src={VIDEO_BACKGROUND} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

          <div className="relative z-10 flex flex-1 flex-col justify-between p-5 md:p-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              <Sparkle className="h-3.5 w-3.5" strokeWidth={STROKE} />
              <span>Background</span>
              <Sparkle className="h-3.5 w-3.5" strokeWidth={STROKE} />
            </div>

            <div className="mt-auto grid grid-cols-4 gap-2 border-t border-white/10 pt-5 md:gap-3 md:pt-6">
              {CAREER_TIMELINE.map((entry) => (
                <div
                  key={entry.year}
                  className="flex flex-col items-center gap-2 text-center sm:gap-2.5"
                >
                  <span className="text-xs font-medium text-white/50 md:text-sm">{entry.year}</span>
                  <Sparkle className="h-3 w-3 text-white/30" strokeWidth={STROKE} />
                  <span className="text-[10px] leading-snug text-white/90 sm:text-xs md:text-sm">
                    {entry.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Col 2 — Client Voice + 10M+ */}
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="relative overflow-hidden rounded-2xl bg-card p-5 md:p-6">
            <div className="noise-overlay" aria-hidden />
            <p className="relative z-10 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Client Voice
            </p>
            <blockquote className="relative z-10 mt-4 text-base leading-[1.55] text-white/90 md:text-lg">
              &ldquo;Max translated our messy product story into a crisp, cinematic experience.
              Elena Brooks, CMO at Northline.&rdquo;
            </blockquote>
            <p className="relative z-10 mt-4 text-sm text-white/50">Elena Brooks</p>
          </div>

          <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl md:min-h-[240px]">
            <BackgroundVideo src={VIDEO_STATS} />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end p-5 md:min-h-[240px] md:p-6">
              <p className="text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">10M+</p>
              <p className="mt-1 text-sm text-white/60">Views across shipped campaigns</p>
            </div>
          </div>
        </div>

        {/* Col 3 — Daily Software + Reach Me */}
        <div className="flex flex-col gap-4 md:col-span-2 md:gap-5 lg:col-span-1">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative min-h-[220px] md:min-h-[260px]">
              <BackgroundVideo src={VIDEO_DAILY_SOFTWARE} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
              <div className="relative z-10 p-5 md:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  Daily Software
                </p>
                <p className="mt-2 max-w-xs text-sm leading-[1.5] text-white/70">
                  Tools I reach for when shaping interfaces, motion, and brand systems.
                </p>
              </div>
            </div>
            <div className="relative z-10 -mt-2 overflow-hidden px-4 pb-4 md:px-5 md:pb-5">
              <IconMarquee />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-card p-5 md:p-6">
            <div className="noise-overlay" aria-hidden />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  Reach Me
                </p>
                <p className="mt-3 text-sm text-white/80">hello@maxreed.studio</p>
                <p className="mt-1 text-sm text-white/60">+44 20 7946 0958</p>
                <p className="mt-1 text-sm text-white/60">London, UK</p>
              </div>
              <button
                type="button"
                className="liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/5"
                aria-label="Contact Max Reed"
              >
                <ArrowUpRight className="h-5 w-5" strokeWidth={STROKE} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
