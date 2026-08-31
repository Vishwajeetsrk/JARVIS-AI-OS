"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type NotchOption = {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
};

export type NotchItem = {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  options: NotchOption[];
  defaultValue?: string;
  value?: string;
  showValue?: boolean;
  onChange?: (optionId: string, option: NotchOption) => void;
};

export interface NotchProps {
  items: NotchItem[];
  position?: "top" | "bottom";
  align?: "start" | "center" | "end";
  onItemChange?: (
    itemId: string,
    optionId: string,
    option: NotchOption,
  ) => void;
  closeOnSelect?: boolean;
  showSelectedValue?: boolean;
  showDividers?: boolean;
  accentColor?: string;
  offset?: number;
  reveal?: boolean;
  className?: string;
  itemClassName?: string;
  panelClassName?: string;
}

function NotchDivider() {
  return (
    <span
      aria-hidden
      className="mx-0.5 h-4 w-px shrink-0 self-center opacity-30 bg-white"
    />
  );
}

export const Notch = ({
  items,
  position = "bottom",
  align = "center",
  onItemChange,
  closeOnSelect = true,
  showSelectedValue = true,
  showDividers = true,
  accentColor = "#00e5ff",
  offset = 16,
  className,
  itemClassName,
  panelClassName,
}: NotchProps) => {
  const shellRef = useRef<HTMLDivElement>(null);
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [internalSelected, setInternalSelected] = useState<
    Record<string, string>
  >(() => {
    const map: Record<string, string> = {};
    for (const item of items) {
      if (item.value === undefined) {
        map[item.id] = item.defaultValue ?? item.options[0]?.id ?? "";
      }
    }
    return map;
  });

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenItemId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!openItemId) return;
    function onPointerDown(e: PointerEvent) {
      if (!shellRef.current?.contains(e.target as Node)) setOpenItemId(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openItemId]);

  const getSelectedId = (item: NotchItem) =>
    item.value ?? internalSelected[item.id] ?? item.options[0]?.id;

  const getSelectedOption = (item: NotchItem) =>
    item.options.find((o) => o.id === getSelectedId(item));

  const handleSelect = (item: NotchItem, option: NotchOption) => {
    if (item.value === undefined) {
      setInternalSelected((prev) => ({ ...prev, [item.id]: option.id }));
    }
    item.onChange?.(option.id, option);
    onItemChange?.(item.id, option.id, option);
    if (closeOnSelect) setOpenItemId(null);
  };

  const alignClass =
    align === "start"
      ? "justify-start"
      : align === "end"
        ? "justify-end"
        : "justify-center";

  const openItem = items.find((i) => i.id === openItemId) ?? null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 z-50 flex px-4",
        position === "top" ? "top-0" : "bottom-0",
        alignClass,
      )}
      style={
        position === "top"
          ? { paddingTop: `${offset}px` }
          : { paddingBottom: `${offset}px` }
      }
    >
      <div
        ref={shellRef}
        className={cn(
          "pointer-events-auto relative flex w-fit flex-col overflow-hidden rounded-2xl border border-white/20 bg-neutral-950/90 shadow-2xl backdrop-blur-2xl transition-all duration-200",
          className,
        )}
        style={{
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 229, 255, 0.15)",
        }}
      >
        {openItem ? (
          <div
            role="listbox"
            className={cn("flex flex-col gap-1 p-2 min-w-44", panelClassName)}
          >
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
              {typeof openItem.label === "string" ? openItem.label : openItem.id}
            </div>
            {openItem.options.map((option) => {
              const active = option.id === getSelectedId(openItem);
              return (
                <button
                  key={option.id}
                  role="option"
                  aria-selected={active}
                  type="button"
                  onClick={() => handleSelect(openItem, option)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 rounded-lg px-3 py-1.5 text-left text-xs font-medium transition-colors",
                    active
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                      : "text-neutral-300 hover:bg-white/10 hover:text-white",
                  )}
                >
                  <span className="flex items-center gap-2">
                    {option.icon}
                    <span>{option.label}</span>
                  </span>
                  {active && (
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: accentColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex w-fit items-center gap-1 p-1">
            {items.map((item, index) => {
              const selected = getSelectedOption(item);
              const isLast = index === items.length - 1;

              return (
                <React.Fragment key={item.id}>
                  <button
                    type="button"
                    onClick={() => setOpenItemId(item.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-neutral-300 transition-colors hover:bg-white/10 hover:text-white",
                      itemClassName,
                    )}
                  >
                    {item.icon}
                    <span className="text-neutral-200">{item.label}:</span>
                    {(item.showValue ?? showSelectedValue) && selected ? (
                      <span className="font-bold text-cyan-400">{selected.label}</span>
                    ) : null}
                  </button>
                  {showDividers && !isLast ? <NotchDivider /> : null}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
