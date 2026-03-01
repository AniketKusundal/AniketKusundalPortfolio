import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight, FiClock } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

/**
 * Dynamically calculates how long ago a start date was.
 * Returns a string like "5 months", "1 yr 2 mo", etc.
 */
function calcDuration(startYear, startMonth /* 1-indexed */) {
  const now = new Date();
  const totalMonths =
    (now.getFullYear() - startYear) * 12 + (now.getMonth() + 1 - startMonth);
  if (totalMonths <= 0) return "just started";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months} month${months !== 1 ? "s" : ""}`;
  if (months === 0) return `${years} yr${years !== 1 ? "s" : ""}`;
  return `${years} yr ${months} mo`;
}

const EXPERIENCE = [
  {
    role: "React.js Intern",
    company: "Sandhya SoftTech Pvt. Ltd.",
    location: "Pune, Maharashtra",
    // start date: October 2025
    startYear: 2025,
    startMonth: 10,
    durationLabel: "Oct 2025 — Present",
    type: "Internship",
    current: true,
    description: "Working on developing scalable and dynamic web interfaces using React.js for enterprise clients. Responsibilities include enhancing UI/UX of a Hospital Management SaaS product, integrating Firebase real-time database, building reusable component libraries, and optimizing performance for production-level applications.",
    highlights: [
      "Built and maintained Hospital Management SaaS using React.js + Firebase",
      "Designed reusable, accessible component library with clean architecture",
      "Integrated Firebase Auth, Firestore, and real-time features",
      "Collaborated with senior developers on performance optimization",
      "Implemented dark/light themes and responsive design across modules",
    ],
    tech: ["React.js", "Firebase", "JavaScript", "Tailwind CSS", "Git"],
    gradient: "from-blue-500 to-violet-600",
    glow: "rgba(79,142,247,0.2)",
  },
];

export default function Experience() {
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className={`relative overflow-hidden section-pad
        ${isDarkMode ? "bg-gradient-to-br from-ai-bg2 via-[#080c18] to-ai-bg2" : "bg-gradient-to-br from-blue-50/40 via-slate-50 to-slate-50"}`}
    >
      <div className="absolute inset-0 neural-grid" />
      <div className="absolute top-1/3 right-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 reveal`}>
          <div className="ai-badge mb-4"><HiSparkles size={12} /> Work Experience</div>
          <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 w-px h-full"
            style={{
              background: "linear-gradient(180deg, rgba(79,142,247,0.8), rgba(124,92,246,0.4), transparent)",
              transition: "height 1s ease",
            }}
          />

          {EXPERIENCE.map((exp, i) => (
            <div key={i}
              className={`relative pl-12 sm:pl-20 mb-8 min-w-0 transition-all duration-700
                ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1 sm:left-6 top-6 w-5 h-5 rounded-full bg-grad-primary flex items-center justify-center z-10"
                style={{ boxShadow: "0 0 16px rgba(79,142,247,0.6), 0 0 0 4px rgba(79,142,247,0.15)" }}>
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div className={`glass border rounded-2xl overflow-hidden card-lift min-w-0
                ${isDarkMode ? "border-white/[0.07]" : "border-slate-200"}`}
                style={{ boxShadow: exp.current ? `0 0 40px ${exp.glow}` : undefined }}
              >
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`} />

                <div className="p-6 sm:p-8">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`text-lg sm:text-2xl font-extrabold font-display break-words ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold
                            border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiBriefcase size={14} className="text-ai-primary" />
                        <span className={`text-base font-semibold ${isDarkMode ? "text-ai-primary" : "text-ai-primary"}`}>
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      {/* Date range */}
                      <div className={`flex items-center gap-1.5 text-xs whitespace-nowrap ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        <FiCalendar size={12} /> {exp.durationLabel}
                      </div>
                      {/* Live dynamic duration badge */}
                      {exp.startYear && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border
                          border-ai-primary/30 bg-ai-primary/10 text-ai-primary"
                          title="Duration calculated from start date">
                          <FiClock size={11} />
                          <span className="text-[11px] font-bold whitespace-nowrap">
                            {calcDuration(exp.startYear, exp.startMonth)}
                          </span>
                        </div>
                      )}

                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border
                        ${isDarkMode ? "border-ai-primary/30 text-ai-primary bg-ai-primary/10" : "border-blue-300 text-blue-600 bg-blue-50"}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-5">
                    <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                      Key Contributions
                    </p>
                    <ul className="flex flex-col gap-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <FiChevronRight size={14} className="text-ai-primary shrink-0 mt-0.5" />
                          <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border
                          ${isDarkMode ? "border-ai-primary/25 text-ai-primary bg-ai-primary/10" : "border-blue-200 text-blue-600 bg-blue-50"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Open to work banner */}
          <div className="pl-16 sm:pl-20">
            <div className={`glass border rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4
              border-emerald-500/20 transition-all duration-700 delay-[0.4s]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ background: "rgba(16,185,129,0.05)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <FiBriefcase className="text-emerald-400" size={18} />
                </div>
                <div>
                  <p className="font-bold text-emerald-400 text-sm">Open to Opportunities</p>
                  <p className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Seeking Fresher / Junior Developer roles — Full-time or Contract
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-shimmer px-5 py-2 rounded-full bg-grad-primary text-white text-xs font-bold no-underline shadow-glow-blue hover:-translate-y-0.5 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
