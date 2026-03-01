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
      { label: 'Website', url: 'https://cigna.org.in/' },
    ],
  },
  {
    name: 'Oppam',
    description: "Malayalam-first emotional support app. Speak and feel heard. Connect with trained listeners who understand Kerala's culture and mindset.",
    tags: ['React Native', 'Firebase', 'SendBird', 'Razorpay'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/in/app/oppam-malayalees-wellness-app/id6751511759' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.oppam.oppamapp&hl=en_IN' },
      { label: 'Website', url: 'https://oppam.co.in/' },
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
    <section id="projects" className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10">
          Projects
        </h2>
        {projects.map((project) => (
          <div
            key={project.name}
            className="group py-5 sm:py-6 px-3 sm:px-4 border-t border-gray-700/50 first:border-t-0 first:pt-0 rounded-lg transition-colors duration-200 hover:bg-[#00D9A5]/5"
          >
            <h3 className="font-semibold text-gray-300 mb-2">
              {project.links[0] ? (
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00D9A5] transition-colors"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3 break-words">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs font-medium bg-white/5 text-gray-500 border border-white/5 transition-colors duration-200 hover:bg-[#00D9A5]/10 hover:border-[#00D9A5]/40 hover:text-[#00D9A5] cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 sm:gap-4 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D9A5] hover:text-[#00E5B3] font-medium transition-colors duration-200 hover:underline underline-offset-2 py-2 -my-2 min-h-[44px] inline-flex items-center"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
