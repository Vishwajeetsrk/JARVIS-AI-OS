import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import AiDefensePage from "./pages/AiDefensePage";
import ConnectionsPage from "./pages/ConnectionsPage";
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
        "ai-defense": <AiDefensePage />,
        connections: <ConnectionsPage />,
        insights: <InsightsPage />,
        contact: <ContactPage />,
      }}
    />
  );
}
