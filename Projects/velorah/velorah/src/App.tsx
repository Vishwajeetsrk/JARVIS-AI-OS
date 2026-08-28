import { useEffect } from "react";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { CtaSection } from "./components/CtaSection";
import { FeatureSection } from "./components/FeatureSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { StatementSection } from "./components/StatementSection";
import { TaglineSection } from "./components/TaglineSection";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="bg-[hsl(0,0%,0%)]">
      <HeroSection />
      <TaglineSection />
      <FeatureSection />
      <StatementSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
