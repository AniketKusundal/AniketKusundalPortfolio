import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import { FiCpu, FiLayout, FiCode, FiCopy, FiFileText } from 'react-icons/fi';

export function WanderAIVisual() {
  const [tab, setTab] = useState('ui'); // 'ui' | 'arch' | 'code'
  const [activeStep, setActiveStep] = useState(1);
  const { copyToClipboard } = useToast();

  const steps = [
    {
      num: '01',
      title: 'Ticket / PDF Ingestion',
      tech: 'Multer & Buffer Stream',
      desc: 'Multipart upload accepts boarding passes and itinerary PDFs directly in browser.',
    },
    {
      num: '02',
      title: 'OCR Optical Extraction',
      tech: 'Tesseract.js Worker',
      desc: 'Parses binary image slices to extract passenger, flight #, dates, destination, and seat.',
    },
    {
      num: '03',
      title: 'Gemini AI Synthesis',
      tech: 'Google Gemini API',
      desc: 'Synthesizes OCR travel specs with user budget and style to generate day-by-day JSON itineraries.',
    },
    {
      num: '04',
      title: 'Storage & Generation',
      tech: 'MongoDB Atlas & PDFKit',
      desc: 'Persists trip models with JWT sessions and compiles server-side printable PDF itineraries.',
    },
  ];

  const wanderCodeSnippet = `// WanderAI: Gemini Itinerary & OCR Ticket Pipeline
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createWorker } from "tesseract.js";

export async function processTicketAndPlanTrip({ buffer, destination, days, budget }) {
  // 1. OCR Extraction with Tesseract Worker
  const worker = await createWorker('eng');
  const { data: { text } } = await worker.recognize(buffer);
  await worker.terminate();

  // 2. Structured Itinerary Prompt Synthesis
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const prompt = \`Given ticket data: "\${text.slice(0, 500)}", generate a \${days}-day itinerary
  for \${destination} with a budget of \${budget}. Return strictly valid JSON schema.\`;

  const response = await model.generateContent(prompt);
  return JSON.parse(response.response.text());
}`;

  return (
    <div className="rounded-xl bg-[#0B0B0B] border border-[#222222] overflow-hidden flex flex-col justify-between h-full min-h-[390px]">
      {/* Top Bar with Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#141414] border-b border-[#222222]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <span className="text-[10px] font-mono text-[#8A8A8A] ml-2 hidden sm:inline">wanderai.app</span>
        </div>

        <div className="flex items-center p-0.5 rounded-lg bg-[#0B0B0B] border border-[#222222]">
          <button
            onClick={() => setTab('ui')}
            className={`px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer border-none flex items-center gap-1 ${
              tab === 'ui' ? 'bg-[#E8734A] text-white font-bold' : 'bg-transparent text-[#8A8A8A] hover:text-[#F5F5F5]'
            }`}
          >
            <FiLayout size={10} />
            <span>UI</span>
          </button>
          <button
            onClick={() => setTab('arch')}
            className={`px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer border-none flex items-center gap-1 ${
              tab === 'arch' ? 'bg-[#E8734A] text-white font-bold' : 'bg-transparent text-[#8A8A8A] hover:text-[#F5F5F5]'
            }`}
          >
            <FiCpu size={10} />
            <span>Pipeline</span>
          </button>
          <button
            onClick={() => setTab('code')}
            className={`px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer border-none flex items-center gap-1 ${
              tab === 'code' ? 'bg-[#E8734A] text-white font-bold' : 'bg-transparent text-[#8A8A8A] hover:text-[#F5F5F5]'
            }`}
          >
            <FiCode size={10} />
            <span>Code</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-center">
        {tab === 'ui' ? (
          <div className="space-y-3 font-mono text-xs">
            {/* Travel Header Preview */}
            <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#E8734A] uppercase tracking-wider block">DESTINATION</span>
                <span className="text-sm font-bold text-[#F5F5F5]">Pune ➔ Bali, Indonesia</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-[#8A8A8A] uppercase tracking-wider block">DURATION</span>
                <span className="text-xs text-[#F5F5F5]">5 Days • Adventure</span>
              </div>
            </div>

            {/* Itinerary Day Card */}
            <div className="p-3.5 rounded-lg bg-[#121212] border border-[#262626] space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#1F1F1F]">
                <span className="text-[11px] font-bold text-[#E8734A]">DAY 01 SCHEDULE</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  AI Generated
                </span>
              </div>
              <div className="text-[11px] text-[#CCCCCC] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#E8734A]">09:00 AM</span>
                  <span>Ubud Rainforest Trek & Canopy Walk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E8734A]">01:30 PM</span>
                  <span>Balinese Culinary & Herb Workshop</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E8734A]">06:00 PM</span>
                  <span>Tanah Lot Temple Sunset Excursion</span>
                </div>
              </div>
            </div>

            {/* Ticket OCR Card */}
            <div className="p-2.5 rounded-lg bg-[#101010] border border-[#E8734A]/25 flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-2">
                <FiFileText className="text-[#E8734A]" />
                <span className="text-[#8A8A8A]">OCR Ticket Parsing:</span>
                <span className="text-[#F5F5F5] font-semibold">Tesseract.js Engine</span>
              </div>
              <span className="text-emerald-400">Extracted Flight AI-840</span>
            </div>
          </div>
        ) : tab === 'arch' ? (
          /* Architecture Diagram Flow */
          <div className="space-y-3 font-mono">
            <div className="text-[10px] text-[#8A8A8A] uppercase tracking-wider flex items-center justify-between mb-2">
              <span>WANDERAI DATA PIPELINE</span>
              <span className="text-[#E8734A]">STEP 0{activeStep} OF 04</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(i + 1)}
                  className={`p-2 rounded-lg text-left cursor-pointer border transition-all ${
                    activeStep === i + 1
                      ? 'bg-[#E8734A]/15 border-[#E8734A] text-[#F5F5F5]'
                      : 'bg-[#141414] border-[#222222] text-[#8A8A8A] hover:border-[#333333]'
                  }`}
                >
                  <span className="text-[9px] block text-[#E8734A] font-bold">{s.num}</span>
                  <span className="text-[10px] font-bold block truncate">{s.tech}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-[#141414] border border-[#222222] mt-2"
            >
              <div className="text-xs font-bold text-[#F5F5F5] mb-1">
                {steps[activeStep - 1].title}
              </div>
              <p className="text-[11px] text-[#8A8A8A] leading-relaxed">
                {steps[activeStep - 1].desc}
              </p>
            </motion.div>
          </div>
        ) : (
          /* Code Snippet Tab */
          <div className="relative font-mono text-[11px] leading-snug">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222222]">
              <span className="text-[#8A8A8A] text-[10px]">tripPlanner.service.js</span>
              <button
                onClick={() => copyToClipboard(wanderCodeSnippet, 'Code copied to clipboard!')}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] text-[#E8734A] text-[10px] cursor-pointer"
              >
                <FiCopy size={11} />
                <span>Copy Code</span>
              </button>
            </div>
            <pre className="text-[#CCCCCC] bg-[#0E0E0E] p-3 rounded-lg overflow-x-auto max-h-[220px] scrollbar-thin text-[10px]">
              <code>{wanderCodeSnippet}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Footer Meta */}
      <div className="px-5 py-2.5 bg-[#0D0D0D] border-t border-[#1C1C1C] flex items-center justify-between text-[10px] font-mono text-[#666666]">
        <span>MERN Stack + Tesseract.js</span>
        <span className="text-[#E8734A]">Google Gemini API</span>
      </div>
    </div>
  );
}

