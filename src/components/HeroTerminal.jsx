import { useState, useRef, useEffect } from 'react';
import { personal } from '../data/personal';
import { useToast } from '../context/ToastContext';
import { FiTerminal, FiCornerDownLeft, FiDownload, FiExternalLink } from 'react-icons/fi';

export default function HeroTerminal() {
  const { showToast } = useToast();
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: 'ANIKET.EXE // Interactive Developer Terminal v2026. Type "help" or click suggestions below.',
    },
    {
      type: 'command',
      text: 'whoami',
      output: `${personal.fullName} — MERN Stack Developer & Website Developer (Pune, IN)`,
    },
    {
      type: 'command',
      text: 'active_role',
      output: `Website Developer @ ${personal.currentRole.company} (${personal.currentRole.period})`,
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    let output = null;
    let customRender = null;

    switch (cleanCmd) {
      case 'help':
        output = 'Available commands: skills, experience, projects, resume, sudo hire, clear';
        break;

      case 'skills':
        output = 'STACK: React.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), Tailwind CSS, WordPress, REST APIs, Git, Docker, JWT';
        break;

      case 'experience':
        output = `1. ${personal.currentRole.role} @ ${personal.currentRole.company} (${personal.currentRole.period})\n2. ${personal.previousRole.role} @ ${personal.previousRole.company} (${personal.previousRole.period})`;
        break;

      case 'projects':
        customRender = (
          <div className="space-y-1 my-1">
            <div className="text-[#F5F5F5]">1. <strong className="text-[#E8734A]">WanderAI</strong>: Full-stack AI Travel Planner + Tesseract.js OCR</div>
            <div className="text-[#F5F5F5]">2. <strong className="text-[#E8734A]">ResuMatch AI</strong>: AI Resume Analyzer + ATS scoring & JD matching</div>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-[11px] text-[#E8734A] hover:underline"
            >
              <span>Scroll to projects</span> <FiExternalLink size={10} />
            </a>
          </div>
        );
        break;

      case 'resume':
        const link = document.createElement('a');
        link.href = personal.resumeUrl;
        link.download = 'Aniket_Govind_Kusundal.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Downloading Aniket_Govind_Kusundal.pdf...');
        output = 'Downloading Aniket_Govind_Kusundal.pdf...';
        break;

      case 'sudo hire':
        window.open('https://wa.me/919175501971?text=Hi%20Aniket%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%21', '_blank');
        output = 'Access Granted: "Let\'s build together!" Opening WhatsApp...';
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = `Command not recognized: "${cleanCmd}". Type "help" to see available options.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', text: cleanCmd, output, customRender },
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="w-full max-w-[380px] rounded-2xl border border-[#262626] bg-[#141414]/95 p-5 font-mono text-xs leading-relaxed shadow-2xl backdrop-blur-md cursor-text flex flex-col justify-between h-[360px]"
    >
      {/* Terminal Title Bar */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222222]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8734A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          </div>
          <span className="text-[#8A8A8A] text-[10px] tracking-widest uppercase flex items-center gap-1">
            <FiTerminal size={11} className="text-[#E8734A]" />
            <span>ANIKET.SH // LIVE SHELL</span>
          </span>
        </div>

        {/* Output Stream */}
        <div className="overflow-y-auto max-h-[200px] space-y-2.5 pr-1 scrollbar-thin">
          {history.map((item, idx) => (
            <div key={idx} className="text-[11px]">
              {item.type === 'system' ? (
                <div className="text-[#666666] leading-tight pb-1 border-b border-[#1C1C1C]">
                  {item.content}
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-1.5 text-[#8A8A8A]">
                    <span className="text-[#E8734A] font-bold">$</span>
                    <span className="text-[#F5F5F5]">{item.text}</span>
                  </div>
                  {item.output && (
                    <div className="text-[#CCCCCC] pl-3 whitespace-pre-line mt-0.5">
                      {item.output}
                    </div>
                  )}
                  {item.customRender && (
                    <div className="pl-3 mt-0.5">
                      {item.customRender}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Interactive Command Input & Presets */}
      <div className="pt-3 border-t border-[#222222]">
        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap gap-1 mb-2">
          {['skills', 'projects', 'experience', 'resume', 'sudo hire', 'clear'].map((p) => (
            <button
              key={p}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                executeCommand(p);
              }}
              className="px-2 py-0.5 rounded bg-[#0B0B0B] hover:bg-[#E8734A]/15 border border-[#222222] hover:border-[#E8734A]/50 text-[10px] text-[#8A8A8A] hover:text-[#E8734A] cursor-pointer transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-[#E8734A] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type command..."
            className="flex-1 bg-transparent text-[#F5F5F5] placeholder:text-[#555555] outline-none text-[11px] font-mono"
          />
          <button
            type="submit"
            className="text-[#8A8A8A] hover:text-[#E8734A] cursor-pointer bg-transparent border-none p-0"
          >
            <FiCornerDownLeft size={12} />
          </button>
        </form>
      </div>
    </div>
  );
}
