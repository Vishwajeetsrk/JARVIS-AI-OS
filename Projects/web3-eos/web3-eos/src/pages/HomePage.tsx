import { BackgroundVideo } from "../components/BackgroundVideo";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { PresetSiteSections } from "../../../_shared/components/PresetSiteSections";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <BackgroundVideo />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <HeroSection />
      </div>

      <PresetSiteSections brand="Web3 EOS" theme="dark" />
    </div>
  );
}
