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
    url: null,
  },
  {
    company: 'NewAgeSys Solutions',
    role: 'Senior Software Engineer',
    period: 'JUN 2021 - DEC 2023',
    description: 'Build production React Native apps. Lead mobile architecture, API integration, and team code reviews.',
    url: null,
  },
  {
    company: 'Simelabs',
    role: 'React Native Developer',
    period: 'FEB 2020 - APR 2021',
    description: 'Cross-platform mobile development and digital solutions.',
    url: null,
  },
  {
    company: 'Lookings Soft',
    role: 'React Native Developer',
    period: 'SEP 2018 - DEC 2019',
    description: 'Mobile app development and UI/UX implementation.',
    url: null,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-10"
        >
          Journey
        </motion.h2>

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group py-6 border-t border-gray-700/50 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col sm:flex-row sm:gap-6">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider shrink-0 sm:w-28">
                {exp.period}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-300 mb-2">
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
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
