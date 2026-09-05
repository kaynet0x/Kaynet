import { motion, AnimatePresence } from 'motion/react';
import { JournalEntry } from '../types';

interface JournalModalProps {
  entry: JournalEntry | null;
  onClose: () => void;
}

export default function JournalModal({ entry, onClose }: JournalModalProps) {
  return (
    <AnimatePresence>
      {entry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col my-auto"
          >
            <div className="relative h-52 sm:h-64 w-full overflow-hidden shrink-0">
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30" />
              <button
                onClick={onClose}
                aria-label="Close article"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-muted">
                    {entry.category}
                  </span>
                  <span className="text-muted/40 text-xs">•</span>
                  <span className="text-[11px] font-mono text-muted/80">
                    {entry.readTime}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                  {entry.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm sm:text-base text-text-primary/85 leading-relaxed font-light">
              <p className="text-text-primary font-normal text-base sm:text-lg">
                {entry.excerpt}
              </p>
              <p>
                In an era dominated by high-cadence production and disposable UI patterns, the tactile resonance of purposeful design becomes paramount. The friction between digital geometry and organic motion is where genuine emotional connections form.
              </p>
              <p>
                When building systems that live on the Internet, we must continually ask whether every cubic pixel earned its place. Typography choices like pairing structural sans-serifs with italic serifs ground the interface in editorial traditions while propelling it forward.
              </p>
              <div className="pt-4 border-t border-stroke flex items-center justify-between text-xs text-muted font-mono">
                {entry.link ? (
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full accent-gradient text-white font-medium text-xs hover:opacity-90 transition-opacity"
                  >
                    <span>Read on X</span>
                    <span className="font-sans">↗</span>
                  </a>
                ) : (
                  <span>Published {entry.date}</span>
                )}
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full bg-stroke/60 hover:bg-stroke text-text-primary transition-colors font-sans text-xs"
                >
                  Done reading
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