export function ResuMatchVisual() {
  const [tab, setTab] = useState('ui'); // 'ui' | 'arch' | 'code'
  const [activeStep, setActiveStep] = useState(1);
  const { copyToClipboard } = useToast();

  const steps = [
    {
      num: '01',
      title: 'PDF Upload Stream',
      tech: 'Multer & Buffer Engine',
      desc: 'Direct binary resume upload stream into server memory without temporary file leaks.',
    },
    {
      num: '02',
      title: 'Text & Entity Parsing',
      tech: 'pdf-parse Pipeline',
      desc: 'Strips layouts and extracts raw text strings, work history, and education blocks.',
    },
    {
      num: '03',
      title: 'JD Gap Analysis',
      tech: 'Gemini 1.5 Pro Prompting',
      desc: 'Cross-analyzes resume text with target Job Description to identify missing skills and keywords.',
    },
    {
      num: '04',
      title: 'ATS Scoring & Cloud Auth',
      tech: 'MongoDB & JWT REST APIs',
      desc: 'Generates algorithmic ATS-readiness percentage and records candidate application tracking records.',
    },
  ];

  const resumatchCodeSnippet = `// ResuMatch AI: ATS Score & Keyword Gap Engine
import pdfParse from "pdf-parse";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function analyzeResumeStream(fileBuffer, jobDescription) {
  // 1. In-memory binary PDF parsing
  const { text: resumeText } = await pdfParse(fileBuffer);

  // 2. Gemini Semantic Match Analysis
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = \`Compare candidate resume against Job Description.
  Calculate ATS match score (0-100), extract matched skills, and highlight keyword gaps.
  Resume: "\${resumeText.slice(0, 3000)}"
  JD: "\${jobDescription.slice(0, 1500)}"
  Format: JSON { atsScore: number, matchedSkills: string[], missingKeywords: string[] }\`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}`;

  return (
    <div className="rounded-xl bg-[#0B0B0B] border border-[#222222] overflow-hidden flex flex-col justify-between h-full min-h-[390px]">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#141414] border-b border-[#222222]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#333333]" />
          <span className="text-[10px] font-mono text-[#8A8A8A] ml-2 hidden sm:inline">resumatch.ai</span>
        </div>

        <div className="flex items-center p-0.5 rounded-lg bg-[#0B0B0B] border border-[#222222]">
          <button
            onClick={() => setTab('ui')}
            className={`px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer border-none flex items-center gap-1 ${
              tab === 'ui' ? 'bg-[#E8734A] text-white font-bold' : 'bg-transparent text-[#8A8A8A] hover:text-[#F5F5F5]'
            }`}
          >
            <FiLayout size={10} />
            <span>UI</span>
          </button>
          <button
            onClick={() => setTab('arch')}
            className={`px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer border-none flex items-center gap-1 ${
              tab === 'arch' ? 'bg-[#E8734A] text-white font-bold' : 'bg-transparent text-[#8A8A8A] hover:text-[#F5F5F5]'
            }`}
          >
            <FiCpu size={10} />
            <span>Pipeline</span>
          </button>
          <button
            onClick={() => setTab('code')}
            className={`px-2 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer border-none flex items-center gap-1 ${
              tab === 'code' ? 'bg-[#E8734A] text-white font-bold' : 'bg-transparent text-[#8A8A8A] hover:text-[#F5F5F5]'
            }`}
          >
            <FiCode size={10} />
            <span>Code</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-center">
        {tab === 'ui' ? (
          <div className="space-y-3 font-mono text-xs">
            {/* ATS Score Gauge Preview */}
            <div className="p-3.5 rounded-lg bg-[#141414] border border-[#222222] flex items-center justify-between">
              <div>
                <span className="text-[9px] text-[#8A8A8A] uppercase tracking-wider block">TARGET JD MATCH</span>
                <span className="text-sm font-bold text-[#F5F5F5]">MERN Stack Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center font-bold text-emerald-400 text-xs bg-emerald-500/10">
                  89%
                </div>
                <div className="text-[10px] text-emerald-400 font-semibold">ATS Ready</div>
              </div>
            </div>

            {/* Keyword Match Breakdown */}
            <div className="p-3 rounded-lg bg-[#121212] border border-[#262626] space-y-2">
              <div className="text-[10px] text-[#8A8A8A] uppercase tracking-wider pb-1 border-b border-[#1F1F1F]">
                SKILL GAP ANALYSIS (GEMINI API)
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px]">
                  ✓ React.js (High Match)
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px]">
                  ✓ Node.js & Express
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px]">
                  ✓ MongoDB Atlas
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px]">
                  + Add Docker Metrics
                </span>
              </div>
            </div>

            {/* Pipeline Status */}
            <div className="p-2.5 rounded-lg bg-[#101010] border border-[#222222] flex items-center justify-between text-[10px] text-[#8A8A8A]">
              <span>Pipeline: pdf-parse ➔ Gemini ➔ ATS</span>
              <span className="text-emerald-400">Verified Parser</span>
            </div>
          </div>
        ) : tab === 'arch' ? (
          /* Architecture Diagram Flow */
          <div className="space-y-3 font-mono">
            <div className="text-[10px] text-[#8A8A8A] uppercase tracking-wider flex items-center justify-between mb-2">
              <span>RESUMATCH DATA PIPELINE</span>
              <span className="text-[#E8734A]">STEP 0{activeStep} OF 04</span>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(i + 1)}
                  className={`p-2 rounded-lg text-left cursor-pointer border transition-all ${
                    activeStep === i + 1
                      ? 'bg-[#E8734A]/15 border-[#E8734A] text-[#F5F5F5]'
                      : 'bg-[#141414] border-[#222222] text-[#8A8A8A] hover:border-[#333333]'
                  }`}
                >
                  <span className="text-[9px] block text-[#E8734A] font-bold">{s.num}</span>
                  <span className="text-[10px] font-bold block truncate">{s.tech}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-[#141414] border border-[#222222] mt-2"
            >
              <div className="text-xs font-bold text-[#F5F5F5] mb-1">
                {steps[activeStep - 1].title}
              </div>
              <p className="text-[11px] text-[#8A8A8A] leading-relaxed">
                {steps[activeStep - 1].desc}
              </p>
            </motion.div>
          </div>
        ) : (
          /* Code Snippet Tab */
          <div className="relative font-mono text-[11px] leading-snug">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222222]">
              <span className="text-[#8A8A8A] text-[10px]">resumeAnalyzer.service.js</span>
              <button
                onClick={() => copyToClipboard(resumatchCodeSnippet, 'Code copied to clipboard!')}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] text-[#E8734A] text-[10px] cursor-pointer"
              >
                <FiCopy size={11} />
                <span>Copy Code</span>
              </button>
            </div>
            <pre className="text-[#CCCCCC] bg-[#0E0E0E] p-3 rounded-lg overflow-x-auto max-h-[220px] scrollbar-thin text-[10px]">
              <code>{resumatchCodeSnippet}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Footer Meta */}
      <div className="px-5 py-2.5 bg-[#0D0D0D] border-t border-[#1C1C1C] flex items-center justify-between text-[10px] font-mono text-[#666666]">
        <span>Multer + pdf-parse</span>
        <span className="text-[#E8734A]">ATS Gap Algorithm</span>
      </div>
    </div>
  );
}
