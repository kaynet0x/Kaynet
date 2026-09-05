import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import gsap from 'gsap';
import { HLS_VIDEO_URL, EMAIL_CONTACT } from '../data/portfolioData';

export default function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Initialize flipped HLS video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: Hls | null = null;

    if (Hls.isSupported()) {
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hlsInstance.loadSource(HLS_VIDEO_URL);
      hlsInstance.attachMedia(video);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_VIDEO_URL;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  // GSAP Marquee animation: "BUILDING THE FUTURE • " repeated 10x, xPercent: -50, duration 40, ease "none", repeat -1
  useEffect(() => {
    if (!marqueeRef.current) return;

    const anim = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  const marqueeText = Array(10).fill('BUILDING YOUR DREAM PROJECT • ').join('');

  const handleCopyEmail = () => {
    // If user holds cmd/ctrl or wants to copy, copy it
    navigator.clipboard.writeText('kaynet0x@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const socialLinks = [
    { name: 'Twitter / X', url: 'https://x.com/_Kaynet' },
    { name: 'Discord', url: 'https://discordapp.com/users/1200161007381794845' },
    { name: 'Telegram', url: 'https://t.me/Kaynet0x' },
    { name: 'Substack', url: 'https://substack.com/@kaynet0x?r=6qytdr&utm_medium=ios&utm_source=stories&shareImageVariant=light' },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden text-text-primary"
    >
      {/* Background Video (Flipped vertically scale-y-[-1] with heavier overlay bg-black/60) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-60"
        />
        {/* Heavier overlay: bg-black/60 */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
        {/* Subtle top fade to blend smoothly with previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-stroke inline-block" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            Get In Touch
          </span>
          <span className="w-8 h-px bg-stroke inline-block" />
        </div>

        {/* Big Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic leading-[0.95] tracking-tight mb-8 max-w-3xl">
          Let's create something <span className="font-sans not-italic font-normal">extraordinary</span> together.
        </h2>

        {/* CTA: Email button with gradient hover border ring */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <a
            id="footer-email-cta"
            href={EMAIL_CONTACT}
            className="group relative rounded-full p-[2px] cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
          >
            {/* Gradient hover border ring */}
            <span
              className="absolute inset-[-3px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"
            />
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10 inline-flex items-center gap-3 rounded-full bg-surface border border-stroke px-8 py-4 text-sm sm:text-base font-medium text-text-primary backdrop-blur-md group-hover:border-transparent transition-all shadow-xl">
              <span>kaynet0x@gmail.com</span>
              <span className="text-sm font-sans transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="text-xs text-muted hover:text-text-primary transition-colors py-2 px-3 rounded-full hover:bg-stroke/40"
          >
            {copied ? '✓ Copied to clipboard!' : 'Copy address'}
          </button>
        </div>
      </div>

      {/* GSAP Marquee: "BUILDING THE FUTURE • " repeated 10x */}
      <div className="relative z-10 w-full overflow-hidden border-t border-b border-stroke/70 py-4 sm:py-6 my-10 bg-bg/50 backdrop-blur-sm">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex text-sm sm:text-lg md:text-xl font-mono uppercase tracking-[0.25em] text-muted/70 font-light select-none"
        >
          <span className="inline-block px-4">{marqueeText}</span>
          <span className="inline-block px-4">{marqueeText}</span>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-stroke/50 text-xs text-muted">
          {/* Status Indicator */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-text-primary/90 font-medium">Available for projects</span>
          </div>

          {/* Social links [Twitter, LinkedIn, Dribbble, GitHub] */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-mono text-[11px] text-muted/80">
            © {new Date().getFullYear()} Kay-net. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
