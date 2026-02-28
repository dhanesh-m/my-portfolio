import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-120px', amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D9A5]/[0.03] to-transparent"
      />
      {/* Floating accent orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ x: [0, 20, 0], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 right-0 w-80 h-80 bg-[#00D9A5] rounded-full blur-[120px] -translate-y-1/2"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-2 sm:mt-4 mb-4 sm:mb-6"
            >
              Developer first.
              <br />
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-[#00D9A5]"
              >
                Leader now.
              </motion.span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
            >
              I started as a React Native developer in 2018, building cross-platform apps
              from the ground up. Over 6+ years, I've shipped production apps, scaled
              engineering teams, and now lead projects at ZFloc Technologies, where we
              leverage AI coding tools to build apps faster and smarter.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
            >
              I'm excited by AI-native development: tools that generate code, accelerate
              iteration, and let engineers focus on architecture and product. Based in
              Kochi, India. Ready to bring this experience to teams building the next
              generation of AI-powered apps.
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.45 }}
              className="text-[#00D9A5]/90 text-lg font-medium mb-10"
            >
              Always eager to learn new skills and stay ahead of what's next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#0A0E14] border border-white/5 hover:border-[#00D9A5]/20 transition-all duration-300"
            >
              <h3 className="font-display font-bold text-xl text-white mb-3">The Foundation</h3>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-[#00D9A5]/10 flex items-center justify-center text-xl flex-shrink-0">🎓</span>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1">Cochin University of Science and Technology (CUSAT)</h4>
                  <p className="text-[#00D9A5] font-medium text-sm mb-1">Bachelor of Technology (B.Tech)</p>
                  <p className="text-gray-400 text-sm mb-2">Electrical, Electronics and Communications Engineering</p>
                  <p className="text-xs text-gray-500">Jun 2014 – Apr 2018</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="min-h-[260px] sm:min-h-0 sm:aspect-square rounded-2xl bg-gradient-to-br from-[#0F1419] to-[#1A2332] border border-white/5 p-6 sm:p-8 flex flex-col justify-center backdrop-blur-sm">
              <div className="space-y-4">
                {[
                  'React Native · iOS & Android',
                  'AI Coding Tools (Cursor, Copilot, Emergent)',
                  'AI Video Making (Google Flow)',
                  'Video Editing',
                  'Project Planning & Delivery',
                  'Agile & Scrum Methodologies',
                  'Team Leadership & Mentoring',
                  'Technical Architecture',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.2, type: 'spring', stiffness: 60 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <motion.span
                      whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(0,217,165,0.4)' }}
                      className="w-2 h-2 rounded-full bg-[#00D9A5] flex-shrink-0"
                    />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -z-10 -inset-4 rounded-3xl bg-[#00D9A5]/5 blur-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
