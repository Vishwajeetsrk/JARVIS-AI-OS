import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { makePresetRoutes } from "../../_shared/makePresetRoutes";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { HomePage } from "./pages/HomePage";

const PAGES = [
  {
    path: "about",
    title: "About",
    description: "Learn how Targo simplifies freight and last-mile logistics.",
  },
  {
    path: "contact",
    title: "Contact Us",
    description: "Book a free consultation with our transport specialists.",
  },
];

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return <PresetHashRouter routes={makePresetRoutes(<HomePage />, PAGES, "dark")} />;
}
