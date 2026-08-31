"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  link: string;
}

export function Navbar({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <header className={cn("sticky top-4 z-50 mx-auto w-full max-w-5xl px-4", className)}>
      {children}
    </header>
  );
}

export function NavBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-between rounded-full border border-white/20 bg-neutral-900/80 px-6 py-2.5 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export function NavbarLogo() {
  return (
    <div className="flex items-center gap-2 font-bold text-white">
      <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black text-xs">
        ▲
      </div>
      <span>NEXORA</span>
    </div>
  );
}

export function NavItems({ items }: { items: NavItem[] }) {
  return (
    <nav className="flex items-center gap-6">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="text-xs font-semibold text-neutral-300 transition-colors hover:text-cyan-400"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export function NavbarButton({
  children,
  variant = "primary",
  onClick,
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-xs font-bold transition-all active:scale-95",
        variant === "primary" ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-md shadow-cyan-500/20" : "border border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700",
        className
      )}
    >
      {children}
    </button>
  );
}

export function MobileNav({ children }: { children: React.ReactNode }) {
  return <div className="block md:hidden">{children}</div>;
}

export function MobileNavHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-neutral-900/90 p-4 shadow-xl backdrop-blur-md">
      {children}
    </div>
  );
}

export function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-white text-xl p-1">
      {isOpen ? "✕" : "☰"}
    </button>
  );
}

export function MobileNavMenu({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-white shadow-2xl animate-in slide-in-from-top-2 duration-200">
      {children}
    </div>
  );
}
