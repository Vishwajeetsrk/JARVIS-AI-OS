export default function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M36 24c0 6.627-5.373 12-12 12S12 30.627 12 24s5.373-12 12-12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
