import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import EcosystemPage from "./pages/EcosystemPage";
import HelpPage from "./pages/HelpPage";
import HomePage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";
import NewsPage from "./pages/NewsPage";
import RewardsPage from "./pages/RewardsPage";
import WalletPage from "./pages/WalletPage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <PresetHashRouter
        routes={{
          "": <HomePage />,
          network: <NetworkPage />,
          ecosystem: <EcosystemPage />,
          rewards: <RewardsPage />,
          help: <HelpPage />,
          news: <NewsPage />,
          wallet: <WalletPage />,
        }}
      />
    </div>
  );
}
