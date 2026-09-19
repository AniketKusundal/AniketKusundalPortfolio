import { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import { useToast } from '../context/ToastContext';
import ProjectConfigurator from './ProjectConfigurator';
import { FiMail, FiGithub, FiLinkedin, FiDownload, FiSend, FiUser, FiMessageSquare, FiCopy, FiSliders } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const { copyToClipboard } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', intent: 'client' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: '' }));
  };

  const handleInjectBrief = (brief, typeLabel) => {
    setForm((f) => ({
      ...f,
      intent: 'client',
      subject: `Project Inquiry: ${typeLabel}`,
      message: brief,
    }));
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const validate = () => {
    const t = {};
    if (!form.name.trim()) t.name = 'Name is required';
    if (!form.email.trim()) t.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) t.email = 'Invalid email';
    if (!form.message.trim()) t.message = 'Message is required';
    setErrors(t);
    return Object.keys(t).length === 0;
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const typeLabel = form.intent === 'recruiter' ? 'Recruitment / Job Opportunity' : 'Client / Web Development Project';
    const msg = `Hi Aniket,\n\nInquiry Type: ${typeLabel}\nName: ${form.name}\nEmail: ${form.email}${form.subject ? `\nSubject: ${form.subject}` : ''}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919175501971?text=${encodeURIComponent(msg)}`, '_blank');
    setForm({ name: '', email: '', subject: '', message: '', intent: 'client' });
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass = `w-full px-4 py-3 rounded-lg text-xs font-mono border border-[#222222] outline-none
    bg-[#0B0B0B] text-[#F5F5F5] placeholder:text-[#555555]
    transition-colors focus:border-[#E8734A]`;

  return (
    <section id="contact" className="section-pad pt-20">
      <div className="section-container">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">09 / CONTACT</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            CONNECT & COLLABORATE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2
            className="font-display font-bold text-[#F5F5F5] tracking-tight mb-2"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            HAVE A PROJECT?
          </h2>
          <div
            className="font-display font-bold text-[#E8734A] tracking-tight mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            LET'S BUILD IT.
          </div>
          <p className="text-base text-[#8A8A8A] max-w-2xl leading-relaxed">
            Whether you are a recruiter looking for a dedicated MERN Stack Developer or a business owner
            seeking a high-performance website, my inbox is open.
          </p>
        </motion.div>

        {/* Dual Audience Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#222222]">
            <span className="text-[10px] font-mono text-[#E8734A] uppercase tracking-widest block mb-2">
              FOR RECRUITERS & ENGINEERING MANAGERS
            </span>
            <h3 className="font-display font-bold text-xl text-[#F5F5F5] mb-2">
              LOOKING FOR A DEVELOPER?
            </h3>
            <p className="text-xs text-[#8A8A8A] leading-relaxed mb-4">
              Open to React.js, Full-Stack, and MERN engineering roles. Explore my resume, review GitHub codebases, or reach out directly for technical interviews.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono">
              <a
                href={personal.resumeUrl}
                download
                className="text-[#E8734A] hover:underline no-underline"
              >
                Download CV (PDF) ↗
              </a>
              <span className="text-[#333333]">•</span>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8A8A] hover:text-[#F5F5F5] no-underline"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#222222]">
            <span className="text-[10px] font-mono text-[#E8734A] uppercase tracking-widest block mb-2">
              FOR CLIENTS & BUSINESS OWNERS
            </span>
            <h3 className="font-display font-bold text-xl text-[#F5F5F5] mb-2">
              NEED A WEBSITE OR WEB APPLICATION?
            </h3>
            <p className="text-xs text-[#8A8A8A] leading-relaxed mb-4">
              Available for custom React websites, landing pages, business web presence, and WordPress customizations with responsive design and clean performance.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <button
                type="button"
                onClick={() => document.getElementById('project-scope-configurator')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#E8734A] hover:underline bg-transparent border-none p-0 cursor-pointer flex items-center gap-1 font-bold"
              >
                <span>Scope Calculator</span> ↓
              </button>
              <span className="text-[#333333]">•</span>
              <a
                href={`mailto:${personal.email}?subject=Project%20Inquiry`}
                className="text-[#CCCCCC] hover:underline no-underline"
              >
                Email For Quote ↗
              </a>
              <span className="text-[#333333]">•</span>
              <a
                href="https://wa.me/919175501971"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8A8A] hover:text-[#F5F5F5] no-underline"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Scope Configurator */}
        <div id="project-scope-configurator">
          <ProjectConfigurator onInjectBrief={handleInjectBrief} />
        </div>

        {/* Contact Form & Direct Touchpoints */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-4">
              DIRECT REACH
            </h4>

            <div
              className="p-4 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#E8734A]/50 transition-colors flex items-center justify-between text-[#F5F5F5] group"
            >
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3.5 no-underline text-[#F5F5F5] flex-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#222222] flex items-center justify-center text-[#E8734A]">
                  <FiMail size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#8A8A8A]">PRIMARY EMAIL</div>
                  <div className="text-xs sm:text-sm font-mono">{personal.email}</div>
                </div>
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(personal.email, 'Email copied to clipboard!');
                }}
                className="p-2 rounded-lg bg-[#0B0B0B] border border-[#222222] hover:border-[#E8734A] text-[#8A8A8A] hover:text-[#E8734A] transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                <FiCopy size={14} />
              </button>
            </div>

            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#E8734A]/50 transition-colors flex items-center gap-3.5 no-underline text-[#F5F5F5]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#222222] flex items-center justify-center text-[#E8734A]">
                <FiLinkedin size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#8A8A8A]">LINKEDIN NETWORK</div>
                <div className="text-xs sm:text-sm font-mono">linkedin.com/in/aniket-kusundal</div>
              </div>
            </a>

            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#E8734A]/50 transition-colors flex items-center gap-3.5 no-underline text-[#F5F5F5]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#222222] flex items-center justify-center text-[#E8734A]">
                <FiGithub size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#8A8A8A]">GITHUB REPOSITORIES</div>
                <div className="text-xs sm:text-sm font-mono">github.com/AniketKusundal</div>
              </div>
            </a>

            <a
              href="https://wa.me/919175501971"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#E8734A]/50 transition-colors flex items-center gap-3.5 no-underline text-[#F5F5F5]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B0B0B] border border-[#222222] flex items-center justify-center text-emerald-400">
                <FaWhatsapp size={16} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#8A8A8A]">WHATSAPP DIRECT</div>
                <div className="text-xs sm:text-sm font-mono">{personal.phoneDisplay}</div>
              </div>
            </a>
          </div>

          {/* Message Dispatch (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={sendWhatsApp} className="p-8 rounded-2xl bg-[#141414] border border-[#222222] flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
                <h4 className="font-display font-bold text-lg text-[#F5F5F5]">
                  SEND DIRECT DISPATCH
                </h4>
                <span className="text-[10px] font-mono text-[#8A8A8A]">
                  DIRECT TO WHATSAPP
                </span>
              </div>

              {/* Inquiry Intent Selector */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, intent: 'client' }))}
                  className={`py-2 px-3 rounded-lg text-xs font-mono cursor-pointer border transition-colors ${
                    form.intent === 'client'
                      ? 'bg-[#E8734A]/10 border-[#E8734A] text-[#E8734A]'
                      : 'bg-[#0B0B0B] border-[#222222] text-[#8A8A8A]'
                  }`}
                >
                  Client / Project
                </button>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, intent: 'recruiter' }))}
                  className={`py-2 px-3 rounded-lg text-xs font-mono cursor-pointer border transition-colors ${
                    form.intent === 'recruiter'
                      ? 'bg-[#E8734A]/10 border-[#E8734A] text-[#E8734A]'
                      : 'bg-[#0B0B0B] border-[#222222] text-[#8A8A8A]'
                  }`}
                >
                  Recruitment / Role
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase text-[#8A8A8A] block mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-[10px] mt-1 font-mono">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-[#8A8A8A] block mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-[10px] mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-[#8A8A8A] block mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Website redesign, Full-Stack opening, Project collaboration..."
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-[#8A8A8A] block mb-1">
                  MESSAGE DETAILS *
                </label>
                <textarea
                  name="message"
                  placeholder="Describe your requirements, timeline, or position details..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-400 text-[10px] mt-1 font-mono">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-3.5 cursor-pointer border-none flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider"
              >
                <FaWhatsapp size={15} />
                <span>Transmit via WhatsApp</span>
              </button>

              {sent && (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <FiSend size={13} />
                  <span>WhatsApp conversation generated! Opening app...</span>
                </div>
              )}

              <p className="text-[10px] font-mono text-[#666666] text-center mt-1">
                Opens WhatsApp with pre-filled message directly to +91 91755 01971. No spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
