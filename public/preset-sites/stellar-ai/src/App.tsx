import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ForTeamsPage from "./pages/ForTeamsPage";
import HomePage from "./pages/HomePage";
import LearnHubPage from "./pages/LearnHubPage";
import PricingPage from "./pages/PricingPage";
import SolutionsPage from "./pages/SolutionsPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": <HomePage />,
        solutions: <SolutionsPage />,
        "for-teams": <ForTeamsPage />,
        about: <AboutPage />,
        "learn-hub": <LearnHubPage />,
        pricing: <PricingPage />,
        contact: <ContactPage />,
      }}
    />
  );
}
