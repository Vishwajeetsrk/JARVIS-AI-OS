import { AboutPage } from "./AboutPage";
import { BenefitsPage } from "./BenefitsPage";
import { GuidebookPage } from "./GuidebookPage";
import { JournalPage } from "./JournalPage";
import { JourneyPage } from "./JourneyPage";
import { RoamingPage } from "./RoamingPage";

export function HomePage() {
  return (
    <main>
      <JourneyPage />
      <BenefitsPage />
      <JournalPage />
      <GuidebookPage />
      <RoamingPage />
      <AboutPage />
    </main>
  );
}
