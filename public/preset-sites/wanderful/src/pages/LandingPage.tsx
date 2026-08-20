import { AboutPage } from "./AboutPage";
import { BenefitsPage } from "./BenefitsPage";
import { GuidebookPage } from "./GuidebookPage";
import { JournalPage } from "./JournalPage";
import { JourneyPage } from "./JourneyPage";
import { RoamingPage } from "./RoamingPage";

export function LandingPage() {
  return (
    <>
      <div id="journey" className="scroll-mt-24">
        <JourneyPage />
      </div>
      <div id="benefits" className="scroll-mt-24">
        <BenefitsPage />
      </div>
      <div id="journal" className="scroll-mt-24">
        <JournalPage />
      </div>
      <div id="guidebook" className="scroll-mt-24">
        <GuidebookPage />
      </div>
      <div id="roaming" className="scroll-mt-24">
        <RoamingPage />
      </div>
      <div id="about" className="scroll-mt-24">
        <AboutPage />
      </div>
    </>
  );
}
