import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FiBook, FiAward, FiCalendar } from "react-icons/fi";
import { HiSparkles, HiAcademicCap } from "react-icons/hi2";

const EDUCATION = [
  {
    degree: "M.Sc. (Computer Applications)",
    institute: "MES Abasaheb Garware College, Pune",
    university: "Affiliated to SPPU",
    period: "2024 — 2026",
    status: "Pursuing",
    statusColor: "text-violet-400 bg-violet-500/10 border-violet-500/25",
    icon: <HiAcademicCap size={20} />,
    iconBg: "bg-violet-500/15 border-violet-500/25 text-violet-400",
    gradient: "from-violet-500 to-purple-600",
    description: "Specializing in Computer Applications with focus on full-stack web development, algorithms, database management, software engineering, and cloud computing.",
    highlights: ["Advanced Web Technologies", "Database Management Systems", "Software Engineering", "Cloud Computing & DevOps"],
  },
  {
    degree: "B.Sc. Computer Science",
    institute: "Deogiri Institute Of Technology and Management Studies",
    university: "Dr. Babasaheb Ambedkar Marathwada University",
    period: "2021 — 2024",
    status: "Completed",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
    icon: <FiBook size={20} />,
    iconBg: "bg-blue-500/15 border-blue-500/25 text-blue-400",
    gradient: "from-blue-500 to-cyan-600",
    description: "Comprehensive study of Computer Science fundamentals including data structures, algorithms, programming paradigms, web development, and project development.",
    highlights: ["Data Structures & Algorithms", "Web Development (PHP, MySQL)", "Object-Oriented Programming", "Computer Networks"],
  },
  {
    degree: "Higher Secondary (HSC) — Science",
    university: "Maharashtra State Board",
    period: "2019 — 2021",
    status: "82.83%",
    statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
    icon: <FiAward size={20} />,
    iconBg: "bg-cyan-500/15 border-cyan-500/25 text-cyan-400",
    gradient: "from-cyan-500 to-teal-600",
    description: "Science stream with Physics, Chemistry, and Mathematics. Built a strong analytical and problem-solving foundation.",
    highlights: ["Physics & Mathematics", "Analytical Thinking", "Science Stream", "Scored 82.83%"],
  },
];

export default function Education() {
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={ref}
      className={`relative overflow-hidden section-pad
        ${isDarkMode ? "bg-gradient-to-br from-ai-bg via-ai-bg2 to-ai-bg" : "bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50"}`}
    >
      <div className="absolute inset-0 neural-grid" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,92,246,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 reveal`}>
          <div className="ai-badge mb-4"><HiSparkles size={12} /> Education</div>
          <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className={`mt-3 text-base max-w-xl mx-auto ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            My educational journey and qualifications that shaped my technical foundation
          </p>
          <div className="glow-line w-24 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-px"
            style={{
              height: "100%",
              background: "linear-gradient(180deg, rgba(79,142,247,0.8), rgba(124,92,246,0.6), rgba(6,182,212,0.3), transparent)",
            }}
          />

          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className={`relative pl-12 min-w-0 transition-all duration-700
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: `${0.15 + i * 0.18}s` }}
            >
              {/* Timeline icon */}
              <div className={`absolute left-0 top-5 w-8 h-8 rounded-xl border flex items-center justify-center z-10 shrink-0 ${edu.iconBg}`}
                style={{ boxShadow: "0 0 16px rgba(79,142,247,0.3)" }}>
                {edu.icon}
              </div>

              {/* Card */}
              <div className={`glass border rounded-2xl overflow-hidden card-lift min-w-0
                ${isDarkMode ? "border-white/[0.07] hover:border-ai-primary/30" : "border-slate-200 hover:border-ai-primary/30"}`}>
                {/* Gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${edu.gradient}`} />

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="min-w-0 flex-1">
                      <h3 className={`text-base sm:text-xl font-extrabold font-display mb-0.5 break-words ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-sm font-semibold break-words ${isDarkMode ? "text-ai-primary" : "text-blue-600"}`}>
                        {edu.institute}
                      </p>
                      <p className={`text-xs mt-0.5 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                        {edu.university}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className={`flex items-center gap-1.5 text-xs whitespace-nowrap ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        <FiCalendar size={12} /> {edu.period}
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${edu.statusColor}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(h => (
                      <span key={h}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border
                          ${isDarkMode ? "bg-white/[0.04] border-white/10 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-500"}`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
