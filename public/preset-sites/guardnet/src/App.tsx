import { useEffect } from "react";
import { PresetNavLink } from "../../_shared/components/PresetNavLink";
import { PresetSiteSections } from "../../_shared/components/PresetSiteSections";
import { useDraftlyGalleryAutoplay } from "../../_shared/hooks/useDraftlyGalleryAutoplay";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_074215_f4339e1c-0b1a-4f60-98b2-90e3d7840cb7.mp4";
const SECURITY_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072418_508a7d2e-396d-4f6f-9d42-ec920fcf7755.mp4";
const BENEFITS_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4";

const NAV = [
  { label: "products", section: "security" },
  { label: "offerings", section: "companies" },
  { label: "mission", section: "benefits" },
  { label: "contact", section: "contact" },
] as const;

const GRADIENT_CTA = "linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)";

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="white" aria-hidden>
      <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
    </svg>
  );
}

function BackgroundVideo({ src, playing }: { src: string; playing: boolean }) {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay={playing}
      loop
      muted
      playsInline
    />
  );
}

function GradientDemoButton({ className = "" }: { className?: string }) {
  return (
    <PresetNavLink
      target={{ kind: "section", id: "contact" }}
      className={`inline-block whitespace-nowrap rounded-full px-4 py-2 text-xs text-black sm:px-7 sm:py-3 sm:text-sm ${className}`}
      style={{ background: GRADIENT_CTA }}
      data-editable
    >
      run demo
    </PresetNavLink>
  );
}

function Navbar() {
  return (
    <nav
      id="navbar"
      className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-3 pt-4 sm:px-6 sm:pt-6 md:px-10"
    >
      <PresetNavLink
        target={{ kind: "section", id: "hero" }}
        className="flex items-center gap-2 rounded-full bg-neutral-900/90 py-2.5 pl-3 pr-4 backdrop-blur sm:gap-2.5 sm:py-3 sm:pl-4 sm:pr-6"
      >
        <LogoMark className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-xs text-white sm:text-sm" data-editable>
          guardnet
        </span>
      </PresetNavLink>

      <div className="hidden rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex">
        {NAV.map((link) => (
          <PresetNavLink
            key={link.section}
            target={{ kind: "section", id: link.section }}
            className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
          >
            {link.label}
          </PresetNavLink>
        ))}
      </div>

      <PresetNavLink
        target={{ kind: "section", id: "contact" }}
        className="rounded-full bg-white px-4 py-2.5 text-xs text-black transition-colors hover:bg-neutral-200 sm:px-6 sm:py-3 sm:text-sm"
      >
        start today
      </PresetNavLink>
    </nav>
  );
}

function HeroSection({ playing }: { playing: boolean }) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-screen w-full overflow-hidden bg-black scroll-mt-0"
    >
      <BackgroundVideo src={HERO_VIDEO} playing={playing} />

      <div className="relative mx-auto h-full w-full max-w-[1320px]">
        <h1
          className="hero-title absolute left-3 top-[20%] text-[24vw] font-medium lowercase text-white sm:left-4 sm:top-[18%] md:left-10 md:text-[18vw]"
          data-editable
        >
          shelter
        </h1>
        <h1
          className="hero-title absolute right-3 top-[36%] text-[24vw] font-medium lowercase text-white sm:right-4 sm:top-[38%] md:right-10 md:text-[18vw]"
          data-editable
        >
          user
        </h1>
        <h1
          className="hero-title absolute left-[10%] top-[56%] text-[24vw] font-medium lowercase text-white sm:left-[18%] sm:top-[58%] md:left-[28%] md:text-[18vw]"
          data-editable
        >
          info
        </h1>

        <p
          className="absolute left-4 top-[48%] max-w-[220px] text-[13px] font-light leading-relaxed text-white/90 sm:left-6 sm:top-[46%] sm:max-w-[300px] sm:text-[18px] md:left-10"
          data-editable
        >
          we are holding each file with supreme care, granting user with safety in all place
        </p>

        <div className="absolute bottom-20 left-4 sm:bottom-24 sm:left-6 md:left-10">
          <div className="flex items-center gap-3">
            <div>
              <p
                className="text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl"
                data-editable
              >
                +2.7b
              </p>
              <p
                className="mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm"
                data-editable
              >
                mb info was concealed
              </p>
            </div>
            <span
              className="hidden h-px w-24 bg-white/40 md:block"
              style={{ transform: "rotate(-20deg)" }}
              aria-hidden
            />
          </div>
        </div>

        <div className="absolute right-4 top-[22%] sm:right-6 md:right-10">
          <div className="flex items-center gap-3">
            <span
              className="hidden h-px w-24 bg-white/40 md:block"
              style={{ transform: "rotate(20deg)" }}
              aria-hidden
            />
            <div>
              <p
                className="text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl"
                data-editable
              >
                +90k
              </p>
              <p
                className="mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm"
                data-editable
              >
                ventures run
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-10">
          <div className="flex items-center gap-3">
            <span
              className="hidden h-px w-24 bg-white/40 md:block"
              style={{ transform: "rotate(-20deg)" }}
              aria-hidden
            />
            <div>
              <p
                className="text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl"
                data-editable
              >
                +450k
              </p>
              <p
                className="mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm"
                data-editable
              >
                transfers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black"
        aria-hidden
      />
    </section>
  );
}

