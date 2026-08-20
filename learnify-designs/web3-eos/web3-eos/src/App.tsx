import { useEffect } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { makePresetRoutes } from "../../_shared/makePresetRoutes";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { HomePage } from "./pages/HomePage";

const PAGES = [
  {
    path: "platform",
    title: "Platform",
    description:
      "Sub-second finality, modular rollups, and native account abstraction for every app.",
  },
  {
    path: "ecosystem",
    title: "Ecosystem",
    description: "Explore wallets, dApps, and infrastructure partners building on Web3 EOS.",
  },
  {
    path: "developers",
    title: "Developers",
    description: "SDKs, testnet access, and docs to ship production-grade Web3 experiences.",
  },
  {
    path: "docs",
    title: "Docs",
    description: "API references, guides, and integration patterns for the EOS stack.",
  },
  {
    path: "waitlist",
    title: "Join Waitlist",
    description: "Reserve early access — public launch May 1, 2026.",
  },
];

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return <PresetHashRouter routes={makePresetRoutes(<HomePage />, PAGES, "dark")} />;
}
