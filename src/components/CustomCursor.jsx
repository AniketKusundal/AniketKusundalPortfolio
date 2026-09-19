import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable if pointer device is fine (desktop mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;
    setEnabled(true);

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#E8734A] pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 0.7 : 0.9,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 400, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#E8734A]/40 pointer-events-none z-50"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.9 : 0.3,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
      />
    </>
  );
}
