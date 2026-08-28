import { GRID_CELL } from "../constants";
import type { GridOffset } from "../hooks/useSpotlightTracking";

export function GridBackground({ offset }: { offset: GridOffset }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      style={{ opacity: 0.1 }}
      aria-hidden
    >
      <defs>
        <pattern
          id="grid"
          width={GRID_CELL}
          height={GRID_CELL}
          patternUnits="userSpaceOnUse"
          x={offset.x}
          y={offset.y}
        >
          <path
            d={`M ${GRID_CELL} 0 L 0 0 0 ${GRID_CELL}`}
            fill="none"
            stroke="#64748b"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
