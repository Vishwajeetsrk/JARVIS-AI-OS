"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const FLAP_CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$()-+&=;:'\"%,./?°";

const BOARD_ROWS = 6;
const BOARD_COLS = 22;

const BASE_COL_DELAY = 30;
const BASE_ROW_DELAY = 20;
const BASE_STEP_MS = 55;
const BASE_FLIP_S = 0.35;
const BASE_TOTAL_S =
  ((BOARD_COLS - 1) * BASE_COL_DELAY +
    (BOARD_ROWS - 1) * BASE_ROW_DELAY +
    8 * BASE_STEP_MS) /
  1000;

type AccentColor = {
  top: string;
  bottom: string;
  text: string;
};

const ACCENT_COLORS: AccentColor[] = [
  { top: "#dc2626", bottom: "#b91c1c", text: "#ffffff" },
  { top: "#f97316", bottom: "#ea580c", text: "#ffffff" },
  { top: "#eab308", bottom: "#ca8a04", text: "#171717" },
  { top: "#16a34a", bottom: "#15803d", text: "#ffffff" },
  { top: "#2563eb", bottom: "#1d4ed8", text: "#ffffff" },
  { top: "#7c3aed", bottom: "#6d28d9", text: "#ffffff" },
  { top: "#ffffff", bottom: "#f5f5f5", text: "#171717" },
];

const CELL_TEXT_STYLE: React.CSSProperties = {
  fontSize: "clamp(8px, 1.8vw, 20px)",
  lineHeight: 1,
  fontWeight: 800,
  fontFamily: "var(--font-mono, monospace)",
};

// ── Individual Split-Flap Character ───────────────────────────────────

