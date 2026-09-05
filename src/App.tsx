/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import SelectedWorks from './components/SelectedWorks';
import Journal from './components/Journal';
import EcosystemMarquee from './components/EcosystemMarquee';
import Explorations from './components/Explorations';
import Stats from './components/Stats';
import ContactFooter from './components/ContactFooter';
import ProjectModal from './components/ProjectModal';
import LightboxModal from './components/LightboxModal';
import JournalModal from './components/JournalModal';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';
import { Project, JournalEntry, ExplorationItem } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedJournal, setSelectedJournal] = useState<JournalEntry | null>(null);
  const [selectedExploration, setSelectedExploration] = useState<ExplorationItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const workEl = document.getElementById('work');
      const journalEl = document.getElementById('journal');
      const explorationsEl = document.getElementById('explorations');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (explorationsEl && scrollPosition >= explorationsEl.offsetTop) {
        setActiveSection('explorations');
      } else if (journalEl && scrollPosition >= journalEl.offsetTop) {
        setActiveSection('journal');
      } else if (workEl && scrollPosition >= workEl.offsetTop) {
        setActiveSection('work');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (target: string) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white font-body relative">
      {/* Section 1: Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Floating Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main>
        {/* Section 2: Hero */}
        <Hero
          onSeeWorks={() => handleNavigate('work')}
          onReachOut={() => setIsContactOpen(true)}
          isLoaded={!isLoading}
        />

        {/* Section 3: About Me */}
        <AboutMe />

        {/* Section 4: Selected Works */}
        <SelectedWorks
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllWork={() => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 4: Journal (Recent ecosystem/projects articles) */}
        <Journal
          onSelectArticle={(entry) => setSelectedJournal(entry)}
        />

        {/* Ecosystem Partners Marquee */}
        <EcosystemMarquee />

        {/* Section 5: Explorations (Recognized victories) */}
        <Explorations
          onOpenLightbox={(item) => setSelectedExploration(item)}
        />

        {/* Section 6: Stats */}
        <Stats />

        {/* Section 7: Contact / Footer */}
        <ContactFooter />
      </main>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <LightboxModal
        item={selectedExploration}
        onClose={() => setSelectedExploration(null)}
      />

      <JournalModal
        entry={selectedJournal}
        onClose={() => setSelectedJournal(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
