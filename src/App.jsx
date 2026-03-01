import { useState, useEffect } from 'react'
import Nav from './components/Nav'
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
      const triggerOffset = 150
      let current = 'about'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) {
          const { top } = el.getBoundingClientRect()
          if (top <= triggerOffset) current = id
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0E14] text-gray-400">
      <Sidebar activeSection={activeSection} />
      <Nav activeSection={activeSection} />

      <main className="lg:ml-[280px] pt-16 lg:pt-0 lg:min-h-screen">
        <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16 max-w-4xl">
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
