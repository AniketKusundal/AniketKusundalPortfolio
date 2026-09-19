import { motion } from 'framer-motion';
import { education, continuousTimeline } from '../data/education';
import { FiCalendar, FiAward, FiArrowRight } from 'react-icons/fi';

export default function Journey() {
  return (
    <div id="beginning" className="space-y-24">
      {/* ================= CHAPTER 02: BEGINNING ================= */}
      <section className="section-container pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">02 / BEGINNING</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            ACADEMIC FOUNDATION
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-[#F5F5F5] tracking-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
        >
          GROUNDED IN COMPUTER SCIENCE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-base text-[#8A8A8A] max-w-2xl mb-12"
        >
          Strong academic foundations in software algorithms, web systems, and database engineering
          from undergraduate computer science to advanced master-level computer applications.
        </motion.p>

        {/* Education Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="p-6 sm:p-8 rounded-xl bg-[#141414] border border-[#222222] hover:border-[#E8734A]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8A8A8A]">
                    <FiCalendar size={12} />
                    {edu.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border border-[#E8734A]/30 text-[#E8734A] bg-[#E8734A]/10">
                    {edu.score}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F5] mb-2">
                  {edu.degree}
                </h3>

                <p className="text-sm font-medium text-[#E8734A] mb-4">
                  {edu.institute} — {edu.location}
                </p>

                <p className="text-sm text-[#8A8A8A] leading-relaxed">
                  {edu.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8A8A8A]">STATUS</span>
                <span className="text-xs font-mono text-[#F5F5F5] font-semibold">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CHAPTER 03: BUILDER ================= */}
      <section id="builder" className="section-container pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">03 / BUILDER</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            PROGRESSION & PHILOSOPHY
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
            THE EVOLUTION OF A DEVELOPER.
          </h2>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[#8A8A8A]">
            <span>LEARNING</span>
            <FiArrowRight className="text-[#E8734A]" />
            <span>BUILDING</span>
            <FiArrowRight className="text-[#E8734A]" />
            <span>WORKING</span>
            <FiArrowRight className="text-[#E8734A]" />
            <span>SHIPPING</span>
            <FiArrowRight className="text-[#E8734A]" />
            <span>GROWING</span>
            <FiArrowRight className="text-[#E8734A]" />
            <span className="text-[#E8734A] font-semibold">WHAT’S NEXT</span>
          </div>
        </motion.div>

        {/* Continuous Career Timeline Thread */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#262626] space-y-12 ml-2 sm:ml-4">
          {continuousTimeline.map((item, idx) => {
            const isCurrent = item.year === '2026' || item.year === 'NOW';
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 * idx }}
                className="relative group"
              >
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    isCurrent
                      ? 'border-[#E8734A] bg-[#0B0B0B] ring-4 ring-[#E8734A]/20'
                      : 'border-[#444444] bg-[#0B0B0B] group-hover:border-[#E8734A]'
                  }`}
                />

                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <span className="font-mono text-xs font-bold tracking-wider text-[#E8734A]">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#141414] border border-[#262626] text-[#8A8A8A]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F5F5] mb-2">
                  {item.milestone}
                </h3>

                <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-2xl">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
