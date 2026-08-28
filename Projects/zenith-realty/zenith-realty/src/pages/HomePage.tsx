import { HeroSection } from "../components/HeroSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { InvestmentSection } from "../components/InvestmentSection";
import { PropertiesSection } from "../components/PropertiesSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PropertiesSection />
      <HowItWorksSection />
      <InvestmentSection />
    </>
  );
}
