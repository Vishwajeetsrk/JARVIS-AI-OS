import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

type PillButtonProps = {
  children: ReactNode;
  size?: "base" | "lg";
  route?: string;
  section?: string;
  onClick?: () => void;
  className?: string;
  presetText?: string;
};

export default function PillButton({
  children,
  size = "lg",
  route,
  section,
  onClick,
  className = "",
  presetText,
}: PillButtonProps) {
  const sizeClass =
    size === "lg" ? "text-base md:text-lg pl-8 pr-2 py-2" : "text-base pl-6 pr-1.5 py-1.5";

  const inner = (
    <>
      <span data-editable={presetText ? true : undefined} data-preset-text={presetText}>
        {children}
      </span>
      <span className="rounded-full bg-white p-2 transition-colors duration-200 group-hover:bg-white">
        <ArrowRight className="h-5 w-5 text-black" />
      </span>
    </>
  );

  const baseClassName = `group inline-flex items-center gap-3 rounded-full bg-black font-medium text-white transition-colors duration-200 hover:bg-gray-800 ${sizeClass} ${className}`;

  if (route) {
    return (
      <PresetNavLink
        target={{ kind: "route", path: route }}
        className={baseClassName}
        data-editable
      >
        {inner}
      </PresetNavLink>
    );
  }

  if (section) {
    return (
      <PresetNavLink
        target={{ kind: "section", id: section }}
        className={baseClassName}
        data-editable
      >
        {inner}
      </PresetNavLink>
    );
  }

  return (
    <button type="button" className={baseClassName} onClick={onClick} data-editable>
      {inner}
    </button>
  );
}
