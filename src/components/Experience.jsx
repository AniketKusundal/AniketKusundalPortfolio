import { motion } from 'framer-motion';
import { experience, experienceStory } from '../data/experience';
import { FiCalendar, FiMapPin, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="section-pad pt-20">
      <div className="section-container">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">05 / EXPERIENCE</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            PROFESSIONAL ROLES & IMPACT
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
            className="font-display font-bold text-[#F5F5F5] tracking-tight mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            REAL EXPERIENCE. VERIFIED ROLES.
          </h2>
          <p className="text-base text-[#8A8A8A] max-w-2xl leading-relaxed">
            Professional track record developing client-facing web applications, responsive websites,
            and end-to-end production systems with the MERN stack.
          </p>
        </motion.div>

        {/* Experience Progression Cards */}
        <div className="space-y-12 mb-20">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
              className={`p-8 sm:p-10 rounded-2xl border transition-colors ${
                exp.current
                  ? 'bg-[#141414] border-[#E8734A]/40 ring-1 ring-[#E8734A]/10'
                  : 'bg-[#121212] border-[#222222]'
              }`}
            >
              {/* Header Details */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 mb-6 border-b border-[#222222]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F5]">
                      {exp.company}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        CURRENT ROLE
                      </span>
                    )}
                  </div>

                  <div className="text-base sm:text-lg font-mono text-[#E8734A] font-medium">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-[#8A8A8A]">
                  <div className="flex items-center gap-1.5">
                    <FiCalendar size={13} className="text-[#E8734A]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiMapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary & Factual Responsibilities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                  <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
                    FACTUAL RESPONSIBILITIES & DELIVERABLES:
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#CCCCCC]">
                        <FiCheckCircle className="text-[#E8734A] mt-0.5 shrink-0" size={15} />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="lg:col-span-4 lg:border-l lg:border-[#222222] lg:pl-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-3">
                      TECHNOLOGIES UTILIZED:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-[#0B0B0B] border border-[#222222] text-xs font-mono text-[#8A8A8A]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#1C1C1C] text-[11px] font-mono text-[#666666]">
                    Verified experience from current resume
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Progression Story */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0B0B0B] border border-[#222222]">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#E8734A] mb-2">
            CAREER TRAJECTORY
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F5] mb-8">
            PROGRESSION TIMELINE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experienceStory.map((story) => (
              <div
                key={story.step}
                className="p-5 rounded-xl bg-[#141414] border border-[#222222] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A] mb-3">
                    <span className="text-[#E8734A] font-bold">{story.step}</span>
                    <span>{story.date}</span>
                  </div>
                  <div className="font-display font-bold text-base text-[#F5F5F5] mb-1">
                    {story.company}
                  </div>
                  <div className="text-xs font-mono text-[#E8734A] mb-3">
                    {story.role}
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {story.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
