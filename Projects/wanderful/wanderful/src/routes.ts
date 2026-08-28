export const DESKTOP_LINKS = [
  { label: "About", route: "" },
  { label: "Destinations", route: "destinations" },
  { label: "Booking", route: "booking" },
  { label: "FAQ", route: "faq" },
  { label: "Account", route: "account" },
] as const;

export const MOBILE_LINKS = DESKTOP_LINKS.filter((l) => l.route !== "account");
