import { navigateToSection } from "../../../_shared/preset-site-routing";

/** Scroll to hero subscribe form and focus the email field. */
export function scrollToSubscribe(): void {
  navigateToSection("home");
  window.setTimeout(() => {
    const input = document.querySelector<HTMLInputElement>("#subscribe-email");
    input?.focus({ preventScroll: true });
    input?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 350);
}
