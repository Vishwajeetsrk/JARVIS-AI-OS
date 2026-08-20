import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { CognitraShell } from "./components/CognitraShell";
import { LegalSections } from "./components/LegalSections";
import { CasePage } from "./pages/CasePage";
import { ConnectPage } from "./pages/ConnectPage";
import { CrewPage } from "./pages/CrewPage";
import { HomePage } from "./pages/HomePage";
import { OfferingPage } from "./pages/OfferingPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { RatesPage } from "./pages/RatesPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <CognitraShell>
      <PresetHashRouter
        routes={{
          "": <HomePage />,
          offering: <OfferingPage />,
          case: <CasePage />,
          rates: <RatesPage />,
          crew: <CrewPage />,
          connect: <ConnectPage />,
          privacy: <PrivacyPage />,
        }}
      />
      <LegalSections />
      <footer
        style={{
          position: "relative",
          zIndex: 2,
          background: "#1a1a1a",
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          padding: "24px 32px",
          fontSize: 11,
          letterSpacing: "0.06em",
        }}
      >
        © 2026 COGNITRA
      </footer>
    </CognitraShell>
  );
}
