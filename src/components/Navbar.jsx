import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const navH = 68;
      const offsets = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, dist: Infinity };
        return { id, dist: Math.abs(el.getBoundingClientRect().top - navH) };
      });
      const nearest = offsets.reduce((a, b) => (a.dist < b.dist ? a : b));
      if (nearest.id) setActive(nearest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center px-6 lg:px-16 transition-all duration-300
          ${scrolled
            ? isDarkMode
              ? "bg-[rgba(5,8,15,0.88)] backdrop-blur-xl border-b border-white/[0.07] shadow-ai-md"
              : "bg-[rgba(248,250,255,0.88)] backdrop-blur-xl border-b border-black/[0.07] shadow-ai-sm"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("home"); }}
            className="flex items-center gap-2 no-underline group"
          >
            <div className="w-9 h-9 rounded-xl bg-grad-primary flex items-center justify-center shadow-glow-blue transition-all duration-300 group-hover:scale-110">
              <span className="text-white text-sm font-black tracking-tight">AK</span>
            </div>
            <span className="font-display font-extrabold text-lg gradient-text tracking-tight hidden sm:block">
              Aniket Kusundal
            </span>
          </a>

          {/* Desktop Links */}
          {!isMobile && (
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); handleNav(id); }}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-200
                      ${active === id
                        ? "text-ai-primary bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.25)]"
                        : isDarkMode
                          ? "text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent"
                          : "text-slate-500 hover:text-slate-900 hover:bg-black/5 border border-transparent"
                      }`}
                  >
                    {label}
                    {active === id && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-ai-primary" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 border
                ${isDarkMode
                  ? "bg-white/[0.06] border-white/10 text-slate-400 hover:text-ai-primary hover:border-ai-primary/40 hover:bg-[rgba(79,142,247,0.1)]"
                  : "bg-black/[0.05] border-black/10 text-slate-500 hover:text-ai-primary hover:border-ai-primary/40 hover:bg-[rgba(79,142,247,0.08)]"
                }`}
            >
              {isDarkMode ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>

            {/* Hire Me — desktop */}
            {!isMobile && (
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav("contact"); }}
                className="btn-shimmer px-5 py-2 rounded-full bg-grad-primary text-white text-sm font-bold shadow-glow-blue hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(79,142,247,0.5)] transition-all duration-200 no-underline"
              >
                Hire Me
              </a>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200
                  ${isDarkMode ? "bg-white/[0.06] border-white/10 text-slate-300" : "bg-black/[0.05] border-black/10 text-slate-600"}`}
              >
                {mobileOpen ? <FiX size={17} /> : <FiMenu size={17} />}
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className={`fixed top-[68px] left-0 right-0 z-40 animate-slide-down border-b
            ${isDarkMode ? "bg-[rgba(7,10,20,0.97)] border-white/[0.07]" : "bg-[rgba(248,250,255,0.97)] border-black/[0.07]"}
            backdrop-blur-2xl px-5 pt-4 pb-6`}
        >
          <div className="flex flex-col gap-1 max-w-sm mx-auto">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); handleNav(id); }}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium no-underline transition-all duration-200
                  ${active === id
                    ? "text-ai-primary bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)]"
                    : isDarkMode ? "text-slate-300 hover:bg-white/5 border border-transparent" : "text-slate-700 hover:bg-black/5 border border-transparent"
                  }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("contact"); }}
              className="btn-shimmer mt-3 text-center px-6 py-3 rounded-full bg-grad-primary text-white font-bold text-sm shadow-glow-blue no-underline"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
}
