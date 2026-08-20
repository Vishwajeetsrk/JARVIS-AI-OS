import type { MouseEvent } from "react";

export function linkToSectionId(label: string): string {
  return label
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function sectionHref(label: string): string {
  return `#${linkToSectionId(label)}`;
}

export function scrollToSection(
  e: MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  onDone?: () => void,
): void {
  e.preventDefault();
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
  }
  onDone?.();
}
