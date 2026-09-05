import { motion } from 'motion/react';
import { STATS } from '../data/portfolioData';

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24 border-t border-b border-stroke/80 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-stroke/80">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              id={`stat-block-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col md:px-8 lg:px-12 group"
            >
              {/* Stat number */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-display italic tracking-tight text-text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#89AACC] group-hover:to-[#4E85BF] transition-all duration-300">
                {stat.value}
              </div>

              {/* Stat label */}
              <div className="text-base sm:text-lg font-medium text-text-primary mt-3">
                {stat.label}
              </div>

              {/* Sublabel */}
              {stat.sublabel && (
                <div className="text-xs sm:text-sm text-muted mt-1 font-light">
                  {stat.sublabel}
                </div>
              )}

              {/* Bottom decorative bar */}
              <div className="w-8 h-[2px] bg-stroke group-hover:w-16 group-hover:bg-[#4E85BF] transition-all duration-500 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
