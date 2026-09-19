import { motion } from 'framer-motion';
import { currentlyLearning } from '../data/skills';
import { FiTrendingUp, FiTerminal } from 'react-icons/fi';

export default function Evolving() {
  return (
    <section id="next" className="section-pad pt-20">
      <div className="section-container">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">08 / NEXT</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            TRAJECTORY & SIGNATURE
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
            WHAT'S NEXT?
          </h2>
          <p className="text-base text-[#8A8A8A] max-w-2xl leading-relaxed">
            The developer journey never stops. I am actively expanding my engineering depth,
            adopting stricter language tooling, and exploring AI-augmented systems.
          </p>
        </motion.div>

        {/* Growth Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-4">
              ACTIVE LEARNING PATHS
            </h3>
            {currentlyLearning.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-5 rounded-xl bg-[#141414] border border-[#222222] flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#E8734A]">0{idx + 1}</span>
                    <h4 className="font-display font-bold text-base text-[#F5F5F5]">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0B0B] border border-[#262626] text-[#CCCCCC]">
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* System Terminal Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-2xl bg-[#0B0B0B] border border-[#222222]">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222222]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F5F5F5]">
                  <FiTerminal className="text-[#E8734A]" />
                  <span>SYSTEM_SPEC // ANIKET.EXE</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">ACTIVE PROCESS</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]">
                  <span className="text-[#8A8A8A]">IDENTITY:</span>
                  <span className="text-[#F5F5F5] font-semibold">ANIKET.EXE</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]">
                  <span className="text-[#8A8A8A]">VERSION:</span>
                  <span className="text-[#F5F5F5] font-semibold">2026.1</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]">
                  <span className="text-[#8A8A8A]">STATUS:</span>
                  <span className="text-[#E8734A] font-semibold">IN DEVELOPMENT</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]">
                  <span className="text-[#8A8A8A]">CURRENT FOCUS:</span>
                  <span className="text-[#F5F5F5]">React • Full Stack • AI APIs • TypeScript</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]">
                  <span className="text-[#8A8A8A]">ACTIVE ROLE:</span>
                  <span className="text-[#CCCCCC]">Website Developer @ DigiSevaks</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-[11px] font-mono text-[#8A8A8A]">
              <span>CORE CYCLE:</span>
              <span className="text-[#E8734A]">BUILD → LEARN → SHIP → ITERATE</span>
            </div>
          </div>
        </div>

        {/* ================= SECTION 22: SIGNATURE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0E0E0E] border border-[#222222] text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="text-xs font-mono tracking-widest uppercase text-[#E8734A] block mb-3">
              SIGNATURE PHILOSOPHY
            </span>

            <h3
              className="font-display font-black text-[#F5F5F5] tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}
            >
              BUILDING. <br />
              LEARNING. <br />
              <span className="text-[#E8734A]">SHIPPING.</span>
            </h3>

            <p className="font-mono text-xs sm:text-sm text-[#8A8A8A] max-w-lg mx-auto">
              ANIKET / IN DEVELOPMENT • VERSION 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
