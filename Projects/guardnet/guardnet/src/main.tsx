import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initDraftlyGalleryPreview } from "../../_shared/initDraftlyGalleryPreview";
import "./index.css";
import App from "./App";

initDraftlyGalleryPreview();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
