import { useCallback, useEffect, useState } from "react";
import { Instagram, Send } from "lucide-react";
import { applyPresetHashOnLoad, navigateToSection } from "../../_shared/preset-site-routing";
import { LogoRed } from "./components/LogoRed";
import { LogoWhite } from "./components/LogoWhite";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_213626_db1bde2b-521c-4b22-91f3-35c072eb8771.mp4";

type NavId = "home" | "rituals" | "rates";

const NAV_ITEMS: { id: NavId; label: string }[] = [
  { id: "home", label: "HOME" },
  { id: "rituals", label: "RITUALS" },
  { id: "rates", label: "RATES" },
];

const STAT_CARDS: [string, string][] = [
  ["80%", "Reach uplift"],
  ["92%", "Client loyalty"],
];

const interBold: React.CSSProperties = { fontFamily: "Inter, sans-serif", fontWeight: 700 };
const interRegular: React.CSSProperties = { fontFamily: "Inter, sans-serif", fontWeight: 400 };
const interBase: React.CSSProperties = { fontFamily: "Inter, sans-serif" };

function activeNavFromHash(): NavId {
  if (typeof window === "undefined") return "home";
  const id = window.location.hash.replace(/^#/, "");
  if (id === "rituals" || id === "rates") return id;
  return "home";
}

export default function App() {
  const [activeNav, setActiveNav] = useState<NavId>("home");

  const goToSection = useCallback((id: NavId) => {
    setActiveNav(id);
    navigateToSection(id);
  }, []);

  useEffect(() => {
    applyPresetHashOnLoad();
    setActiveNav(activeNavFromHash());

    const onHashChange = () => setActiveNav(activeNavFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden overflow-y-auto"
      style={{ backgroundColor: "#e02b10" }}
    >
      <video
        className="fixed inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={HERO_VIDEO}
        data-draftly-asset-id="videos-hero"
      />

      <nav className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between gap-2 px-4 py-4 sm:px-6 md:px-10 md:py-5">
        <div className="flex items-center gap-3 sm:gap-6">
          <LogoWhite />
          <div className="hidden items-center gap-2 sm:flex">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = activeNav === id;
              return (
                <button
                  key={id}
                  type="button"
                  data-editable
                  onClick={() => goToSection(id)}
                  className={
                    isActive
                      ? "rounded-full bg-white px-5 py-2 text-xs text-black transition-all hover:bg-white/90"
                      : "rounded-full border border-white/60 px-5 py-2 text-xs text-white transition-all hover:border-white hover:bg-white/10"
                  }
                  style={isActive ? interBold : interRegular}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="text-white transition-opacity hover:opacity-70"
            aria-label="Instagram"
            onClick={() => window.open("https://instagram.com", "_blank", "noopener,noreferrer")}
          >
            <Instagram size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="hidden text-white transition-opacity hover:opacity-70 sm:block"
            aria-label="Send"
            onClick={() => window.open("mailto:hello@metricx.studio", "_blank")}
          >
            <Send size={16} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            data-editable
            onClick={() => goToSection("rates")}
            className="whitespace-nowrap rounded-full border border-white px-3 py-2 text-xs text-white transition-all hover:bg-white hover:text-red-600 sm:px-5"
            style={interBase}
          >
            Reservations
          </button>
        </div>
      </nav>

      <div
        id="home"
        className="relative z-20 flex min-h-screen flex-col px-4 sm:px-6 md:px-10 scroll-mt-24"
      >
        <div className="h-[72px] shrink-0" />

        <div
          className="mx-auto flex flex-1 flex-col gap-10 py-8 md:flex-row md:items-center md:justify-between md:gap-32 md:py-0"
          style={{ maxWidth: "1100px", width: "100%" }}
        >
          <div id="rituals" className="max-w-[260px] scroll-mt-28">
            <p
              className="mb-2 text-[13px] uppercase leading-snug tracking-[0.22em] text-white"
              style={interBold}
              data-editable
            >
              MARKETING
              <br />
              COLLECTIVE
            </p>
            <p
              className="text-[13px] leading-relaxed text-white"
              style={{ ...interBase, opacity: 0.8 }}
              data-editable
            >
              Creative growth blueprints
              <br />
              for bold brands in Web3 era
            </p>
          </div>

          <div className="max-w-[260px] text-left">
            <div className="mb-2 flex justify-start">
              <LogoRed />
            </div>
            <p
              className="mb-3 text-[14px] leading-relaxed text-white"
              style={interBase}
              data-editable
            >
              MetricX is the essential growth dashboard for bold agencies. Monitor reach, refine
              spend, steer campaigns, surface insights, delight your clients every day.
            </p>
            <p
              className="text-[13px] leading-loose text-white"
              style={{ ...interBase, opacity: 0.7 }}
              data-editable
            >
              Audiences Dashboards Spend
              <br />
              Performance Channels Growth
            </p>
          </div>
        </div>

        <div
          id="rates"
          className="flex shrink-0 flex-col gap-8 pb-8 scroll-mt-28 lg:flex-row lg:items-end lg:justify-between lg:gap-6"
        >
          <div className="min-w-0 flex-1">
            <h1
              className="mb-6 select-none text-white md:mb-10"
              style={{
                fontFamily: "Britanica-Black, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(56px, 13vw, 155px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.78,
                width: "fit-content",
              }}
              data-editable
            >
              creative
              <br />
              studio
            </h1>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <p
                className="text-[14px] leading-relaxed text-white"
                style={{ ...interBase, minWidth: "160px" }}
                data-editable
              >
                Sharp ideas only. We craft
                <br />
                brands that own Web3.
              </p>
              <button
                type="button"
                data-editable
                onClick={() => goToSection("rates")}
                className="w-full rounded-full bg-white text-black shadow-lg transition-all hover:bg-gray-100 active:scale-95 sm:w-auto"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                  padding: "24px 60px",
                }}
              >
                begin now
              </button>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6">
            {STAT_CARDS.map(([value, label]) => (
              <div
                key={label}
                className="flex flex-1 flex-col items-start justify-between rounded-2xl px-5 py-5 text-left sm:px-6 lg:flex-initial"
                style={{
                  minWidth: "150px",
                  minHeight: "150px",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p
                  className="leading-none"
                  style={{
                    fontFamily: "Britanica-Black, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 2.6rem)",
                    color: "#111",
                  }}
                  data-editable
                >
                  {value}
                </p>
                <p
                  className="mt-auto text-[12px]"
                  style={{ fontFamily: "Inter, sans-serif", color: "#888" }}
                  data-editable
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
