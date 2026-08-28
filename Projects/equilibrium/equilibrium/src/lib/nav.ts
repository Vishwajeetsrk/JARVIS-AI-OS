import {
  getPresetRoutePath,
  navigateToRoute,
  navigateToSection,
} from "../../../_shared/preset-site-routing";

/** Scroll to a home section; return to home route first when on an inner page. */
export function scrollToHomeSection(sectionId: string): void {
  const goHomeFirst = getPresetRoutePath() !== "";
  if (goHomeFirst) {
    navigateToRoute("");
    const onHash = () => {
      window.removeEventListener("hashchange", onHash);
      requestAnimationFrame(() => navigateToSection(sectionId));
    };
    window.addEventListener("hashchange", onHash);
    return;
  }
  navigateToSection(sectionId);
}
