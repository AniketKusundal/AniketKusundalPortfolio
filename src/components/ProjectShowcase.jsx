import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects, secondaryProjects } from '../data/projects';
import { WanderAIVisual, ResuMatchVisual } from './ProjectVisuals';
import { FiGithub, FiExternalLink, FiX, FiCheckCircle, FiLayers, FiFilter } from 'react-icons/fi';

export default function ProjectShowcase({ activeTechFilter, onClearFilter, externalCaseStudyId, onResetExternalCaseStudy }) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  useEffect(() => {
    if (externalCaseStudyId) {
      const match = featuredProjects.find((p) => p.id === externalCaseStudyId);
      if (match) {
        setSelectedCaseStudy(match);
      }
      onResetExternalCaseStudy && onResetExternalCaseStudy();
    }
  }, [externalCaseStudyId, onResetExternalCaseStudy]);

  const matchesFilter = (techList = []) => {
    if (!activeTechFilter) return true;
    return techList.some((t) => t.toLowerCase().includes(activeTechFilter.toLowerCase()));
  };

  return (
    <section id="projects" className="section-pad pt-20">
      <div className="section-container">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">04 / PROJECTS</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            FEATURED ENGINEERING & ARCHITECTURE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-end justify-between gap-6 mb-4">
            <h2
              className="font-display font-bold text-[#F5F5F5] tracking-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              SYSTEMS BUILT TO SOLVE REAL PROBLEMS.
            </h2>

            {/* Active Filter Pill */}
            {activeTechFilter && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#E8734A] text-xs font-mono text-[#F5F5F5]">
                <FiFilter className="text-[#E8734A]" size={12} />
                <span>FILTERED: <strong className="text-[#E8734A]">{activeTechFilter}</strong></span>
                <button
                  onClick={onClearFilter}
                  className="ml-1 text-[#8A8A8A] hover:text-[#F5F5F5] cursor-pointer bg-transparent border-none p-0"
                  title="Clear Filter"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <p className="text-base text-[#8A8A8A] max-w-2xl">
            Full-stack applications built with the MERN stack, integrated with Google Gemini AI reasoning,
            OCR document parsing pipelines, and cloud microservices.
          </p>
        </motion.div>

        {/* Featured Projects - Cinematic Showcase with Interactive Visuals */}
        <div className="space-y-20 mb-24">
          {featuredProjects.map((project) => {
            const isMatch = matchesFilter(project.tech);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`p-6 sm:p-10 rounded-2xl bg-[#141414] border transition-all duration-500 ${
                  activeTechFilter && !isMatch
                    ? 'opacity-40 border-[#1E1E1E]'
                    : isMatch && activeTechFilter
                    ? 'border-[#E8734A] ring-1 ring-[#E8734A]/20'
                    : 'border-[#222222] hover:border-[#E8734A]/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* High-Fidelity UI & Architecture Visual (6 cols) */}
                  <div className="lg:col-span-6 flex flex-col">
                    {project.id === 'wanderai' ? (
                      <WanderAIVisual />
                    ) : (
                      <ResuMatchVisual />
                    )}
                  </div>

                  {/* Project Details & Case Study CTA (6 cols) */}
                  <div className="lg:col-span-6 flex flex-col justify-between pt-2">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8734A]">
                          FEATURED PROJECT #{project.number}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0B0B] border border-[#262626] text-[#8A8A8A]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F5] mb-2">
                        {project.title} <span className="text-[#8A8A8A] text-lg font-normal">— {project.subtitle}</span>
                      </h3>

                      <p className="text-sm sm:text-base text-[#8A8A8A] leading-relaxed mb-6">
                        {project.caseStudy.overview}
                      </p>

                      {/* Key Technical Highlights */}
                      <div className="space-y-2 mb-6">
                        {project.caseStudy.keyFeatures.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#F5F5F5]">
                            <span className="text-[#E8734A] mt-0.5">•</span>
                            <span className="text-[#CCCCCC] leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                              activeTechFilter && t.toLowerCase().includes(activeTechFilter.toLowerCase())
                                ? 'bg-[#E8734A]/20 border border-[#E8734A] text-[#E8734A] font-bold'
                                : 'bg-[#0B0B0B] border border-[#222222] text-[#8A8A8A]'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#222222]">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="btn-primary cursor-pointer border-none text-xs font-semibold flex items-center gap-2"
                      >
                        <FiLayers size={14} />
                        <span>EXPLORE FULL CASE STUDY</span>
                      </button>

                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg border border-[#222222] bg-[#0B0B0B] hover:border-[#E8734A]/50 text-xs font-mono text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors flex items-center gap-2 no-underline"
                        >
                          <FiGithub size={14} />
                          <span>SOURCE REPO</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg border border-[#222222] bg-[#0B0B0B] hover:border-[#E8734A]/50 text-xs font-mono text-[#E8734A] hover:text-[#F5F5F5] transition-colors flex items-center gap-2 no-underline"
                        >
                          <FiExternalLink size={14} />
                          <span>LIVE APP</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary Verified Projects */}
        <div className="pt-8 border-t border-[#222222]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F5]">
              ADDITIONAL CODEBASES & TOOLS
            </h3>
            <span className="text-xs font-mono text-[#8A8A8A]">VERIFIED OPEN-SOURCE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((p, i) => {
              const isMatch = matchesFilter(p.tech);
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`p-6 rounded-xl bg-[#141414] border flex flex-col justify-between group transition-colors ${
                    activeTechFilter && !isMatch
                      ? 'opacity-40 border-[#1E1E1E]'
                      : isMatch && activeTechFilter
                      ? 'border-[#E8734A] ring-1 ring-[#E8734A]/20'
                      : 'border-[#222222] hover:border-[#E8734A]/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-[#8A8A8A]">{p.number}</span>
                      <span className="text-[10px] font-mono text-[#E8734A] uppercase tracking-wider">
                        {p.category}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-[#F5F5F5] mb-2 group-hover:text-[#E8734A] transition-colors">
                      {p.title}
                    </h4>

                    <p className="text-xs text-[#8A8A8A] leading-relaxed mb-4">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className={`text-[11px] font-mono ${
                            activeTechFilter && t.toLowerCase().includes(activeTechFilter.toLowerCase())
                              ? 'text-[#E8734A] font-bold'
                              : 'text-[#666666]'
                          }`}
                        >
                          {t}{p.tech.indexOf(t) < p.tech.length - 1 ? ' •' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-[#8A8A8A] group-hover:text-[#E8734A] transition-colors no-underline pt-3 border-t border-[#1C1C1C]"
                    >
                      <FiGithub size={13} />
                      <span>View Repository ↗</span>
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/AniketKusundal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-xs font-mono no-underline"
          >
            <FiGithub size={14} />
            <span>EXPLORE ALL REPOSITORIES ON GITHUB</span>
          </a>
        </motion.div>
      </div>

      {/* ================= FULL CASE STUDY MODAL / DRAWER ================= */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md flex justify-end p-0 sm:p-4 overflow-y-auto"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#141414] border-l sm:border border-[#222222] sm:rounded-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto max-h-screen"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222222]">
                  <div>
                    <span className="text-[11px] font-mono text-[#E8734A] uppercase tracking-widest">
                      CASE STUDY #{selectedCaseStudy.number}
                    </span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F5F5] mt-1">
                      {selectedCaseStudy.title}
                    </h2>
                    <p className="text-xs font-mono text-[#8A8A8A] mt-0.5">
                      {selectedCaseStudy.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="w-9 h-9 rounded-full bg-[#0B0B0B] border border-[#222222] text-[#8A8A8A] hover:text-[#F5F5F5] hover:border-[#E8734A]/50 flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </div>

                {/* Case Study 10-Point Sections */}
                <div className="space-y-6 text-sm text-[#8A8A8A]">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-1.5 flex items-center gap-2">
                      <span className="text-[#E8734A]">01</span> OVERVIEW
                    </h4>
                    <p className="leading-relaxed">{selectedCaseStudy.caseStudy.overview}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-1.5 flex items-center gap-2">
                      <span className="text-[#E8734A]">02</span> THE PROBLEM
                    </h4>
                    <p className="leading-relaxed">{selectedCaseStudy.caseStudy.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-1.5 flex items-center gap-2">
                      <span className="text-[#E8734A]">03</span> THE IDEA & ARCHITECTURE
                    </h4>
                    <p className="leading-relaxed">{selectedCaseStudy.caseStudy.idea}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-1.5 flex items-center gap-2">
                      <span className="text-[#E8734A]">04</span> THE BUILD & CODE DESIGN
                    </h4>
                    <p className="leading-relaxed">{selectedCaseStudy.caseStudy.build}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-2 flex items-center gap-2">
                      <span className="text-[#E8734A]">05</span> TECHNOLOGY STACK
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCaseStudy.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded bg-[#0B0B0B] border border-[#222222] text-[11px] font-mono text-[#CCCCCC]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-2 flex items-center gap-2">
                      <span className="text-[#E8734A]">06</span> KEY FACTUAL FEATURES
                    </h4>
                    <div className="space-y-2">
                      {selectedCaseStudy.caseStudy.keyFeatures.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <FiCheckCircle className="text-[#E8734A] mt-0.5 shrink-0" size={13} />
                          <span className="text-[#CCCCCC] leading-relaxed">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-1.5 flex items-center gap-2">
                      <span className="text-[#E8734A]">07</span> DEPLOYMENT & HOSTING
                    </h4>
                    <p className="leading-relaxed">{selectedCaseStudy.caseStudy.deployment}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F5] mb-1.5 flex items-center gap-2">
                      <span className="text-[#E8734A]">08</span> WHAT I LEARNED
                    </h4>
                    <p className="leading-relaxed">{selectedCaseStudy.caseStudy.whatILearned}</p>
                  </div>
                </div>
              </div>

              {/* Links Footer */}
              <div className="pt-6 mt-8 border-t border-[#222222] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {selectedCaseStudy.repo && (
                    <a
                      href={selectedCaseStudy.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs flex items-center gap-2 no-underline"
                    >
                      <FiGithub size={13} />
                      <span>SOURCE CODE (GITHUB)</span>
                    </a>
                  )}
                  {selectedCaseStudy.live && (
                    <a
                      href={selectedCaseStudy.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs flex items-center gap-2 no-underline"
                    >
                      <FiExternalLink size={13} />
                      <span>LIVE PROJECT</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="text-xs font-mono text-[#8A8A8A] hover:text-[#F5F5F5] cursor-pointer bg-transparent border-none"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
