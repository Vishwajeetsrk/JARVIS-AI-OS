import { Camera, Upload, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

declare global {
  interface Window {
    aistudio?: {
      openSelectKey?: () => Promise<boolean | void>;
    };
  }
}

interface IntroScreenProps {
  onStart: (photoBase64: string) => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [useCamera, setUseCamera] = useState(false);
  const [hasLinkedKey, setHasLinkedKey] = useState(false);

  const handleStart = async (url: string) => {
    // if (!hasLinkedKey) {
    //   if (window.aistudio && window.aistudio.openSelectKey) {
    //     const success = await window.aistudio.openSelectKey();
    //     if (success !== false) {
    //       setHasLinkedKey(true);
    //       onStart(url);
    //     }
    //     return;
    //   }
    // }
    onStart(url);
  };

  const startCamera = async () => {
    try {
      setUseCamera(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (e) {
      console.error("Camera access denied", e);
      setUseCamera(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const w = videoRef.current.videoWidth;
      const h = videoRef.current.videoHeight;
      canvasRef.current.width = w;
      canvasRef.current.height = h;
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, w, h);
        const dataUrl = canvasRef.current.toDataURL('image/jpeg');
        setPreviewUrl(dataUrl);
        stopCamera();
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setUseCamera(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const loadTestImage = async () => {
    try {
      const res = await fetch('/new-test.png');
      const blob = await res.blob();
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(blob);
    } catch (err) {
      console.error('Failed to load test image', err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full max-w-md mx-auto p-6 font-sans text-center overflow-y-auto">
      <div className="flex-grow flex-shrink-0 flex flex-col items-center justify-center w-full py-4">
        <h1 className={`text-[55px] font-bold font-display tracking-tight mb-2 text-gray-900 leading-none ${useCamera ? 'hidden' : previewUrl ? 'hidden md:block' : ''}`}>anywhere</h1>
        <p className={`text-sm text-gray-500 mb-8 lowercase tracking-wide ${useCamera ? 'hidden' : previewUrl ? 'hidden md:block' : ''}`}>add your photos and visualize yourself anywhere</p>
        
        {!previewUrl && !useCamera && (
        <div className="flex flex-col gap-4 w-full">
          <button 
            onClick={startCamera}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 border border-solid border-gray-900 text-gray-900 bg-white hover:bg-gray-50 transition-colors uppercase tracking-widest text-sm font-medium rounded-none"
          >
            <Camera className="w-5 h-5" />
            Click a photo
          </button>
          
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 border border-solid border-gray-900 text-gray-900 bg-white hover:bg-gray-50 transition-colors uppercase tracking-widest text-sm font-medium rounded-none"
          >
            <Upload className="w-5 h-5" />
            Upload a photo
          </button>
          
          <p className="mt-2 text-[10px] text-gray-400 text-center w-full">
            By using this feature, you confirm that you have the necessary rights to any content that you upload. Do not generate content that infringes on others’ intellectual property or privacy rights. Your use of this generative AI service is subject to our <a href="https://policies.google.com/terms/generative-ai/use-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">Prohibited Use Policy</a>.
            <br /><br />
            Please note that uploads from Google Workspace may be used to develop and improve Google products and services in accordance with our <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">terms</a>.
          </p>
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
          />
        </div>
      )}

      {useCamera && !previewUrl && (
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="relative w-full aspect-[3/4] max-h-[50vh] bg-gray-100 border border-gray-900 overflow-hidden rounded-none">
            <video ref={videoRef} className="object-cover w-full h-full" playsInline muted />
          </div>
          <button 
            onClick={takePhoto}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 border border-solid border-gray-900 text-white bg-gray-900 hover:bg-black transition-colors uppercase tracking-widest text-sm font-medium rounded-none"
          >
            <Camera className="w-5 h-5" />
            Capture Shape
          </button>
          <button 
            onClick={stopCamera}
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 mt-2"
          >
            Cancel
          </button>
        </div>
      )}

      {previewUrl && (
        <div className="flex flex-col items-center gap-6 w-full animate-in fade-in zoom-in duration-500">
          <div className="w-48 aspect-[3/4] border border-gray-900 rounded-none overflow-hidden bg-gray-100">
            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
          </div>
          
          <button 
            onClick={() => handleStart(previewUrl)}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 border border-solid border-gray-900 text-white bg-gray-900 hover:bg-black transition-colors uppercase tracking-widest text-sm font-medium rounded-none"
          >
            Let's go
            <ArrowRight className="w-5 h-5" />
          </button>

          <button 
            onClick={() => setPreviewUrl(null)}
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900"
          >
            Start over
          </button>
        </div>
      )}

      </div>

      <canvas ref={canvasRef} className="hidden" />

      {previewUrl && (
        <p className="mt-auto pt-8 text-[10px] text-gray-400 text-center w-full max-w-sm hidden md:block">
          By using this feature, you confirm that you have the necessary rights to any content that you upload. Do not generate content that infringes on others’ intellectual property or privacy rights. Your use of this generative AI service is subject to our <a href="https://policies.google.com/terms/generative-ai/use-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">Prohibited Use Policy</a>.
          <br /><br />
          Please note that uploads from Google Workspace may be used to develop and improve Google products and services in accordance with our <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">terms</a>.
        </p>
      )}
    </div>
  );
}
