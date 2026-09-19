import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import { useToast } from '../context/ToastContext';
import HeroTerminal from './HeroTerminal';
import LocalStatusBadge from './LocalStatusBadge';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload, FiArrowRight, FiCopy } from 'react-icons/fi';

export default function Hero() {
  const { copyToClipboard } = useToast();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center section-container pt-28 pb-16">
      {/* Chapter Indicator & Local Time Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between gap-4 mb-6"
      >
        <div className="flex items-center gap-3">
          <span className="chapter-label m-0">01 / INTRO</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            {personal.concept}
          </span>
        </div>

        <LocalStatusBadge />
      </motion.div>

      {/* Personal Identity & Positioning */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-6"
      >
        <div className="flex flex-wrap items-center gap-3 mb-2.5">
          <span className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F5] tracking-tight">
            ANIKET KUSUNDAL
          </span>
          <span className="h-px w-6 bg-[#333333] hidden sm:inline-block" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#E8734A] font-semibold">
            MERN STACK DEVELOPER
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#8A8A8A]">
            WEBSITE DEVELOPER
          </span>
          <span className="text-[#333333]">•</span>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#8A8A8A]">
            FULL-STACK DEVELOPER
          </span>
          <span className="text-[#333333] hidden sm:inline">•</span>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#141414] border border-[#222222] text-[11px] text-[#8A8A8A]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Currently at <strong className="text-[#F5F5F5] font-medium">{personal.currentRole.company}</strong></span>
          </div>
        </div>
      </motion.div>

      {/* Large Display Headline */}
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-bold text-[#F5F5F5] leading-[0.98] tracking-tight mb-8"
          style={{ fontSize: 'clamp(44px, 7.5vw, 110px)' }}
        >
          I BUILD WEB <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#E8734A] to-[#F5F5F5]">
            EXPERIENCES
          </span> <br className="hidden sm:block" />
          THAT SHIP.
        </motion.h1>

        {/* Narrative bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base sm:text-lg text-[#8A8A8A] max-w-2xl leading-relaxed mb-10"
        >
          I'm <strong className="text-[#F5F5F5] font-semibold">Aniket Kusundal</strong> — {personal.heroDescription}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary cursor-pointer border-none flex items-center gap-2 text-sm font-semibold"
          >
            <span>VIEW MY WORK</span>
            <FiArrowRight size={15} />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="btn-outline cursor-pointer text-sm font-semibold flex items-center gap-2"
          >
            <span>START A PROJECT</span>
          </button>

          <a
            href={personal.resumeUrl}
            download
            className="px-4 py-3 rounded-lg border border-[#222222] bg-[#141414] hover:border-[#E8734A]/50 text-xs font-mono text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors flex items-center gap-2 no-underline"
          >
            <FiDownload size={13} />
            <span>RESUME</span>
          </a>

          <div className="flex items-center gap-2 ml-1">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8734A] hover:border-[#E8734A]/40 transition-colors no-underline"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8734A] hover:border-[#E8734A]/40 transition-colors no-underline"
            >
              <FiLinkedin size={16} />
            </a>
            <button
              onClick={() => copyToClipboard(personal.email, 'Email copied: ' + personal.email)}
              aria-label="Copy Email Address"
              title="Copy Email to Clipboard"
              className="w-10 h-10 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8734A] hover:border-[#E8734A]/40 transition-colors cursor-pointer"
            >
              <FiCopy size={15} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Developer Terminal (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <HeroTerminal />
      </motion.div>

      {/* Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="pt-6 flex items-center gap-3 text-[#8A8A8A]"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">
          SCROLL TO EXPLORE JOURNEY
        </span>
        <FiArrowDown size={13} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
