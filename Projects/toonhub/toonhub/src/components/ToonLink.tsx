import type { AnchorHTMLAttributes, ReactNode } from "react";
import { handlePresetNavClick, routeHref } from "../../../_shared/preset-site-routing";

type ToonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  path: string;
  children: ReactNode;
};

export function ToonLink({ path, children, onClick, ...rest }: ToonLinkProps) {
  const hashTarget = { kind: "route" as const, path };
  return (
    <a
      href={routeHref(path)}
      onClick={(e) => {
        handlePresetNavClick(e, hashTarget);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
