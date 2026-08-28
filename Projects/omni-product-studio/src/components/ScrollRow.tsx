import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface ScrollRowProps {
  children: React.ReactNode;
  /** Layout classes for the outer vertical container (e.g. `flex-1 min-w-0`). */
  className?: string;
  /** Classes for the inner horizontally-scrolling flex row (e.g. `gap-2 pb-2`). */
  rowClassName?: string;
  /** Recompute the indicator when these change — typically the item count. */
  deps?: React.DependencyList;
  /** Dim the row to match the disabled-submit treatment. */
  faded?: boolean;
}

// A horizontally-scrolling row with an always-visible scroll indicator on mobile.
// Native scrollbars are hidden everywhere in this app, and iOS Safari's overlay
// scrollbar can't be styled and auto-hides at rest — so we render our own track.
export function ScrollRow({ children, className = '', rowClassName = '', deps = [], faded = false }: ScrollRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState({ width: 0, left: 0 });

  const update = () => {
    const el = ref.current;
    if (!el) return;
    const { scrollWidth, clientWidth, scrollLeft } = el;
    const overflow = scrollWidth - clientWidth;
    if (overflow <= 1) {
      setBar({ width: 0, left: 0 });   // not scrollable → hide the indicator
      return;
    }
    const width = (clientWidth / scrollWidth) * 100;
    setBar({ width, left: (scrollLeft / overflow) * (100 - width) });
  };

  // Layout effect so it measures after new items render; also track viewport resizes.
  useLayoutEffect(() => { update(); }, deps);   // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className={className}>
      <div
        ref={ref}
        onScroll={update}
        className={`flex overflow-x-auto hide-scrollbar ${faded ? 'opacity-40 transition-opacity' : ''} ${rowClassName}`}
      >
        {children}
      </div>
      {bar.width > 0 && (
        <div className="md:hidden h-1 mt-0.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-zinc-500 rounded-full"
            style={{ width: `${bar.width}%`, marginLeft: `${bar.left}%` }}
          />
        </div>
      )}
    </div>
  );
}
