import { useState, useEffect } from 'react';
import { X, Loader2, AlertCircle } from 'lucide-react';
import Markdown from 'react-markdown';
import { motion } from 'motion/react';

interface LocationDetailsProps {
  data: { image: string; location: string; info: string };
  onClose: () => void;
}

export default function LocationDetailsScreen({ data, onClose }: LocationDetailsProps) {
  const info = data.info;
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let pollInterval: any = null;

    const generateVideo = async () => {
      setIsVideoLoading(true);
      setVideoError(false);
      try {
        const response = await fetch('/api/generate-video', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            imageBase64: data.image,
            prompt: `A beautiful cinematic panning video of ${data.location}`
          })
        });
        const result = await response.json();
        
        if (!result.success || !result.fileId) {
          throw new Error('Failed to start video generation');
        }

        const fileId = result.fileId;

        pollInterval = setInterval(async () => {
          try {
            const statusRes = await fetch('/api/video-status', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ fileId })
            });
            const statusResult = await statusRes.json();

            if (statusResult.done && isMounted) {
              clearInterval(pollInterval);
              setVideoUrl(`/api/video-download?fileId=${encodeURIComponent(fileId)}`);
              setIsVideoLoading(false);
            }
          } catch(e) {
            console.error("Polling error", e);
            if (isMounted) {
               setVideoError(true);
               setIsVideoLoading(false);
               clearInterval(pollInterval);
            }
          }
        }, 5000);
      } catch (e) {
        console.error("Video generation error:", e);
        if (isMounted) {
          setVideoError(true);
          setIsVideoLoading(false);
        }
      }
    };

    if (data.image && data.image.startsWith('data:image')) {
      generateVideo();
    }

    return () => {
      isMounted = false;
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [data.image, data.location]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-50 flex items-center justify-center p-6 sm:p-12"
    >
      {/* Background click listener */}
      <div className="absolute inset-0 bg-transparent" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white shadow-[0_0_80px_rgba(0,0,0,0.15)] flex flex-col md:flex-row w-full max-w-6xl h-full max-h-[800px] relative rounded-none z-10 overflow-hidden"
      >
        
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 p-3 bg-white hover:bg-gray-100 transition-colors z-20 shadow-sm border border-gray-200 rounded-full flex items-center justify-center"
        >
          <X className="w-6 h-6 text-gray-900" />
        </button>

        <div className="hidden md:block w-full md:w-[45%] h-[40vh] md:h-full bg-gray-100 flex-shrink-0 relative overflow-hidden group">
          {videoUrl ? (
            <video 
              src={videoUrl} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover" 
            />
          ) : (
            <>
              <img 
                src={data.image} 
                alt={data.location} 
                className="w-full h-full object-cover transition-transform duration-[20s] ease-linear hover:scale-110" 
              />
              {videoError && (
                 <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                  <AlertCircle className="w-8 h-8 mb-4 text-red-400" />
                  <p className="font-sans font-medium tracking-tight text-sm text-center px-6">Unable to generate video for this location.</p>
                </div>
              )}
            </>
          )}
        </div>

        <div className="w-full h-full md:w-[55%] flex flex-col p-6 sm:p-8 md:p-16 overflow-y-auto bg-white justify-center">
          <div className="font-sans text-gray-600 text-base md:text-lg space-y-6 [&>h1]:text-3xl [&>h1]:md:text-5xl [&>h1]:font-bold [&>h1]:tracking-tighter [&>h1]:text-gray-900 [&>h1]:mb-8 [&>h1]:leading-tight [&>h1]:break-words [&>h1]:text-balance [&>p]:leading-relaxed [&>p]:mb-4">
            <Markdown>{info.split('\n').find(l => l.trim().startsWith('#')) || `# ${data.location}`}</Markdown>
            
            {videoUrl ? (
              <Markdown>{info.split('\n').filter(l => !l.trim().startsWith('#')).join('\n')}</Markdown>
            ) : (
              <div className="space-y-6 w-full flex flex-col justify-center mt-8">
                <div className="h-4 bg-gray-200 w-full rounded-sm"></div>
                <div className="h-4 bg-gray-200 w-11/12 rounded-sm"></div>
                <div className="h-4 bg-gray-200 w-10/12 rounded-sm"></div>
                <div className="h-4 bg-gray-200 w-full rounded-sm mt-4"></div>
                <div className="h-4 bg-gray-200 w-9/12 rounded-sm"></div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
