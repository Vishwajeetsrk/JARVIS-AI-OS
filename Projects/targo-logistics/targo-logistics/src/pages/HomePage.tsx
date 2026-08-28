import { HeroSection } from "../components/HeroSection";
import { PresetSiteSections } from "../../../_shared/components/PresetSiteSections";

export function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <PresetSiteSections brand="Targo" theme="dark" />
    </div>
  );
}
