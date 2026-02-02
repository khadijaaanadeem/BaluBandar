'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CoreMemories from '@/components/CoreMemories'

const sectionIds = [
  'her-thoughts',
  'dark-humor',
  'people-love-you',
  'future-self',
  'khatu-balu',
  'quiz-game',
]

export default function HeroSection() {
  const [selectedPart, setSelectedPart] = useState<any>(null)

  const handlePartClick = (partId: string) => {
    const sectionIndex = sectionIds.indexOf(partId)
    if (sectionIndex !== -1) {
      const element = document.getElementById(sectionIds[sectionIndex])
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-20 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating emoji decorations */}
        <motion.div
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-10 left-0 text-6xl"
        >
          ☕
        </motion.div>
        <motion.div
          animate={{ rotate: -360, y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-10 right-0 text-6xl"
        >
          🐱
        </motion.div>

        {/* Main title with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 relative"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 blur-3xl bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 rounded-3xl"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <h1 className="relative text-7xl md:text-8xl lg:text-9xl font-light text-slate-100 mb-4 leading-tight tracking-tight">
            Happy Birthday
          </h1>
          <h2 className="relative text-6xl md:text-7xl lg:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-blue-300 to-violet-300 mb-8">
            Balu 🎉
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Welcome inside your beautiful chaotic mind.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-slate-400 mb-12 tracking-widest uppercase"
        >
          Scroll to enter orbit ↓
        </motion.p>

        {/* Interactive Core Memories Experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <CoreMemories />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          onClick={() => {
            const element = document.getElementById('thoughts')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(167, 139, 250, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white font-medium text-lg mb-12 shadow-lg hover:shadow-violet-500/50 transition-all"
        >
          Start Journey ↓
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 bg-slate-300 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