function SecuritySection({ playing }: { playing: boolean }) {
  return (
    <section
      id="security"
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black scroll-mt-24"
    >
      <BackgroundVideo src={SECURITY_VIDEO} playing={playing} />

      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-48 bg-gradient-to-b from-black to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto h-full w-full max-w-[1100px]">
        <div className="absolute left-1/2 top-6 z-20 w-max max-w-[95vw] -translate-x-1/2 rounded-full bg-neutral-900/80 p-2 backdrop-blur sm:top-10 sm:p-3">
          <div className="flex items-center gap-1 sm:gap-2">
            <PresetNavLink
              target={{ kind: "section", id: "security" }}
              className="whitespace-nowrap rounded-full px-4 py-2 text-xs text-white/90 transition-colors hover:text-white sm:px-7 sm:py-3 sm:text-sm"
            >
              confirm real person
            </PresetNavLink>
            <GradientDemoButton />
          </div>
        </div>

        <p
          className="absolute left-4 top-[62%] max-w-[280px] text-[13px] font-light leading-relaxed text-white/80 sm:left-6 sm:top-[56%] sm:max-w-[440px] sm:text-[18px] md:left-16"
          data-editable
        >
          shielding users info with premier tech, granting them with safety in all place
        </p>

        <p
          className="absolute right-4 top-[26%] max-w-[280px] text-[13px] font-light leading-relaxed text-white/90 sm:right-6 sm:top-[34%] sm:max-w-[500px] sm:text-[18px] md:right-16"
          data-editable
        >
          By teaming up with a defender service, a business can dramatically improve the safeguard
          of its important info. This covers applying strong obfuscation protocols, gateway
          barriers, and observation engines to shield against unauthorized entries, info escapes,
          and malicious cyberhacks.
        </p>
      </div>
    </section>
  );
}

function CompanyLogo({
  icon,
  label,
  twoLine,
}: {
  icon: React.ReactNode;
  label: string;
  twoLine?: boolean;
}) {
  return (
    <div className="relative z-10 flex items-center gap-2 sm:gap-3">
      {icon}
      {twoLine ? (
        <div
          className="text-lg font-semibold leading-tight tracking-tight lowercase text-white sm:text-2xl"
          data-editable
        >
          <div>eastern</div>
          <div>delta</div>
        </div>
      ) : (
        <span
          className="text-xl font-semibold tracking-tight lowercase text-white sm:text-3xl"
          data-editable
        >
          {label}
        </span>
      )}
    </div>
  );
}

