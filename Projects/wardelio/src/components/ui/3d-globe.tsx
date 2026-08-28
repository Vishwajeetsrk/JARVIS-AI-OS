"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = new THREE.TextureLoader().load(
    "https://assets.aceternity.com/globe.png"
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} transparent opacity={1} />
    </mesh>
  );
}

function GlobeRings() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.001;
    }
  });
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
      <ringGeometry args={[2.8, 2.85, 64]} />
      <meshBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Globe({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
        }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <GlobeMesh />
        <GlobeRings />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

export default Globe;
