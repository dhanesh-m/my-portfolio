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

const statItem = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.7 + i * 0.12, type: 'spring', stiffness: 120, damping: 12 },
  }),
}

const headlineWords = ["This", "is", "the", "age", "of"]
const aiLine = "AI development."
const leadingLine = "I'm leading it."

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Name - slide in with glow */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl mb-5"
        >
          Hi, I'm{' '}
          <motion.span
            className="text-white font-semibold"
            animate={{ textShadow: ['0 0 20px rgba(0,217,165,0.2)', '0 0 40px rgba(0,217,165,0.4)', '0 0 20px rgba(0,217,165,0.2)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Dhanesh M
          </motion.span>
        </motion.p>

        {/* Badge - animated border */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#00D9A5]/40 bg-[#00D9A5]/5 mb-8 animate-border-flow"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#00D9A5]"
          />
          <motion.span
            variants={wordReveal}
            className="text-sm text-[#00D9A5] font-medium"
          >
            React Native · AI-Native Development · Project Management
          </motion.span>
        </motion.div>

        {/* Headline - word by word reveal */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.2] tracking-tight mb-6"
        >
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1">
            {headlineWords.map((word, i) => (
              <motion.span key={i} variants={wordReveal} className="inline-block">
                {word}
              </motion.span>
            ))}
          </div>
          <motion.span
            variants={wordReveal}
            className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00D9A5] via-[#00E5B3] to-[#00B894] bg-[length:200%_auto] animate-gradient"
          >
            {aiLine}
          </motion.span>
          <motion.span
            variants={wordReveal}
            className="block mt-3 relative inline-block"
          >
            {leadingLine}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00D9A5] origin-left"
            />
          </motion.span>
        </motion.h1>

        {/* Subtext - fade with stagger */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          6+ years shipping production apps. Now at the forefront—building with Cursor, Copilot,
          Emergent for code, and Google Flow for AI video. Not adapting to the future.{' '}
          <motion.span
            className="text-white font-medium"
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Creating it.
          </motion.span>
        </motion.p>

        {/* Buttons - staggered with hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(0, 217, 165, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 rounded-xl bg-[#00D9A5] text-[#0A0E14] font-semibold hover:bg-[#00E5B3] transition-colors"
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
            className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(0, 217, 165, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl border-2 border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
          >
            My Story
          </motion.a>
        </motion.div>

        {/* Stats - bounce in */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-20 flex justify-center gap-12 md:gap-16 text-gray-500"
        >
          {[
            { value: '6+', label: 'Years Experience' },
            { value: 'AI-First', label: 'Development Approach' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={statItem}
              custom={i}
              className="text-center min-w-[120px]"
            >
              <div className="h-9 flex items-center justify-center mb-2">
                <motion.span
                  className="font-display font-bold text-2xl text-white leading-none"
                  whileHover={{ scale: 1.15, color: '#00D9A5' }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
