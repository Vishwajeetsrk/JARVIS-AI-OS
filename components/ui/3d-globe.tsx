"use client";
import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface GlobeMarker {
  lat: number;
  lng: number;
  src?: string;
  label?: string;
  size?: number;
}

export interface Globe3DConfig {
  radius?: number;
  globeColor?: string;
  textureUrl?: string;
  bumpMapUrl?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  atmosphereBlur?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
  minDistance?: number;
  maxDistance?: number;
  initialRotation?: { x: number; y: number };
  markerSize?: number;
  showWireframe?: boolean;
  wireframeColor?: string;
  ambientIntensity?: number;
  pointLightIntensity?: number;
  backgroundColor?: string | null;
}

export interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: Globe3DConfig;
  className?: string;
  onMarkerClick?: (marker: GlobeMarker) => void;
  onMarkerHover?: (marker: GlobeMarker | null) => void;
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

export function Globe3D({
  markers = [],
  config = {},
  className,
  onMarkerClick,
  onMarkerHover,
}: Globe3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredMarker, setHoveredMarker] = useState<GlobeMarker | null>(null);

  const radius = config.radius || 2;
  const autoRotateSpeed = config.autoRotateSpeed !== undefined ? config.autoRotateSpeed : 0.3;
  const atmosphereColor = config.atmosphereColor || "#4da6ff";

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = radius * 3.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Earth Sphere
    const sphereGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const textureLoader = new THREE.TextureLoader();

    const earthTexture = textureLoader.load(
      config.textureUrl || "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg",
      () => renderer.render(scene, camera)
    );

    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.6,
      metalness: 0.1,
    });
    const globeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(globeMesh);

    // Wireframe Grid
    const wireframeGeom = new THREE.SphereGeometry(radius * 1.002, 32, 16);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: config.wireframeColor || "#00e5ff",
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    globeGroup.add(new THREE.Mesh(wireframeGeom, wireframeMat));

    // Atmosphere Glow
    const atmosphereGeom = new THREE.SphereGeometry(radius * 1.12, 64, 32);
    const atmosphereMat = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(atmosphereColor) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(color, intensity * 0.8);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    scene.add(new THREE.Mesh(atmosphereGeom, atmosphereMat));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(5, 3, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00e5ff, 0.6);
    dirLight2.position.set(-5, -2, -5);
    scene.add(dirLight2);

    // Markers
    const markerMeshes: { mesh: THREE.Mesh; marker: GlobeMarker }[] = [];
    markers.forEach((m) => {
      const pos = latLngToVector3(m.lat, m.lng, radius);
      const pinGeom = new THREE.CylinderGeometry(0.015, 0.015, 0.25, 8);
      pinGeom.translate(0, 0.125, 0);
      pinGeom.rotateX(Math.PI / 2);

      const pinMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
      const pinMesh = new THREE.Mesh(pinGeom, pinMat);
      pinMesh.position.copy(pos);
      pinMesh.lookAt(0, 0, 0);

      // Pin head sphere
      const headGeom = new THREE.SphereGeometry(0.05, 16, 16);
      const headMat = new THREE.MeshStandardMaterial({
        color: 0xff3b30,
        emissive: 0xff3b30,
        emissiveIntensity: 0.5,
      });
      const headMesh = new THREE.Mesh(headGeom, headMat);
      const headPos = latLngToVector3(m.lat, m.lng, radius * 1.09);
      headMesh.position.copy(headPos);

      globeGroup.add(pinMesh);
      globeGroup.add(headMesh);
      markerMeshes.push({ mesh: headMesh, marker: m });
    });

    // Mouse Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        globeGroup.rotation.y += deltaX * 0.005;
        globeGroup.rotation.x += deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }

      // Raycaster for markers
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes.map((m) => m.mesh));

      if (intersects.length > 0) {
        const hit = markerMeshes.find((m) => m.mesh === intersects[0].object);
        if (hit) {
          setHoveredMarker(hit.marker);
          onMarkerHover?.(hit.marker);
          container.style.cursor = "pointer";
          return;
        }
      }
      setHoveredMarker(null);
      onMarkerHover?.(null);
      container.style.cursor = isDragging ? "grabbing" : "grab";
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    const onClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes.map((m) => m.mesh));

      if (intersects.length > 0) {
        const hit = markerMeshes.find((m) => m.mesh === intersects[0].object);
        if (hit) onMarkerClick?.(hit.marker);
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("click", onClick);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      if (!isDragging) {
        globeGroup.rotation.y += autoRotateSpeed * 0.005;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("click", onClick);
      renderer.dispose();
    };
  }, [radius, autoRotateSpeed, atmosphereColor, markers, onMarkerClick, onMarkerHover, config]);

  return (
    <div className={cn("relative h-[480px] w-full select-none overflow-hidden", className)}>
      <div ref={mountRef} className="h-full w-full cursor-grab" />
      {hoveredMarker && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/50 bg-neutral-950/90 px-4 py-1.5 text-xs font-bold text-cyan-300 shadow-xl backdrop-blur-md">
          📍 {hoveredMarker.label || "Marker"}
        </div>
      )}
    </div>
  );
}

export default Globe3D;