const FlapCell = React.memo(function FlapCell({
  target,
  delay,
  stepMs,
  flipDuration,
}: {
  target: string;
  delay: number;
  stepMs: number;
  flipDuration: number;
}) {
  const [current, setCurrent] = useState(" ");
  const [prev, setPrev] = useState(" ");
  const [isFlipping, setIsFlipping] = useState(false);
  const [accent, setAccent] = useState<AccentColor | null>(null);
  const [prevAccent, setPrevAccent] = useState<AccentColor | null>(null);

  const curRef = useRef(" ");
  const tgtRef = useRef<string | null>(null);
  const accentRef = useRef<AccentColor | null>(null);
  const startTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (startTimer.current) clearTimeout(startTimer.current);
    if (stepTimer.current) clearTimeout(stepTimer.current);
    if (flipTimer.current) clearTimeout(flipTimer.current);
    startTimer.current = null;
    stepTimer.current = null;
    flipTimer.current = null;

    const normalized = FLAP_CHARS.includes(target.toUpperCase())
      ? target.toUpperCase()
      : " ";
    if (normalized === tgtRef.current) return;
    tgtRef.current = normalized;

    if (normalized === " " && curRef.current === " ") return;

    const scrambleCount =
      normalized === " "
        ? 6 + Math.floor(Math.random() * 6)
        : 18 + Math.floor(Math.random() * 12);

    const runStep = (i: number) => {
      const isLast = i >= scrambleCount;
      const ch = isLast
        ? normalized
        : FLAP_CHARS[1 + Math.floor(Math.random() * (FLAP_CHARS.length - 1))];

      const newAccent = isLast
        ? null
        : Math.random() < 0.15
          ? ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)]
          : null;

      setPrev(curRef.current);
      setPrevAccent(accentRef.current);
      curRef.current = ch;
      accentRef.current = newAccent;
      setCurrent(ch);
      setAccent(newAccent);
      setIsFlipping(true);

      if (flipTimer.current) clearTimeout(flipTimer.current);
      flipTimer.current = setTimeout(() => {
        setIsFlipping(false);
      }, flipDuration * 1000);

      if (!isLast) {
        stepTimer.current = setTimeout(() => runStep(i + 1), stepMs);
      }
    };

    startTimer.current = setTimeout(() => runStep(1), delay);

    return () => {
      if (startTimer.current) clearTimeout(startTimer.current);
      if (stepTimer.current) clearTimeout(stepTimer.current);
      if (flipTimer.current) clearTimeout(flipTimer.current);
      startTimer.current = null;
      stepTimer.current = null;
      flipTimer.current = null;
      tgtRef.current = null;
    };
  }, [target, delay, stepMs, flipDuration]);

  const show = current === " " ? "\u00A0" : current;
  const showPrev = prev === " " ? "\u00A0" : prev;

  const topBg = accent?.top || "#18181b";
  const bottomBg = accent?.bottom || "#09090b";
  const textColor = accent?.text || "#fafafa";

  const flapTopBg = prevAccent?.top || "#27272a";
  const flapTextColor = prevAccent?.text || "#e4e4e7";

  return (
    <div
      style={{
        display: "flex",
        aspectRatio: "3/5",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 3,
        border: "1px solid rgba(255, 255, 255, 0.12)",
        position: "relative",
        perspective: 400,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ position: "relative", flex: 1, transformStyle: "preserve-3d" }}>
        {/* Top Half */}
        <div
          style={{
            position: "absolute",
            inset: "0 0 50% 0",
            overflow: "hidden",
            background: topBg,
            borderBottom: "1px solid rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              ...CELL_TEXT_STYLE,
              color: textColor,
              position: "absolute",
              top: 0,
              height: "200%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {show}
          </div>
        </div>

        {/* Bottom Half */}
        <div
          style={{
            position: "absolute",
            inset: "50% 0 0 0",
            overflow: "hidden",
            background: bottomBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              ...CELL_TEXT_STYLE,
              color: textColor,
              position: "absolute",
              bottom: 0,
              height: "200%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {show}
          </div>
        </div>

        {/* Animated Flap */}
        {isFlipping && (
          <div
            style={{
              position: "absolute",
              inset: "0 0 50% 0",
              overflow: "hidden",
              background: flapTopBg,
              transformOrigin: "bottom",
              animation: `flipTop ${flipDuration}s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards`,
              backfaceVisibility: "hidden",
              zIndex: 10,
            }}
          >
            <div
              style={{
                ...CELL_TEXT_STYLE,
                color: flapTextColor,
                position: "absolute",
                top: 0,
                height: "200%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {showPrev}
            </div>
          </div>
        )}

        {/* Center Split Line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 1,
            transform: "translateY(-0.5px)",
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
});

// ── Color Tile ────────────────────────────────────────────────────────

const COLOR_MAP: Record<string, string> = {
  "{R}": "#D32F2F",
  "{O}": "#F57C00",
  "{Y}": "#FBC02D",
  "{G}": "#43A047",
  "{B}": "#1E88E5",
  "{V}": "#8E24AA",
  "{W}": "#FAFAFA",
};

const ColorCell = React.memo(function ColorCell({ color }: { color: string }) {
  return (
    <div
      style={{
        aspectRatio: "3/5",
        borderRadius: 3,
        border: "1px solid rgba(255, 255, 255, 0.15)",
        backgroundColor: color,
      }}
    />
  );
});

// ── Row Parser ────────────────────────────────────────────────────────

type ParsedCell =
  | { type: "char"; value: string }
  | { type: "color"; hex: string };

function parseRow(row: string): ParsedCell[] {
  const cells: ParsedCell[] = [];
  let i = 0;
  while (i < row.length) {
    if (row[i] === "{" && i + 2 < row.length && row[i + 2] === "}") {
      const code = row.substring(i, i + 3);
      if (COLOR_MAP[code]) {
        cells.push({ type: "color", hex: COLOR_MAP[code] });
        i += 3;
        continue;
      }
    }
    cells.push({ type: "char", value: row[i] });
    i++;
  }
  return cells;
}

// ── Word Wrap ─────────────────────────────────────────────────────────

function wrapParagraph(paragraph: string, maxCols: number): string[] {
  const lines: string[] = [];
  const words = paragraph.split(/[ \t]+/).filter(Boolean);
  let currentLine = "";

  for (const word of words) {
    if (word.length > maxCols) {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = "";
      }
      lines.push(word.slice(0, maxCols));
      continue;
    }

    if (!currentLine) {
      currentLine = word;
    } else if (currentLine.length + 1 + word.length <= maxCols) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}

function wrapText(input: string, maxCols: number): string[] {
  return input
    .split("\n")
    .flatMap((paragraph) =>
      paragraph.trim() === "" ? [""] : wrapParagraph(paragraph, maxCols),
    );
}

// ── Main TextFlippingBoard Component ──────────────────────────────────

export interface TextFlippingBoardProps {
  rows?: string[];
  text?: string;
  className?: string;
  /** Total animation duration in seconds. Defaults to ~1.2s. */
  duration?: number;
}

export function TextFlippingBoard({
  rows,
  text,
  className,
  duration = BASE_TOTAL_S,
}: TextFlippingBoardProps) {
  const scale = duration / BASE_TOTAL_S;
  const colDelay = BASE_COL_DELAY * scale;
  const rowDelay = BASE_ROW_DELAY * scale;
  const stepMs = BASE_STEP_MS * scale;
  const flipDur = Math.min(0.6, Math.max(0.15, BASE_FLIP_S * scale));

  const board = useMemo(() => {
    const grid: ParsedCell[][] = Array.from({ length: BOARD_ROWS }, () =>
      Array.from({ length: BOARD_COLS }, () => ({
        type: "char" as const,
        value: " ",
      })),
    );

    if (text) {
      const lines = wrapText(text, BOARD_COLS).slice(0, BOARD_ROWS);
      const startRow = Math.max(0, Math.floor((BOARD_ROWS - lines.length) / 2));
      lines.forEach((line, i) => {
        const row = startRow + i;
        if (row >= BOARD_ROWS) return;
        const parsed = parseRow(line);
        const startCol = Math.max(
          0,
          Math.floor((BOARD_COLS - parsed.length) / 2),
        );
        parsed.forEach((cell, c) => {
          if (startCol + c < BOARD_COLS) {
            grid[row][startCol + c] = cell;
          }
        });
      });
    } else if (rows) {
      rows.forEach((row, r) => {
        if (r >= BOARD_ROWS) return;
        const parsed = parseRow(row);
        parsed.forEach((cell, c) => {
          if (c < BOARD_COLS) {
            grid[r][c] = cell;
          }
        });
      });
    }

    return grid;
  }, [rows, text]);

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-3xl rounded-xl p-3 shadow-2xl",
        className,
      )}
      style={{
        background: "rgba(10, 15, 30, 0.95)",
        border: "1px solid rgba(0, 229, 255, 0.25)",
        boxShadow: "0 15px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0,229,255,0.1)",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: `repeat(${BOARD_COLS}, minmax(0, 1fr))`,
        }}
      >
        {board.map((row, r) =>
          row.map((cell, c) =>
            cell.type === "color" ? (
              <ColorCell key={`${r}-${c}`} color={cell.hex} />
            ) : (
              <FlapCell
                key={`${r}-${c}`}
                target={cell.value}
                delay={c * colDelay + r * rowDelay}
                stepMs={stepMs}
                flipDuration={flipDur}
              />
            ),
          ),
        )}
      </div>
    </div>
  );
}
