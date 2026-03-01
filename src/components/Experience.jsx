import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'ZFloc Technologies',
    role: 'Project Manager',
    period: 'DEC 2023 - PRESENT',
    description: 'Lead projects and engineering teams. Build and maintain critical components across mobile and web products. Work closely with cross-functional teams, including developers, designers, and product managers to implement and advocate for AI-driven development practices.',
    url: 'https://zfloc.com',
  },
  {
    company: 'Classteam',
    role: 'Business Development Manager',
    period: 'JUN 2024 - JUL 2025',
    description: 'Part-time role focused on communication, market research, partnership development, and strategy.',
    url: 'https://lookingsoft.com/case-study/classteam',
  },
  {
    company: 'NewAgeSys Solutions',
    role: 'Senior Software Engineer',
    period: 'JUN 2021 - DEC 2023',
    description: 'Build production React Native apps. Lead mobile architecture, API integration, and team code reviews.',
    url: 'https://newagesyssolutions.com/',
  },
  {
    company: 'Simelabs',
    role: 'React Native Developer',
    period: 'FEB 2020 - APR 2021',
    description: 'Cross-platform mobile development and digital solutions.',
    url: 'https://www.simelabs.com/',
  },
  {
    company: 'Lookings Soft',
    role: 'React Native Developer',
    period: 'SEP 2018 - DEC 2019',
    description: 'Mobile app development and UI/UX implementation.',
    url: 'https://lookingsoft.com/',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10"
        >
          Journey
        </motion.h2>

        <div className="relative pl-6 sm:pl-0 sm:ml-0">
          {/* Vertical timeline line - positioned in gap between dates and content */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0.5 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-2 sm:left-[10rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9A5] via-[#00D9A5]/60 to-transparent"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col sm:flex-row sm:gap-8 py-6 sm:py-8 px-3 sm:px-4 rounded-lg transition-colors duration-200 hover:bg-[#00D9A5]/5"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.1 + i * 0.06 }}
                className="absolute left-2 top-8 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-[#00D9A5] ring-4 ring-[#0A0E14] shrink-0 sm:left-[10rem] sm:top-10 transition-all duration-300 ease-out group-hover:scale-125 group-hover:ring-[#00D9A5]/40 group-hover:shadow-[0_0_12px_rgba(0,217,165,0.4)]"
              />

              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider shrink-0 sm:w-36 sm:pr-4 sm:pt-0.5 sm:whitespace-nowrap break-words">
                {exp.period}
              </span>
              <div className="flex-1 min-w-0 mt-1 sm:mt-0 overflow-hidden">
                <h3 className="font-semibold text-gray-300 mb-2 break-words">
                  {exp.role}
                  <span className="text-gray-500 font-normal"> · </span>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#00D9A5] transition-colors inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed break-words">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
