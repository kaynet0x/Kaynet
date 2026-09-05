import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ['Build', 'Create', 'Ship'];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);

  // Counter using requestAnimationFrame over 2700ms
  useEffect(() => {
    let animationFrameId: number;
    const duration = 2700; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth ease-out curve for natural loading feel
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        // 400ms delay then call onComplete
        setTimeout(() => {
          setIsFinishing(true);
          setTimeout(() => {
            onComplete();
          }, 500); // fade out duration
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  // Rotate words every 900ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinishing ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none pointer-events-auto"
    >
      {/* Top Bar with Top-Left label */}
      <div className="flex items-center justify-between w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-xs text-muted uppercase tracking-[0.3em] font-medium"
        >
          Kaynet's Portfolio
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs text-muted font-mono tracking-widest hidden sm:block"
        >
          EDITION // 2026
        </motion.div>
      </div>

      {/* Center Rotating Words */}
      <div className="flex items-center justify-center relative my-auto h-28 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 tracking-wide text-center"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Area: Counter display and progress bar */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex justify-end items-baseline w-full">
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none tracking-tighter">
            {String(count).padStart(3, '0')}
          </div>
        </div>

        {/* Bottom progress bar */}
        <div className="w-full h-[3px] bg-stroke/50 relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 bottom-0 w-full accent-gradient origin-left transition-transform duration-75"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 10px rgba(137, 170, 204, 0.45)'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
