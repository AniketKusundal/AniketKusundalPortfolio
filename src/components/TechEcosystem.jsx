import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { FiCheck, FiFilter, FiArrowUpRight } from 'react-icons/fi';

export default function TechEcosystem({ onFilterTech, activeFilter }) {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleFilterClick = (e, name) => {
    e.stopPropagation();
    onFilterTech && onFilterTech(name);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="toolbox" className="section-pad pt-20">
      <div className="section-container">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="chapter-label m-0">07 / TOOLBOX</span>
          <span className="h-px w-8 bg-[#262626]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#8A8A8A]">
            TECH ECOSYSTEM & CROSS-FILTER
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
            TECHNICAL SYSTEM & TOOLS.
          </h2>
          <p className="text-base text-[#8A8A8A] max-w-2xl leading-relaxed">
            Technologies and workflows applied across professional client websites, MERN applications,
            and software deployments. Click any technology to view its role or filter related projects.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08 * idx }}
              className="p-6 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#E8734A]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222222]">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#E8734A]">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#666666]">
                    {cat.items.length} TECHNOLOGIES
                  </span>
                </div>

                <p className="text-xs text-[#8A8A8A] mb-5">
                  {cat.summary}
                </p>

                <div className="space-y-2.5">
                  {cat.items.map((item) => {
                    const isSelected = selectedTech === item.name || activeFilter === item.name;
                    return (
                      <div
                        key={item.name}
                        onClick={() => setSelectedTech(selectedTech === item.name ? null : item.name)}
                        className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#0B0B0B] border-[#E8734A]'
                            : 'bg-[#0B0B0B]/70 border-[#222222] hover:border-[#333333]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-medium text-[#F5F5F5]">
                            {item.name}
                          </span>
                          <FiCheck
                            size={12}
                            className={isSelected ? 'text-[#E8734A]' : 'text-[#444444]'}
                          />
                        </div>

                        {isSelected && (
                          <div className="mt-2.5 pt-2.5 border-t border-[#1C1C1C]">
                            <p className="text-[11px] text-[#8A8A8A] leading-normal font-mono mb-2">
                              {item.note}
                            </p>
                            <button
                              onClick={(e) => handleFilterClick(e, item.name)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E8734A]/15 hover:bg-[#E8734A]/25 border border-[#E8734A]/30 text-[#E8734A] text-[10px] font-mono font-bold cursor-pointer transition-colors"
                            >
                              <FiFilter size={10} />
                              <span>Filter & Highlight Projects</span>
                              <FiArrowUpRight size={10} />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#1C1C1C] flex items-center justify-between text-[10px] font-mono text-[#666666]">
                <span>Click item to inspect context</span>
                {activeFilter && (
                  <span className="text-[#E8734A]">Filter Active</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
