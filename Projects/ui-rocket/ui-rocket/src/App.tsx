import { useEffect } from "react";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { HomePage } from "./pages/HomePage";

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return <HomePage />;
}
