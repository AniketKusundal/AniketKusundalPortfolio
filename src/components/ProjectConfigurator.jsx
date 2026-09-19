import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCopy, FiCheck, FiLayers, FiCalendar, FiSliders, FiArrowDown } from 'react-icons/fi';

const PROJECT_TYPES = [
  {
    id: 'fullstack',
    label: 'Full-Stack Web App',
    tag: 'MERN Architecture',
    desc: 'Scalable custom application with React frontend, Node/Express backend, and MongoDB.',
    recommendedStack: 'React.js • Node.js • Express.js • MongoDB • JWT',
  },
  {
    id: 'react-site',
    label: 'React.js Website',
    tag: 'Modern Dynamic UI',
    desc: 'Ultra-fast business or portfolio site with slick micro-animations and responsive UX.',
    recommendedStack: 'React.js • Tailwind CSS • Framer Motion • Vite',
  },
  {
    id: 'landing-page',
    label: 'High-Converting Landing Page',
    tag: 'Speed & Conversion',
    desc: 'Laser-focused sales or product launch page optimized for speed and lead capture.',
    recommendedStack: 'HTML5/CSS3 • React.js • Modern SEO • Web Vitals',
  },
  {
    id: 'wordpress',
    label: 'WordPress Customization',
    tag: 'Custom CMS Platform',
    desc: 'Tailored business website with intuitive client content management and clean plugins.',
    recommendedStack: 'WordPress • PHP/CSS Custom Theme • Elementor/Gutenberg',
  },
];

const FEATURES_LIST = [
  { id: 'auth', label: 'User Authentication & JWT' },
  { id: 'api', label: 'REST API & 3rd-Party Integrations' },
  { id: 'database', label: 'MongoDB / Database Modeling' },
  { id: 'responsive', label: 'Mobile-First Responsive Layout' },
  { id: 'dashboard', label: 'Admin Dashboard & Analytics' },
  { id: 'seo', label: 'Performance & Technical SEO' },
  { id: 'payment', label: 'Payment Gateway (Stripe/Razorpay)' },
  { id: 'ai', label: 'AI/LLM API Integration (Gemini/OpenAI)' },
];

const TIMELINES = [
  { id: 'fast', label: 'Fast Delivery (< 2 Weeks)', note: 'High priority sprint' },
  { id: 'standard', label: '1 Month Standard', note: 'Balanced development & QA' },
  { id: 'flexible', label: 'Flexible / Milestone Based', note: 'Iterative phased rollout' },
];

