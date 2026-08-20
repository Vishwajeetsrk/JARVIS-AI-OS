import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { StatementSection } from "../components/StatementSection";
import { CasePage } from "./CasePage";
import { ConnectPage } from "./ConnectPage";
import { CrewPage } from "./CrewPage";
import { RatesPage } from "./RatesPage";

/** Single-scroll home with embedded section previews for hash anchors */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <ServicesSection />
      <div id="case" className="scroll-mt-8">
        <CasePage embedded />
      </div>
      <div id="rates" className="scroll-mt-8">
        <RatesPage embedded />
      </div>
      <div id="crew" className="scroll-mt-8">
        <CrewPage embedded />
      </div>
      <div id="connect" className="scroll-mt-8">
        <ConnectPage embedded />
      </div>
    </>
  );
}
