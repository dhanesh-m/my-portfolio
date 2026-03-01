import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({ activeSection = 'about' }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-[#0A0E14]/95 backdrop-blur-xl border-b border-white/5 pt-[max(0.25rem,env(safe-area-inset-top))] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
      <nav className="px-4 py-3 flex items-center justify-between max-w-[100vw]">
        <a href="#" className="font-bold text-lg text-white">
          Dhanesh M
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="bg-[#0F1419] border-t border-white/5 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-1">
          {links.map((link) => {
            const sectionId = link.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 min-h-[44px] flex items-center transition-colors ${isActive ? 'text-[#00D9A5]' : 'text-gray-400 hover:text-[#00D9A5]'}`}
              >
                {link.label.toUpperCase()}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