export default function ProjectConfigurator({ onInjectBrief }) {
  const { copyToClipboard, showToast } = useToast();
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [selectedFeatures, setSelectedFeatures] = useState([
    'responsive',
    'api',
    'database',
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[1]);

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const getFeatureLabels = () =>
    selectedFeatures.map(
      (id) => FEATURES_LIST.find((f) => f.id === id)?.label || id
    );

  const generateBriefText = () => {
    const featureNames = getFeatureLabels();
    return `Hi Aniket,

I configured a project scope on your portfolio:

*PROJECT BRIEF*
• *Type:* ${selectedType.label} (${selectedType.tag})
• *Recommended Stack:* ${selectedType.recommendedStack}
• *Target Timeline:* ${selectedTimeline.label}
• *Key Features Required:*
${featureNames.map((f) => `  - ${f}`).join('\n')}

Could we connect on WhatsApp or schedule a call to discuss timeline and quotation?`;
  };

  const handleSendWhatsApp = () => {
    const brief = generateBriefText();
    window.open(
      `https://wa.me/919175501971?text=${encodeURIComponent(brief)}`,
      '_blank'
    );
  };

  const handleCopy = () => {
    copyToClipboard(generateBriefText(), 'Project brief copied to clipboard!');
  };

  const handleInjectIntoForm = () => {
    if (onInjectBrief) {
      const brief = generateBriefText();
      onInjectBrief(brief, selectedType.label);
      showToast('Brief loaded into dispatch form below!');
    }
  };

  return (
    <div className="rounded-2xl bg-[#141414] border border-[#222222] p-6 sm:p-8 mb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-[#222222]">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#E8734A] mb-1">
            <FiSliders size={12} />
            <span>INTERACTIVE SCOPE CALCULATOR</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F5]">
            BUILD YOUR PROJECT BRIEF
          </h3>
        </div>
        <div className="text-xs font-mono text-[#8A8A8A]">
          Configure deliverables ➔ Instant WhatsApp quote
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-7">
          {/* Step 1: Project Type */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-[#E8734A]/10 border border-[#E8734A] text-[#E8734A] font-mono text-[10px] flex items-center justify-center font-bold">
                1
              </span>
              <label className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5]">
                SELECT PROJECT TYPE
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PROJECT_TYPES.map((type) => {
                const active = selectedType.id === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                      active
                        ? 'bg-[#E8734A]/10 border-[#E8734A] text-[#F5F5F5] shadow-[0_0_12px_rgba(232,115,74,0.15)]'
                        : 'bg-[#0B0B0B] border-[#222222] text-[#8A8A8A] hover:border-[#333333] hover:text-[#CCCCCC]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-display font-bold text-xs sm:text-sm text-[#F5F5F5]">
                        {type.label}
                      </div>
                      {active && <span className="w-2 h-2 rounded-full bg-[#E8734A]" />}
                    </div>
                    <div className="text-[10px] font-mono text-[#E8734A] mb-1">
                      {type.tag}
                    </div>
                    <p className="text-[11px] text-[#777777] leading-snug line-clamp-2">
                      {type.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Key Features */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E8734A]/10 border border-[#E8734A] text-[#E8734A] font-mono text-[10px] flex items-center justify-center font-bold">
                  2
                </span>
                <label className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5]">
                  KEY FEATURES & CAPABILITIES
                </label>
              </div>
              <span className="text-[10px] font-mono text-[#8A8A8A]">
                {selectedFeatures.length} selected
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {FEATURES_LIST.map((feat) => {
                const active = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono cursor-pointer border transition-all flex items-center gap-1.5 ${
                      active
                        ? 'bg-[#E8734A]/15 border-[#E8734A] text-[#F5F5F5]'
                        : 'bg-[#0B0B0B] border-[#222222] text-[#8A8A8A] hover:border-[#333333] hover:text-[#F5F5F5]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[9px] ${
                        active
                          ? 'border-[#E8734A] bg-[#E8734A] text-white'
                          : 'border-[#444444] bg-transparent'
                      }`}
                    >
                      {active && <FiCheck size={10} />}
                    </span>
                    <span>{feat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-full bg-[#E8734A]/10 border border-[#E8734A] text-[#E8734A] font-mono text-[10px] flex items-center justify-center font-bold">
                3
              </span>
              <label className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5]">
                TARGET TIMELINE
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {TIMELINES.map((t) => {
                const active = selectedTimeline.id === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTimeline(t)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      active
                        ? 'bg-[#E8734A]/10 border-[#E8734A] text-[#F5F5F5]'
                        : 'bg-[#0B0B0B] border-[#222222] text-[#8A8A8A] hover:border-[#333333]'
                    }`}
                  >
                    <div className="font-mono text-xs font-bold text-[#F5F5F5] mb-0.5">
                      {t.label}
                    </div>
                    <div className="text-[10px] font-mono text-[#666666]">
                      {t.note}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Real-time Formatted Brief Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-[#0B0B0B] border border-[#262626] p-5">
          <div>
            {/* Window title bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E1E1E]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8734A]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
                <span className="text-[10px] font-mono text-[#8A8A8A] ml-2">
                  PROJECT_BRIEF.SPEC
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded hover:bg-[#1A1A1A] text-[#8A8A8A] hover:text-[#E8734A] transition-colors border-none bg-transparent cursor-pointer"
                title="Copy formatted brief"
              >
                <FiCopy size={13} />
              </button>
            </div>

            {/* Brief preview */}
            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-[10px] text-[#666666] uppercase block">
                  DELIVERABLE SCOPE
                </span>
                <span className="text-[#F5F5F5] font-bold text-sm">
                  {selectedType.label}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#666666] uppercase block">
                  RECOMMENDED ARCHITECTURE
                </span>
                <span className="text-[#E8734A] text-[11px]">
                  {selectedType.recommendedStack}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#666666] uppercase block">
                  TARGET TIMELINE
                </span>
                <span className="text-[#CCCCCC] text-[11px]">
                  {selectedTimeline.label}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#666666] uppercase block mb-1">
                  SPECIFIED DELIVERABLES ({selectedFeatures.length})
                </span>
                <ul className="space-y-1 text-[11px] text-[#999999] max-h-[140px] overflow-y-auto pr-1">
                  {getFeatureLabels().map((f, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#E8734A]">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 mt-4 border-t border-[#1E1E1E] space-y-2">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0B0B0B] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)] border-none"
            >
              <FaWhatsapp size={16} />
              <span>Send Brief via WhatsApp</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="py-2 px-3 rounded-lg bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] text-[#CCCCCC] hover:text-[#F5F5F5] font-mono text-[10px] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <FiCopy size={11} />
                <span>Copy Text</span>
              </button>

              <button
                type="button"
                onClick={handleInjectIntoForm}
                className="py-2 px-3 rounded-lg bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] text-[#E8734A] font-mono text-[10px] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <FiArrowDown size={11} />
                <span>Use in Form</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
