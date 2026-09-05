import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Partner {
  name: string;
  logo: string;
  tag?: string;
}

const PARTNERS: Partner[] = [
  { name: 'Seedifyfund', logo: '/assets/logos/seedify.png' },
  { name: 'Tacbuild', logo: '/assets/logos/tacbuild.png' },
  { name: 'Fogo', logo: '/assets/logos/fogo.png' },
  { name: 'Mantle', logo: '/assets/logos/mantle.png' },
  { name: 'Scribble dao', logo: '/assets/logos/scribbledao.jpg' },
];

export default function EcosystemMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth continuous infinite marquee animation moving leftwards (entering from right)
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  // Repeat the list to ensure completely seamless infinite scrolling
  const repeatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full overflow-hidden border-t border-b border-stroke/70 py-6 sm:py-8 mt-24 sm:mt-28 md:mt-32 -mb-2 bg-surface/20 backdrop-blur-md">
      {/* Side Fade Gradients for smooth entrance/exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg to-transparent z-10" />

      {/* Marquee Track */}
      <div
        ref={marqueeRef}
        className="flex items-center whitespace-nowrap will-change-transform select-none w-max"
      >
        {/* First Half */}
        <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 shrink-0">
          {repeatedPartners.map((partner, index) => (
            <div
              key={`p1-${partner.name}-${index}`}
              className="flex items-center gap-3 sm:gap-4 group cursor-default"
            >
              {/* Logo icon frame */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black/40 p-1.5 flex items-center justify-center shrink-0 shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110 group-hover:border-white/30">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg filter brightness-95 group-hover:brightness-110 transition-all"
                />
              </div>

              {/* Project name */}
              <span className="text-sm sm:text-base md:text-lg font-medium text-text-primary/90 tracking-tight group-hover:text-white transition-colors">
                {partner.name}
              </span>

              {/* Glowing diamond separator */}
              <span className="text-[10px] sm:text-xs text-muted/40 font-mono pl-4 sm:pl-8">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Second Half (Exact clone for -50% seamless loop) */}
        <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 shrink-0">
          {repeatedPartners.map((partner, index) => (
            <div
              key={`p2-${partner.name}-${index}`}
              className="flex items-center gap-3 sm:gap-4 group cursor-default"
            >
              {/* Logo icon frame */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black/40 p-1.5 flex items-center justify-center shrink-0 shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-110 group-hover:border-white/30">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg filter brightness-95 group-hover:brightness-110 transition-all"
                />
              </div>

              {/* Project name */}
              <span className="text-sm sm:text-base md:text-lg font-medium text-text-primary/90 tracking-tight group-hover:text-white transition-colors">
                {partner.name}
              </span>

              {/* Glowing diamond separator */}
              <span className="text-[10px] sm:text-xs text-muted/40 font-mono pl-4 sm:pl-8">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
