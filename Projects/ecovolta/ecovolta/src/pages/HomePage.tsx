import { HERO_VIDEO_URL } from "../constants";
import { HeroSection } from "../components/HeroSection";
import { LogoMarquee } from "../components/LogoMarquee";
import { Navbar } from "../components/Navbar";
import { PresetSiteSections } from "../../../_shared/components/PresetSiteSections";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-heading">
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas/55 via-canvas/25 to-canvas/75"
          aria-hidden
        />
        <div className="relative z-10 flex h-full flex-col">
          <Navbar />
          <HeroSection />
          <LogoMarquee />
        </div>
      </div>
      <PresetSiteSections brand="Sunfield Energy" theme="light" />
    </div>
  );
}
