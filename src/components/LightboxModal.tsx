import { motion, AnimatePresence } from 'motion/react';
import { ExplorationItem } from '../types';

interface LightboxModalProps {
  item: ExplorationItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-2xl w-full bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted font-mono uppercase tracking-widest">
                  {item.category}
                </span>
                <span className="text-xs text-muted font-mono">
                  Contests & Bounties
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex justify-between items-center pt-3 border-t border-stroke/70">
                <span className="text-xs text-muted font-mono">
                  Recognized Contributor
                </span>
                <div className="flex items-center gap-3">
                  {item.externalLink && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-text-primary transition-colors inline-flex items-center gap-1.5"
                    >
                      View on X <span className="text-sm">↗</span>
                    </a>
                  )}
                  <button
                    onClick={onClose}
                    className="px-5 py-2 rounded-full bg-stroke/60 hover:bg-stroke text-xs text-text-primary transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
