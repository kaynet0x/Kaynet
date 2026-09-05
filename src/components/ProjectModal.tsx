import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto"
          >
            {/* Header image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/40" />

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black transition-colors"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className={`${project.badge ? 'text-xs sm:text-sm text-text-primary/90 normal-case font-body' : 'text-xs uppercase tracking-[0.2em] text-muted font-mono'} block mb-1`}>
                  {project.badge || `${project.category} // ${project.year}`}
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-text-primary tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-2">
                  Overview
                </h4>
                <p className="text-base text-text-primary/90 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.deliverables && (
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-3">
                    Key Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full bg-stroke/60 text-text-primary font-mono border border-stroke"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.client && (
                <div className="flex items-center justify-between border-t border-stroke pt-4 text-xs text-muted">
                  <span>Client: <strong className="text-text-primary font-medium">{project.client}</strong></span>
                  <span>Year: <strong className="text-text-primary font-mono">{project.year}</strong></span>
                </div>
              )}

              <div className="pt-2 flex justify-end gap-3 flex-wrap">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-stroke text-xs text-text-primary hover:bg-stroke/40 transition-colors"
                >
                  Close
                </button>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-gradient text-bg px-6 py-2.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                  >
                    <span>{project.externalLink ? 'Read article on X' : 'Visit project'}</span>
                    <span>↗</span>
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={onClose}
                  className="rounded-full border border-stroke bg-surface px-6 py-2.5 text-xs font-medium text-text-primary hover:bg-stroke/40 transition-colors"
                >
                  Inquire about similar work ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
