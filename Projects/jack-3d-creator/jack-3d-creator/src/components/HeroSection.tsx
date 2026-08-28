import {
  handlePresetNavClick,
  presetNavHref,
  resolveNavTarget,
} from "../../../_shared/preset-site-routing";
import { NAV_LINKS, PORTRAIT_URL } from "../constants";
import { ContactButton } from "./ContactButton";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen flex-col overflow-x-clip">
      <FadeIn as="nav" className="relative z-20" delay={0} y={-20}>
        <ul className="flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-mist md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
          {NAV_LINKS.map((link) => {
            const target = resolveNavTarget(link.label, { section: link.section });
            return (
              <li key={link.label}>
                <a
                  href={presetNavHref(target)}
                  className="transition-opacity duration-200 hover:opacity-70"
                  onClick={(e) => handlePresetNavClick(e, target)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </FadeIn>

      <FadeIn className="relative z-10 mt-6 overflow-hidden sm:mt-4 md:-mt-5" delay={0.15} y={40}>
        <h1 className="hero-heading w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m jack
        </h1>
      </FadeIn>

      <Magnet
        className="absolute left-1/2 z-10 w-[280px] -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 sm:w-[360px] md:w-[440px] lg:w-[520px]"
        padding={150}
        strength={3}
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={PORTRAIT_URL}
            alt="Jack portrait"
            className="h-auto w-full object-contain"
            draggable={false}
          />
        </FadeIn>
      </Magnet>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
