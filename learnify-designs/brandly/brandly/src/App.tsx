import { useEffect } from "react";
import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import { PresetNavLink } from "../../_shared/components/PresetNavLink";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { BRAND_CLIENTS, HERO_VIDEO_URL, NAV_LINKS } from "./constants";

type BrandIconType = (typeof BRAND_CLIENTS)[number]["icon"];

function BrandIcon({ type }: { type: BrandIconType }) {
  const base = "h-8 w-8";
  switch (type) {
    case "frame":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden>
          <rect
            x="4"
            y="6"
            width="24"
            height="20"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect x="10" y="12" width="12" height="8" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "peak":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden>
          <path
            d="M4 26 L16 6 L28 26 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M12 26 L16 18 L20 26" fill="currentColor" opacity="0.4" />
        </svg>
      );
    case "luma":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden>
          <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="16" r="4" fill="currentColor" />
        </svg>
      );
    case "arc":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden>
          <path d="M6 24 Q16 4 26 24" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="6" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "pixel":
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden>
          <rect x="6" y="6" width="8" height="8" fill="currentColor" />
          <rect x="18" y="6" width="8" height="8" fill="currentColor" opacity="0.5" />
          <rect x="6" y="18" width="8" height="8" fill="currentColor" opacity="0.5" />
          <rect x="18" y="18" width="8" height="8" fill="currentColor" opacity="0.25" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" className={base} aria-hidden>
          <path d="M8 8 H24 V24 H8 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 16 H20" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
  }
}

function Header() {
  return (
    <header className="relative z-10 flex shrink-0 items-center justify-between px-6 py-5 md:px-10 md:py-6">
      <span
        className="text-xl font-bold tracking-tight text-ink md:text-2xl"
        data-editable
        data-preset-text="logo-wordmark"
      >
        Brandly
      </span>

      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <PresetNavLink
            key={link.id}
            target={{ kind: "section", id: link.id }}
            className="text-sm font-medium text-ink/80 hover:text-ink"
            data-editable
            data-preset-text={`nav-${link.id}`}
          >
            {link.label}
          </PresetNavLink>
        ))}
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <PresetNavLink
          target={{ kind: "section", id: "signup" }}
          className="rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-ink/90 sm:px-5"
          data-editable
          data-preset-text="cta-sign-up"
        >
          Sign Up
        </PresetNavLink>
        <PresetNavLink
          target={{ kind: "section", id: "login" }}
          className="rounded-lg border border-ink/20 bg-white/60 px-4 py-2.5 text-sm font-medium text-ink backdrop-blur-sm hover:bg-white/80 sm:px-5"
          data-editable
          data-preset-text="cta-log-in"
        >
          Log In
        </PresetNavLink>
      </div>
    </header>
  );
}

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-canvas text-ink">
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-canvas/70 via-canvas/40 to-canvas/85"
        aria-hidden
      />

      <Header />

      <main className="relative z-10 flex flex-1 flex-col justify-between px-6 pb-6 md:px-10 md:pb-8">
        <div className="flex items-start justify-between gap-4 pt-2 md:pt-4">
          <h1
            className="font-display text-[clamp(2.25rem,9vw,6.5rem)] uppercase leading-[0.92] tracking-tight text-ink"
            data-editable
            data-preset-text="hero-headline"
          >
            Building Brands
            <br />
            That Resonate
          </h1>
          <p
            className="shrink-0 pt-2 text-right font-display text-xl uppercase leading-tight tracking-wide text-ink sm:text-2xl md:text-4xl"
            data-editable
            data-preset-text="hero-stat-brands"
          >
            50+
            <br />
            Brands Launched
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-md space-y-4">
            <PresetNavLink
              target={{ kind: "section", id: "signup" }}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white hover:bg-ink/90"
              data-editable
              data-preset-text="hero-cta"
            >
              Start today
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </PresetNavLink>

            <p
              className="text-sm font-light leading-relaxed text-ink/85 md:text-base"
              data-editable
              data-preset-text="hero-bio"
            >
              We craft distinctive identities and digital experiences for ambitious teams — from
              strategy and visual systems to launch-ready brand worlds.
            </p>

            <div className="flex items-center gap-3 text-ink/70">
              <a href="#facebook" aria-label="Facebook" className="hover:text-ink" data-editable>
                <Facebook className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a href="#instagram" aria-label="Instagram" className="hover:text-ink" data-editable>
                <Instagram className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a href="#youtube" aria-label="YouTube" className="hover:text-ink" data-editable>
                <Youtube className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <p
            className="font-display text-3xl uppercase tracking-wide text-ink md:text-5xl"
            data-editable
            data-preset-text="hero-stat-years"
          >
            5+ Years
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {BRAND_CLIENTS.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white/50 px-3 py-4 backdrop-blur-sm"
            >
              <BrandIcon type={brand.icon} />
              <span
                className="text-center text-xs font-medium text-ink/90"
                data-editable
                data-preset-text={`client-${brand.icon}`}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </main>

      <div id="about" className="sr-only" aria-hidden />
      <div id="features" className="sr-only" aria-hidden />
      <div id="pricing" className="sr-only" aria-hidden />
      <div id="faq" className="sr-only" aria-hidden />
      <div id="help" className="sr-only" aria-hidden />
      <div id="signup" className="sr-only" aria-hidden />
      <div id="login" className="sr-only" aria-hidden />
    </div>
  );
}
