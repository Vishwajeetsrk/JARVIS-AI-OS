import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import InsightsPage from "./pages/InsightsPage";
import PlatformPage from "./pages/PlatformPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": <HomePage />,
        platform: <PlatformPage />,
        "how-it-works": <HowItWorksPage />,
        insights: <InsightsPage />,
        contact: <ContactPage />,
      }}
    />
  );
}
