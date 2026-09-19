import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChapterTitle from './components/ChapterTitle';
import Journey from './components/Journey';
import ProjectShowcase from './components/ProjectShowcase';
import Experience from './components/Experience';
import About from './components/About';
import TechEcosystem from './components/TechEcosystem';
import Evolving from './components/Evolving';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChapterTracker from './components/ChapterTracker';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import { ToastProvider } from './context/ToastContext';

function PortfolioContent() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeTechFilter, setActiveTechFilter] = useState(null);
  const [externalCaseStudyId, setExternalCaseStudyId] = useState(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectProjectFromPalette = (projectId) => {
    setExternalCaseStudyId(projectId);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F5F5F5] min-h-screen relative selection:bg-[#E8734A]/25 selection:text-white">
      {/* Desktop Enhancements */}
      <CustomCursor />
      <ChapterTracker />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onSelectProject={handleSelectProjectFromPalette}
      />

      {/* Persistent Navigation with Palette Trigger */}
      <Navbar onOpenCommandPalette={() => setPaletteOpen(true)} />

      <main>
        {/* CHAPTER 01 — INTRO */}
        <Hero />

        <div className="section-container">
          <div className="sep-line" />
        </div>

        {/* CHAPTER 02 & 03 — BEGINNING & BUILDER */}
        <Journey />

        {/* Transition into Projects */}
        <ChapterTitle
          chapter="CHAPTER 04 PREVIEW"
          lines={['ENGINEERED WITH', 'PURPOSE & PRECISION.']}
          sub="Full-stack applications, OCR document pipelines, and AI integrations."
        />

        {/* CHAPTER 04 — PROJECTS */}
        <ProjectShowcase
          activeTechFilter={activeTechFilter}
          onClearFilter={() => setActiveTechFilter(null)}
          externalCaseStudyId={externalCaseStudyId}
          onResetExternalCaseStudy={() => setExternalCaseStudyId(null)}
        />

        {/* Transition into Professional Experience */}
        <ChapterTitle
          chapter="CHAPTER 05"
          lines={['FROM CODE', 'TO PRODUCTION IMPACT.']}
          sub="Industry roles, client website development at DigiSevaks, and full-stack engineering."
        />

        {/* CHAPTER 05 — EXPERIENCE */}
        <Experience />

        <div className="section-container">
          <div className="sep-line" />
        </div>

        {/* CHAPTER 06 — ABOUT */}
        <About />

        {/* CHAPTER 07 — TOOLBOX & CROSS-FILTER */}
        <TechEcosystem
          onFilterTech={(tech) => setActiveTechFilter(tech)}
          activeFilter={activeTechFilter}
        />

        {/* CHAPTER 08 — NEXT */}
        <Evolving />

        <div className="section-container">
          <div className="sep-line" />
        </div>

        {/* CHAPTER 09 — CONTACT */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <PortfolioContent />
    </ToastProvider>
  );
}
