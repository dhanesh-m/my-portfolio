import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: '📱',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Expo', 'Redux', 'REST APIs'],
  },
  {
    title: 'Project Management',
    icon: '📋',
    skills: ['Agile/Scrum', 'Jira', 'Project Planning', 'Sprint Management', 'Resource Allocation', 'Risk Management'],
  },
  {
    title: 'Business & Leadership',
    icon: '🎯',
    skills: ['Team Leadership', 'Stakeholder Communication', 'Market Research', 'Sales & Marketing', 'Client Relations'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['AI Coding Tools (Cursor, Copilot, Emergent)', 'Google Flow (AI Video)', 'Video Editing', 'AI Prompt Engineering', 'Firebase', 'Stripe', 'SendBird', 'Razorpay', 'Git', 'CI/CD'],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    skills: ['Web Application Development', 'Deployment', 'React', 'REST APIs'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16"
      >
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
          Skills
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Technical depth meets strategic vision, and an eagerness to keep learning.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px', amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: 'spring', stiffness: 50, damping: 15 },
                },
              }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.25 } }}
              className="p-5 sm:p-6 md:p-8 rounded-2xl bg-[#0F1419] border border-white/5 hover:border-[#00D9A5]/20 transition-all duration-300 group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-white">{category.title}</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + j * 0.04 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium bg-white/5 text-gray-300 border border-white/5 group-hover:border-[#00D9A5]/10 group-hover:text-[#00D9A5]/90 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
