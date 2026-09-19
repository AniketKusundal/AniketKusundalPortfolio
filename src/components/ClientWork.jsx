import { motion } from 'framer-motion';
import { clientServices, clientProjects } from '../data/clientWork';
import { FiExternalLink, FiCheck, FiArrowRight } from 'react-icons/fi';

export default function ClientWork() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="clients" className="section-pad pt-20">
      <div className="section-container">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">05 / CLIENT WORK</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            BUILT FOR REAL BUSINESSES
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
            FROM CODE TO CLIENTS.
          </h2>
          <p className="text-base text-[#8A8A8A] max-w-2xl leading-relaxed">
            Alongside software engineering projects, I design and build production-ready websites
            for businesses, agencies, and local brands. Here is real client work delivered with
            React.js, Tailwind CSS, and WordPress.
          </p>
        </motion.div>

        {/* Real Client Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {clientProjects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="p-8 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#E8734A]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#0B0B0B] border border-[#262626] text-[#E8734A]">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-[#8A8A8A]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#F5F5F5] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-[#8A8A8A] mb-6">
                  Client: {item.client}
                </p>

                <div className="space-y-4 mb-6 text-sm text-[#8A8A8A]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#CCCCCC] block mb-1">
                      WHAT THE CLIENT NEEDED:
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#999999]">
                      {item.whatClientNeeded}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#CCCCCC] block mb-1">
                      WHAT I BUILT:
                    </span>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#CCCCCC]">
                      {item.whatIBuilt}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#0B0B0B] border border-[#222222] text-[11px] font-mono text-[#8A8A8A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Live Link */}
              <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                {item.liveUrl ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#E8734A] hover:underline no-underline"
                  >
                    <span>Visit Live Website</span>
                    <FiExternalLink size={13} />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-[#666666]">
                    Client Deployment • Private Deliverable
                  </span>
                )}
                <span className="text-[11px] font-mono text-[#8A8A8A]">
                  Delivered via Agency
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Services Grid */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0B0B0B] border border-[#222222]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8734A] block mb-1">
                WEB DEVELOPMENT SERVICES
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F5F5]">
                WHAT I CAN BUILD FOR YOUR BUSINESS
              </h3>
            </div>
            <button
              onClick={scrollToContact}
              className="btn-primary cursor-pointer border-none text-xs font-semibold flex items-center gap-2"
            >
              <span>DISCUSS A PROJECT</span>
              <FiArrowRight size={13} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientServices.map((service, idx) => (
              <div
                key={service.title}
                className="p-5 rounded-xl bg-[#141414] border border-[#1F1F1F] hover:border-[#E8734A]/30 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#E8734A] mb-2">
                  <FiCheck size={14} />
                  <span className="font-semibold uppercase">{service.title}</span>
                </div>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Subtly positioned Freelance CTA */}
          <div className="mt-8 pt-6 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8A8A8A]">
            <span>
              Need a modern website or web application? Available for selected business & freelance engagements.
            </span>
            <button
              onClick={scrollToContact}
              className="text-[#E8734A] hover:underline cursor-pointer bg-transparent border-none p-0 font-mono text-xs font-semibold"
            >
              Let's Build It ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
