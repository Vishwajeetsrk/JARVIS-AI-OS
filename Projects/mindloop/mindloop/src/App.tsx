import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import Navbar from "./components/Navbar";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PresetHashRouter
        routes={{
          "": <HomePage />,
          contact: <ContactPage />,
          privacy: <PrivacyPage />,
          terms: <TermsPage />,
        }}
      />
    </div>
  );
}
