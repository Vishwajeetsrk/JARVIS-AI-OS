/**
 * Nia Desktop Wander & Freedom-to-Walk Controller
 * Allows Nia to freely roam across the laptop screen / desktop,
 * turn around, look at the user, sit down, wave, and respond to voice in real-time.
 */
import * as THREE from "three";
import { VRM } from "@pixiv/three-vrm";

export type WanderState =
  | "WALKING_RIGHT"
  | "WALKING_LEFT"
  | "IDLE_LOOK"
  | "SITTING_REST"
  | "WAVING"
  | "SPEAKING_TO_USER"
  | "DRAGGING";

export interface WanderConfig {
  minXPercent: number; // e.g. 5%
  maxXPercent: number; // e.g. 90%
  walkSpeed: number; // speed of lateral roaming
  pauseChance: number;
}

export class DesktopWanderController {
  public state: WanderState = "WALKING_RIGHT";
  public screenXPercent: number = 50; // 0 to 100% across screen width
  public screenYPercent: number = 85; // 0 to 100% down screen height
  public targetXPercent: number = 80;
  private stateTimer: number = 0;
  private nextStateDuration: number = 4.0;
  private waveTimer: number = 0;

  constructor(private config: WanderConfig = { minXPercent: 8, maxXPercent: 88, walkSpeed: 4.5, pauseChance: 0.35 }) {}

  /**
   * Update wandering state machine and apply skeletal IK / kinematics
   */
  public update(
    vrm: VRM | null,
    delta: number,
    elapsed: number,
    mousePos: { x: number; y: number },
    isSpeaking: boolean
  ) {
    if (!vrm || !vrm.humanoid) return;

    this.stateTimer += delta;

    // If currently speaking aloud to user, face camera and talk
    if (isSpeaking) {
      this.state = "SPEAKING_TO_USER";
    } else if (this.state === "SPEAKING_TO_USER" && !isSpeaking) {
      this.state = "IDLE_LOOK";
      this.stateTimer = 0;
      this.nextStateDuration = 3.0;
    }

    // State Transition Logic
    if (this.state !== "DRAGGING" && this.state !== "SPEAKING_TO_USER") {
      if (this.stateTimer > this.nextStateDuration) {
        this.stateTimer = 0;
        this.chooseNextState();
      }
    }

    // Kinematics and Root Position Movement
    const humanoid = vrm.humanoid;
    const root = vrm.scene;

    if (this.state === "WALKING_RIGHT") {
      this.screenXPercent += this.config.walkSpeed * delta;
      if (this.screenXPercent >= this.config.maxXPercent) {
        this.screenXPercent = this.config.maxXPercent;
        this.state = "WALKING_LEFT";
        this.stateTimer = 0;
      }
      // Face Right
      root.rotation.y = THREE.MathUtils.lerp(root.rotation.y, Math.PI * 0.45, delta * 5);
      this.applyWalkAnimation(humanoid, elapsed);
    } else if (this.state === "WALKING_LEFT") {
      this.screenXPercent -= this.config.walkSpeed * delta;
      if (this.screenXPercent <= this.config.minXPercent) {
        this.screenXPercent = this.config.minXPercent;
        this.state = "WALKING_RIGHT";
        this.stateTimer = 0;
      }
      // Face Left
      root.rotation.y = THREE.MathUtils.lerp(root.rotation.y, -Math.PI * 0.45, delta * 5);
      this.applyWalkAnimation(humanoid, elapsed);
    } else if (this.state === "IDLE_LOOK" || this.state === "SPEAKING_TO_USER") {
      // Face Forward / User
      root.rotation.y = THREE.MathUtils.lerp(root.rotation.y, Math.PI, delta * 6);
      this.applyIdleLookAnimation(humanoid, elapsed, mousePos);
    } else if (this.state === "SITTING_REST") {
      root.rotation.y = THREE.MathUtils.lerp(root.rotation.y, Math.PI, delta * 6);
      this.applySittingAnimation(humanoid, elapsed);
    } else if (this.state === "WAVING") {
      root.rotation.y = THREE.MathUtils.lerp(root.rotation.y, Math.PI, delta * 6);
      this.applyWavingAnimation(humanoid, elapsed);
    }
  }

  private chooseNextState() {
    const r = Math.random();
    if (r < 0.35) {
      this.state = this.screenXPercent > 50 ? "WALKING_LEFT" : "WALKING_RIGHT";
      this.nextStateDuration = 3.0 + Math.random() * 5.0;
    } else if (r < 0.65) {
      this.state = "IDLE_LOOK";
      this.nextStateDuration = 2.5 + Math.random() * 3.5;
    } else if (r < 0.85) {
      this.state = "WAVING";
      this.nextStateDuration = 2.5;
    } else {
      this.state = "SITTING_REST";
      this.nextStateDuration = 4.0 + Math.random() * 3.0;
    }
  }

