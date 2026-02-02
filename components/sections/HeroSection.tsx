'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BrainMap } from '@/components/BrainMap'

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
    <section className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-soft-yellow rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-soft-yellow rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-soft-yellow mb-4 leading-tight">
            Happy Birthday
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-soft-yellow/80 mb-8">
            Balu 🎉
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-soft-yellow/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Welcome inside your beautiful chaotic mind. Scroll down to explore thoughts, memories, and dreams. 💭✨
        </motion.p>

        {/* Interactive Brain Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <BrainMap onPartHover={setSelectedPart} />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <p className="text-warm-brown font-medium mb-2">Scroll to explore</p>
            <svg
              className="w-6 h-6 text-coffee"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
