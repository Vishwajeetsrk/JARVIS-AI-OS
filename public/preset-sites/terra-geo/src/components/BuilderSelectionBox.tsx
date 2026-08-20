/** Dotted selection frame around the word "builder" per prompt2 Terra spec */
export default function BuilderSelectionBox() {
  return (
    <svg
      className="pointer-events-none absolute -inset-3 md:-inset-4 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] -rotate-[0.5deg]"
      viewBox="0 0 200 95"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M5 5 L195 5 L195 88 L5 72 Z"
        fill="none"
        stroke="#B0B0B0"
        strokeWidth="1.2"
        strokeDasharray="6 4"
      />
      <circle cx="5" cy="5" r="3.5" fill="#B0B0B0" />
      <circle cx="195" cy="5" r="3.5" fill="#B0B0B0" />
      <circle cx="5" cy="72" r="3.5" fill="#B0B0B0" />
      <circle cx="195" cy="88" r="3.5" fill="#B0B0B0" />
      <circle cx="100" cy="5" r="3" fill="#B0B0B0" />
      <circle cx="100" cy="80" r="3" fill="#B0B0B0" />
      <circle cx="5" cy="38.5" r="3" fill="#B0B0B0" />
      <circle cx="195" cy="46.5" r="3" fill="#B0B0B0" />
    </svg>
  );
}
