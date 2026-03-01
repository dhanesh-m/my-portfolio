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
  },
  {
    name: 'Mozhi',
    description: "India's biggest emotional wellness platform. Connect with trained listeners for empathetic support and meaningful conversations.",
    tags: ['React Native', 'Firebase', 'SendBird', 'Razorpay'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/in/app/mozhi-emotional-wellness-app/id6751511763' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mozhi.customer&hl=en_IN' },
    ],
  },
  {
    name: 'Oppam',
    description: "Malayalam-first emotional support app. Speak and feel heard. Connect with trained listeners who understand Kerala's culture and mindset.",
    tags: ['React Native', 'Firebase', 'SendBird', 'Razorpay'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/in/app/oppam-malayalees-wellness-app/id6751511759' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.oppam.oppamapp&hl=en_IN' },
    ],
  },
  {
    name: 'Pro Bono Programme',
    description: "DIFC Courts' Pro Bono Programme. Access to justice. Connects individuals in financial hardship with volunteer lawyers for legal advice within DIFC jurisdiction.",
    tags: ['React Native', 'Firebase', 'UAE Passkey'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=ae.difccourts.probono&hl=en_IN' },
      { label: 'App Store', url: 'https://apps.apple.com/in/app/pro-bono-programme/id6749685073' },
    ],
  },
  {
    name: 'Focuzon',
    description: 'A quiet space for focused work. Deep work sessions to help you concentrate and get meaningful work done.',
    tags: ['Web App', 'Productivity'],
    links: [{ label: 'Website', url: 'https://www.focuzon.com/' }],
  },
  {
    name: 'Bungee',
    description: 'Helps businesses grow through hiring and customer acquisition. Turns people into Bungees so they can make referrals and get paid. Available on iOS & Android.',
    tags: ['React Native', 'Firebase', 'Stripe'],
    links: [
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.bungee&hl=en_IN' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/bungee/id6444596791' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-10"
        >
          Projects
        </motion.h2>
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="py-6 border-t border-gray-700/50 first:border-t-0 first:pt-0"
          >
            <h3 className="font-semibold text-gray-300 mb-2">
              {project.name}
              {project.links[0] && (
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00D9A5] transition-colors inline-flex items-center gap-1 ml-2"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-gray-500 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-4 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D9A5] hover:text-[#00E5B3] font-medium transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
