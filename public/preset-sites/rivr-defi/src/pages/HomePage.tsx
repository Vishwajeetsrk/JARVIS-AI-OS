import { Hero } from "../components/Hero";
import { ContactPage } from "./ContactPage";
import { DevelopersPage } from "./DevelopersPage";
import { EconomicsPage } from "./EconomicsPage";
import { EcosystemPage } from "./EcosystemPage";
import { GovernancePage } from "./GovernancePage";
import { StakingPage } from "./StakingPage";

export function HomePage() {
  return (
    <>
      <Hero />
      <div id="ecosystem" className="scroll-mt-24">
        <EcosystemPage />
      </div>
      <div id="economics" className="scroll-mt-24">
        <EconomicsPage />
      </div>
      <div id="developers" className="scroll-mt-24">
        <DevelopersPage />
      </div>
      <div id="governance" className="scroll-mt-24">
        <GovernancePage />
      </div>
      <div id="staking" className="scroll-mt-24">
        <StakingPage />
      </div>
      <div id="contact" className="scroll-mt-24">
        <ContactPage />
      </div>
    </>
  );
}
