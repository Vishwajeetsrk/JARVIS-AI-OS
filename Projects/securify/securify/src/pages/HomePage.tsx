import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { SecurifyNavbar } from "../components/SecurifyNavbar";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4";

export function HomePage() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />

      <SecurifyNavbar variant="hero" />

      <div className="relative h-full w-full">
        <h1
          className="hero-title animate-blur-fade-up absolute left-4 top-[18%] text-[14vw] font-medium lowercase text-white md:left-10 md:text-[13vw]"
          style={{ animationDelay: "120ms" }}
          data-editable
          data-preset-text="hero-headline-protect"
        >
          protect
        </h1>
        <h1
          className="hero-title animate-blur-fade-up absolute right-4 top-[38%] text-[14vw] font-medium lowercase text-white md:right-10 md:text-[13vw]"
          style={{ animationDelay: "260ms" }}
          data-editable
          data-preset-text="hero-headline-your"
        >
          your
        </h1>
        <h1
          className="hero-title animate-blur-fade-up absolute left-[18%] top-[58%] text-[14vw] font-medium lowercase text-white md:left-[28%] md:text-[13vw]"
          style={{ animationDelay: "400ms" }}
          data-editable
          data-preset-text="hero-headline-data"
        >
          data
        </h1>

        <p
          className="animate-blur-fade-up absolute left-6 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90 md:left-10"
          style={{ animationDelay: "520ms" }}
          data-editable
          data-preset-text="hero-tagline"
        >
          we can guarding your data with utmost care, empowering you with privacy everywhere
        </p>

        <div
          className="animate-blur-fade-up absolute right-6 top-[14%] md:right-24"
          style={{ animationDelay: "640ms" }}
        >
          <div className="flex items-center justify-end gap-3">
            <span className="hidden h-px w-24 rotate-[20deg] bg-white/40 md:block" aria-hidden />
            <span
              className="text-4xl font-medium tracking-tight md:text-5xl"
              data-editable
              data-preset-text="stat-1-value"
            >
              +65k
            </span>
          </div>
          <p
            className="mt-1 text-right text-xs text-white/70 md:text-sm"
            data-editable
            data-preset-text="stat-1-label"
          >
            startups use
          </p>
        </div>

        <div
          className="animate-blur-fade-up absolute bottom-20 left-6 md:bottom-24 md:left-20"
          style={{ animationDelay: "760ms" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-4xl font-medium tracking-tight md:text-5xl"
              data-editable
              data-preset-text="stat-2-value"
            >
              +1.5b
            </span>
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" aria-hidden />
          </div>
          <p
            className="mt-1 text-xs text-white/70 md:text-sm"
            data-editable
            data-preset-text="stat-2-label"
          >
            gb data was protected
          </p>
        </div>

        <div
          className="animate-blur-fade-up absolute bottom-16 right-6 md:bottom-20 md:right-20"
          style={{ animationDelay: "880ms" }}
        >
          <div className="flex items-center justify-end gap-3">
            <span className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" aria-hidden />
            <span
              className="text-4xl font-medium tracking-tight md:text-5xl"
              data-editable
              data-preset-text="stat-3-value"
            >
              +300k
            </span>
          </div>
          <p
            className="mt-1 text-right text-xs text-white/70 md:text-sm"
            data-editable
            data-preset-text="stat-3-label"
          >
            downloads
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-6 px-6 text-xs lowercase text-white/50 md:hidden">
        <PresetNavLink target={{ kind: "route", path: "platform" }} className="hover:text-white">
          platform
        </PresetNavLink>
        <PresetNavLink target={{ kind: "route", path: "solutions" }} className="hover:text-white">
          solutions
        </PresetNavLink>
        <PresetNavLink target={{ kind: "route", path: "company" }} className="hover:text-white">
          company
        </PresetNavLink>
        <PresetNavLink target={{ kind: "route", path: "support" }} className="hover:text-white">
          support
        </PresetNavLink>
      </div>
    </section>
  );
}
