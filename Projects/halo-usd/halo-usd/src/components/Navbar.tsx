import { useEffect, useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import {
  getPresetRoutePath,
  subscribePresetHashNavigation,
} from "../../../_shared/preset-site-routing";
import { NAV_LINKS } from "../constants";
import LogoIcon from "./LogoIcon";

export default function Navbar() {
  const [route, setRoute] = useState("");

  useEffect(() => {
    setRoute(getPresetRoutePath());
    return subscribePresetHashNavigation(setRoute);
  }, []);

  const isHome = route === "";

  return (
    <nav className="absolute top-0 right-0 left-0 z-20 px-6 py-5">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between">
        <PresetNavLink
          target={{ kind: "route", path: "" }}
          className="flex items-center gap-2 text-black"
          data-editable
        >
          <LogoIcon className="h-7 w-7 text-black" />
          <span
            className="text-2xl font-medium tracking-tight"
            data-editable
            data-preset-text="logo-wordmark"
          >
            Halo
          </span>
        </PresetNavLink>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <PresetNavLink
              key={link.path}
              target={
                isHome ? { kind: "section", id: link.section } : { kind: "route", path: link.path }
              }
              className={`text-base font-medium transition-colors duration-200 hover:text-black ${
                route === link.path ? "text-black" : "text-gray-700"
              }`}
              data-editable
              data-preset-text={`nav-${link.path}`}
            >
              {link.label}
            </PresetNavLink>
          ))}
        </div>

        <PresetNavLink
          target={{ kind: "route", path: "wallet" }}
          className="rounded-full bg-black px-7 py-2.5 text-base font-medium text-white transition-colors duration-200 hover:bg-gray-800"
          data-editable
          data-preset-text="nav-open-wallet"
        >
          Open Wallet
        </PresetNavLink>
      </div>
    </nav>
  );
}
