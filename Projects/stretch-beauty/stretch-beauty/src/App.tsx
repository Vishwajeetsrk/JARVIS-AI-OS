import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { makePresetRoutes } from "../../_shared/makePresetRoutes";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { HomePage } from "./pages/HomePage";

const PAGES = [
  { path: "shop", title: "Shop", description: "Explore STRETCH skincare, sets, and tools." },
  {
    path: "shop/face",
    title: "Shop Face",
    description: "Serums, cleansers, and daily radiance essentials.",
  },
  {
    path: "shop/beauty-tools",
    title: "Shop Beauty Tools",
    description: "Brushes, rollers, and ritual accessories.",
  },
  {
    path: "shop/body",
    title: "Shop Body",
    description: "Hydrating body care with sustainable formulas.",
  },
  {
    path: "about",
    title: "About Us",
    description: "Ethical beauty with a lighter footprint on the planet.",
  },
  {
    path: "journal",
    title: "Journal",
    description: "Stories on sustainable skincare and mindful rituals.",
  },
  { path: "account", title: "Account", description: "Manage orders, addresses, and preferences." },
  { path: "search", title: "Search", description: "Find products across the STRETCH collection." },
];

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return <PresetHashRouter routes={makePresetRoutes(<HomePage />, PAGES, "light")} />;
}
