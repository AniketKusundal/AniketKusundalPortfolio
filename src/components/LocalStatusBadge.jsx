import { useState, useEffect } from 'react';

export default function LocalStatusBadge({ className = '' }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setTime(formatter.format(new Date()));
      } catch {
        setTime('10:30 AM');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-2.5 px-3.5 py-2 rounded-lg border border-[#262626] bg-[#121212] font-mono text-[11px] text-[#8A8A8A] shadow-sm ${className}`}
    >
      <span className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[#F5F5F5] font-semibold">Pune, India</span>
      </span>
      <span className="text-[#3A3A3A]">•</span>
      <span className="text-[#CCCCCC]">{time || 'Live'} IST (UTC+5:30)</span>
      <span className="text-[#3A3A3A] hidden sm:inline">•</span>
      <span className="text-emerald-400 hidden sm:inline font-medium">Status: Available for select projects</span>
    </div>
  );
}
