import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Mobile Development',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Xcode', 'Android Studio', 'Expo', 'Redux', 'REST APIs'],
  },
  {
    title: 'Project Management',
    skills: ['Agile/Scrum', 'Jira', 'Project Planning', 'Sprint Management', 'Resource Allocation', 'Risk Management'],
  },
  {
    title: 'Business & Leadership',
    skills: ['Team Leadership', 'Stakeholder Communication', 'Market Research', 'Sales & Marketing', 'Client Relations'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['AI Coding Tools (Cursor, Copilot, Emergent)', 'Google Flow (AI Video)', 'Video Editing', 'AI Prompt Engineering', 'Firebase', 'Stripe', 'SendBird', 'Razorpay', 'Git', 'CI/CD'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Vue', 'Vite', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Deployment'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="max-w-3xl space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-10"
        >
          Skills
        </motion.h2>
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <h3 className="font-semibold text-gray-300 mb-3">{category.title}</h3>
            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
              }}
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-gray-500 border border-white/5"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
