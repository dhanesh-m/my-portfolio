import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Mobile Development',
    skills: ['React Native', 'JavaScript', 'TypeScript', 'iOS', 'Android', 'Xcode', 'Android Studio', 'Expo', 'Redux', 'REST APIs'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Vue', 'Vite', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Deployment'],
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
    skills: ['AI Coding Tools (Cursor, Copilot, Emergent)', 'Google Flow (AI Video)', 'Video Editing', 'AI Prompt Engineering', 'Firebase', 'Stripe', 'SendBird', 'Razorpay', 'Git', 'Bitbucket', 'CI/CD'],
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
          className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10"
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
            className="space-y-3"
          >
            <h3 className="font-semibold text-gray-300">{category.title}</h3>
            <div className="flex flex-wrap gap-x-2 gap-y-2 items-center overflow-hidden">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 text-gray-500 border border-white/5 transition-colors duration-200 hover:bg-[#00D9A5]/10 hover:border-[#00D9A5]/40 hover:text-[#00D9A5] cursor-default break-words max-w-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
