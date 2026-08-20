import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { SecurifyLogo } from "./SecurifyLogo";

const NAV = [
  { label: "platform", route: "platform" },
  { label: "solutions", route: "solutions" },
  { label: "company", route: "company" },
  { label: "support", route: "support" },
] as const;

type SecurifyNavbarProps = {
  /** Hero overlay uses absolute positioning inside the video section */
  variant?: "hero" | "page";
};

export function SecurifyNavbar({ variant = "page" }: SecurifyNavbarProps) {
  const wrap =
    variant === "hero"
      ? "absolute z-20 left-0 right-0 top-0 px-6 pt-6 md:px-10"
      : "relative z-20 px-6 pt-6 md:px-10";

  return (
    <nav className={`${wrap} flex items-center justify-between gap-4`}>
      <div className="flex items-center gap-2 rounded-full bg-neutral-900/90 py-3 pl-4 pr-6 backdrop-blur">
        <PresetNavLink
          target={{ kind: "route", path: "" }}
          className="flex items-center gap-2"
          aria-label="securify home"
        >
          <SecurifyLogo />
          <span
            className="text-sm font-normal tracking-tight text-white"
            data-editable
            data-preset-text="brand-name"
          >
            securify
          </span>
        </PresetNavLink>
      </div>

      <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex">
        {NAV.map((item) => (
          <PresetNavLink
            key={item.route}
            target={{ kind: "route", path: item.route }}
            className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
            data-editable
            data-preset-text={`nav-${item.label}`}
          >
            {item.label}
          </PresetNavLink>
        ))}
      </div>

      <PresetNavLink
        target={{ kind: "route", path: "support" }}
        className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
        data-editable
        data-preset-text="cta-get-started"
      >
        get started
      </PresetNavLink>
    </nav>
  );
}
