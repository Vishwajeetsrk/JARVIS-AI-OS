import { useEffect } from "react";
import { Lock } from "lucide-react";
import { PresetSiteSections } from "../../_shared/components/PresetSiteSections";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import HeroParallaxVideo from "./components/HeroParallaxVideo";
import { linkToSectionId, scrollToSection, sectionHref } from "./lib/scroll";

const NAV_LINKS = ["JOURNEY", "BENEFITS", "JOURNAL", "GUIDEBOOK"] as const;

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-black text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <section id="journey" className="relative min-h-screen">
        <HeroParallaxVideo />

        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-10 py-8">
          <a
            href={sectionHref("journey")}
            onClick={(e) => scrollToSection(e, "journey")}
            className="text-[17px] font-semibold tracking-tight"
          >
            Wanderful<sup className="ml-0.5 text-[0.55em]">TM</sup>
          </a>

          <nav
            className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href={sectionHref(label)}
                onClick={(e) => scrollToSection(e, linkToSectionId(label))}
                className="rounded-full px-4 py-1.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={sectionHref("roaming")}
            onClick={(e) => scrollToSection(e, "roaming")}
            className="liquid-glass hidden rounded-full px-5 py-2.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors hover:text-white md:inline-flex"
          >
            GET ROAMING
          </a>

          <a
            href={sectionHref("roaming")}
            onClick={(e) => scrollToSection(e, "roaming")}
            className="liquid-glass rounded-full px-5 py-2.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 md:hidden"
          >
            GET ROAMING
          </a>
        </header>

        <div className="pointer-events-none fixed inset-x-0 top-[120px] z-20 flex flex-col items-center text-center">
          <h1 className="hero-fade-in font-hero text-[clamp(40px,5.4vw,72px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
            Venture without edges.
          </h1>
          <p
            className="hero-fade-in font-hero text-[clamp(40px,5.4vw,72px)] font-normal leading-[1.1] tracking-[-0.02em]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Uncover with keen instinct.
          </p>
        </div>

        <div className="pointer-events-auto fixed inset-x-0 bottom-14 z-20 flex flex-col items-center gap-6 px-6">
          <p className="hero-fade-in-delay max-w-[620px] text-center text-[15px] leading-relaxed">
            <span className="text-white">
              Our smart itineraries shape around you — your rhythm, your vibe, your hunger for
              adventure.
            </span>
            <span className="text-white/55">
              {" "}
              Each getaway is tailored, seamless, and wholly yours.
            </span>
          </p>

          <button
            type="button"
            className="hero-fade-in-delay rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]"
          >
            Plan my escape today
          </button>

          <div className="hero-fade-in-delay flex items-center gap-2">
            <Lock size={13} strokeWidth={1.5} className="text-white/70" />
            <span className="font-body text-[11px] font-medium tracking-[0.14em] text-white/70">
              SECURE BY DESIGN. ZERO DATA LEAKS.
            </span>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 md:px-12"
      >
        <h2 className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Benefits</h2>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Roaming plans adapt to your calendar, budget, and preferred pace—no generic packages.
        </p>
      </section>

      <section
        id="journal"
        className="scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 md:px-12"
      >
        <h2 className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Journal</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Field notes from Patagonia, Kyoto, and the Atacama—written by travelers, not algorithms
          alone.
        </p>
      </section>

      <section
        id="guidebook"
        className="scroll-mt-24 border-t border-white/10 bg-black px-6 py-20 md:px-12"
      >
        <h2 className="font-body text-xs uppercase tracking-[0.2em] text-white/50">Guidebook</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Offline maps, phrase cards, and local hosts vetted by the Wanderful network.
        </p>
      </section>

      <section
        id="roaming"
        className="scroll-mt-24 border-t border-white/10 bg-black px-6 py-24 text-center md:px-12"
      >
        <h2 className="text-3xl font-semibold">Get roaming</h2>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          Activate your eSIM in under two minutes.
        </p>
        <button
          type="button"
          className="mt-8 rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black"
        >
          Start now
        </button>
      </section>

      <PresetSiteSections theme="dark" brand="Wanderful" />
    </div>
  );
}
