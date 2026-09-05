import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-label',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-label',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.about-para',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-text-col',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.about-image-col',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-image-col',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="about-label inline-flex items-center gap-2 mb-10 md:mb-14">
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-medium">about</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div className="about-text-col space-y-6 max-w-2xl">
            <p className="about-para text-xl md:text-2xl lg:text-[1.6rem] leading-[1.55] text-text-primary/90 font-light">
              i'm an{' '}
              <strong className="font-semibold text-text-primary">
                ai and crypto content creator
              </strong>{' '}
              focused on making emerging technology accessible.
            </p>

            <p className="about-para text-base md:text-lg leading-relaxed text-text-primary/75 font-light">
              i break down complex topics across{' '}
              <strong className="font-medium text-text-primary/95">
                artificial intelligence, crypto, defi, and on-chain infrastructure
              </strong>{' '}
              into clear, engaging content that educates, informs, and sparks conversations.
            </p>

            <p className="about-para text-base md:text-lg leading-relaxed text-text-primary/75 font-light">
              over the past two years, i've collaborated with{' '}
              <strong className="font-medium text-text-primary/95">
                ai startups, defi protocols, and blockchain projects
              </strong>{' '}
              through content strategy, sponsored campaigns, ghostwriting, and social media
              marketing.
            </p>

            <div className="about-para pt-2">
              <div className="w-16 h-px bg-gradient-to-r from-accent/60 to-transparent" />
            </div>

            <div className="about-para flex flex-wrap gap-4 pt-1">
              {[
                { label: 'Craft', value: 'Content & Strategy' },
                { label: 'Stack', value: 'AI · Crypto · DeFi' },
                { label: 'Status', value: 'Available for collabs' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-0.5 border border-stroke/40 rounded-xl px-4 py-3 bg-white/[0.02] backdrop-blur-sm"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm text-text-primary font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-col flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-2xl accent-gradient opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
              <div className="relative w-[220px] sm:w-[260px] lg:w-[290px] aspect-square rounded-2xl overflow-hidden border border-stroke/30 shadow-2xl">
                <img
                  src="/assets/about-brand.jpg"
                  alt="Kay-net brand portrait"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-bg border border-stroke/40 rounded-full px-4 py-1.5 text-xs text-muted tracking-wide whitespace-nowrap shadow-lg">
                Kay-net · lives onchain
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
