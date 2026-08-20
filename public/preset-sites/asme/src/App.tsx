import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { HomePage } from "./pages/HomePage";
import { ManifestoPage } from "./pages/ManifestoPage";
import { PricingPage } from "./pages/PricingPage";
import { PrivacyPage } from "./pages/PrivacyPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": <HomePage />,
        features: <FeaturesPage />,
        pricing: <PricingPage />,
        about: <AboutPage />,
        manifesto: <ManifestoPage />,
        contact: <ContactPage />,
        privacy: <PrivacyPage />,
      }}
    />
  );
}
