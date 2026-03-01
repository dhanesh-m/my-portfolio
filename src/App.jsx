import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      let current = 'about'
      let maxVisible = 0

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) {
          const { top, height } = el.getBoundingClientRect()
          const bottom = top + height
          const visibleTop = Math.max(top, 0)
          const visibleBottom = Math.min(bottom, viewportHeight)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)

          if (visibleHeight > maxVisible) {
            current = id
            maxVisible = visibleHeight
          }
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0E14] text-gray-400 overflow-x-hidden">
      <ScrollProgress />
      <Sidebar activeSection={activeSection} />
      <Nav activeSection={activeSection} />

      <main className="lg:ml-[280px] pt-14 sm:pt-16 lg:pt-0 lg:min-h-screen">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 max-w-4xl pb-[env(safe-area-inset-bottom)] overflow-x-hidden">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
