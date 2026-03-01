import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

const wordReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 },
  },
}

const headlineWords = ["Full-Stack", "Developer", "&"]
const aiLine = "Project Manager"
const leadingLine = "AI-powered. Across any stack. Delivered globally."

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-0">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E14] via-[#0F1419] to-[#0A0E14]" />

      {/* Animated orbs - more dynamic */}
      <motion.div
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D9A5] rounded-full blur-[140px] opacity-[0.12]"
      />
      <motion.div
        animate={{ x: [0, -60, 40, 0], y: [0, 50, -20, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[120px] opacity-[0.08]"
      />
      <motion.div
        animate={{ x: [0, 20, -40, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-violet-500 rounded-full blur-[100px] opacity-[0.05]"
      />

      {/* Animated grid - subtle movement */}
      <motion.div
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00D9A5]"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline - word by word reveal */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-[1.3] tracking-wide mb-4 sm:mb-6"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-1">
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordReveal} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.span
              variants={wordReveal}
              className="text-white font-bold uppercase tracking-wide"
            >
              {aiLine}
            </motion.span>
          </div>
          <motion.div
            variants={wordReveal}
            className="inline-block mt-3 px-4 sm:px-5 py-2 rounded-none bg-[#00D9A5]/30 max-w-[95vw]"
          >
            <motion.span
              variants={wordReveal}
              className="block text-base sm:text-xl md:text-2xl lg:text-3xl text-[#00D9A5] font-medium uppercase"
            >
              {leadingLine}
            </motion.span>
          </motion.div>
        </motion.h1>

        {/* Buttons - staggered with hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-10 sm:mt-16"
        >
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(0, 217, 165, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 sm:px-8 sm:py-4 min-h-[44px] sm:min-h-0 rounded-xl bg-[#00D9A5] text-[#0A0E14] font-semibold hover:bg-[#00E5B3] transition-colors text-sm sm:text-base inline-flex items-center justify-center"
          >
            Let's Connect
          </motion.a>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 217, 165, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 sm:px-8 sm:py-4 min-h-[44px] sm:min-h-0 rounded-xl border-2 border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator - enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-11 rounded-full border-2 border-[#00D9A5]/50 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="w-1.5 h-2.5 rounded-full bg-[#00D9A5]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
