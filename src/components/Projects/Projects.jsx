import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const PROJECTS = [
  {
    title: "Gemini AI Full-Stack App",
    description: "A powerful AI chat application built with React, Node.js, Express, MongoDB, and Gemini API. Features include live chat, conversation history, JWT authentication, and smooth UI animations.",
    tech: ["React", "Gemini API", "JWT", "Tailwind CSS"],
    repo: "https://github.com/AniketKusundal/gemini.google.com",
    live: null,
    tag: "AI Project",
    gradient: "from-blue-500 to-violet-600",
    glow: "rgba(79,142,247,0.25)",
  },
  {
    title: "Hospital Management SaaS",
    description: "A full-featured multi-tenant SaaS platform for hospital management with Super Admin panel, doctor/patient management, pharmacy, appointments, and Firebase real-time database.",
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js", "Authentication"],
    repo: null,
    live: null,
    tag: "Full Stack",
    gradient: "from-violet-500 to-pink-600",
    glow: "rgba(124,92,246,0.25)",
  },
  {
    title: "News App (React)",
    description: "A clean and modern news aggregator with category-based filtering (Sports, Science, Entertainment, Business, Health, Technology) using News API integration.",
    tech: ["React.js", "REST API", "Bootstrap", "JavaScript"],
    repo: "https://github.com/AniketKusundal/React-News-App",
    live: null,
    tag: "Frontend",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.25)",
  },
  {
    title: "E-Learning Platform",
    description: "Full-stack E-learning system with user signup/login, course purchase, trending section, feedback forms, admin dashboard, and complete MySQL backend integration.",
    tech: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
    repo: "https://github.com/AniketKusundal/E_Learning-Project/tree/main/myProject",
    live: null,
    tag: "Full Stack",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.25)",
  },
  {
    title: "TextUtils App",
    description: "A handy text utility tool with character/word count, uppercase/lowercase conversion, remove extra spaces, copy-to-clipboard, and instant text preview with dark mode.",
    tech: ["React.js", "JavaScript", "CSS3"],
    repo: "https://github.com/AniketKusundal/TxtUtiles/tree/main/txtutiles",
    live: null,
    tag: "Utility Tool",
    gradient: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.2)",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio — built with React.js, Tailwind CSS, Framer Motion, and Vite. Features AI-themed design, smooth animations, typing effect, and full mobile responsiveness.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    repo: "https://github.com/AniketKusundal",
    live: null,
    tag: "UI/UX",
    gradient: "from-pink-500 to-violet-600",
    glow: "rgba(236,72,153,0.2)",
  },
];

export default function Projects() {
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative overflow-hidden section-pad
        ${isDarkMode ? "bg-gradient-to-br from-ai-bg via-ai-bg2 to-ai-bg" : "bg-gradient-to-br from-violet-50/30 via-slate-50 to-blue-50/30"}`}
    >
      <div className="absolute inset-0 neural-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,92,246,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 reveal`}>
          <div className="ai-badge mb-4"><HiSparkles size={12} /> My Projects</div>
          <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            Some of My <span className="gradient-text">Work</span>
          </h2>
          <p className={`mt-3 text-base max-w-xl mx-auto ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            A selection of projects that showcase my skills in full-stack development and UI design
          </p>
          <div className="glow-line w-24 mx-auto mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className={`glass border rounded-2xl overflow-hidden flex flex-col
                transition-all duration-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${hovered === i
                  ? "border-[rgba(79,142,247,0.4)] -translate-y-2"
                  : isDarkMode ? "border-white/[0.07]" : "border-slate-200"
                }`}
              style={{
                transitionDelay: visible ? `${i * 80}ms` : '0ms',
                boxShadow: hovered === i ? `0 20px 50px ${p.glow}` : undefined,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Card header gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />



              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className={`text-lg font-extrabold font-display leading-tight
                  ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed flex-1 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span key={t}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border
                        ${isDarkMode ? "bg-white/[0.05] border-white/10 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-600"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-2 pt-3 border-t border-white/[0.07]">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold no-underline
                        border transition-all duration-200 hover:-translate-y-0.5
                        ${isDarkMode
                          ? "bg-white/[0.06] border-white/10 text-slate-300 hover:border-ai-primary/50 hover:text-ai-primary"
                          : "bg-slate-100 border-slate-200 text-slate-600 hover:border-ai-primary/50 hover:text-ai-primary"
                        }`}
                    >
                      <FiGithub size={13} /> Source Code
                    </a>
                  ) : (
                    <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border
                      ${isDarkMode ? "bg-white/[0.03] border-white/[0.06] text-slate-600" : "bg-slate-50 border-slate-200 text-slate-400"}`}>
                      Private Repo
                    </span>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold no-underline
                        bg-grad-primary text-white hover:-translate-y-0.5 transition-all duration-200 shadow-glow-blue">
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-[0.6s] ${visible ? "opacity-100" : "opacity-0"}`}>
          <a
            href="https://github.com/AniketKusundal"
            target="_blank" rel="noopener noreferrer"
            className={`btn-shimmer inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm no-underline
              border transition-all duration-200 hover:-translate-y-1
              ${isDarkMode
                ? "bg-white/[0.05] border-white/15 text-slate-200 hover:border-ai-primary/50 hover:text-ai-primary"
                : "bg-white border-slate-300 text-slate-700 hover:border-ai-primary/50 hover:text-ai-primary"
              }`}
          >
            <FiGithub size={16} /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
