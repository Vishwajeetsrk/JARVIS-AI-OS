/**
 * Nia Desktop Companion Component
 * Transparent, floating desktop companion with full freedom to walk across your screen,
 * sit on the taskbar, wave, and converse in real-time with voice and audio lip sync.
 */
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VRM, VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { audioLipSync } from "@/lib/avatar/audio-lip-sync";
import { avatarController } from "@/lib/avatar/avatar-controller";
import { continuousVoiceEngine, type VoiceStatus } from "@/lib/voice/continuous-voice-engine";
import { desktopWander, type WanderState } from "@/lib/avatar/desktop-wander-controller";
import { Sparkles, Mic, MicOff, Volume2, Move, X, Radio, Bot, Wrench } from "lucide-react";
import { toast } from "sonner";

interface NiaDesktopCompanionProps {
  onClose?: () => void;
}

export function NiaDesktopCompanion({ onClose }: NiaDesktopCompanionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vrmRef = useRef<VRM | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [posXPercent, setPosXPercent] = useState<number>(50);
  const [wanderState, setWanderState] = useState<WanderState>("WALKING_RIGHT");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>("listening");
  const [subtitle, setSubtitle] = useState<string>("Hello Vishwajeet! I'm walking across your laptop.");
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [autoWalk, setAutoWalk] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = 280;
    const height = 360;

    // 1. Setup Three.js Scene with 100% Transparent Alpha
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 20);
    camera.position.set(0, 1.15, 2.2); // Full-body view to see walking legs

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);

    // 2. Dynamic Lights for Character
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    dirLight.position.set(1.5, 2.0, 1.5);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    rimLight.position.set(-1.5, 1.5, -1.0);
    scene.add(rimLight);

    // 3. Load Nia VRM
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.load(
      "/vrm/nia-v1.vrm",
      (gltf) => {
        const vrm = gltf.userData.vrm as VRM;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        vrm.scene.rotation.y = Math.PI;
        vrmRef.current = vrm;
        scene.add(vrm.scene);
      },
      undefined,
      () => {
        // Fallback to nai.vrm or nexa-girl.vrm
        loader.load("/vrm/nai.vrm", (gltf) => {
          const vrm = gltf.userData.vrm as VRM;
          vrm.scene.rotation.y = Math.PI;
          vrmRef.current = vrm;
          scene.add(vrm.scene);
        });
      }
    );

    // 4. Mouse Tracking & Animation Loop
    const mousePos = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();
    let animationFrameId: number;
    let blinkTimer = 0;
    let nextBlink = 3.0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const vrm = vrmRef.current;

      if (vrm) {
        vrm.update(delta);

        // Blinking
        blinkTimer += delta;
        if (blinkTimer > nextBlink) {
          vrm.expressionManager?.setValue("blink", 1.0);
          if (blinkTimer > nextBlink + 0.15) {
            vrm.expressionManager?.setValue("blink", 0.0);
            blinkTimer = 0;
            nextBlink = 2.5 + Math.random() * 3.0;
          }
        }

        // Freedom-to-Walk Controller Update
        if (autoWalk) {
          desktopWander.update(vrm, delta, elapsed, mousePos, isSpeaking);
          setPosXPercent(desktopWander.screenXPercent);
          setWanderState(desktopWander.state);
        }

        // Phonetic Audio Lip-Sync Update
        audioLipSync.update(vrm, delta, elapsed);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 5. Subscribe to Voice & Speech Engine
    const unsubVoice = continuousVoiceEngine.subscribe((event) => {
      setVoiceStatus(event.status);
      if (event.transcript) {
        setSubtitle(`You: "${event.transcript}"`);
      }
      if (event.response) {
        setSubtitle(event.response);
      }
    });

    const unsubAvatar = avatarController.subscribe((state) => {
      setIsSpeaking(state.state === "SPEAKING");
    });

    // Auto-start continuous voice listening
    continuousVoiceEngine.startAlwaysOn();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      unsubVoice();
      unsubAvatar();
      if (vrmRef.current) VRMUtils.deepDispose(vrmRef.current.scene);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [autoWalk, isSpeaking]);

  // Drag & Drop Handler
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleWindowMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = (e.clientX / window.innerWidth) * 100;
    desktopWander.screenXPercent = Math.max(5, Math.min(92, newX));
    setPosXPercent(desktopWander.screenXPercent);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseMove={handleWindowMouseMove}
      onMouseUp={handleMouseUp}
      className="fixed inset-0 pointer-events-none z-[9999] select-none overflow-hidden"
    >
      {/* Floating Nia Character Anchor Container */}
      <div
        style={{
          left: `${posXPercent}%`,
          bottom: "16px",
          transform: "translateX(-50%)",
          transition: isDragging ? "none" : "left 0.15s ease-out",
        }}
        className="absolute pointer-events-auto flex flex-col items-center group"
      >
        {/* Floating Speech & Subtitle Cloud */}
        {subtitle && (
          <div className="mb-2 max-w-xs rounded-2xl border border-cyan-400/40 bg-slate-950/90 px-3.5 py-2 text-xs text-cyan-200 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-1.5 font-bold text-[10px] uppercase text-cyan-400">
              <Sparkles className="h-3 w-3 animate-spin" /> Nia Companion
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-100 font-medium">{subtitle}</p>
          </div>
        )}

        {/* 3D VRM Full-Body Render Canvas */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          className="relative h-[360px] w-[280px] cursor-grab active:cursor-grabbing drop-shadow-[0_15px_25px_rgba(56,189,248,0.25)]"
        />

        {/* Action Capsule Underneath */}
        <div className="mt-[-10px] flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-slate-950/85 px-3 py-1 text-xs text-cyan-300 shadow-lg backdrop-blur-md opacity-90 transition-opacity group-hover:opacity-100">
          <span className="flex items-center gap-1 text-[10px] font-mono">
            {wanderState === "WALKING_RIGHT" && "Walking Right ➔"}
            {wanderState === "WALKING_LEFT" && "◀ Walking Left"}
            {wanderState === "IDLE_LOOK" && "Looking Around 👀"}
            {wanderState === "SITTING_REST" && "Sitting & Resting 🪑"}
            {wanderState === "WAVING" && "Waving 👋"}
            {wanderState === "SPEAKING_TO_USER" && "Talking 🎙️"}
          </span>

          <button
            onClick={() => setAutoWalk(!autoWalk)}
            className={`rounded-full px-2 py-0.5 text-[9px] font-bold transition-all ${
              autoWalk ? "bg-cyan-500 text-slate-950" : "border border-border text-muted-foreground"
            }`}
          >
            {autoWalk ? "Wandering" : "Stay"}
          </button>

          <button
            onClick={() => continuousVoiceEngine.processCommand("Hey Nia, what are you doing?")}
            className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[9px] font-semibold text-sky-300 hover:bg-sky-500/30"
          >
            Talk
          </button>

          {onClose && (
            <button onClick={onClose} className="text-muted-foreground hover:text-rose-400">
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
