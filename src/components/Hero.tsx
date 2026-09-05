import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import {
  HERO_ANIMATED_SPHERE_VIDEO,
  HERO_ANIMATED_SPHERE_HLS,
  HERO_ANIMATED_SPHERE_POSTER,
} from '../data/portfolioData';

interface HeroProps {
  onSeeWorks: () => void;
  onReachOut: () => void;
  isLoaded: boolean;
}

interface RoleItem {
  article: 'A' | 'An';
  text: string;
}

const ROLES: RoleItem[] = [
  { article: 'A', text: 'Creative' },
  { article: 'An', text: 'AI expert' },
  { article: 'A', text: 'Storyteller' },
  { article: 'A', text: 'Content strategist' },
];

export default function Hero({ onSeeWorks, onReachOut, isLoaded }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState<number>(0);

  // Initialize Animated Sphere video (Local MP4 + HLS Fallback)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: Hls | null = null;

    // Ensure playback starts immediately
    const startPlayback = () => {
      video.play().catch(() => {
        // Fallback to HLS if needed
        if (Hls.isSupported()) {
          hlsInstance = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
          });
          hlsInstance.loadSource(HERO_ANIMATED_SPHERE_HLS);
          hlsInstance.attachMedia(video);
          hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {});
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = HERO_ANIMATED_SPHERE_HLS;
          video.addEventListener('loadedmetadata', () => {
            video.play().catch(() => {});
          });
        }
      });
    };

    if (video.readyState >= 2) {
      startPlayback();
    } else {
      video.addEventListener('canplay', startPlayback, { once: true });
      startPlayback();
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  // Role cycler every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance animation when isLoaded is true
  useEffect(() => {
    if (!isLoaded || !heroContainerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 },
        0.3
      );
    }, heroContainerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section
      id="home"
      ref={heroContainerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-bg text-center px-4 pt-20 pb-16"
    >
      {/* Background Video Layer: Animated Sphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_ANIMATED_SPHERE_POSTER}
          className="absolute top-1/2 left-1/2 w-[120vw] sm:w-[90vw] md:w-[75vw] lg:w-[65vw] max-w-[900px] h-auto aspect-[2/3] object-cover -translate-x-1/2 -translate-y-1/2 opacity-65 brightness-75 mix-blend-screen select-none transition-all duration-700"
          style={{
            maskImage: 'radial-gradient(ellipse 55% 52% at 50% 54%, black 45%, transparent 92%)',
            WebkitMaskImage: 'radial-gradient(ellipse 55% 52% at 50% 54%, black 45%, transparent 92%)',
          }}
        >
          <source src={HERO_ANIMATED_SPHERE_VIDEO} type="video/mp4" />
        </video>

        {/* Ambient atmospheric glow echoing the sphere's tones */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        {/* Dark overlay: maintains high contrast for typography */}
        <div className="absolute inset-0 bg-bg/50 backdrop-contrast-115" />

        {/* Bottom fade: seamless gradient transition into subsequent sections */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-bg via-bg/85 to-transparent" />

        {/* Top subtle vignette */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-bg/60 to-transparent" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto my-auto">
        {/* Eyebrow: text-xs text-muted uppercase tracking-[0.3em] mb-8 — "VISIONARY". Class blur-in */}
        <div className="blur-in text-xs text-muted uppercase tracking-[0.35em] mb-8 font-medium">
          VISIONARY
        </div>

        {/* Name: text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 — "Kay-net". Class name-reveal */}
        <h1 className="name-reveal text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 drop-shadow-sm select-none">
          Kay-net
        </h1>

        {/* Role line: "{A/An} {role} lives onchain." */}
        <div className="blur-in text-lg sm:text-xl md:text-2xl text-text-primary/90 font-light mb-6 flex items-center justify-center flex-wrap gap-2">
          <span>{ROLES[roleIndex].article}</span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary font-normal animate-role-fade-in inline-block border-b border-stroke/80 pb-0.5"
          >
            {ROLES[roleIndex].text}
          </span>
          <span>lives onchain.</span>
        </div>

        {/* Description: text-sm md:text-base text-muted max-w-md mb-12 */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12 font-normal leading-relaxed">
          Build your brand and let me tell your story.
        </p>

        {/* CTA Buttons (inline-flex gap-4) */}
        <div className="blur-in inline-flex flex-col sm:flex-row items-center gap-4">
          {/* "See Works": Solid button. Default: bg-text-primary text-bg. Hover: bg-bg text-text-primary with accent gradient border ring */}
          <button
            id="hero-see-works-cta"
            onClick={onSeeWorks}
            className="group relative rounded-full p-[2px] cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 block rounded-full bg-text-primary text-bg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 group-hover:bg-bg group-hover:text-text-primary">
              See Works
            </span>
          </button>

          {/* "Reach out...": Outlined button. Default: border-2 border-stroke bg-bg text-text-primary. Hover: border-transparent with accent gradient border ring */}
          <button
            id="hero-reach-out-cta"
            onClick={onReachOut}
            className="group relative rounded-full p-[2px] cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 block rounded-full border-2 border-stroke bg-bg/90 text-text-primary px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 group-hover:border-transparent group-hover:bg-bg">
              Reach out...
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator: Bottom-center, text-xs text-muted uppercase tracking-[0.2em] "SCROLL" label above a w-px h-10 bg-stroke line with animated highlight using .animate-scroll-down */}
      <button
        onClick={onSeeWorks}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer group focus:outline-none"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.25em] font-medium transition-colors duration-200 group-hover:text-text-primary">
          SCROLL
        </span>
        <div className="relative w-px h-10 bg-stroke/60 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </button>
    </section>
  );
}
