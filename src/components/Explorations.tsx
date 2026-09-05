import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExplorationItem } from '../types';
import { EXPLORATIONS } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

interface ExplorationsProps {
  onOpenLightbox: (item: ExplorationItem) => void;
}

export default function Explorations({ onOpenLightbox }: ExplorationsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the center content across the 300vh section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: contentRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pinSpacing: false,
      });

      // Parallax movement for Column 1
      if (col1Ref.current) {
        gsap.to(col1Ref.current, {
          y: -180,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });
      }

      // Parallax movement for Column 2 (faster/offset)
      if (col2Ref.current) {
        gsap.to(col2Ref.current, {
          y: -320,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.4,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const col1Items = [EXPLORATIONS[0], EXPLORATIONS[2], EXPLORATIONS[4]];
  const col2Items = [EXPLORATIONS[1], EXPLORATIONS[3], EXPLORATIONS[5]];

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-bg w-full overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[140px]" />
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={contentRef}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10"
      >
        <div className="max-w-xl mx-auto flex flex-col items-center">
          {/* Eyebrow: "Bounties & Contests" */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-stroke inline-block" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Contests & Bounties
            </span>
            <span className="w-6 h-px bg-stroke inline-block" />
          </div>

          {/* Heading: "Recognized *victories*" */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight mb-4">
            Recognized <span className="font-display italic font-normal text-white">victories</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-muted max-w-sm mb-8 font-light leading-relaxed">
            Proven track record across ecosystem hackathons, grant bounties, and global write-a-thons.
          </p>

          {/* X / Twitter profile button */}
          <div className="pointer-events-auto">
            <a
              href="https://x.com/_Kaynet"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center rounded-full p-[1px] cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-surface/90 border border-stroke px-6 py-2.5 text-xs text-text-primary backdrop-blur-md group-hover:border-transparent transition-all">
                <span>Follow on X</span>
                <span className="text-xs font-sans transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (z-20, absolute/relative over scroll) */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 pt-32 pb-48 pointer-events-none">
        <div className="grid grid-cols-2 gap-8 sm:gap-16 md:gap-32 lg:gap-48 items-start">
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-32 sm:gap-48 items-center sm:items-end">
            {col1Items.map((item) => (
              <div
                key={item.id}
                id={`exploration-${item.id}`}
                onClick={() => onOpenLightbox(item)}
                style={{
                  transform: `rotate(${item.rotation}deg)`,
                }}
                className="pointer-events-auto w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-stroke bg-surface cursor-pointer group shadow-2xl shadow-black/60 transition-all duration-500 hover:rotate-0 hover:scale-105 hover:border-white/30"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Card label on hover */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-xs text-text-primary group-hover:bg-white group-hover:text-black transition-colors">
                        ↗
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-widest block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-36 sm:gap-52 items-center sm:items-start pt-28 sm:pt-40">
            {col2Items.map((item) => (
              <div
                key={item.id}
                id={`exploration-${item.id}`}
                onClick={() => onOpenLightbox(item)}
                style={{
                  transform: `rotate(${item.rotation}deg)`,
                }}
                className="pointer-events-auto w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-stroke bg-surface cursor-pointer group shadow-2xl shadow-black/60 transition-all duration-500 hover:rotate-0 hover:scale-105 hover:border-white/30"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-70 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Card label on hover */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-xs text-text-primary group-hover:bg-white group-hover:text-black transition-colors">
                        ↗
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted font-mono uppercase tracking-widest block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
