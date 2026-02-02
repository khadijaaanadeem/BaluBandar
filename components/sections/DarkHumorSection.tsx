'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const darkHumor = [
  "My therapist says I have a dark sense of humor. I said, 'At least I have one.' 🖤",
  "I'm not arguing, I'm just explaining why I'm right... loudly.",
  "My life is like a coffee shop: confusing, addictive, and occasionally bitter.",
  "I told my cat she's adopted. She still hasn't forgiven me.",
  "Adulting is like a bad Minion movie: chaotic, confusing, and slightly traumatic.",
  "I'm 90% coffee and 10% existential dread at this point.",
  "Life tip: If they can't handle you at 6 AM before coffee, they don't deserve you after coffee either.",
]

export default function DarkHumorSection() {
  const [selectedJoke, setSelectedJoke] = useState<number | null>(null)
  const [revealedJokes, setRevealedJokes] = useState<Set<number>>(new Set())

  const handleJokeClick = (index: number) => {
    if (revealedJokes.has(index)) {
      setSelectedJoke(selectedJoke === index ? null : index)
    } else {
      const newRevealed = new Set(revealedJokes)
      newRevealed.add(index)
      setRevealedJokes(newRevealed)
      setSelectedJoke(index)
    }
  }

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-soft-yellow mb-4">
            💀 Her Dark Humor
          </h2>
          <p className="text-xl text-soft-yellow/80">Click to reveal the chaos (it's funny, trust me)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {darkHumor.map((joke, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleJokeClick(index)}
              className="cursor-pointer group"
            >
              <motion.div
                className={`
                  p-8 rounded-xl border-2 transition-all duration-300
                  ${revealedJokes.has(index)
                    ? 'bg-gray-900/50 text-soft-yellow border-soft-yellow shadow-lg backdrop-blur-md'
                    : 'bg-gray-900/30 border-soft-yellow/30 group-hover:border-soft-yellow/60'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {revealedJokes.has(index) ? (
                    <motion.p
                      key="revealed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-lg leading-relaxed font-medium text-soft-yellow"
                    >
                      {joke}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-lg text-soft-yellow/70 group-hover:text-soft-yellow transition-colors"
                    >
                      ✨ Click to reveal ✨
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
