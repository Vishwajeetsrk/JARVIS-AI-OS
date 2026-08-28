import HeroSection from "../components/HeroSection";
import LogoRow from "../components/LogoRow";
import SiteLayout from "../components/SiteLayout";
import { TerraGlobeBanner } from "../components/TerraSectionPage";
import TerraSectionPage from "../components/TerraSectionPage";
import ContactPage from "./ContactPage";
import PricingPage from "./PricingPage";

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <LogoRow />
      <TerraGlobeBanner />
      <TerraSectionPage sectionKey="product" />
      <TerraSectionPage sectionKey="solutions" />
      <div className="scroll-mt-8">
        <PricingPage embedded />
      </div>
      <div className="scroll-mt-8">
        <ContactPage embedded />
      </div>
    </SiteLayout>
  );
}
