import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/personal';
import { useToast } from '../context/ToastContext';
import { 
  FiSearch, FiX, FiLayers, FiFileText, FiBriefcase, FiUser, 
  FiCode, FiSend, FiCopy, FiDownload, FiExternalLink, FiCornerDownLeft 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function CommandPalette({ isOpen, onClose, onSelectProject }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const { copyToClipboard, showToast } = useToast();

  const actions = [
    // Case Studies
    {
      id: 'wanderai',
      category: 'Projects',
      title: 'WanderAI — AI Travel Planner Case Study',
      sub: 'Multi-day itineraries & OCR ticket parsing',
      icon: <FiLayers className="text-[#E8734A]" />,
      action: () => {
        onSelectProject && onSelectProject('wanderai');
        onClose();
      },
    },
    {
      id: 'resumatch',
      category: 'Projects',
      title: 'ResuMatch AI — Resume Analyzer Case Study',
      sub: 'ATS scoring & JD keyword gap analysis',
      icon: <FiLayers className="text-[#E8734A]" />,
      action: () => {
        onSelectProject && onSelectProject('resumatch-ai');
        onClose();
      },
    },

    // Navigation
    {
      id: 'nav-exp',
      category: 'Navigation',
      title: 'Experience @ DigiSevaks Media Agency',
      sub: 'Current Website Developer role & previous Sandhya ERP',
      icon: <FiBriefcase className="text-[#8A8A8A]" />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Jump to Featured Projects',
      sub: 'Chapter 04 / Projects',
      icon: <FiCode className="text-[#8A8A8A]" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-stack',
      category: 'Navigation',
      title: 'Technology Stack & Toolbox',
      sub: 'React, Node.js, Express, MongoDB, Tailwind CSS',
      icon: <FiCode className="text-[#8A8A8A]" />,
      action: () => {
        document.getElementById('toolbox')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'About — Behind the Code',
      sub: 'Computer Science degrees & developer journey',
      icon: <FiUser className="text-[#8A8A8A]" />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },

    // Quick Actions
    {
      id: 'copy-email',
      category: 'Quick Actions',
      title: 'Copy Email Address',
      sub: personal.email,
      icon: <FiCopy className="text-[#E8734A]" />,
      action: () => {
        copyToClipboard(personal.email, 'Email copied to clipboard: ' + personal.email);
        onClose();
      },
    },
    {
      id: 'download-resume',
      category: 'Quick Actions',
      title: 'Download Resume (PDF)',
      sub: 'Aniket_Govind_Kusundal.pdf',
      icon: <FiDownload className="text-emerald-400" />,
      action: () => {
        const link = document.createElement('a');
        link.href = personal.resumeUrl;
        link.download = 'Aniket_Govind_Kusundal.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Downloading Aniket_Govind_Kusundal.pdf...');
        onClose();
      },
    },
    {
      id: 'whatsapp',
      category: 'Quick Actions',
      title: 'Chat Directly on WhatsApp',
      sub: personal.phoneDisplay,
      icon: <FaWhatsapp className="text-emerald-400" />,
      action: () => {
        window.open('https://wa.me/919175501971', '_blank');
        onClose();
      },
    },
    {
      id: 'github',
      category: 'Socials',
      title: 'Open GitHub Profile',
      sub: 'github.com/AniketKusundal',
      icon: <FiExternalLink className="text-[#8A8A8A]" />,
      action: () => {
        window.open(personal.social.github, '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      category: 'Socials',
      title: 'Open LinkedIn Profile',
      sub: 'linkedin.com/in/aniket-kusundal',
      icon: <FiExternalLink className="text-[#8A8A8A]" />,
      action: () => {
        window.open(personal.social.linkedin, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.sub.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0B0B0B]/85 backdrop-blur-md flex items-start justify-center pt-20 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: -20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: -20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-xl rounded-2xl bg-[#141414] border border-[#262626] shadow-2xl overflow-hidden font-mono text-xs"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#222222]">
            <FiSearch className="text-[#E8734A]" size={16} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command, project, or jump to section..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              className="flex-1 bg-transparent text-[#F5F5F5] placeholder:text-[#555555] outline-none text-xs"
            />
            <span className="px-1.5 py-0.5 rounded bg-[#0B0B0B] border border-[#262626] text-[10px] text-[#8A8A8A]">
              ESC
            </span>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-[#666666]">
                No matching commands or projects found.
              </div>
            ) : (
              filtered.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    selectedIndex === idx
                      ? 'bg-[#E8734A]/15 border border-[#E8734A]/40 text-[#F5F5F5]'
                      : 'border border-transparent text-[#8A8A8A] hover:text-[#F5F5F5]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-[#0B0B0B] border border-[#222222]">
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-bold text-xs text-[#F5F5F5]">{item.title}</div>
                      <div className="text-[10px] text-[#8A8A8A]">{item.sub}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#555555]">
                      {item.category}
                    </span>
                    {selectedIndex === idx && (
                      <FiCornerDownLeft className="text-[#E8734A]" size={12} />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Shortcuts Help */}
          <div className="px-4 py-2.5 bg-[#0D0D0D] border-t border-[#1C1C1C] flex items-center justify-between text-[10px] text-[#666666]">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to execute</span>
              <span>ESC to close</span>
            </div>
            <span className="text-[#E8734A]">ANIKET / COMMAND PALETTE</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
