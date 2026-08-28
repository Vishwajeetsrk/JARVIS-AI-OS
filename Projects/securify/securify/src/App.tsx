import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { CompanyPage } from "./pages/CompanyPage";
import { HomePage } from "./pages/HomePage";
import { PlatformPage } from "./pages/PlatformPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { SupportPage } from "./pages/SupportPage";
import { TermsPage } from "./pages/TermsPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": <HomePage />,
        platform: <PlatformPage />,
        solutions: <SolutionsPage />,
        company: <CompanyPage />,
        support: <SupportPage />,
        privacy: <PrivacyPage />,
        terms: <TermsPage />,
      }}
    />
  );
}
