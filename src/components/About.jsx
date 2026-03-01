import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  viewport: { once: true, margin: '-40px' },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-2xl">
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0 }}
          className="text-gray-400 leading-relaxed mb-4"
        >
          I started as a React Native developer in 2018, building cross-platform apps
          from the ground up. Over 6+ years, I've shipped production apps, scaled
          engineering teams, and now lead projects at <strong className="text-gray-300">ZFloc Technologies</strong>, building
          apps that reach users across the globe.
        </motion.p>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="text-gray-400 leading-relaxed mb-4"
        >
          I focus on clean architecture, scalable solutions, and shipping on time. Based in
          Kochi, India. Ready to bring 6+ years of hands-on experience to teams building
          the next generation of mobile and web products.
        </motion.p>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.16 }}
          className="text-gray-400 leading-relaxed"
        >
          Always eager to learn new skills and stay ahead of what's next.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="mt-8 p-4 border-l-2 border-[#00D9A5]/30 pl-4 sm:pl-6 break-words"
        >
          <h3 className="text-white font-semibold mb-2">The Foundation</h3>
          <p className="text-gray-300 font-medium text-sm">Cochin University of Science and Technology (CUSAT)</p>
          <p className="text-[#00D9A5] text-sm">Bachelor of Technology (B.Tech)</p>
          <p className="text-gray-500 text-sm">Electronics and Communications Engineering · Jun 2014 – Apr 2018, ECE</p>
        </motion.div>
      </div>
    </section>
  )
}
