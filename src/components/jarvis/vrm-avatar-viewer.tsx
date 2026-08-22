import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { VRM, VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm";
import { avatarController, type AvatarEmotion } from "@/lib/avatar/avatar-controller";
import { Sparkles, Upload, Eye, Volume2, ShieldCheck, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface VRMAvatarViewerProps {
  onClose?: () => void;
}

const VRM_MODELS = [
  { id: "nexa-girl", name: "NEXA Girl", path: "/vrm/nexa-girl.vrm", size: "26.8 MB" },
  { id: "girl", name: "Girl", path: "/vrm/girl.vrm", size: "28.3 MB" },
  { id: "boy", name: "Boy", path: "/vrm/boy.vrm", size: "20.0 MB" },
];

export function VRMAvatarViewer({ onClose }: VRMAvatarViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vrmRef = useRef<VRM | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modelName, setModelName] = useState<string>("NEXA Girl");
  const [emotion, setEmotion] = useState<AvatarEmotion>("happy");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>("/vrm/nexa-girl.vrm");

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Three Scene, Camera, Renderer
    const width = containerRef.current.clientWidth || 400;
    const height = containerRef.current.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 20);
    camera.position.set(0, 1.4, 1.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);

    // If a VRM was already loaded, add it to the new scene
    if (vrmRef.current) {
      scene.add(vrmRef.current.scene);
    }

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    dirLight.position.set(1.0, 2.0, 1.0);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xa855f7, 2.5);
    rimLight.position.set(-1.0, 1.5, -1.0);
    scene.add(rimLight);

    // 3. Clock & Mouse Target
    const clock = new THREE.Clock();
    const mouseTarget = new THREE.Vector3(0, 1.4, 0);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseTarget.set(x * 0.5, 1.4 + y * 0.3, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 4. Animation Loop
    let animationFrameId: number;
    let blinkTimer = 0;
    let nextBlinkInterval = 3.5;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const activeVrm = vrmRef.current;

      if (activeVrm) {
        activeVrm.update(delta);

        // Blinking
        blinkTimer += delta;
        if (blinkTimer > nextBlinkInterval) {
          if (activeVrm.expressionManager) {
            activeVrm.expressionManager.setValue("blink", 1.0);
          }
          if (blinkTimer > nextBlinkInterval + 0.15) {
            if (activeVrm.expressionManager) {
              activeVrm.expressionManager.setValue("blink", 0.0);
            }
            blinkTimer = 0;
            nextBlinkInterval = 2.5 + Math.random() * 3.0;
          }
        }

        // Idle Breathing (only when not walking)
        if (activeVrm.humanoid) {
          const chest = activeVrm.humanoid.getNormalizedBoneNode("chest");
          if (chest) {
            chest.rotation.x = Math.sin(elapsed * (isWalking ? 4 : 2)) * (isWalking ? 0.05 : 0.03);
          }
          const head = activeVrm.humanoid.getNormalizedBoneNode("head");
          if (head && !isWalking) {
            head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, mouseTarget.x * 0.4, 0.05);
            head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, -mouseTarget.y * 0.2, 0.05);
          }
        }

        // Walking animation
        if (isWalking && activeVrm.humanoid) {
          const hips = activeVrm.humanoid.getNormalizedBoneNode("hips");
          if (hips) {
            hips.position.y = Math.abs(Math.sin(elapsed * 8)) * 0.04;
            hips.rotation.y = Math.sin(elapsed * 2) * 0.08;
          }
          const leftUpperLeg = activeVrm.humanoid.getNormalizedBoneNode("leftUpperLeg");
          const rightUpperLeg = activeVrm.humanoid.getNormalizedBoneNode("rightUpperLeg");
          const leftLowerLeg = activeVrm.humanoid.getNormalizedBoneNode("leftLowerLeg");
          const rightLowerLeg = activeVrm.humanoid.getNormalizedBoneNode("rightLowerLeg");
          if (leftUpperLeg) leftUpperLeg.rotation.x = Math.sin(elapsed * 10) * 0.5;
          if (rightUpperLeg) rightUpperLeg.rotation.x = Math.sin(elapsed * 10 + Math.PI) * 0.5;
          if (leftLowerLeg) leftLowerLeg.rotation.x = Math.max(0, Math.sin(elapsed * 10 + Math.PI) * 0.5);
          if (rightLowerLeg) rightLowerLeg.rotation.x = Math.max(0, Math.sin(elapsed * 10) * 0.5);
          const leftUpperArm = activeVrm.humanoid.getNormalizedBoneNode("leftUpperArm");
          const rightUpperArm = activeVrm.humanoid.getNormalizedBoneNode("rightUpperArm");
          if (leftUpperArm) leftUpperArm.rotation.x = Math.sin(elapsed * 10 + Math.PI) * 0.4;
          if (rightUpperArm) rightUpperArm.rotation.x = Math.sin(elapsed * 10) * 0.4;
        }

        // Speaking Lip-sync with visemes
        if (activeVrm.expressionManager) {
          if (isSpeaking) {
            const t = elapsed * 14;
            activeVrm.expressionManager.setValue("aa", Math.abs(Math.sin(t)) * 0.8);
            activeVrm.expressionManager.setValue("ih", Math.abs(Math.sin(t + 1)) * 0.5);
            activeVrm.expressionManager.setValue("ou", Math.abs(Math.sin(t + 2)) * 0.3);
            activeVrm.expressionManager.setValue("ee", Math.abs(Math.sin(t + 3)) * 0.4);
            activeVrm.expressionManager.setValue("oh", Math.abs(Math.sin(t + 4)) * 0.6);
          } else {
            ["aa", "ih", "ou", "ee", "oh"].forEach(v => activeVrm.expressionManager!.setValue(v, 0));
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 5. Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Subscribe to Avatar Controller Events
    const unsub = avatarController.subscribe((state) => {
      setEmotion(state.emotion);
      setIsSpeaking(state.state === "SPEAKING");
      const activeVrm = vrmRef.current;
      if (activeVrm && activeVrm.expressionManager) {
        if (state.emotion === "happy") activeVrm.expressionManager.setValue("happy", 0.8);
        else if (state.emotion === "curious") activeVrm.expressionManager.setValue("surprised", 0.6);
        else if (state.emotion === "caring") activeVrm.expressionManager.setValue("relaxed", 0.7);
      }
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      unsub();
      if (vrmRef.current) VRMUtils.deepDispose(vrmRef.current.scene);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isSpeaking, isWalking]);

  // Auto-load selected VRM model
  useEffect(() => {
    if (!selectedModel) return;
    const model = VRM_MODELS.find(m => m.path === selectedModel);
    if (model) setModelName(model.name);
    setIsLoading(true);
    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.load(
      selectedModel,
      (gltf) => {
        const vrm = gltf.userData.vrm as VRM;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        vrm.scene.rotation.y = Math.PI;
        // Remove old VRM from scene if exists
        if (vrmRef.current && sceneRef.current) {
          sceneRef.current.remove(vrmRef.current.scene);
          VRMUtils.deepDispose(vrmRef.current.scene);
        }
        vrmRef.current = vrm;
        if (sceneRef.current) {
          sceneRef.current.add(vrm.scene);
        }
        setIsLoading(false);
        toast.success(`Loaded ${model?.name ?? selectedModel} — walking & talking ready`);
      },
      undefined,
      () => {
        setIsLoading(false);
        toast.error("Failed to load VRM model");
      }
    );
  }, [selectedModel]);

  // Handle Custom VRM File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".vrm")) {
      toast.error("Please select a valid .vrm 3D avatar file exported from VRoid Studio.");
      return;
    }

    setIsLoading(true);
    setModelName(file.name.replace(".vrm", ""));
    const url = URL.createObjectURL(file);

    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    loader.load(
      url,
      (gltf) => {
        const vrm = gltf.userData.vrm as VRM;
        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);
        vrm.scene.rotation.y = Math.PI;
        if (vrmRef.current && sceneRef.current) {
          sceneRef.current.remove(vrmRef.current.scene);
          VRMUtils.deepDispose(vrmRef.current.scene);
        }
        vrmRef.current = vrm;
        if (sceneRef.current) sceneRef.current.add(vrm.scene);
        setSelectedModel(""); // custom file, not from preset
        setIsLoading(false);
        toast.success(`Loaded 3D VRoid avatar: ${file.name} — walking & talking ready`);
      },
      (progress) => {
        // Loading progress
      },
      (error: any) => {
        setIsLoading(false);
        toast.error(`Failed to load VRM: ${error?.message || "Unknown error"}`);
      }
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90 p-4 shadow-2xl backdrop-blur-xl">
      {/* 3D Render Canvas */}
      <div ref={containerRef} className="relative h-[420px] w-full max-w-md cursor-crosshair rounded-2xl" />

      {/* Holographic Header Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "8s" }} />
          3D VRM AVATAR // {modelName}
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <label className="flex cursor-pointer items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-md transition-all hover:bg-primary/30">
            <Upload className="h-3.5 w-3.5" /> Drop Custom VRM
            <input type="file" accept=".vrm" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Model Selector & Walking/Talking Controls */}
      <div className="mt-3 flex w-full flex-wrap items-center justify-between gap-2 border-t border-cyan-500/20 pt-3 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] text-muted-foreground uppercase">Model:</span>
          {VRM_MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m.path)}
              className={`rounded-lg px-2 py-1 text-[11px] font-medium transition-all ${
                selectedModel === m.path ? "bg-cyan-500 text-slate-950 font-bold" : "border border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
              title={`${m.name} — ${m.size}`}
            >
              {m.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsWalking(!isWalking)}
            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all ${isWalking ? "bg-emerald-500 text-white" : "border border-border bg-surface text-muted-foreground hover:text-foreground"}`}
          >
            <span className={`h-2 w-2 rounded-full ${isWalking ? "bg-white animate-pulse" : "bg-zinc-500"}`} /> {isWalking ? "Walking" : "Idle"}
          </button>
          <button
            onClick={() => {
              setIsSpeaking(!isSpeaking);
              if (!isSpeaking) {
                avatarController.setSpeaking(true);
                setTimeout(() => { setIsSpeaking(false); avatarController.setSpeaking(false); }, 2500);
                toast.success("Talking demo — visemes active");
              } else {
                avatarController.setSpeaking(false);
              }
            }}
            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-semibold transition-all ${isSpeaking ? "bg-sky-500 text-white" : "border border-border bg-surface text-muted-foreground hover:text-foreground"}`}
          >
            <Volume2 className="h-3 w-3" /> {isSpeaking ? "Talking" : "Talk"}
          </button>
        </div>
      </div>

      {/* Bottom Status & Emotion Presets */}
      <div className="mt-2 flex w-full flex-wrap items-center justify-between gap-3 border-t border-cyan-500/10 pt-3 text-xs">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Eye className="h-3.5 w-3.5 text-cyan-400" />
          <span>Eye & Head Tracking: <strong className="text-foreground">Active</strong></span>
          {isLoading && <span className="ml-2 inline-flex items-center gap-1 text-amber-400"><RefreshCw className="h-3 w-3 animate-spin" /> Loading…</span>}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] text-muted-foreground uppercase">Expression:</span>
          {(["happy", "curious", "focused", "caring"] as AvatarEmotion[]).map((emo) => (
            <button
              key={emo}
              onClick={() => avatarController.setEmotion(emo)}
              className={`rounded-lg px-2 py-0.5 text-[10px] font-semibold transition-all ${
                emotion === emo
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "border border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {emo}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
