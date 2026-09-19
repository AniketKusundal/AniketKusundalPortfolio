import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import ScrollProgress from './ScrollProgress';

const NAV_LINKS = [
  { id: 'projects', label: 'WORK' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'about', label: 'ABOUT' },
  { id: 'toolbox', label: 'STACK' },
  { id: 'contact', label: 'CONTACT' },
];

const EXTERNAL_LINKS = [
  { label: 'RESUME', href: '/Aniket_Govind_Kusundal.pdf', download: true },
  { label: 'GITHUB', href: 'https://github.com/AniketKusundal' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/aniket-kusundal' },
];

export default function Navbar({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('projects');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offsets = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, dist: Infinity };
        return { id, dist: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      const nearest = offsets.reduce((a, b) => (a.dist < b.dist ? a : b));
      if (nearest.dist < 600) setActive(nearest.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#222222]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16 sm:h-20">
          {/* Brand Identity */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2.5 cursor-pointer bg-transparent border-none text-left p-0"
          >
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-[#F5F5F5] hover:text-[#E8734A] transition-colors">
              ANIKET KUSUNDAL
            </span>
            <span className="text-[10px] tracking-widest uppercase font-mono px-2 py-0.5 rounded border border-[#262626] text-[#8A8A8A] hidden sm:inline-block">
              IN DEV
            </span>
          </button>

          {/* Center Links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleNav(id)}
                  className={`px-3 py-1.5 text-[11px] font-mono tracking-wider transition-all duration-200 cursor-pointer bg-transparent border-none rounded ${
                    active === id
                      ? 'text-[#E8734A] font-semibold'
                      : 'text-[#8A8A8A] hover:text-[#F5F5F5]'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions & External Links */}
          <div className="hidden md:flex items-center gap-4">
            {/* Command Palette Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#E8734A]/50 text-[#8A8A8A] hover:text-[#F5F5F5] transition-all cursor-pointer text-xs font-mono"
              title="Open Command Palette (Ctrl+K)"
            >
              <FiSearch size={13} className="text-[#E8734A]" />
              <span className="text-[11px] text-[#CCCCCC]">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#0B0B0B] border border-[#222222] text-[10px] text-[#8A8A8A]">
                ⌘K
              </kbd>
            </button>

            <div className="h-4 w-px bg-[#262626]" />

            {EXTERNAL_LINKS.map(({ label, href, download }) => (
              <a
                key={label}
                href={href}
                {...(download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-[11px] font-mono tracking-wider text-[#8A8A8A] hover:text-[#E8734A] transition-colors no-underline"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-transparent border border-[#222222] rounded p-1"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-4 h-px bg-[#F5F5F5] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-4 h-px bg-[#F5F5F5] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </nav>
        <ScrollProgress />
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
              <span className="text-[11px] font-mono text-[#E8734A] tracking-widest uppercase">
                NAVIGATION / MENU
              </span>

              {/* Mobile Command Palette Trigger */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenCommandPalette && onOpenCommandPalette();
                }}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#262626] text-xs font-mono text-[#F5F5F5] cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FiSearch className="text-[#E8734A]" size={14} />
                  <span>Search & Commands</span>
                </div>
                <span className="text-[10px] text-[#8A8A8A] px-1.5 py-0.5 rounded bg-[#0B0B0B]">
                  ⌘K
                </span>
              </button>

              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNav(id)}
                    className={`text-left text-2xl font-display font-bold tracking-tight cursor-pointer bg-transparent border-none transition-colors py-1 ${
                      active === id ? 'text-[#E8734A]' : 'text-[#F5F5F5] hover:text-[#E8734A]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>

              <div className="h-px w-full bg-[#222222] my-4" />

              <div className="flex flex-col gap-3">
                {EXTERNAL_LINKS.map(({ label, href, download }) => (
                  <a
                    key={label}
                    href={href}
                    {...(download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-mono text-[#8A8A8A] hover:text-[#E8734A] transition-colors no-underline"
                  >
                    ↗ {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
