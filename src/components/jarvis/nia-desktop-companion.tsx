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
import { Sparkles, Mic, MicOff, Volume2, Move, X, Radio, Bot, Wrench, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface NiaDesktopCompanionProps {
  onClose?: () => void;
}

export function NiaDesktopCompanion({ onClose }: NiaDesktopCompanionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vrmRef = useRef<VRM | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [posXPercent, setPosXPercent] = useState<number>(50);
  const [wanderState, setWanderState] = useState<WanderState>("WALKING_RIGHT");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>("listening");
  const [subtitle, setSubtitle] = useState<string>("Hello Vishwajeet! I'm Nia, your 3D desktop companion.");
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [autoWalk, setAutoWalk] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = 320;
    const height = 480;

    // 1. Setup Three.js Scene with 100% Transparent Alpha
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 20);
    camera.position.set(0, 1.0, 3.2); // Full body — head to feet
    camera.lookAt(0, 0.9, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;
    containerRef.current.replaceChildren(renderer.domElement);

    // 2. High-Fidelity Character Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(1.0, 2.5, 2.0);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    fillLight.position.set(-1.5, 1.5, 1.5);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    rimLight.position.set(0, 2.0, -2.0);
    scene.add(rimLight);

    // 3. Load Nia VRM (Tries Nai.vrm -> nia-v1.vrm -> nai.vrm)
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    const loadVRMModel = (url: string, fallbacks: string[]) => {
      loader.load(
        url,
        (gltf) => {
          const vrm = gltf.userData.vrm as VRM;
          if (!vrm) {
            if (fallbacks.length > 0) {
              loadVRMModel(fallbacks[0], fallbacks.slice(1));
            }
            return;
          }

          // Handle VRM 0.0 rotation automatically without distorting VRM 1.0
          VRMUtils.rotateVRM0(vrm);

          // Disable frustum culling + remove all non-skinned helper meshes (bone spheres, physics discs)
          vrm.scene.traverse((obj) => {
            if ((obj as THREE.Mesh).isMesh) {
              const mesh = obj as THREE.Mesh;
              // Remove helper debug geometry (e.g. spring-bone sphere colliders that appear as blue discs)
              const isHelper =
                obj.name.toLowerCase().includes("helper") ||
                obj.name.toLowerCase().includes("collider") ||
                obj.name.toLowerCase().includes("joint") ||
                obj.name.toLowerCase().includes("debug");
              if (isHelper) {
                mesh.visible = false;
                return;
              }
              mesh.frustumCulled = false;
              mesh.castShadow = false;
              mesh.receiveShadow = false;
            }
          });

          // Additionally hide SpringBone colliders if the VRM has them registered
          if ((vrm as any).springBoneManager) {
            const sbm = (vrm as any).springBoneManager;
            if (sbm.colliderGroups) {
              sbm.colliderGroups.forEach((g: any) => {
                if (g.colliders) {
                  g.colliders.forEach((c: any) => {
                    if (c.object) c.object.visible = false;
                  });
                }
              });
            }
          }

          vrmRef.current = vrm;
          scene.add(vrm.scene);
          setIsModelLoaded(true);
          setLoadError(null);
        },
        undefined,
        (err) => {
          console.warn(`Failed loading ${url}, attempting fallback...`, err);
          if (fallbacks.length > 0) {
            loadVRMModel(fallbacks[0], fallbacks.slice(1));
          } else {
            setLoadError("Could not load 3D VRM file.");
          }
        }
      );
    };

    // Load Nia — tries all known filename casings (Windows is case-insensitive but Linux/Mac are not)
    loadVRMModel("/vrm/nai.vrm", ["/vrm/Nai.vrm", "/vrm/nia-v1.vrm", "/vrm/Nia.vrm", "/vrm/nexa-girl.vrm"]);

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
        } else {
          // Subtle idle breathing when staying in place
          if (vrm.humanoid) {
            const chest = vrm.humanoid.getNormalizedBoneNode("chest");
            if (chest) {
              chest.rotation.x = Math.sin(elapsed * 1.5) * 0.03;
            }
          }
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
      if (event.status === "speaking") {
        setIsSpeaking(true);
      } else {
        setIsSpeaking(false);
      }
      if (event.response) {
        setSubtitle(event.response);
      } else if (event.transcript) {
        setSubtitle(`You: "${event.transcript}"`);
      }
    });

    const unsubAvatar = avatarController.subscribe((event) => {
      setIsSpeaking(event.isSpeaking);
      if (event.message) setSubtitle(event.message);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      unsubVoice();
      unsubAvatar();
      renderer.dispose();
    };
  }, [autoWalk]);

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
          className="relative h-[480px] w-[320px] cursor-grab active:cursor-grabbing drop-shadow-[0_20px_35px_rgba(56,189,248,0.3)] flex items-center justify-center"
        >
          {loadError && (
            <div className="p-3 bg-red-950/80 border border-red-500/50 rounded-xl text-[11px] text-red-200 text-center">
              {loadError}
            </div>
          )}
        </div>

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
