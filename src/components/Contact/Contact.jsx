import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  FiMapPin, FiMail, FiPhone, FiSend,
  FiGithub, FiLinkedin, FiInstagram, FiUser, FiMessageSquare
} from "react-icons/fi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const CONTACT_INFO = [
  { icon: <FiMapPin size={18} />, label: "Location", value: "Pune, Maharashtra, India" },
  { icon: <FiMail size={18} />, label: "Email", value: "aniketgovindkusundal@gmail.com", href: "mailto:aniketgovindkusundal@gmail.com" },
  { icon: <FiPhone size={18} />, label: "Phone", value: "+91 9175501971", href: "tel:+919175501971" },
];

const SOCIALS = [
  { icon: <FiGithub size={18} />, label: "GitHub", href: "https://github.com/AniketKusundal", color: "hover:text-white hover:border-white/40" },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/aniket-kusundal", color: "hover:text-[#0ea5e9] hover:border-[#0ea5e9]/50" },
  { icon: <FiInstagram size={18} />, label: "Instagram", href: "https://www.instagram.com/_aaniket_k?igsh=Nms4cGd4eTl6ZzMx", color: "hover:text-pink-400 hover:border-pink-400/50" },
  { icon: <FaYoutube size={18} />, label: "YouTube", href: "https://www.youtube.com/@AniketCodeLab", color: "hover:text-red-500 hover:border-red-500/50" },
];

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(er => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    let t = {};
    if (!form.name.trim()) t.name = "Name is required";
    if (!form.email.trim()) t.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) t.email = "Invalid email";
    if (!form.message.trim()) t.message = "Message is required";
    setErrors(t);
    return Object.keys(t).length === 0;
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = `Hi Aniket,\n\nName: ${form.name}\nEmail: ${form.email}${form.subject ? `\nSubject: ${form.subject}` : ""}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919175501971?text=${encodeURIComponent(msg)}`, "_blank");
    setForm({ name: "", email: "", subject: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputBase = `w-full px-4 py-3 rounded-xl text-sm font-medium border outline-none transition-all duration-200 focus:border-ai-primary/60 focus:ring-2 focus:ring-ai-primary/15
    ${isDarkMode
      ? "bg-white/[0.04] border-white/10 text-slate-200 placeholder:text-slate-600"
      : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400"
    }`;

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative overflow-hidden section-pad
        ${isDarkMode ? "bg-gradient-to-br from-ai-bg2 via-ai-bg to-ai-bg2" : "bg-gradient-to-br from-blue-50/40 via-slate-50 to-violet-50/30"}`}
    >
      <div className="absolute inset-0 neural-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(79,142,247,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 reveal`}>
          <div className="ai-badge mb-4"><HiSparkles size={12} /> Contact</div>
          <h2 className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-800"}`}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className={`mt-3 text-base max-w-xl mx-auto ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            Have a project in mind or want to hire me? Drop a message — I reply within 24 hours.
          </p>
          <div className="glow-line w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT — Info card */}
          <div className={`lg:col-span-2 reveal reveal-left`} style={{ '--delay': '100ms' }}>
            <div className={`glass border rounded-2xl p-6 sm:p-8 h-full ${isDarkMode ? "border-white/[0.07]" : "border-slate-200"}`}>

              <h3 className={`text-xl font-extrabold font-display mb-2 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                Let&apos;s work together
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                I&apos;m currently open to <strong className={isDarkMode ? "text-slate-200" : "text-slate-700"}>full-time, freelance, and internship</strong> opportunities.
                Feel free to reach out through any channel.
              </p>

              {/* Contact rows */}
              <div className="flex flex-col gap-4 mb-8">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div key={label} className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-200
                    ${isDarkMode ? "border-white/[0.06] hover:border-ai-primary/30 bg-white/[0.02]" : "border-slate-200 hover:border-ai-primary/30 bg-white/60"}`}>
                    <span className="text-ai-primary mt-0.5 shrink-0">{icon}</span>
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>{label}</div>
                      {href ? (
                        <a href={href} className={`text-sm font-medium no-underline hover:text-ai-primary transition-colors ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                          {value}
                        </a>
                      ) : (
                        <span className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Find me on</p>
                <div className="flex flex-wrap gap-2">
                  {SOCIALS.map(({ icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank" rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border no-underline
                        transition-all duration-200 hover:-translate-y-1 ${color}
                        ${isDarkMode ? "bg-white/[0.04] border-white/10 text-slate-400" : "bg-white border-slate-200 text-slate-500"}`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form
              onSubmit={sendWhatsApp}
              className={`glass border rounded-2xl p-6 sm:p-8 flex flex-col gap-4 ${isDarkMode ? "border-white/[0.07]" : "border-slate-200"}`}
            >
              <h3 className={`text-xl font-extrabold font-display mb-1 ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                Send a Message
              </h3>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    <FiUser size={12} /> Name *
                  </label>
                  <input
                    type="text" name="name" placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    className={`${inputBase} ${errors.name ? "border-red-500/60 ring-2 ring-red-500/10" : ""}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    <FiMail size={12} /> Email *
                  </label>
                  <input
                    type="email" name="email" placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                    className={`${inputBase} ${errors.email ? "border-red-500/60" : ""}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <FiMessageSquare size={12} /> Subject
                </label>
                <input
                  type="text" name="subject" placeholder="Project inquiry, Job offer, Collaboration..."
                  value={form.subject} onChange={handleChange}
                  className={inputBase}
                />
              </div>

              {/* Message */}
              <div>
                <label className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <FiMessageSquare size={12} /> Message *
                </label>
                <textarea
                  name="message" placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={handleChange} rows={5}
                  className={`${inputBase} resize-none ${errors.message ? "border-red-500/60" : ""}`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-shimmer w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
                  bg-grad-primary text-white font-bold text-sm shadow-glow-blue
                  hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(79,142,247,0.5)]
                  transition-all duration-250 cursor-pointer border-none"
              >
                <FaWhatsapp size={17} /> Send via WhatsApp
              </button>

              {sent && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-semibold">
                  <FiSend size={15} /> Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              <p className={`text-xs text-center ${isDarkMode ? "text-slate-600" : "text-slate-400"}`}>
                Your message will open WhatsApp with the content pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
