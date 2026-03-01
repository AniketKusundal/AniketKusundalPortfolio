import React, { useState, useEffect, useRef } from "react";
import profileImg from "../assets/aniket.png";
import { useTheme } from "../context/ThemeContext";
import {
  FiDownload, FiGithub, FiLinkedin, FiInstagram,
  FiArrowDown, FiCode, FiBriefcase
} from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase } from "react-icons/si";

/** Dynamic experience: Oct 2025 → now */
function calcHeroExp() {
  const now = new Date();
  const months = (now.getFullYear() - 2025) * 12 + (now.getMonth() + 1 - 10);
  if (months <= 0) return "<1mo";
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m}mo`;
  if (m === 0) return `${y}yr`;
  return `${y}yr ${m}mo`;
}

/* ── Typing hook ── */
const PHRASES = ["Full Stack Developer", "React.js Engineer", "UI/UX Creator", "Problem Solver", "Open to Work"];
function useTyping() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  useEffect(() => {
    const current = PHRASES[loopNum % PHRASES.length];
    let timer;
    if (!isDeleting) {
      timer = setTimeout(() => { setText(current.substring(0, charIdx + 1)); setCharIdx(i => i + 1); }, 82);
      if (charIdx === current.length) { clearTimeout(timer); timer = setTimeout(() => setIsDeleting(true), 2200); }
    } else {
      timer = setTimeout(() => { setText(current.substring(0, charIdx - 1)); setCharIdx(i => i - 1); }, 42);
      if (charIdx === 0) { clearTimeout(timer); setIsDeleting(false); setLoopNum(n => n + 1); }
    }
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, loopNum]);
  return text;
}

/* ── Neural network SVG canvas ── */
function NeuralCanvas() {
  const nodes = [
    { cx: 60, cy: 80 }, { cx: 60, cy: 200 }, { cx: 60, cy: 320 },
    { cx: 200, cy: 40 }, { cx: 200, cy: 140 }, { cx: 200, cy: 240 }, { cx: 200, cy: 340 },
    { cx: 340, cy: 80 }, { cx: 340, cy: 200 }, { cx: 340, cy: 320 },
    { cx: 480, cy: 140 }, { cx: 480, cy: 240 },
  ];
  const edges = [
    [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [2, 6],
    [3, 7], [3, 8], [4, 7], [4, 8], [4, 9], [5, 8], [5, 9], [6, 9],
    [7, 10], [8, 10], [8, 11], [9, 11],
  ];
  return (
    <svg viewBox="0 0 540 400" className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f8ef7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7c5cf6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="url(#lineGrad)" strokeWidth="1"
          style={{ animation: `fadeInUp ${0.5 + i * 0.06}s ease both` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="#4f8ef7" opacity="0.8"
          style={{ animation: `pulseSlow ${2 + (i % 3)}s ease-in-out ${i * 0.2}s infinite` }}
        />
      ))}
    </svg>
  );
}

const TECH_PILLS = [
  { icon: <SiReact className="text-[#61DAFB]" />, label: "React.js" },
  { icon: <SiNodedotjs className="text-[#68A063]" />, label: "Node.js" },
  { icon: <SiMongodb className="text-[#58AA50]" />, label: "MongoDB" },
  { icon: <SiFirebase className="text-[#FFCA28]" />, label: "Firebase" },
];

const SOCIALS = [
  { href: "https://github.com/AniketKusundal", icon: <FiGithub size={18} />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/aniket-kusundal", icon: <FiLinkedin size={18} />, label: "LinkedIn" },
  { href: "https://www.instagram.com/_aaniket_k?igsh=Nms4cGd4eTl6ZzMx", icon: <FiInstagram size={18} />, label: "Instagram" },
  { href: "https://www.youtube.com/@AniketCodeLab", icon: <FaYoutube size={18} />, label: "YouTube" },
];

const Hero = () => {
  const typedText = useTyping();
  const { isDarkMode } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const onMouse = (e) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-center min-h-screen overflow-hidden pt-[110px] pb-16 px-5 sm:px-8 lg:px-16
        ${isDarkMode ? "bg-ai-bg" : "bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50"}`}
    >
      {/* Neural grid */}
      <div className="absolute inset-0 neural-grid opacity-100" />

      {/* Scanlines */}
      <div className="scanlines absolute inset-0 pointer-events-none" />

      {/* Animated blobs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          top: "-10%", right: "-8%",
          background: "radial-gradient(circle, rgba(79,142,247,0.2) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "pulseSlow 8s ease-in-out infinite",
          transform: `translate(${(mousePos.x - 50) * 0.05}px, ${(mousePos.y - 50) * 0.05}px)`,
          transition: "transform 0.15s ease",
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          bottom: "-8%", left: "-6%",
          background: "radial-gradient(circle, rgba(124,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(70px)",
          animation: "pulseSlow 10s ease-in-out infinite reverse",
          transform: `translate(${(mousePos.x - 50) * -0.04}px, ${(mousePos.y - 50) * -0.04}px)`,
          transition: "transform 0.15s ease",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          top: "45%", left: "42%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(55px)",
          animation: "pulseSlow 12s ease-in-out 2s infinite",
        }}
      />

      {/* Main grid */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto">

        {/* ── LEFT ── */}
        <div className="flex-1 min-w-0 max-w-[580px] animate-fade-in-left">



          {/* Greeting */}
          <p className={`text-base font-medium tracking-wide mb-2 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="font-display leading-tight mb-5 tracking-tight">
            <span
              className="block font-hand gradient-text"
              style={{ fontSize: "clamp(52px, 7vw, 82px)" }}
            >
              Aniket
            </span>
            <span
              className={`block font-extrabold ${isDarkMode ? "text-white" : "text-slate-800"}`}
              style={{ fontSize: "clamp(38px, 5.5vw, 68px)", letterSpacing: "-2px" }}
            >
              Kusundal
            </span>
          </h1>

          {/* Typing role */}
          <div className={`flex flex-wrap items-center gap-2 text-base sm:text-lg font-medium mb-6 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            <span>I build</span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg
              bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)]">
              <span className="text-ai-primary font-bold" style={{ minWidth: "210px" }}>{typedText}</span>
              <span className="text-ai-primary font-bold animate-blink">|</span>
            </span>
          </div>

          {/* Description */}
          <p className={`text-[15px] sm:text-base leading-relaxed max-w-lg mb-7
            ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            I craft clean, modern & high-performance web applications with React.js,
            Node.js, Express.js and MongoDB. Passionate about smooth animations,
            scalable architecture, and exceptional user experiences.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TECH_PILLS.map(({ icon, label }) => (
              <span key={label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold
                  border transition-all duration-200 hover:-translate-y-0.5
                  ${isDarkMode
                    ? "bg-white/[0.04] border-white/10 text-slate-300 hover:border-ai-primary/40 hover:text-white"
                    : "bg-black/[0.04] border-black/10 text-slate-600 hover:border-ai-primary/40 hover:text-slate-900"
                  }`}
              >
                {icon} {label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="/Aniket Kusundal CV.pdf"
              download
              className="btn-shimmer inline-flex items-center gap-2 px-7 py-3 rounded-full
                bg-grad-primary text-white font-bold text-sm shadow-glow-blue
                hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(79,142,247,0.5)]
                transition-all duration-250 no-underline"
            >
              <FiDownload size={16} /> Download CV
            </a>
            <a
              href="https://wa.me/919175501971?text=Hello%20Aniket%2C%20I%20want%20to%20hire%20you!"
              target="_blank" rel="noreferrer"
              className={`inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm
                border transition-all duration-250 hover:-translate-y-1 no-underline
                ${isDarkMode
                  ? "border-white/15 bg-white/[0.05] text-slate-200 hover:border-ai-primary/50 hover:text-ai-primary hover:bg-[rgba(79,142,247,0.08)]"
                  : "border-slate-300 bg-white/70 text-slate-700 hover:border-ai-primary/50 hover:text-ai-primary hover:bg-[rgba(79,142,247,0.06)]"
                }`}
            >
              <FiBriefcase size={16} /> Hire Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs font-semibold tracking-wider uppercase mr-2 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
              Follow
            </span>
            {SOCIALS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank" rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center border no-underline
                  transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(79,142,247,0.5)]
                  hover:text-ai-primary hover:bg-[rgba(79,142,247,0.1)]
                  ${isDarkMode
                    ? "bg-white/[0.05] border-white/10 text-slate-400"
                    : "bg-black/[0.04] border-slate-200 text-slate-500"
                  }`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="flex-1 flex items-center justify-center relative min-w-[280px] animate-fade-in-right">
          {/* Neural canvas background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-30">
            <NeuralCanvas />
          </div>

          {/* Spinning rings */}
          {[380, 440, 510].map((size, i) => (
            <div key={size} className="absolute rounded-full border border-ai-primary/10"
              style={{
                width: size, height: size,
                animation: `spin ${20 + i * 10}s linear ${i % 2 === 0 ? "" : "reverse"} infinite`,
              }}
            />
          ))}

          {/* Photo card */}
          <div
            className="relative z-10 rounded-3xl overflow-hidden border border-ai-primary/20 cursor-pointer transition-all duration-500"
            style={{
              width: "clamp(240px, 33vw, 310px)",
              height: "clamp(300px, 42vw, 390px)",
              animation: "floatY 5s ease-in-out infinite",
              boxShadow: "0 24px 60px rgba(79,142,247,0.2), 0 0 0 1px rgba(79,142,247,0.1)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-10px) rotateY(3deg)";
              e.currentTarget.style.boxShadow = "0 40px 80px rgba(79,142,247,0.35), 0 0 0 1px rgba(79,142,247,0.25)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 24px 60px rgba(79,142,247,0.2), 0 0 0 1px rgba(79,142,247,0.1)";
            }}
          >
            <img src={profileImg} alt="Aniket Kusundal – Full Stack Developer" className="w-full h-full object-cover block" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/10 via-transparent to-ai-purple/10 pointer-events-none" />
          </div>

          {/* Floating badge — experience */}
          <div className="absolute bottom-4 -left-6 sm:-left-10 z-20 px-4 py-3 rounded-2xl
            bg-grad-primary text-white text-center shadow-glow-blue"
            style={{ animation: "floatY 4s ease-in-out 1s infinite" }}
          >
            <div className="text-xl font-black leading-none">{calcHeroExp()}</div>
            <div className="text-[10px] text-white/80 font-semibold mt-0.5">Experience</div>
          </div>

          {/* Floating badge — projects */}
          <div className="absolute top-4 -right-6 sm:-right-10 z-20 flex items-center gap-2 px-3 py-2.5 rounded-2xl
            border border-ai-primary/25 backdrop-blur-xl text-white"
            style={{ background: "rgba(10,15,30,0.9)", animation: "floatY 4.5s ease-in-out 0.5s infinite", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
          >
            <FiCode className="text-ai-primary" size={16} />
            <span className="text-xs font-bold text-ai-primary">10+ Projects</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-fade-in-up" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-ai-primary" style={{ animation: "pulseSlow 2s ease-in-out infinite" }} />
        <FiArrowDown className={`text-sm ${isDarkMode ? "text-slate-500" : "text-slate-400"}`} style={{ animation: "floatY 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
};

export default Hero;
