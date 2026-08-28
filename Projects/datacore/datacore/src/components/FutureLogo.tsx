export function FutureLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill="#7b39fc" />
      <path
        d="M8 22V10h3.2l4.1 7.2L19.4 10H22.5v12h-2.6v-7.4l-3.8 6.6h-1.5l-3.8-6.6V22H8z"
        fill="white"
      />
      <path
        d="M23.5 8.5L26 6l2.5 2.5M26 6v5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
