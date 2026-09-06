import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  onOpenResume,
  onOpenContact,
  theme,
  onToggleTheme
}: NavbarProps) {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Work', target: 'work' },
    { label: 'Resume', target: 'resume' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        id="main-navigation"
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-all duration-300 ${
          hasScrolled ? 'shadow-md shadow-black/40 border-white/15 bg-surface/95' : ''
        }`}
      >
        {/* Logo: 9x9 circle with accent gradient border (reverses direction on hover). Inner bg-bg circle with "KN" in font-display italic text-[13px]. Scales 110% on hover */}
        <button
          id="nav-logo-button"
          onClick={() => onNavigate('home')}
          aria-label="Kay-net Home"
          className="group relative flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full p-[1.5px] transition-all duration-500 accent-gradient group-hover:bg-[linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]">
            <div className="w-full h-full rounded-full bg-bg overflow-hidden flex items-center justify-center">
              <img
                src="/assets/kaynet-brand.jpg"
                alt="Kay-net Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </button>

        {/* Divider (hidden on mobile) */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1.5" />

        {/* Nav Links: ["Home", "Work", "Resume"] */}
        <div className="flex items-center gap-1 mx-1">
          {navLinks.map((item) => {
            const isActive = activeSection.toLowerCase() === item.target.toLowerCase();
            return (
              <button
                key={item.label}
                id={`nav-link-${item.target}`}
                onClick={() => {
                  if (item.target === 'resume') {
                    onOpenResume();
                  } else {
                    onNavigate(item.target);
                  }
                }}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-text-primary bg-stroke/50'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1.5" />

        {/* "Say hi" button: Same size as nav links. On hover, shows accent gradient border behind (using absolute span with inset: -2px). Inner content wrapped in bg-surface rounded-full backdrop-blur-md. Includes "↗" arrow */}
        <button
          id="nav-say-hi-button"
          onClick={onOpenContact}
          className="group relative inline-flex items-center justify-center rounded-full text-xs sm:text-sm cursor-pointer p-[2px] transition-transform duration-200 hover:scale-105 focus:outline-none"
        >
          {/* Accent gradient border on hover */}
          <span
            className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            style={{
              filter: 'blur(2px)'
            }}
          />
          <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-surface px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary backdrop-blur-md transition-colors duration-200 group-hover:bg-surface/90">
            <span>Say hi</span>
            <span className="text-[11px] font-sans transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </button>

        <button
          id="nav-theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-sm text-text-primary transition-colors hover:bg-stroke/50 focus:outline-none"
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
      </nav>
    </header>
  );
}
