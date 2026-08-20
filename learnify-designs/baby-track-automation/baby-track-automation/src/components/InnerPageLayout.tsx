import type { ReactNode } from "react";
import BabyTrackNavbar from "./BabyTrackNavbar";

type InnerPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function InnerPageLayout({
  eyebrow,
  title,
  description,
  children,
}: InnerPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <BabyTrackNavbar fixed />
      <div className="mx-auto max-w-4xl px-5 pb-24 pt-28 lg:px-10 lg:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FF0000]">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-manrope text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg">
          {description}
        </p>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </div>
  );
}
