import { personal } from '../data/personal';
import LocalStatusBadge from './LocalStatusBadge';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222222] bg-[#0B0B0B] text-[#8A8A8A] font-mono text-xs">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Identity & Status */}
          <div className="text-center md:text-left space-y-2">
            <div>
              <div className="font-display font-bold text-sm text-[#F5F5F5] mb-0.5">
                ANIKET KUSUNDAL
              </div>
              <div className="text-[11px] text-[#8A8A8A]">
                MERN Stack Developer & Website Developer • Pune, India
              </div>
            </div>
            <LocalStatusBadge />
          </div>

          {/* Social Touchpoints */}
          <div className="flex items-center gap-3">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8734A] hover:border-[#E8734A]/40 transition-colors no-underline"
            >
              <FiGithub size={14} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8734A] hover:border-[#E8734A]/40 transition-colors no-underline"
            >
              <FiLinkedin size={14} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-[#E8734A] hover:border-[#E8734A]/40 transition-colors no-underline"
            >
              <FiMail size={14} />
            </a>
            <a
              href="https://wa.me/919175501971"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-emerald-400 hover:border-emerald-500/40 transition-colors no-underline"
            >
              <FaWhatsapp size={14} />
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-5">
            <span className="text-[11px] text-[#555555]">
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg border border-[#222222] bg-[#141414] flex items-center justify-center text-[#8A8A8A] hover:text-[#F5F5F5] hover:border-[#E8734A]/40 transition-colors cursor-pointer"
            >
              <FiArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Signature Bar */}
        <div className="text-center mt-8 pt-6 border-t border-[#191919] flex flex-wrap items-center justify-between text-[10px] text-[#555555]">
          <span>ANIKET / IN DEVELOPMENT</span>
          <span>BUILDING. LEARNING. SHIPPING.</span>
          <span>VERSION 2026</span>
        </div>
      </div>
    </footer>
  );
}
