import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { CONTACT_ROUTE, HOME_ROUTE, NAV_LINKS } from "../constants";
import { ClippedButton } from "./ClippedButton";

function TargoLogo() {
  return (
    <PresetNavLink target={HOME_ROUTE} className="flex items-center gap-2.5">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand text-lg font-bold text-white clip-corner"
        aria-hidden
      >
        T
      </span>
      <span className="text-xl font-semibold tracking-tight text-white" data-editable>
        Targo
      </span>
    </PresetNavLink>
  );
}

export function Navbar() {
  return (
    <header id="navbar" className="relative z-20 w-full px-5 pt-5 md:px-10 md:pt-6 lg:px-14">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <TargoLogo />

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, target }) => (
            <PresetNavLink
              key={label}
              target={target}
              className="text-sm font-medium text-white/80 transition hover:text-white"
              data-editable
            >
              {label}
            </PresetNavLink>
          ))}
        </div>

        <PresetNavLink target={CONTACT_ROUTE}>
          <ClippedButton className="px-5 py-2.5 text-xs uppercase tracking-wider">
            Contact
          </ClippedButton>
        </PresetNavLink>
      </nav>
    </header>
  );
}
