'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SECTIONS = [
  { id: 'hero', label: 'Home', icon: '☕' },
  { id: 'thoughts', label: 'Thoughts', icon: '✨' },
  { id: 'humor', label: 'Dark Humor', icon: '😈' },
  { id: 'people', label: 'People', icon: '🎥' },
  { id: 'future', label: 'Future Self', icon: '🔮' },
  { id: 'polaroids', label: 'Polaroids', icon: '📸' },
  { id: 'quiz', label: 'Quiz', icon: '❓' },
  { id: 'ending', label: 'Ending', icon: '💌' },
]

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40 flex flex-col gap-3"
    >
      {/* Background glow */}
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 blur-xl -z-10" />

      {/* Navigation buttons */}
      <div className="flex flex-col gap-2 bg-slate-950/70 backdrop-blur-md p-3 rounded-xl border border-violet-400/30">
        {SECTIONS.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 text-lg ${
              activeSection === section.id
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/50'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-violet-300'
            }`}
            title={section.label}
          >
            {section.icon}
          </motion.button>
        ))}
      </div>

      {/* Floating label (appears on hover) */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute right-16 bottom-0 bg-violet-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap pointer-events-none"
      >
        {SECTIONS.find((s) => s.id === activeSection)?.label}
      </motion.div>
    </motion.nav>
  )
}
