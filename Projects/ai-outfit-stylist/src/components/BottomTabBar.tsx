import { Home, Shirt, Plus, LayoutGrid, User } from "lucide-react";
import { useState } from "react";

const TABS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "wardrobe", icon: Shirt, label: "Wardrobe" },
  { id: "add", icon: Plus, label: "", isFab: true },
  { id: "outfits", icon: LayoutGrid, label: "Outfits" },
  { id: "profile", icon: User, label: "Profile" },
];

export function BottomTabBar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="tab-bar">
      {TABS.map((tab) => {
        const Icon = tab.icon;
        if (tab.isFab) {
          return (
            <button key={tab.id} className="tab-bar-fab" aria-label="Create">
              <Plus size={24} />
            </button>
          );
        }
        return (
          <button
            key={tab.id}
            className={`tab-bar-item ${active === tab.id ? "tab-bar-item--active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            <Icon size={20} />
            <span className="tab-bar-label">{tab.label}</span>
            {active === tab.id && <span className="tab-bar-dot" />}
          </button>
        );
      })}
    </nav>
  );
}
