import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { generateFibonacciSphere } from '../utils/math';
import { GLOBE_RADIUS, TOTAL_CARDS } from '../data';
import Card from './Card';

interface GlobeProps {
  userPhoto: string;
  rotationState: React.MutableRefObject<{ x: number, y: number }>;
  velocityState: React.MutableRefObject<{ x: number, y: number }>;
  isDragging: React.MutableRefObject<boolean>;
  lastInteraction: React.MutableRefObject<number>;
  onSelect: (image: string, location: string, info: string) => void;
  onHover?: (info: string) => void;
  onHoverOut?: () => void;
}

export default function Globe({ userPhoto, rotationState, velocityState, isDragging, lastInteraction, onSelect, onHover, onHoverOut }: GlobeProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Precalculate the spherical grid positions and apply random scales
  const cardData = useMemo(() => {
    const rawPositions = generateFibonacciSphere(TOTAL_CARDS, GLOBE_RADIUS);
    return rawPositions.map((pos) => ({
      position: pos,
      // Random scale between 0.6x and 1.3x to make size uneven but keeping orientation
      scale: 0.6 + Math.random() * 0.7 
    }));
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    
    // Continuously apply velocity to rotation
    rotationState.current.x += velocityState.current.x;
    rotationState.current.y += velocityState.current.y;

    // Limit X axis rotation (pitch) heavily to prevent gimbal lock or uncomfortable viewing
    rotationState.current.x = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, rotationState.current.x));

    if (!isDragging.current) {
      // Apply momentum decay (friction/damping)
      velocityState.current.x *= 0.92;
      velocityState.current.y *= 0.92;

      // Ambient Idle Rotation
      if (Date.now() - lastInteraction.current > 2000) {
        // Gently inject velocity for gradual smooth spinning
        // This yields a steady state velocity of roughly 0.002 radians/frame
        velocityState.current.y += 0.00015; 
      }
    } else {
      // While grabbed and dragging, velocity decays sharply unless actively fueled by delta pointer moves
      velocityState.current.x *= 0.3;
      velocityState.current.y *= 0.3;
    }

    groupRef.current.rotation.x = rotationState.current.x;
    groupRef.current.rotation.y = rotationState.current.y;
  });

  return (
    <group ref={groupRef}>
      {cardData.map((data, i) => (
        <Card 
          key={i} 
          index={i} 
          position={data.position} 
          scale={data.scale} 
          userPhoto={userPhoto} 
          onSelect={(img, loc, info) => {
            if (!isDragging.current) {
              onSelect(img, loc, info);
            }
          }}
          onHover={onHover}
          onHoverOut={onHoverOut}
        />
      ))}
    </group>
  );
}
