import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

interface SpotlightRevealProps {
  imageSrc: string;
  videoSrc: string;
  isPlaying?: boolean;
  baseRadius?: number;
}

export default function SpotlightReveal({
  imageSrc,
  videoSrc,
  isPlaying = true,
  baseRadius = 420,
}: SpotlightRevealProps) {
  const NUM_TRAILS = 6;
  const pointsRef = useRef(Array.from({ length: NUM_TRAILS }, () => ({ x: -1000, y: -1000 })));

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      const points = pointsRef.current;
      points[0].x += (targetX - points[0].x) * 0.2;
      points[0].y += (targetY - points[0].y) * 0.2;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.35;
        points[i].y += (points[i - 1].y - points[i].y) * 0.35;
      }
      for (let i = 0; i < points.length; i++) {
        const circle = document.getElementById(`trail-${i}-${imageSrc.slice(-8)}`);
        if (circle) {
          circle.setAttribute("cx", points[i].x.toString());
          circle.setAttribute("cy", points[i].y.toString());
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [imageSrc]);

  const maskId = `spotlight-mask-${imageSrc.slice(-12).replace(/\W/g, "")}`;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <ReactPlayer
          url={videoSrc}
          playing={isPlaying}
          loop
          muted
          playsinline
          width="100%"
          height="100%"
          className="react-player"
          config={{
            file: {
              attributes: {
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </div>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`holeGradient-${maskId}`}>
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="60%" stopColor="black" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask
            id={maskId}
            maskContentUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <rect width="100%" height="100%" fill="white" />
            {Array.from({ length: NUM_TRAILS })
              .reverse()
              .map((_, reversedIndex) => {
                const i = NUM_TRAILS - 1 - reversedIndex;
                return (
                  <circle
                    key={`trail-${i}`}
                    id={`trail-${i}-${imageSrc.slice(-8)}`}
                    cx="-1000"
                    cy="-1000"
                    r={baseRadius - i * 35}
                    fill={`url(#holeGradient-${maskId})`}
                    opacity={1 - i * 0.15}
                  />
                );
              })}
          </mask>
        </defs>
        <image
          href={imageSrc}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  );
}
