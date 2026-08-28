import { LOGO_PATH } from "../constants";

type BabyTrackLogoProps = {
  size?: number;
  className?: string;
};

export default function BabyTrackLogo({ size = 48, className = "" }: BabyTrackLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d={LOGO_PATH} />
    </svg>
  );
}
