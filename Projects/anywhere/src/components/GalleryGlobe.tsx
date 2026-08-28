import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLOBE_RADIUS } from '../data';
import Globe from './Globe';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
const DEFAULT_CAMERA_Z = isMobile ? 28.8 : 19.8;

function CameraController({ targetZ }: { targetZ: React.MutableRefObject<number> }) {
  useFrame((state) => {
    // Smooth camera Z penetration
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z, 
      targetZ.current, 
      0.05
    );
  });
  return null;
}

export default function GalleryGlobe({ userPhoto, onSelect }: { userPhoto: string, onSelect: (image: string, location: string, info: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Interaction State Maps
  const targetZ = useRef(DEFAULT_CAMERA_Z);
  const rotationState = useRef({ x: 0, y: 0 });
  const velocityState = useRef({ x: 0, y: 0.002 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastInteractionTime = useRef(Date.now() - 3000);
  const pointerPos = useRef({ x: 0, y: 0 });

  // Cursor UI state
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [tooltipInfo, setTooltipInfo] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const parseTooltip = (info: string) => {
    const lines = info.split('\n');
    if (lines.length > 0) {
      let firstLine = lines[0].trim();
      if (firstLine.startsWith('#')) {
        firstLine = firstLine.substring(1).trim();
      }
      return firstLine;
    }
    return '';
  };

  useEffect(() => {
    // Non-passive wheel event to capture pinch & scroll reliably outside React rendering
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      lastInteractionTime.current = Date.now();
      
      const delta = e.deltaY;
      
      // Scaling down zoom interaction slightly and applying
      targetZ.current += delta * 0.015;
      
      // Clamp values so user can't zoom out infinitely.
      // -GLOBE_RADIUS lets us see the inside-out opposite end of the sphere walls securely
      targetZ.current = Math.max(-GLOBE_RADIUS * 0.8, Math.min(isMobile ? 35 : 28, targetZ.current));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    setIsMouseDown(true);
    lastMouse.current = { x: e.clientX, y: e.clientY };
    lastInteractionTime.current = Date.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    pointerPos.current = { x: e.clientX, y: e.clientY };
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate(${e.clientX + 16}px, ${e.clientY + 16}px)`;
    }

    if (!isDragging.current) return;
    
    const deltaX = e.clientX - lastMouse.current.x;
    const deltaY = e.clientY - lastMouse.current.y;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    
    // Map screen cartesian coordinates to rotation
    velocityState.current.y += deltaX * 0.005;
    velocityState.current.x += deltaY * 0.005;
    
    lastInteractionTime.current = Date.now();
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setIsMouseDown(false);
    lastInteractionTime.current = Date.now();
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full relative ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Background stays pure white */}
      <Canvas camera={{ position: [0, 0, DEFAULT_CAMERA_Z], fov: 45, near: 0.1 }}>
        <CameraController targetZ={targetZ} />
        <Suspense fallback={null}>
          <Globe 
            userPhoto={userPhoto}
            rotationState={rotationState}
            velocityState={velocityState}
            isDragging={isDragging}
            lastInteraction={lastInteractionTime}
            onSelect={onSelect}
            onHover={(info) => setTooltipInfo(parseTooltip(info))}
            onHoverOut={() => setTooltipInfo(null)}
          />
        </Suspense>
      </Canvas>

      {/* Tooltip Overlay */}
      {tooltipInfo && (
        <div
          ref={tooltipRef}
          className="pointer-events-none fixed top-0 left-0 z-50 bg-black text-white px-4 py-2 rounded-full font-sans text-sm font-medium whitespace-nowrap shadow-xl"
          style={{ 
            borderRadius: '32px',
            willChange: 'transform',
            transform: `translate(${pointerPos.current.x + 16}px, ${pointerPos.current.y + 16}px)`
          }}
        >
          {tooltipInfo}
        </div>
      )}
    </div>
  );
}
