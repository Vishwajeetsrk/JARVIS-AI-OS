import * as THREE from 'three';
import { useMemo, useRef, useState, useEffect } from 'react';
import { CARD_WIDTH, CARD_HEIGHT, GLOBE_RADIUS } from '../data';

interface CardProps {
  index: number;
  position: THREE.Vector3;
  scale?: number;
  userPhoto: string;
  onSelect: (image: string, location: string, info: string) => void;
  onHover?: (info: string) => void;
  onHoverOut?: () => void;
}

export default function Card({ index, position, scale = 1, userPhoto, onSelect, onHover, onHoverOut }: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [cardInfo, setCardInfo] = useState<{ base64: string; location: string, info: string } | null>(null);
  
  // Create a default gray material
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let active = true;

    // Load gray pixel as initial texture
    const grayCanvas = document.createElement('canvas');
    grayCanvas.width = 400;
    grayCanvas.height = 500;
    const gCtx = grayCanvas.getContext('2d');
    if (gCtx) {
      gCtx.fillStyle = '#E5E5E5';
      gCtx.fillRect(0, 0, 400, 500);
    }
    const initialTex = new THREE.CanvasTexture(grayCanvas);
    initialTex.minFilter = THREE.LinearMipmapLinearFilter;
    initialTex.generateMipmaps = true;
    setTexture(initialTex);
    
    // Start fetching as soon as possible, but stagger slightly to avoid slamming the server concurrently
    const delay = index * 100;

    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/generate-location', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ index, userImageBase64: userPhoto })
        });
        const data = await res.json();
        
        if (data.success && data.base64 && active) {
          setCardInfo({ base64: data.base64, location: data.location, info: data.info });
          new THREE.TextureLoader().load(data.base64, (loadedTex) => {
            loadedTex.minFilter = THREE.LinearMipmapLinearFilter;
            loadedTex.generateMipmaps = true;
            if (active) {
              setTexture(loadedTex);
            }
          });
        }
      } catch (e) {
        console.error("Failed to generate/composite for index", index, e);
      }
    }, delay);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [index, userPhoto]);

  useEffect(() => {
    if (hovered && cardInfo && onHover) {
      onHover(cardInfo.info);
    }
  }, [cardInfo, hovered, onHover]);

  const rotationQuaternion = useMemo(() => {
    const dummy = new THREE.Object3D();
    dummy.position.copy(position);
    // The local forward vector (+Z) points directly outward from center (0,0,0)
    dummy.lookAt(position.clone().multiplyScalar(2));
    return dummy.quaternion.clone();
  }, [position]);

  const geometry = useMemo(() => {
    // 32x32 segments for smooth curving
    // Scale the dimensions before applying the bend, so it sits perfectly curve-flush on the sphere
    const width = CARD_WIDTH * scale;
    const height = CARD_HEIGHT * scale;
    const geo = new THREE.PlaneGeometry(width, height, 32, 32);
    const pos = geo.attributes.position;
    
    // Curve the plane to match the sphere's surface
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      const theta = x / GLOBE_RADIUS;
      const phi = y / GLOBE_RADIUS;
      
      const newX = GLOBE_RADIUS * Math.sin(theta) * Math.cos(phi);
      const newY = GLOBE_RADIUS * Math.sin(phi);
      // Offset by GLOBE_RADIUS so its local center remains at (0,0,0)
      const newZ = GLOBE_RADIUS * Math.cos(theta) * Math.cos(phi) - GLOBE_RADIUS;
      
      pos.setXYZ(i, newX, newY, newZ);
    }
    
    geo.computeVertexNormals();
    return geo;
  }, [scale]);

  return (
    <mesh 
      position={position} 
      quaternion={rotationQuaternion}
      ref={meshRef} 
      geometry={geometry} 
      onClick={(e) => {
        e.stopPropagation();
        if (cardInfo) {
          onSelect(cardInfo.base64, cardInfo.location, cardInfo.info);
        }
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
        if (cardInfo && onHover) {
          onHover(cardInfo.info);
        }
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
        if (onHoverOut) {
          onHoverOut();
        }
      }}
    >
      {/* DoubleSide allows the interior views of the cards to be seen when passing through */}
      {texture && (
        <meshBasicMaterial 
          map={texture} 
          side={THREE.DoubleSide} 
          toneMapped={false} 
        />
      )}
    </mesh>
  );
}
