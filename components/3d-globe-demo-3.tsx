"use client";
import React from "react";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

const sampleMarkers: GlobeMarker[] = [
  { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/1.webp", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/2.webp", label: "London" },
  { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/3.webp", label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/4.webp", label: "Sydney" },
  { lat: 48.8566, lng: 2.3522, src: "https://assets.aceternity.com/avatars/5.webp", label: "Paris" },
  { lat: 28.6139, lng: 77.209, src: "https://assets.aceternity.com/avatars/6.webp", label: "New Delhi" },
  { lat: 55.7558, lng: 37.6173, src: "https://assets.aceternity.com/avatars/7.webp", label: "Moscow" },
  { lat: -22.9068, lng: -43.1729, src: "https://assets.aceternity.com/avatars/8.webp", label: "Rio de Janeiro" },
  { lat: 31.2304, lng: 121.4737, src: "https://assets.aceternity.com/avatars/9.webp", label: "Shanghai" },
  { lat: 25.2048, lng: 55.2708, src: "https://assets.aceternity.com/avatars/10.webp", label: "Dubai" },
  { lat: -34.6037, lng: -58.3816, src: "https://assets.aceternity.com/avatars/11.webp", label: "Buenos Aires" },
  { lat: 1.3521, lng: 103.8198, src: "https://assets.aceternity.com/avatars/12.webp", label: "Singapore" },
  { lat: 37.5665, lng: 126.978, src: "https://assets.aceternity.com/avatars/13.webp", label: "Seoul" },
];

export default function Globe3DDemoThird() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-6xl overflow-hidden rounded-2xl bg-neutral-950 p-8 border border-white/10 shadow-2xl">
      <div className="relative z-10 p-4 md:p-8 max-w-xl">
        <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white md:text-5xl">
          Deploy AI Swarms all over the world.
        </h2>
        <p className="mt-2 text-sm text-neutral-300 md:text-base">
          Sign up and orchestrate autonomous agents across global datacenters with low latency.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="rounded-xl bg-cyan-500 px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-95">
            Get Started
          </button>
          <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute -right-20 -bottom-20 z-0 h-[480px] w-[480px]">
        <Globe3D
          className="h-full w-full"
          markers={sampleMarkers}
          config={{
            atmosphereColor: "#4da6ff",
            atmosphereIntensity: 20,
            bumpScale: 5,
            autoRotateSpeed: 0.3,
          }}
          onMarkerClick={(marker) => {
            console.log("Clicked marker:", marker.label);
          }}
          onMarkerHover={(marker) => {
            if (marker) {
              console.log("Hovering:", marker.label);
            }
          }}
        />
      </div>
    </div>
  );
}