  private applyWalkAnimation(humanoid: any, elapsed: number) {
    const hips = humanoid.getNormalizedBoneNode("hips");
    if (hips) {
      hips.position.y = Math.abs(Math.sin(elapsed * 7)) * 0.04;
      hips.rotation.z = Math.sin(elapsed * 7) * 0.04;
    }

    const leftUpperLeg = humanoid.getNormalizedBoneNode("leftUpperLeg");
    const rightUpperLeg = humanoid.getNormalizedBoneNode("rightUpperLeg");
    const leftLowerLeg = humanoid.getNormalizedBoneNode("leftLowerLeg");
    const rightLowerLeg = humanoid.getNormalizedBoneNode("rightLowerLeg");

    if (leftUpperLeg) leftUpperLeg.rotation.x = Math.sin(elapsed * 7) * 0.55;
    if (rightUpperLeg) rightUpperLeg.rotation.x = Math.sin(elapsed * 7 + Math.PI) * 0.55;
    if (leftLowerLeg) leftLowerLeg.rotation.x = Math.max(0, Math.sin(elapsed * 7 + Math.PI) * 0.6);
    if (rightLowerLeg) rightLowerLeg.rotation.x = Math.max(0, Math.sin(elapsed * 7) * 0.6);

    const leftUpperArm = humanoid.getNormalizedBoneNode("leftUpperArm");
    const rightUpperArm = humanoid.getNormalizedBoneNode("rightUpperArm");
    if (leftUpperArm) leftUpperArm.rotation.x = Math.sin(elapsed * 7 + Math.PI) * 0.45;
    if (rightUpperArm) rightUpperArm.rotation.x = Math.sin(elapsed * 7) * 0.45;
  }

  private applyIdleLookAnimation(humanoid: any, elapsed: number, mousePos: { x: number; y: number }) {
    const chest = humanoid.getNormalizedBoneNode("chest");
    if (chest) {
      chest.rotation.x = Math.sin(elapsed * 2) * 0.03;
    }
    const head = humanoid.getNormalizedBoneNode("head");
    if (head) {
      head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, mousePos.x * 0.4, 0.08);
      head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, -mousePos.y * 0.2, 0.08);
    }
    const leftUpperLeg = humanoid.getNormalizedBoneNode("leftUpperLeg");
    const rightUpperLeg = humanoid.getNormalizedBoneNode("rightUpperLeg");
    if (leftUpperLeg) leftUpperLeg.rotation.x = 0;
    if (rightUpperLeg) rightUpperLeg.rotation.x = 0;
  }

  private applySittingAnimation(humanoid: any, elapsed: number) {
    const hips = humanoid.getNormalizedBoneNode("hips");
    if (hips) hips.position.y = -0.35 + Math.sin(elapsed * 2) * 0.01;

    const leftUpperLeg = humanoid.getNormalizedBoneNode("leftUpperLeg");
    const rightUpperLeg = humanoid.getNormalizedBoneNode("rightUpperLeg");
    const leftLowerLeg = humanoid.getNormalizedBoneNode("leftLowerLeg");
    const rightLowerLeg = humanoid.getNormalizedBoneNode("rightLowerLeg");

    if (leftUpperLeg) leftUpperLeg.rotation.x = Math.PI * 0.45;
    if (rightUpperLeg) rightUpperLeg.rotation.x = Math.PI * 0.45;
    if (leftLowerLeg) leftLowerLeg.rotation.x = Math.PI * 0.45 + Math.sin(elapsed * 3) * 0.15; // Leg swing
    if (rightLowerLeg) rightLowerLeg.rotation.x = Math.PI * 0.45 + Math.sin(elapsed * 3 + 1) * 0.15;
  }

  private applyWavingAnimation(humanoid: any, elapsed: number) {
    const rightUpperArm = humanoid.getNormalizedBoneNode("rightUpperArm");
    const rightLowerArm = humanoid.getNormalizedBoneNode("rightLowerArm");
    if (rightUpperArm) {
      rightUpperArm.rotation.z = -Math.PI * 0.65;
      rightUpperArm.rotation.x = -Math.PI * 0.2;
    }
    if (rightLowerArm) {
      rightLowerArm.rotation.z = -Math.PI * 0.2 + Math.sin(elapsed * 12) * 0.4; // Waving hand
    }
  }
}

export const desktopWander = new DesktopWanderController();
