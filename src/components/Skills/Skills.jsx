import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { HiSparkles } from "react-icons/hi2";

import html from "../../assets/icons/HTML5.png";
import css from "../../assets/icons/CSS3.png";
import js from "../../assets/icons/JavaScript.png";
import react from "../../assets/icons/React.png";
import node from "../../assets/icons/nodejs.png";
import express from "../../assets/icons/express.png";
import mongo from "../../assets/icons/MongoDB.png";
import firebase from "../../assets/icons/Firebase.png";
import mysql from "../../assets/icons/MySQL.png";
import bootstrap from "../../assets/icons/Bootstrap.png";

const SKILLS = [
  { name: "HTML5", icon: html, level: 95, color: "#E44D26" },
  { name: "CSS3", icon: css, level: 90, color: "#2965F1" },
  { name: "JavaScript", icon: js, level: 88, color: "#F7DF1E" },
  { name: "React.js", icon: react, level: 85, color: "#61DAFB" },
  { name: "Node.js", icon: node, level: 80, color: "#68A063" },
  { name: "Express.js", icon: express, level: 78, color: "#888888" },
  { name: "MongoDB", icon: mongo, level: 80, color: "#58AA50" },
  { name: "Firebase", icon: firebase, level: 75, color: "#FFCA28" },
  { name: "MySQL", icon: mysql, level: 72, color: "#00758F" },
  { name: "Bootstrap", icon: bootstrap, level: 85, color: "#7952B3" },
];

export default function Skills() {
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [animated, setAnimated] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        // stagger animate each card
        SKILLS.forEach((_, i) => setTimeout(() => setAnimated(prev => [...prev, i]), i * 80));
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative overflow-hidden section-pad
        ${isDarkMode ? "bg-gradient-to-br from-ai-bg2 via-ai-bg to-ai-bg2" : "bg-gradient-to-br from-blue-50/50 via-slate-50 to-violet-50/30"}`}
    >
      <div className="absolute inset-0 neural-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(79,142,247,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 reveal`}>
          <div className="ai-badge mb-4"><HiSparkles size={12} /> Technical Skills</div>
          <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight
            ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className={`mt-3 text-base max-w-xl mx-auto ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            Technologies I work with to build modern, scalable web applications
          </p>
          <div className="glow-line w-24 mx-auto mt-4" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass border rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer
                transition-all duration-300 group
                ${animated.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                ${hovered === i
                  ? "border-[rgba(79,142,247,0.5)] shadow-glow-blue -translate-y-2"
                  : isDarkMode ? "border-white/[0.07]" : "border-slate-200"
                }`}
              style={{ transitionDelay: animated.includes(i) ? "0ms" : `${i * 60}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl"
                  style={{ background: `radial-gradient(circle, ${skill.color}22 0%, transparent 70%)`, filter: "blur(8px)", opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s" }} />
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <p className={`text-xs font-bold text-center leading-tight
                ${isDarkMode ? "text-slate-300 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900"}`}>
                {skill.name}
              </p>

              {/* Progress bar */}
              <div className={`w-full h-1 rounded-full overflow-hidden ${isDarkMode ? "bg-white/10" : "bg-slate-200"}`}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, #4f8ef7, #7c5cf6)`,
                    transitionDelay: `${0.3 + i * 0.06}s`,
                    boxShadow: hovered === i ? "0 0 8px rgba(79,142,247,0.6)" : "none",
                  }}
                />
              </div>

              {/* Level number */}
              <span className={`text-[10px] font-bold ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                {skill.level}%
              </span>
            </div>
          ))}
        </div>

        {/* Also familiar with */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className={`text-sm font-semibold mb-4 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Git & GitHub", "REST APIs", "Tailwind CSS", "JWT Auth", "Mongoose", "Postman", "VS Code", "Vercel / Netlify"].map(t => (
              <span key={t}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                  hover:border-ai-primary/50 hover:text-ai-primary cursor-default
                  ${isDarkMode ? "border-white/10 text-slate-400 bg-white/[0.03]" : "border-slate-200 text-slate-500 bg-white/50"}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
