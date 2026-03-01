import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  FiGithub, FiLinkedin, FiInstagram, FiArrowUp,
  FiCode, FiHeart, FiMail
} from "react-icons/fi";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { icon: <FiGithub size={18} />, label: "GitHub", href: "https://github.com/AniketKusundal", hoverClass: "hover:text-white hover:border-white/40 hover:bg-white/10" },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/aniket-kusundal", hoverClass: "hover:text-[#0ea5e9] hover:border-[#0ea5e9]/40 hover:bg-[#0ea5e9]/10" },
  { icon: <FiInstagram size={18} />, label: "Instagram", href: "https://www.instagram.com/_aaniket_k?igsh=Nms4cGd4eTl6ZzMx", hoverClass: "hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10" },
  { icon: <FaYoutube size={18} />, label: "YouTube", href: "https://www.youtube.com/@AniketCodeLab", hoverClass: "hover:text-red-500 hover:border-red-500/40 hover:bg-red-500/10" },
];

export default function Footer() {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className={`relative overflow-hidden pb-0
      ${isDarkMode ? "bg-gradient-to-b from-ai-bg2 to-[#020408]" : "bg-gradient-to-b from-slate-100 to-slate-200"}`}
    >
      {/* Top glow line */}
      <div className="glow-line w-full" />

      {/* Neural grid */}
      <div className="absolute inset-0 neural-grid opacity-60" />

      {/* Glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(79,142,247,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-16 pb-8">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-grad-primary flex items-center justify-center shadow-glow-blue">
                <HiSparkles className="text-white text-lg" />
              </div>
              <div>
                <div className="font-display font-extrabold text-lg gradient-text tracking-tight">Aniket Kusundal</div>
                <div className={`text-xs font-semibold ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Full Stack Developer</div>
              </div>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs mb-5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Building modern, high-performance web applications with React.js, Node.js, and cutting-edge technologies.
              Open to exciting opportunities.
            </p>
            {/* Quick contact */}
            <div className="flex flex-col gap-2">
              <a href="mailto:aniketgovindkusundal@gmail.com"
                className={`inline-flex items-center gap-2 text-xs no-underline hover:text-ai-primary transition-colors ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                <FiMail size={13} /> aniketgovindkusundal@gmail.com
              </a>
              <a href="https://wa.me/919175501971" target="_blank" rel="noreferrer"
                className={`inline-flex items-center gap-2 text-xs no-underline hover:text-emerald-400 transition-colors ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                <FaWhatsapp size={13} /> +91 9175501971
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`flex items-center gap-1.5 text-sm font-medium no-underline transition-all duration-200 hover:text-ai-primary hover:translate-x-1
                      ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
                  >
                    <FiCode size={11} className="text-ai-primary/60" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {SOCIALS.map(({ icon, label, href, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={label} title={label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border no-underline
                    transition-all duration-200 hover:-translate-y-1 ${hoverClass}
                    ${isDarkMode ? "bg-white/[0.04] border-white/10 text-slate-400" : "bg-white border-slate-200 text-slate-500"}`}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* YouTube special mention */}
            <a
              href="https://www.youtube.com/@AniketCodeLab"
              target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 rounded-xl border no-underline transition-all duration-200
                hover:border-red-500/40 hover:bg-red-500/5 group
                ${isDarkMode ? "border-white/[0.07] bg-white/[0.02]" : "border-slate-200 bg-white/50"}`}
            >
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FaYoutube className="text-white" size={16} />
              </div>
              <div>
                <div className={`text-xs font-bold ${isDarkMode ? "text-slate-300 group-hover:text-white" : "text-slate-700"}`}>AniketCodeLab</div>
                <div className={`text-[10px] ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Web Dev Tutorials</div>
              </div>
            </a>

            {/* Hire me CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="btn-shimmer mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
                bg-grad-primary text-white font-bold text-sm shadow-glow-blue no-underline
                hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(79,142,247,0.45)]
                transition-all duration-200"
            >
              <FiMail size={14} /> Hire Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="glow-line w-full mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-xs text-center sm:text-left ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
            © {new Date().getFullYear()} Aniket Govind Kusundal. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200
              hover:-translate-y-1 hover:border-ai-primary/50 hover:text-ai-primary hover:bg-ai-primary/10 hover:shadow-glow-blue
              bg-grad-primary text-white shadow-glow-blue cursor-pointer"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
