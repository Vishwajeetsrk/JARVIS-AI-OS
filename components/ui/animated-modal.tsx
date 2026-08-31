"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

const ModalContext = createContext<{ open: boolean; setOpen: (o: boolean) => void }>({
  open: false,
  setOpen: () => {},
});

export function Modal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </ModalContext.Provider>
  );
}

export function ModalTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useContext(ModalContext);
  return (
    <button
      onClick={() => setOpen(true)}
      className={cn(
        "relative overflow-hidden rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
}

export function ModalBody({ children }: { children: React.ReactNode }) {
  const { open, setOpen } = useContext(ModalContext);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-neutral-700 bg-neutral-900 p-6 text-white shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export function ModalContent({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function ModalFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useContext(ModalContext);
  return (
    <div className={cn("mt-6 flex items-center justify-end gap-3", className)}>
      {children}
    </div>
  );
}
