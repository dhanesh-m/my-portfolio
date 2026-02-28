import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Talkiko',
    description: "India's biggest emotional wellness platform. Connect with trained non-medical listeners for confidential support and better emotional well-being.",
    tags: ['React Native', 'Firebase', 'SendBird', 'Razorpay'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.talkiko.app&hl=en_IN' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/talkiko/id6749892860' },
      { label: 'Website', url: 'https://talkiko.com/' },
    ],
    accent: 'from-violet-500/20 to-purple-500/10',
  },
  {
    name: 'Mozhi',
    description: "India's biggest emotional wellness platform. Connect with trained listeners for empathetic support and meaningful conversations.",
    tags: ['React Native', 'Firebase', 'SendBird', 'Razorpay'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/in/app/mozhi-emotional-wellness-app/id6751511763' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mozhi.customer&hl=en_IN' },
    ],
    accent: 'from-indigo-500/20 to-violet-500/10',
  },
  {
    name: 'Oppam',
    description: "Malayalam-first emotional support app. Speak and feel heard. Connect with trained listeners who understand Kerala's culture and mindset.",
    tags: ['React Native', 'Firebase', 'SendBird', 'Razorpay'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/in/app/oppam-malayalees-wellness-app/id6751511759' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.oppam.oppamapp&hl=en_IN' },
    ],
    accent: 'from-purple-500/20 to-fuchsia-500/10',
  },
  {
    name: 'Pro Bono Programme',
    description: "DIFC Courts' Pro Bono Programme. Access to justice. Connects individuals in financial hardship with volunteer lawyers for legal advice within DIFC jurisdiction.",
    tags: ['React Native', 'Firebase', 'UAE Passkey'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=ae.difccourts.probono&hl=en_IN' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/pro-bono-programme/id6749685073' },
    ],
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    name: 'Focuzon',
    description: 'A quiet space for focused work. Deep work sessions to help you concentrate and get meaningful work done.',
    tags: ['Web App', 'Productivity'],
    links: [
      { label: 'Website', url: 'https://www.focuzon.com/' },
    ],
    accent: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    name: 'Bungee',
    description: 'Helps businesses grow through hiring and customer acquisition. Turns people into Bungees so they can make referrals and get paid. Available on iOS & Android.',
    tags: ['React Native', 'Firebase', 'Stripe'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.bungee&hl=en_IN' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/bungee/id6444596791' },
    ],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 18,
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 bg-[#0F1419]/50 relative overflow-hidden">
      {/* Animated decorative blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-0 w-72 h-72 bg-[#00D9A5]/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
            Main Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Apps that reached thousands of users.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px", amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
              className="group p-5 sm:p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0A0E14]/80 backdrop-blur-sm hover:border-[#00D9A5]/30 hover:shadow-xl hover:shadow-[#00D9A5]/5 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              />
              <div className="relative">
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-white font-display group-hover:text-[#00D9A5] transition-colors">
                    {project.name.split(' · ')[0]}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#00D9A5]/10 text-[#00D9A5] border border-[#00D9A5]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-[#00D9A5] hover:text-[#00E5B3] font-medium transition-colors"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
