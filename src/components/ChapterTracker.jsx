import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHAPTERS = [
  { id: 'hero', number: '01', name: 'INTRO' },
  { id: 'beginning', number: '02', name: 'BEGINNING' },
  { id: 'builder', number: '03', name: 'BUILDER' },
  { id: 'projects', number: '04', name: 'PROJECTS' },
  { id: 'experience', number: '05', name: 'EXPERIENCE' },
  { id: 'about', number: '06', name: 'ABOUT' },
  { id: 'toolbox', number: '07', name: 'STACK' },
  { id: 'next', number: '08', name: 'NEXT' },
  { id: 'contact', number: '09', name: 'CONTACT' },
];

export default function ChapterTracker() {
  const [currentChapter, setCurrentChapter] = useState(CHAPTERS[0]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentChapter(CHAPTERS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setExpanded(false);
  };

  return (
    <aside aria-label="Chapter progress" className="fixed right-6 bottom-8 z-40 hidden md:block">
      <div className="relative">
        {/* Compact Pill */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#141414]/90 border border-[#262626] backdrop-blur-md cursor-pointer hover:border-[#E8734A]/50 transition-colors shadow-lg font-mono text-xs text-left"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8734A] animate-pulse" />
          <span className="text-[#E8734A] font-bold">{currentChapter.number}</span>
          <span className="text-[#F5F5F5] tracking-wider">{currentChapter.name}</span>
          <span className="text-[10px] text-[#8A8A8A] ml-1">
            {expanded ? '▲' : '▼'}
          </span>
        </button>

        {/* Expanded Chapters Drawer */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 bottom-10 p-3 rounded-2xl bg-[#141414]/95 border border-[#262626] backdrop-blur-xl shadow-2xl w-48 space-y-1 font-mono text-xs"
            >
              <div className="text-[10px] text-[#666666] uppercase tracking-widest px-2 pb-1 border-b border-[#222222]">
                CHAPTER INDEX
              </div>
              {CHAPTERS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => scrollToChapter(ch.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left cursor-pointer transition-colors ${
                    currentChapter.id === ch.id
                      ? 'bg-[#E8734A]/15 text-[#E8734A] font-bold'
                      : 'text-[#8A8A8A] hover:text-[#F5F5F5] hover:bg-[#1E1E1E]'
                  }`}
                >
                  <span className="text-[11px]">{ch.number} {ch.name}</span>
                  {currentChapter.id === ch.id && (
                    <span className="text-[10px] text-[#E8734A]">●</span>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
