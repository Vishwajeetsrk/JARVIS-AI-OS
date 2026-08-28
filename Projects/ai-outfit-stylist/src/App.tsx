import { OutfitPipeline } from "./components/OutfitPipeline";
import { BottomTabBar } from "./components/BottomTabBar";
import { MarketingPanel } from "./components/MarketingPanel";

export default function App() {
  return (
    <div className="app">
      <div className="app-phone">
        <div className="phone-frame">
          <div className="phone-status-bar">
            <span className="phone-time">9:41</span>
            <div className="phone-notch" />
            <div className="phone-signals">
              <span>●●●●</span>
              <span>WiFi</span>
              <span>🔋</span>
            </div>
          </div>
          <div className="phone-content">
            <OutfitPipeline />
          </div>
          <BottomTabBar />
        </div>
      </div>
      <MarketingPanel />
    </div>
  );
}
