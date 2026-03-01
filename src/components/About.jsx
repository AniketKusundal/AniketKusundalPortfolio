import React, { useState, useEffect, useRef } from "react";
import AboutImg from "../assets/About.png";
import { useTheme } from "../context/ThemeContext";
import {
  FiMapPin, FiMail, FiPhone, FiCalendar,
  FiStar, FiCode, FiLayers, FiUsers
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

function calcExpLabel() {
  const now = new Date();
  const totalMonths = (now.getFullYear() - 2025) * 12 + (now.getMonth() + 1 - 10);
  if (totalMonths <= 0) return "<1mo";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months}mo`;
  if (months === 0) return `${years}yr`;
  return `${years}yr ${months}mo`;
}

const STATS = [
  { icon: <FiCode size={20} />, number: "10+", label: "Projects Completed", color: "text-ai-primary" },
  { icon: <FiCalendar size={20} />, number: calcExpLabel(), label: "Experience", color: "text-violet-400" },
  { icon: <FiLayers size={20} />, number: "5+", label: "Technologies Mastered", color: "text-cyan-400" },
  { icon: <FiUsers size={20} />, number: "100%", label: "Client Satisfaction", color: "text-emerald-400" },
];

const INFO_ROWS = [
  { icon: <FiMapPin size={15} />, label: "Location", value: "Pune, Maharashtra, India" },
  { icon: <FiMail size={15} />, label: "Email", value: "aniketgovindkusundal@gmail.com" },
  { icon: <FiPhone size={15} />, label: "Phone", value: "+91 9175501971" },
  { icon: <FiStar size={15} />, label: "Status", value: "Open to Work — Fresher/Junior" },
];

const SectionLabel = ({ children }) => (
  <div className="ai-badge mb-4">
    <HiSparkles size={12} /> {children}
  </div>
);

export default function About() {
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
      id="about"
      ref={ref}
      className={`relative overflow-hidden section-pad
        ${isDarkMode
          ? "bg-gradient-to-br from-ai-bg via-ai-bg2 to-ai-bg"
          : "bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-50"
        }`}
    >
      {/* Background decorators */}
      <div className="absolute inset-0 neural-grid opacity-100" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,92,246,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>About Me</SectionLabel>
          <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight
            ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="glow-line w-24 mx-auto mt-4" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Image */}
          <div className={`flex justify-center transition-all duration-700 delay-100
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl"
                style={{ background: "radial-gradient(circle, rgba(79,142,247,0.2) 0%, transparent 70%)", filter: "blur(20px)" }} />

              {/* Image card */}
              <div className="relative glass rounded-3xl overflow-hidden border border-ai-primary/15 w-[clamp(220px,35vw,300px)] h-[clamp(280px,44vw,380px)] card-lift">
                <img src={AboutImg} alt="Aniket Kusundal" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/10 via-transparent to-ai-purple/10 pointer-events-none" />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl bg-grad-primary text-white shadow-glow-blue"
                style={{ animation: "floatY 4s ease-in-out infinite" }}>
                <div className="text-lg font-black leading-none">Full Stack</div>
                <div className="text-[10px] text-white/80 font-semibold">Developer</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className={`transition-all duration-700 delay-200
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>

            <h3 className={`text-2xl sm:text-3xl font-extrabold mb-4 font-display tracking-tight
              ${isDarkMode ? "text-white" : "text-slate-800"}`}>
              Building Digital Experiences <br />
              <span className="gradient-text">with Passion & Precision</span>
            </h3>

            <p className={`text-[15px] leading-relaxed mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              I&apos;m <strong className={isDarkMode ? "text-slate-200" : "text-slate-700"}>Aniket Govind Kusundal</strong>, a passionate
              Full Stack Developer from Pune, currently pursuing my M.Sc. (Computer Applications)
              at MES Abasaheb Garware College. I specialize in building modern, performant web
              applications using the latest JavaScript ecosystem.
            </p>
            <p className={`text-[15px] leading-relaxed mb-6 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              Currently working as a <strong className={isDarkMode ? "text-slate-200" : "text-slate-700"}>React.js Intern at Sandhya SoftTech Pvt. Ltd.</strong>,
              I focus on scalable frontend architecture, Firebase integrations, and polished UI components.
              I love turning complex problems into elegant, simple designs.
            </p>

            {/* Info rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {INFO_ROWS.map(({ icon, label, value }) => (
                <div key={label}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-200
                    ${isDarkMode
                      ? "glass border-white/[0.06] hover:border-ai-primary/30"
                      : "bg-white/60 border-slate-200 hover:border-ai-primary/30"
                    }`}
                >
                  <span className="mt-0.5 text-ai-primary shrink-0">{icon}</span>
                  <div>
                    <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>{label}</div>
                    <div className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map(({ icon, number, label, color }, i) => (
                <div key={label}
                  className={`glass border rounded-2xl p-4 text-center card-lift transition-all duration-700
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    ${isDarkMode ? "border-white/[0.07]" : "border-slate-200"}
                    hover:border-ai-primary/30`}
                  style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
                >
                  <span className={`${color} flex justify-center mb-2`}>{icon}</span>
                  <div className={`text-2xl font-black ${color} mb-1`}>{number}</div>
                  <div className={`text-[10px] font-semibold uppercase tracking-wide ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
