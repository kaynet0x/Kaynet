import { motion } from 'motion/react';
import { JournalEntry } from '../types';
import { JOURNAL_ENTRIES } from '../data/portfolioData';

interface JournalProps {
  onSelectArticle: (entry: JournalEntry) => void;
}

export default function Journal({ onSelectArticle }: JournalProps) {
  return (
    <section id="journal" className="bg-bg pt-16 md:pt-24 pb-10 md:pb-14 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Same header pattern: eyebrow + "Recent thoughts" + subtext + "View all" button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke inline-block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Research & Breakdowns
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary tracking-tight">
              Recent <span className="font-display italic font-normal text-white">ecosystem/projects articles</span>
            </h2>

            <p className="text-sm md:text-base text-muted mt-3 max-w-lg font-light">
              Deep-dive breakdowns on cutting-edge Web3 protocols, token distribution, and decentralized architecture.
            </p>
          </div>

          <div className="hidden md:inline-flex">
            <a
              id="view-all-journal-btn"
              href="https://x.com/_Kaynet"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full p-[1px] cursor-pointer transition-transform duration-200 hover:scale-105 focus:outline-none"
            >
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-surface border border-stroke px-5 py-2.5 text-xs text-text-primary backdrop-blur-md group-hover:border-transparent transition-all">
                <span>View all on X</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-sans">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* 5 journal entries displayed as horizontal pills */}
        <div className="flex flex-col gap-4">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <motion.article
              key={entry.id}
              id={`journal-pill-${entry.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => {
                if (entry.link) {
                  window.open(entry.link, '_blank', 'noopener,noreferrer');
                } else {
                  onSelectArticle(entry);
                }
              }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-3 sm:p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-2xl sm:rounded-full transition-all duration-300 cursor-pointer hover:border-white/20 hover:shadow-lg hover:shadow-black/30"
            >
              {/* Left: Thumbnail and Title */}
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border border-stroke/70 relative bg-black/40">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity" />
                </div>

                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs text-muted font-mono uppercase tracking-wider">
                      {entry.category}
                    </span>
                    <span className="text-muted/40 text-xs">•</span>
                    <span className="text-[10px] sm:text-xs text-muted/80 font-mono">
                      {entry.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-text-primary group-hover:text-white transition-colors truncate">
                    {entry.title}
                  </h3>
                </div>
              </div>

              {/* Right: Read Article indicator & Arrow Pill */}
              <div className="flex items-center justify-between sm:justify-end gap-3 px-2 sm:px-4 shrink-0">
                <span className="text-xs text-muted font-mono hidden md:inline-block">
                  Read on X
                </span>

                <div className="w-9 h-9 rounded-full bg-stroke/50 group-hover:bg-text-primary flex items-center justify-center transition-colors duration-300 shrink-0">
                  <span className="text-xs text-text-primary group-hover:text-bg transition-colors duration-300 font-sans">
                    ↗
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