function CompaniesSection() {
  return (
    <section
      id="companies"
      className="relative w-full scroll-mt-24 bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36">
          <div className="absolute -left-24 -top-24 h-40 w-40 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl" />
          <CompanyLogo
            label="apex"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white sm:h-8 sm:w-8" aria-hidden>
                <path d="M12 2l2.39 4.84L20 8l-4 3.9L17.28 18 12 15.27 6.72 18 8 11.9 4 8l5.61-1.16L12 2z" />
              </svg>
            }
          />
        </div>

        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36">
          <div className="absolute -left-24 -top-24 h-40 w-40 rounded-full bg-[#FA8453] opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-40 w-40 rounded-full bg-[#F5D547] opacity-25 blur-3xl" />
          <CompanyLogo
            label="forge"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white sm:h-8 sm:w-8" aria-hidden>
                <path d="M20.63 8.46l-4.73-2.73-.53.31 5.1 2.94v5.88l-5.1 2.94.53.3 4.73-2.72V8.46zM8.1 6.04l.53.3L3.53 9.28v5.88L8.63 18.1l-.53.3-4.73-2.72V8.46L8.1 6.04zM16.05 14.3v-4.6L12 7.4 7.95 9.7v4.6L12 16.6l4.05-2.3zm-.53-.3L12 16.02l-3.52-2.02v-4.02L12 7.96l3.52 2.02v4.02z" />
              </svg>
            }
          />
        </div>

        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36">
          <div className="absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-[#F5D547] opacity-30 blur-3xl" />
          <CompanyLogo
            label="eastern delta"
            twoLine
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white sm:h-8 sm:w-8" aria-hidden>
                <path d="M2 4l3 16h3l2-10 2 10h3l3-16h-3l-1.5 10L12 4h-2L8.5 14 7 4H2z" />
              </svg>
            }
          />
        </div>

        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36">
          <div className="absolute -right-28 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl" />
          <CompanyLogo
            label="skybank"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white sm:h-8 sm:w-8" aria-hidden>
                <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75L18 9.5l-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17l-6-3.75zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25L12 14.5l6 3.75L12 22l-6-3.75z" />
              </svg>
            }
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 sm:mt-28 sm:gap-8 md:ml-auto md:w-[70%] md:flex-row md:items-center">
        <p
          className="max-w-md text-[13px] font-light leading-relaxed text-white/70 sm:text-[18px]"
          data-editable
        >
          shielding users info with premier tech, granting them with safety in all place
        </p>
        <div className="relative rounded-full p-[1.5px]" style={{ background: GRADIENT_CTA }}>
          <PresetNavLink
            target={{ kind: "section", id: "contact" }}
            className="block rounded-full bg-black px-8 py-2.5 text-sm lowercase text-white sm:px-10 sm:py-3"
            data-editable
          >
            run demo
          </PresetNavLink>
        </div>
      </div>
    </section>
  );
}

const BENEFIT_BODY =
  "Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure.";

function BenefitsSection({ playing }: { playing: boolean }) {
  return (
    <section
      id="benefits"
      className="relative w-full scroll-mt-24 bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10"
    >
      <h2
        className="mb-12 text-center text-3xl font-light lowercase text-white sm:mb-24 sm:text-4xl md:text-5xl"
        style={{ letterSpacing: "-0.04em" }}
        data-editable
      >
        key benefits
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
        <div className="relative h-[380px] overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8">
          <div className="absolute top-1/2 -left-[420px] h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-xl font-light leading-tight lowercase sm:text-2xl" data-editable>
              preemptive risks
              <br />
              scouting and reactions
            </h3>
            <p
              className="mt-12 max-w-[280px] text-[13px] font-light leading-relaxed text-white/70 sm:mt-20 sm:text-[14px]"
              data-editable
            >
              {BENEFIT_BODY}
            </p>
          </div>
        </div>

        <div className="relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 sm:h-[460px]">
          <div className="relative w-full overflow-hidden" style={{ height: "75%" }}>
            <video
              className="block h-full w-full object-cover"
              src={BENEFITS_VIDEO}
              autoPlay={playing}
              loop
              muted
              playsInline
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950"
              aria-hidden
            />
          </div>
          <div className="flex flex-1 items-center justify-start p-6 sm:p-8">
            <h3 className="text-xl font-light leading-tight lowercase sm:text-2xl" data-editable>
              know-how and sectoral
              <br />
              awareness
            </h3>
          </div>
        </div>

        <div className="relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8">
          <div className="absolute -right-28 -top-28 h-56 w-56 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl" />
          <div className="relative z-10 flex h-full flex-col">
            <h3 className="text-xl font-light leading-tight lowercase sm:text-2xl" data-editable>
              preemptive risks
              <br />
              scouting and reactions
            </h3>
            <p
              className="mt-auto max-w-[320px] text-[13px] font-light leading-relaxed text-white/70 sm:text-[14px]"
              data-editable
            >
              {BENEFIT_BODY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const galleryAutoplay = useDraftlyGalleryAutoplay(true);

  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-black text-white">
      <div className="relative w-full">
        <Navbar />
        <HeroSection playing={galleryAutoplay} />
      </div>

      <div className="w-full max-w-[1400px]">
        <SecuritySection playing={galleryAutoplay} />
        <CompaniesSection />
        <BenefitsSection playing={galleryAutoplay} />
      </div>

      <PresetSiteSections theme="dark" brand="Guardnet" />
    </div>
  );
}
