/**
 * ContinuousRecorder — Always-on microphone with speech/silence detection.
 *
 * Uses Web Audio API to monitor audio levels and automatically segment
 * speech into chunks ready for Whisper STT transcription.
 *
 * Usage:
 *   const recorder = new ContinuousRecorder({ onSpeechChunk: (blob) => ... });
 *   await recorder.start();
 *   // ... later
 *   recorder.stop();
 */

export interface ContinuousRecorderOptions {
  /** Called when a speech segment ends (silence detected after speech) */
  onSpeechChunk: (audioBlob: Blob) => void;
  /** Audio level threshold to consider as speech (0-1, default 0.02) */
  speechThreshold?: number;
  /** Silence duration (ms) before ending a speech segment (default 1500) */
  silenceDuration?: number;
  /** Maximum chunk duration in ms (default 30000) */
  maxChunkDuration?: number;
  /** Sample rate for audio context (default 16000) */
  sampleRate?: number;
}

export type RecorderState = "idle" | "listening" | "processing";

export class ContinuousRecorder {
  private audioContext: AudioContext | null = null;
  private mediaStream: MediaStream | null = null;
  private analyser: AnalyserNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  private state: RecorderState = "idle";
  private speechStartTime = 0;
  private lastSpeechTime = 0;
  private isSpeaking = false;
  private chunks: Float32Array[] = [];
  private animFrame: number | null = null;
  private options: Required<ContinuousRecorderOptions>;

  constructor(options: ContinuousRecorderOptions) {
    this.options = {
      speechThreshold: 0.02,
      silenceDuration: 1500,
      maxChunkDuration: 30000,
      sampleRate: 16000,
      ...options,
    };
  }

  getState(): RecorderState {
    return this.state;
  }

  async start(): Promise<void> {
    if (this.state !== "idle") return;

    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: this.options.sampleRate,
        },
      });

      this.audioContext = new AudioContext({
        sampleRate: this.options.sampleRate,
      });

      const source = this.audioContext.createMediaStreamSource(this.mediaStream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 2048;

      this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);
      this.processor.onaudioprocess = (event) => this.handleAudio(event);

      source.connect(this.analyser);
      this.analyser.connect(this.processor);
      this.processor.connect(this.audioContext.destination);

      this.state = "listening";
      this.monitor();
    } catch (err) {
      this.state = "idle";
      throw err;
    }
  }

  stop(): void {
    if (this.state === "idle") return;

    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }

    if (this.processor) {
      this.processor.disconnect();
      this.processor = null;
    }

    if (this.analyser) {
      this.analyser.disconnect();
      this.analyser = null;
    }

    if (this.mediaStream) {
      for (const track of this.mediaStream.getTracks()) {
        track.stop();
      }
      this.mediaStream = null;
    }

    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }

    this.state = "idle";
    this.isSpeaking = false;
    this.chunks = [];
  }

  private handleAudio(event: AudioProcessingEvent): void {
    if (this.state !== "listening") return;

    const input = event.inputBuffer.getChannelData(0);
    const rms = this.getRMS(input);
    const now = Date.now();

    if (rms > this.options.speechThreshold) {
      // Speech detected
      if (!this.isSpeaking) {
        this.isSpeaking = true;
        this.speechStartTime = now;
        this.chunks = [];
      }
      this.lastSpeechTime = now;
      this.chunks.push(new Float32Array(input));

      // Check max duration
      if (now - this.speechStartTime > this.options.maxChunkDuration) {
        this.finalizeChunk();
      }
    } else if (this.isSpeaking) {
      // Silence after speech
      this.chunks.push(new Float32Array(input));

      if (now - this.lastSpeechTime > this.options.silenceDuration) {
        this.finalizeChunk();
      }
    }
  }

  private finalizeChunk(): void {
    if (this.chunks.length === 0) return;

    const totalLength = this.chunks.reduce((acc, chunk) => acc + chunk.length, 0);
    const merged = new Float32Array(totalLength);
    let offset = 0;
    for (const chunk of this.chunks) {
      merged.set(chunk, offset);
      offset += chunk.length;
    }

    this.chunks = [];
    this.isSpeaking = false;

    // Convert Float32Array to WAV Blob
    const wavBlob = this.float32ToWav(merged);
    this.options.onSpeechChunk(wavBlob);
  }

  private float32ToWav(samples: Float32Array): Blob {
    const numChannels = 1;
    const sampleRate = this.options.sampleRate;
    const bitsPerSample = 16;
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);
    const dataSize = samples.length * (bitsPerSample / 8);
    const buffer = new ArrayBuffer(44 + dataSize);
    const view = new DataView(buffer);

    // RIFF header
    this.writeString(view, 0, "RIFF");
    view.setUint32(4, 36 + dataSize, true);
    this.writeString(view, 8, "WAVE");

    // fmt chunk
    this.writeString(view, 12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitsPerSample, true);

    // data chunk
    this.writeString(view, 36, "data");
    view.setUint32(40, dataSize, true);

    // Write samples
    const int16 = new Int16Array(buffer, 44);
    for (let i = 0; i < samples.length; i++) {
      const s = Math.max(-1, Math.min(1, samples[i]));
      int16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
    }

    return new Blob([buffer], { type: "audio/wav" });
  }

  private writeString(view: DataView, offset: number, str: string): void {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  private getRMS(samples: Float32Array): number {
    let sum = 0;
    for (let i = 0; i < samples.length; i++) {
      sum += samples[i] * samples[i];
    }
    return Math.sqrt(sum / samples.length);
  }

  private monitor(): void {
    if (this.state !== "listening") return;
    this.animFrame = requestAnimationFrame(() => this.monitor());
  }
}
