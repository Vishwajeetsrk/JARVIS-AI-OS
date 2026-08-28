import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { makePresetRoutes } from "../../_shared/makePresetRoutes";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { HomePage } from "./pages/HomePage";

const PAGES = [
  {
    path: "renewables",
    title: "Renewables",
    description: "Solar, wind, and storage programs for communities.",
  },
  {
    path: "strategies",
    title: "Strategies",
    description: "Grid planning and decarbonization roadmaps.",
  },
  {
    path: "photovoltaic",
    title: "Photovoltaic",
    description: "Utility-scale PV design and deployment.",
  },
  { path: "wind", title: "Wind", description: "Onshore and offshore turbine partnerships." },
  {
    path: "packages",
    title: "Packages",
    description: "Bundled energy plans for homes and businesses.",
  },
];

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return <PresetHashRouter routes={makePresetRoutes(<HomePage />, PAGES, "light")} />;
}
