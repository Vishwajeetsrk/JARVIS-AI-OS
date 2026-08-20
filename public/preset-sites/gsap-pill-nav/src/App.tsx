import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { CollectionsPage } from "./pages/CollectionsPage";
import { CommunityPage } from "./pages/CommunityPage";
import { ContactPage } from "./pages/ContactPage";
import { DropsPage } from "./pages/DropsPage";
import { HomePage } from "./pages/HomePage";
import { InnovationPage } from "./pages/InnovationPage";
import { StoresPage } from "./pages/StoresPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": <HomePage />,
        drops: <DropsPage />,
        innovation: <InnovationPage />,
        collections: <CollectionsPage />,
        community: <CommunityPage />,
        stores: <StoresPage />,
        contact: <ContactPage />,
      }}
    />
  );
}
