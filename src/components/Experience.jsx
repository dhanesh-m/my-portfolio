import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'ZFloc Technologies',
    role: 'Project Manager',
    period: 'Dec 2023 - Present',
    duration: '2 yrs',
    location: 'Full-time',
    skills: ['Mobile & App Development', 'AI Tools (Cursor, Copilot, Emergent)', 'Google Flow (AI Video)', 'Project Planning', 'Team Leadership', 'Technical Oversight', 'Stakeholder Management', 'Agile Delivery'],
    highlight: true,
  },
  {
    company: 'Classteam',
    role: 'Business Development Manager',
    period: 'Jun 2024 - Jul 2025',
    duration: '1 yr 2 mos',
    location: 'Part-time',
    skills: ['Communication', 'Market Research', 'Partnership Development', 'Strategy'],
  },
  {
    company: 'NewAgeSys Solutions',
    role: 'Senior Software Engineer',
    period: 'Jun 2021 - Dec 2023',
    duration: '2 yrs 7 mos',
    location: 'Kochi, Kerala · On-site',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'Mobile Architecture', 'API Integration'],
  },
  {
    company: 'Simelabs',
    role: 'React Native Developer',
    period: 'Feb 2020 - Apr 2021',
    duration: '1 yr 3 mos',
    location: 'Kochi, Kerala · On-site',
    skills: ['React Native', 'Cross-platform Development', 'Digital Solutions'],
  },
  {
    company: 'Lookings Soft',
    role: 'React Native Developer',
    period: 'Sep 2018 - Dec 2019',
    duration: '1 yr 4 mos',
    location: 'Kochi, Kerala · On-site',
    skills: ['React Native', 'Mobile App Development', 'UI/UX Implementation'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 bg-[#0F1419]/50 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16"
      >
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
          Journey
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          From React Native developer to project manager. Each stop shaped the journey.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9A5]/50 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 80, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px', amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-8 md:pl-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className={`absolute left-0 md:left-4 w-3 h-3 rounded-full -translate-x-1/2 mt-2 z-10 ${
                    exp.highlight ? 'bg-[#00D9A5] ring-4 ring-[#00D9A5]/20' : 'bg-white/30'
                  }`}
                />
                <motion.div
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className={`p-4 sm:p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:border-[#00D9A5]/30 ${
                    exp.highlight
                      ? 'bg-[#00D9A5]/5 border-[#00D9A5]/20'
                      : 'bg-[#0A0E14]/80 border-white/5 hover:bg-[#0A0E14]'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-[#00D9A5] uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <span className="text-gray-500">·</span>
                    <span className="text-xs text-gray-500">{exp.duration}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{exp.role}</h3>
                  <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                  <div className="mb-4">{exp.location && <p className="text-sm text-gray-500">{exp.location}</p>}</div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-wrap gap-2"
                  >
                    {exp.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.04, type: 'spring', stiffness: 150 }}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-gray-400 border border-white/5"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
