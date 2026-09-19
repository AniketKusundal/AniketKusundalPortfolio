import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8734A] via-[#FF926B] to-[#E8734A] origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(232,115,74,0.7)]"
    />
  );
}
