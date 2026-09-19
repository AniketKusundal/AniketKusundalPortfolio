import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import profileImg from '../assets/aniket.png';
import { FiMapPin, FiBookOpen, FiBriefcase, FiCode } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="section-pad pt-20">
      <div className="section-container">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">06 / ABOUT</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            PERSPECTIVE & BACKGROUND
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-[#F5F5F5] tracking-tight mb-16"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
        >
          BEHIND THE CODE.
        </motion.h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Profile (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative max-w-[340px] w-full">
              <div className="rounded-2xl overflow-hidden border border-[#262626] bg-[#141414] shadow-2xl">
                <img
                  src={profileImg}
                  alt="Aniket Kusundal — MERN Stack Developer & Website Developer"
                  className="w-full aspect-[4/5] object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              {/* Status pill overlay */}
              <div className="absolute -bottom-4 right-4 bg-[#141414]/95 border border-[#262626] backdrop-blur-md rounded-xl p-4 shadow-xl font-mono text-xs">
                <div className="text-[#F5F5F5] font-bold">Aniket Kusundal</div>
                <div className="text-[11px] text-[#E8734A] mt-0.5">
                  Website Developer @ DigiSevaks
                </div>
                <div className="text-[10px] text-[#8A8A8A] mt-1">Pune, Maharashtra</div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Biography (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-[#8A8A8A] text-base sm:text-lg leading-relaxed"
          >
            <p className="text-[#F5F5F5] font-medium text-lg sm:text-xl">
              I am a developer who believes software should be reliable, well-structured, and purposeful.
            </p>

            <p>
              My path started with a Bachelor’s degree in Computer Science from Deogiri Institute,
              where I spent three years understanding algorithms, databases, and programming fundamentals.
              Today, I am furthering that specialization through an M.Sc. in Computer Applications at
              MES Abasaheb Garware College in Pune.
            </p>

            <p>
              Currently, I work as a <strong className="text-[#F5F5F5]">Website Developer at DigiSevaks Media Agency</strong> in Pune,
              where I build client websites using React.js and Tailwind CSS, maintain WordPress platforms,
              and integrate interactive components for business clients.
            </p>

            <p>
              When I am not delivering client projects, I build full-stack web applications with
              Node.js, Express, MongoDB, and modern AI APIs—focusing on real document parsing, OCR pipelines,
              and secure REST architectures.
            </p>

            {/* Quick Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#222222] font-mono text-xs">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-[#222222]">
                <FiMapPin className="text-[#E8734A] mt-0.5 shrink-0" size={15} />
                <div>
                  <span className="text-[#8A8A8A] block">BASE LOCATION</span>
                  <span className="text-[#F5F5F5] font-semibold">{personal.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-[#222222]">
                <FiBookOpen className="text-[#E8734A] mt-0.5 shrink-0" size={15} />
                <div>
                  <span className="text-[#8A8A8A] block">ACADEMIC STANDING</span>
                  <span className="text-[#F5F5F5] font-semibold">M.Sc. Computer Applications (CGPA 7.32)</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-[#222222]">
                <FiBriefcase className="text-[#E8734A] mt-0.5 shrink-0" size={15} />
                <div>
                  <span className="text-[#8A8A8A] block">ACTIVE EMPLOYER</span>
                  <span className="text-[#F5F5F5] font-semibold">{personal.currentRole.company}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141414] border border-[#222222]">
                <FiCode className="text-[#E8734A] mt-0.5 shrink-0" size={15} />
                <div>
                  <span className="text-[#8A8A8A] block">CORE SPECIALIZATION</span>
                  <span className="text-[#F5F5F5] font-semibold">MERN Stack & Client Websites</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
