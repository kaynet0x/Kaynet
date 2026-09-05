import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
  onViewAllWork: () => void;
}

export default function SelectedWorks({
  onSelectProject,
  onViewAllWork
}: SelectedWorksProps) {
  return (
    <section
      id="work"
      className="bg-bg py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header with Motion whileInView */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow: w-8 h-px bg-stroke + "Selected Work" text-xs text-muted uppercase tracking-[0.3em] */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke inline-block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading: "Featured *projects*" — italic word in font-display italic */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary tracking-tight">
              Featured <span className="font-display italic font-normal text-white">projects</span>
            </h2>
          </div>

          {/* "View all work" button (desktop only, hidden md:inline-flex) */}
          <div className="hidden md:inline-flex">
            <button
              id="view-all-work-btn"
              onClick={onViewAllWork}
              className="group relative rounded-full p-[1px] cursor-pointer transition-transform duration-200 hover:scale-105 focus:outline-none"
            >
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-surface border border-stroke px-5 py-2.5 text-xs text-text-primary backdrop-blur-md group-hover:border-transparent transition-all">
                <span>View all work</span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Bento Grid: grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 with column spans alternating 7/5/5/7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => {
            const spanClass = project.colSpan === 7 ? 'md:col-span-7' : 'md:col-span-5';
            const aspectClass = project.colSpan === 7 ? 'aspect-[16/10]' : 'aspect-[4/3]';

            const handleClick = () => {
              if (project.externalLink && project.link) {
                window.open(project.link, '_blank', 'noopener,noreferrer');
              } else {
                onSelectProject(project);
              }
            };

            return (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={handleClick}
                className={`${spanClass} group relative bg-surface border border-stroke rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-black/20 ${aspectClass}`}
              >
                {/* Background image with object-cover group-hover:scale-105 */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />

                {/* Halftone overlay: radial-gradient(circle, #000 1px, transparent 1px) at 4x4px, opacity-20 mix-blend-multiply */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply halftone-overlay"
                />

                {/* Base Card Label visible at bottom left when not hovered */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                  <div className={`${project.badge ? 'text-xs sm:text-sm text-text-primary/90 font-medium tracking-normal normal-case font-body line-clamp-2' : 'text-[11px] text-muted tracking-widest uppercase font-mono'} mb-1`}>
                    {project.badge || `${project.category} // ${project.year}`}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Hover overlay: bg-bg/70 opacity-0→1 + backdrop-blur-lg */}
                <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-300 flex flex-col justify-between p-6 sm:p-8">
                  {/* Top info badge */}
                  <div className="flex justify-between items-start gap-4">
                    <span className={`${project.badge ? 'text-xs text-text-primary/90 normal-case font-medium font-body line-clamp-2' : 'text-xs uppercase tracking-[0.2em] text-muted font-mono'}`}>
                      {project.badge || project.category}
                    </span>
                    {!project.badge && (
                      <span className="text-xs text-text-primary/70 font-mono px-2.5 py-1 rounded-full bg-stroke/60 shrink-0">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Centered Hover label: pill with animated gradient border, white bg, "View — Title" (title in font-display italic) */}
                  <div className="my-auto self-center">
                    <div className="relative rounded-full p-[1.5px] shadow-2xl accent-gradient-animated">
                      <div className="rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-bg font-medium text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap shadow-inner">
                        <span>{project.externalLink ? 'View on X —' : 'View —'}</span>
                        <span className="font-display italic text-sm sm:text-base font-bold text-black">
                          {project.title}
                        </span>
                        <span className="text-xs ml-0.5">↗</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom teaser description */}
                  <div className="text-xs text-muted max-w-sm line-clamp-2 font-light">
                    {project.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All button */}
        <div className="mt-8 flex justify-center md:hidden">
          <button
            onClick={onViewAllWork}
            className="rounded-full border border-stroke bg-surface px-6 py-3 text-xs text-text-primary flex items-center gap-2"
          >
            <span>View all 4 projects</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
