'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Thought {
  id: number
  text: string
  x: number
  y: number
  delay: number
}

export default function HerThoughtsSection() {
  const thoughts: Thought[] = [
    { id: 1, text: "Should I get coffee again?", x: 15, y: 25, delay: 0 },
    { id: 2, text: "Why is life like this?", x: 75, y: 20, delay: 0.5 },
    { id: 3, text: "I need a cat.", x: 20, y: 60, delay: 1 },
    { id: 4, text: "Maybe ice cream is the answer?", x: 70, y: 65, delay: 1.5 },
    { id: 5, text: "Time for another coffee run...", x: 15, y: 85, delay: 2 },
    { id: 6, text: "Cats > Everything", x: 75, y: 45, delay: 2.5 },
  ]

  // Starry background
  const stars = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
  }))

  return (
    <section className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Soft glow background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            🧠 Her Thoughts
          </h2>
          <p className="text-xl text-cyan-200">What's going on in that beautiful mind of yours?</p>
        </motion.div>

        <div className="relative h-[600px] bg-gray-900/50 backdrop-blur-md rounded-3xl border-2 border-soft-yellow/30 overflow-hidden">
          {/* Thought bubbles */}
          {thoughts.map((thought) => (
            <motion.div
              key={thought.id}
              className="absolute"
              style={{
                left: `${thought.x}%`,
                top: `${thought.y}%`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: thought.delay, duration: 0.6 }}
            >
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 4 + thought.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="bg-soft-yellow rounded-full px-6 py-3 shadow-xl shadow-soft-yellow/50 border-2 border-soft-yellow whitespace-nowrap max-w-xs backdrop-blur-sm text-gray-900"
              >
                <p className="text-indigo-900 font-bold text-sm md:text-base">{thought.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
