type BackgroundVideoProps = {
  src: string;
  className?: string;
};

export function BackgroundVideo({ src, className = "" }: BackgroundVideoProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      src={src}
    />
  );
}
