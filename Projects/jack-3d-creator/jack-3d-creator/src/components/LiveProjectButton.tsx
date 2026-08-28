type LiveProjectButtonProps = {
  className?: string;
  onClick?: () => void;
};

export function LiveProjectButton({ className = "", onClick }: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-full border-2 border-mist px-8 py-3 text-sm font-medium uppercase tracking-widest text-mist transition-colors hover:bg-mist/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
      onClick={
        onClick ?? (() => window.open("https://example.com", "_blank", "noopener,noreferrer"))
      }
    >
      Live Project
    </button>
  );
}
