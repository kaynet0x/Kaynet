import { motion, AnimatePresence } from 'motion/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const experiences = [
    {
      role: 'Content Partner & Strategist',
      company: 'SeedifyFund & 5+ Web3 Projects',
      period: 'Past Project',
      description: 'Worked as a content partner for 5+ tier-1 Web3 projects (including @SeedifyFund), driving ecosystem narrative and high-converting educational content.'
    },
    {
      role: 'Web3 Ghostwriter',
      company: '10+ Web3 Protocols & Top KOLs',
      period: 'Past Project',
      description: 'Worked as an executive ghostwriter for 10+ prominent Web3 projects and industry KOLs, producing viral breakdown threads and editorial research.'
    },
    {
      role: 'Core Contributor & Bounty Winner',
      company: 'Scribble DAO',
      period: 'Core Contributor',
      description: 'Achieved 18+ Write-a-thon wins on @scribble_dao as part of the core network, dominating leaderboards across multiple ecosystem bounties.'
    },
    {
      role: 'Ecosystem Ambassador',
      company: 'Join_Zo & WizzHQ',
      period: 'Past Ambassador',
      description: 'Worked as an Ambassador for @Join_Zo (Web3 chat app for crypto enthusiasts) and @WizzHq (Web3 DAO hosting bounties and marketing).'
    },
    {
      role: 'Editorial Researcher',
      company: 'Web3Nigeria',
      period: 'Editorial Contributor',
      description: 'Part of the official article and technical writing team for @Web3Nigeria.'
    }
  ];

  const highlights = [
    '30+ Thread contest & bounty wins',
    '18+ Write-a-thon victories on Scribble DAO',
    'Ghostwriter for 10+ Web3 projects & KOLs',
    'Content partner for 5+ Web3 projects including SeedifyFund',
    'Top 300 TAC Contributor (108K+ tokens)',
    '1st Place Winner, Lista DAO global writing contest'
  ];

  const education = [
    { school: 'DTCSI Academy', year: '2023', focus: 'Blockchain Architecture & Web3 Systems' },
    { school: 'Nirvana Academy & Rebirth 1.0', year: '2022 — 2023', focus: 'Brand Scaling, Growth Strategy & Content' }
  ];

  const expertise = [
    'Growth Strategy',
    'Community Management',
    'Technical Ghostwriting',
    'Ecosystem Research',
    'Campaign Strategy',
    'Social Marketing'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[88vh] flex flex-col my-auto"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-stroke flex items-start justify-between bg-surface/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-black/40">
                  <img
                    src="/assets/kaynet-brand.jpg"
                    alt="Kay-net"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs uppercase tracking-widest font-mono text-muted">
                      Curriculum Vitae
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary">
                    Kay-net
                  </h3>
                  <p className="text-xs text-text-primary/80 font-light mt-0.5">
                    "I craft compelling contents to elevate solid projects"
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close resume modal"
                className="w-8 h-8 rounded-full bg-stroke/60 hover:bg-stroke flex items-center justify-center text-white/80 hover:text-white shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              {/* About summary */}
              <div className="bg-surface/50 border border-stroke/60 rounded-2xl p-5 text-xs sm:text-sm text-text-primary/90 font-light leading-relaxed">
                Talented, experienced, and hardworking Web3 growth strategist and content partner. Armed with deep knowledge of blockchain mechanics, narrative engineering, and community psychology to help visionary projects scale and command attention in competitive markets.
              </div>

              {/* Key Achievements */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-muted font-mono mb-3">
                  Key Achievements & Track Record
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="text-xs px-3.5 py-2.5 rounded-xl bg-stroke/30 border border-stroke/50 text-text-primary flex items-center gap-2"
                    >
                      <span className="text-accent text-[11px]">✦</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-muted font-mono mb-4">
                  Selected Work History
                </h4>
                <div className="space-y-5">
                  {experiences.map((exp, i) => (
                    <div key={i} className="border-l-2 border-accent/40 pl-4 relative">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h5 className="text-sm sm:text-base font-medium text-text-primary">
                          {exp.role} <span className="text-muted font-light">@ {exp.company}</span>
                        </h5>
                        <span className="text-xs font-mono text-muted/70">{exp.period}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-muted font-mono mb-3">
                  Education & Training
                </h4>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-stroke/20 border border-stroke/40 text-xs"
                    >
                      <span className="font-medium text-text-primary">{edu.school}</span>
                      <div className="flex items-center gap-3 text-muted font-mono text-[11px] mt-1 sm:mt-0">
                        <span>{edu.focus}</span>
                        <span>•</span>
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expertise & Skills */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.25em] text-muted font-mono mb-3">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-stroke/40 border border-stroke text-text-primary/90 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Channels */}
              <div className="border-t border-stroke pt-6">
                <h4 className="text-xs uppercase tracking-[0.25em] text-muted font-mono mb-3">
                  Direct Verification & Contact
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <a
                    href="https://t.me/kaynet0x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-stroke/30 hover:bg-stroke/60 border border-stroke text-center text-text-primary transition-colors"
                  >
                    TG: @kaynet0x
                  </a>
                  <a
                    href="https://x.com/_Kaynet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-stroke/30 hover:bg-stroke/60 border border-stroke text-center text-text-primary transition-colors"
                  >
                    X: @_Kaynet
                  </a>
                  <div className="p-2.5 rounded-xl bg-stroke/30 border border-stroke text-center text-text-primary">
                    Discord: kaynet0x
                  </div>
                  <a
                    href="mailto:kaynet0x@gmail.com"
                    className="p-2.5 rounded-xl bg-stroke/30 hover:bg-stroke/60 border border-stroke text-center text-text-primary transition-colors truncate"
                  >
                    kaynet0x@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="p-6 border-t border-stroke bg-bg/60 flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-stroke text-xs text-text-primary hover:bg-stroke/40 transition-colors"
              >
                Close
              </button>
              <a
                href="mailto:kaynet0x@gmail.com?subject=Inquiry%20from%20Portfolio"
                className="accent-gradient text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Reach Out ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
