import { ContactSection } from "../components/ContactSection";
import { DocsSection } from "../components/DocsSection";
import { EcosystemSection } from "../components/EcosystemSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HeroSection } from "../components/HeroSection";
import { LogoMarquee } from "../components/LogoMarquee";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogoMarquee />
      <div id="products" className="scroll-mt-24 pt-8">
        <FeaturesSection />
      </div>
      <div id="ecosystem" className="scroll-mt-24">
        <EcosystemSection />
      </div>
      <div id="docs" className="scroll-mt-24">
        <DocsSection />
      </div>
      <div id="contact" className="scroll-mt-24">
        <ContactSection />
      </div>
    </main>
  );
}
