import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GalleryGlobe from './components/GalleryGlobe';
import IntroScreen from './components/IntroScreen';
import LocationDetailsScreen from './components/LocationDetailsScreen';
import LoadingOverlay from './components/LoadingOverlay';

export default function App() {
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<{ image: string; location: string; info: string } | null>(null);
  const [isLoadingGlobe, setIsLoadingGlobe] = useState(false);

  return (
    <div className="w-full h-full relative bg-white overflow-hidden">
      {!userPhoto ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <IntroScreen onStart={(photo) => {
            setUserPhoto(photo);
            setIsLoadingGlobe(true);
          }} />
        </div>
      ) : (
        <>
          <AnimatePresence>
            {isLoadingGlobe && (
              <motion.div
                key="loading-overlay"
                className="absolute inset-0 z-40 bg-white"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <LoadingOverlay onComplete={() => setIsLoadingGlobe(false)} />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ scale: 1, opacity: 0 }}
            animate={
              isLoadingGlobe 
                ? { scale: 1, opacity: 0 } 
                : { scale: selectedCard ? 0.8 : 1, opacity: selectedCard ? 0.3 : 1 }
            }
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-0 ${selectedCard ? 'pointer-events-none' : ''}`}
          >
            <GalleryGlobe 
              userPhoto={userPhoto} 
              onSelect={(img, loc, info) => setSelectedCard({ image: img, location: loc, info: info })} 
            />
          </motion.div>

          <AnimatePresence>
            {selectedCard && (
              <LocationDetailsScreen 
                key="location-details"
                data={selectedCard} 
                onClose={() => setSelectedCard(null)} 
              />
            )}
          </AnimatePresence>

          {!isLoadingGlobe && !selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-8 left-0 right-0 flex justify-center z-30"
            >
              <button 
                onClick={() => setUserPhoto(null)}
                className="text-[10px] text-gray-400 hover:text-gray-900 tracking-widest uppercase transition-colors"
              >
                START OVER
              </button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
