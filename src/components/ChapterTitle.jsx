import { motion } from 'framer-motion';

/**
 * ChapterTitle — cinematic transition section between chapters.
 * Usage: <ChapterTitle lines={["ENOUGH ABOUT", "WHAT I KNOW."]} sub="Let me show you what I built." />
 */
export default function ChapterTitle({ lines = [], sub = '', chapter = '' }) {
  return (
    <div className="section-container py-20 md:py-32">
      {chapter && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="chapter-label"
        >
          {chapter}
        </motion.div>
      )}

      <div className="max-w-3xl">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 * i }}
            className="font-display font-bold text-content-primary tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            {line}
          </motion.div>
        ))}

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 * lines.length + 0.1 }}
            className="text-content-muted text-lg mt-6"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </div>
  );
}
