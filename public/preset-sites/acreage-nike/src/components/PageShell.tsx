import type { ReactNode } from "react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";
import BubbleMenu from "./BubbleMenu";
import { NikeSwoosh } from "./NikeSwoosh";
import { PILL_MENU_ITEMS } from "../routes";
import { BRAND_NAME } from "../constants";

interface PageShellProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="relative min-h-[100dvh] bg-[#050505] text-white">
      <header className="relative z-50 flex items-center justify-between px-6 pt-8 md:px-12">
        <button
          type="button"
          onClick={() => navigateToRoute("")}
          className="text-white transition-opacity hover:opacity-80"
          aria-label={`${BRAND_NAME} home`}
        >
          <NikeSwoosh width={80} />
        </button>
        <BubbleMenu
          items={[...PILL_MENU_ITEMS]}
          className="relative top-0 right-0"
          menuBg="#ffffff"
          menuContentColor="#111111"
        />
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-16 md:px-12 md:pt-24">
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50"
          data-editable
        >
          {eyebrow}
        </p>
        <h1
          className="font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
          data-editable
        >
          {title}
        </h1>
        <p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/64 md:text-lg"
          data-editable
        >
          {description}
        </p>
        {children}
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-white/40">
        <button
          type="button"
          className="underline-offset-4 hover:text-white hover:underline"
          onClick={() => navigateToRoute("contact")}
        >
          Contact {BRAND_NAME}
        </button>
        <span className="mx-2">·</span>
        <span>© 2026 {BRAND_NAME}</span>
      </footer>
    </div>
  );
}
