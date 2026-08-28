import { Play } from "lucide-react";
import VelorixNavbar from "../components/VelorixNavbar";
import { HERO_VIDEO } from "../constants";
import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { PresetSiteSections } from "../../../_shared/components/PresetSiteSections";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          data-draftly-asset-id="hero-video"
          data-draftly-default-src={HERO_VIDEO}
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70"
          aria-hidden
        />

        <VelorixNavbar />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-24 pt-28 text-center">
          <h1
            className="animate-blur-fade-up max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em]"
            style={{ animationDelay: "200ms", fontFamily: "Inter, sans-serif" }}
          >
            Where precision finds its edge...
          </h1>

          <button
            type="button"
            className="animate-blur-fade-up mt-10 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-85"
            style={{ animationDelay: "420ms", fontFamily: "Inter, sans-serif" }}
            onClick={() => navigateToRoute("how-it-works")}
          >
            Watch it unfold
            <Play size={16} fill="currentColor" strokeWidth={0} aria-hidden />
          </button>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black"
          aria-hidden
        />
      </section>

      <PresetSiteSections brand="Velorix" theme="dark" />
    </div>
  );
}
