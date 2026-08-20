import { VIDEOS, NAV_LINKS } from "../constants";
import { BrandMark } from "./BrandMark";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[hsl(0,0%,0%)]">
      <video
        src={VIDEOS.hero}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-[40%] bg-gradient-to-t from-black via-black/60 to-transparent"
        aria-hidden
      />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <BrandMark />
        <div className="hidden items-center gap-10 text-sm text-white md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white transition-colors hover:text-white/80"
              data-editable
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
          data-editable
        >
          Begin Journey
        </a>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 pt-[28px] text-center">
        <h1
          className="animate-fade-rise font-heading max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
          data-editable
        >
          Where <em className="not-italic text-white">dreams</em> rise{" "}
          <em className="not-italic text-white">through the silence.</em>
        </h1>
        <p
          className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-white sm:text-lg"
          data-editable
        >
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the
          chaos, we build digital spaces for sharp focus and inspired work.
        </p>
        <a
          href="#cta"
          className="animate-fade-rise-delay-2 liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
          data-editable
        >
          Begin Journey
        </a>
      </div>
    </section>
  );
}
