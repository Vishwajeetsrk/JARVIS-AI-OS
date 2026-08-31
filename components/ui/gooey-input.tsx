"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useId,
  useCallback,
  type ChangeEvent,
} from "react";
import { cn } from "@/lib/utils";

function GooeyFilter({
  filterId,
  blur,
}: {
  filterId: string;
  blur: number;
}) {
  return (
    <svg className="absolute hidden h-0 w-0" aria-hidden>
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="h-4 w-4 shrink-0"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export interface GooeyInputClassNames {
  root?: string;
  filterWrap?: string;
  buttonRow?: string;
  trigger?: string;
  input?: string;
  bubble?: string;
  bubbleSurface?: string;
}

export interface GooeyInputProps {
  placeholder?: string;
  className?: string;
  classNames?: GooeyInputClassNames;
  collapsedWidth?: number;
  expandedWidth?: number;
  expandedOffset?: number;
  gooeyBlur?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
}

export function GooeyInput({
  placeholder = "Type to search...",
  className,
  classNames,
  collapsedWidth = 120,
  expandedWidth = 240,
  expandedOffset = 45,
  gooeyBlur = 5,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  onOpenChange,
  disabled = false,
}: GooeyInputProps) {
  const reactId = useId();
  const safeId = reactId.replace(/[:_]/g, "");
  const filterId = `gooey-filter-${safeId}`;

  const inputRef = useRef<HTMLInputElement>(null);
  const prevExpandedRef = useRef(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

  const isControlled = valueProp !== undefined;
  const searchText = isControlled ? valueProp : uncontrolledValue;

  const setSearchText = useCallback(
    (next: string) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const setExpanded = useCallback(
    (next: boolean) => {
      setIsExpanded(next);
      onOpenChange?.(next);
    },
    [onOpenChange],
  );

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    } else if (prevExpandedRef.current) {
      setSearchText("");
    }
    prevExpandedRef.current = isExpanded;
  }, [isExpanded, setSearchText]);

  const handleExpand = useCallback(() => {
    if (!disabled) setExpanded(true);
  }, [disabled, setExpanded]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    [setSearchText],
  );

  const handleBlur = useCallback(() => {
    if (!searchText) setExpanded(false);
  }, [searchText, setExpanded]);

  const currentWidth = isExpanded ? expandedWidth : collapsedWidth;
  const currentMargin = isExpanded ? expandedOffset : 0;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className,
        classNames?.root,
      )}
    >
      <GooeyFilter filterId={filterId} blur={gooeyBlur} />

      <div
        className={cn(
          "relative flex h-11 items-center justify-center",
          classNames?.filterWrap,
        )}
        style={{ filter: `url(#${filterId})` }}
      >
        <div
          className={cn(
            "flex h-11 items-center justify-center transition-all duration-300 ease-out",
            classNames?.buttonRow,
          )}
          style={{
            width: `${currentWidth}px`,
            marginLeft: `${currentMargin}px`,
          }}
        >
          <button
            type="button"
            disabled={disabled}
            onClick={handleExpand}
            className={cn(
              "flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-neutral-950 px-4 text-sm font-medium text-white shadow-xl outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 disabled:pointer-events-none disabled:opacity-50",
              classNames?.trigger,
            )}
          >
            {!isExpanded ? <SearchIcon /> : null}
            <input
              ref={inputRef}
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              value={searchText}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disabled || !isExpanded}
              placeholder={placeholder}
              className={cn(
                "h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none",
                isExpanded
                  ? "placeholder:text-neutral-500"
                  : "pointer-events-none placeholder:text-neutral-400",
                classNames?.input,
              )}
            />
          </button>
        </div>

        {/* Detached Gooey Bubble */}
        <div
          className={cn(
            "absolute top-1/2 left-0 flex h-11 w-11 -translate-y-1/2 items-center justify-center transition-all duration-300 ease-out",
            classNames?.bubble,
          )}
          style={{
            opacity: isExpanded ? 1 : 0,
            transform: `translateY(-50%) scale(${isExpanded ? 1 : 0})`,
          }}
        >
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/40 bg-neutral-950 text-cyan-400 shadow-xl",
              classNames?.bubbleSurface,
            )}
          >
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
