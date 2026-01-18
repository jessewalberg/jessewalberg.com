import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { GameIntro } from '@/components/game-intro'
import { GameNav } from '@/components/game-nav'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    if (showIntro) return

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showIntro])

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (showIntro) {
    return <GameIntro onComplete={() => setShowIntro(false)} />
  }

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.75 0.18 100) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.75 0.18 100) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <GameNav currentSection={currentSection} onNavigate={handleNavigate} />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <div className="fixed top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-primary pointer-events-none z-40" />
      <div className="fixed top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-primary pointer-events-none z-40" />
      <div className="fixed bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-primary pointer-events-none z-40" />
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-primary pointer-events-none z-40" />
    </main>
  )
}
