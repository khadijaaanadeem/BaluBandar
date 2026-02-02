'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ChaosCard {
  joke: string
  icon: string
}

const darkHumor: ChaosCard[] = [
  { joke: "My therapist says I have a dark sense of humor. I said, 'At least I have one.' 🖤", icon: '💀' },
  { joke: "I'm not arguing, I'm just explaining why I'm right... loudly.", icon: '⭐' },
  { joke: "My life is like a coffee shop: confusing, addictive, and occasionally bitter.", icon: '☕' },
  { joke: "I told my cat she's adopted. She still hasn't forgiven me.", icon: '🐱' },
  { joke: "Adulting is like a bad Minion movie: chaotic, confusing, and slightly traumatic.", icon: '🎬' },
  { joke: "I'm 90% coffee and 10% existential dread at this point.", icon: '✨' },
  { joke: "Life tip: If they can't handle you at 6 AM, they don't deserve you later.", icon: '☀️' },
  { joke: "My favorite exercise is a cross between a lunge and a crunch. I call it lunch.", icon: '🍽️' },
]

export default function DarkHumorSection() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set())

  const toggleFlip = (index: number) => {
    const newFlipped = new Set(flipped)
    if (newFlipped.has(index)) {
      newFlipped.delete(index)
    } else {
      newFlipped.add(index)
    }
    setFlipped(newFlipped)
  }

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-light text-slate-100 mb-4 tracking-tight">
            Her Dark Humor 💀
          </h2>
          <motion.p
            className="text-lg text-slate-400 font-light"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Click at your own risk. She's unhinged in here. ✨
          </motion.p>
        </motion.div>

        {/* Chaos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {darkHumor.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => toggleFlip(index)}
              className="h-64 cursor-pointer perspective"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{ rotateY: flipped.has(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full"
              >
                {/* Card Front */}
                <motion.div
                  style={{ backfaceVisibility: 'hidden' }}
                  className="absolute w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-violet-400/30 p-6 flex flex-col items-center justify-center group hover:border-violet-400/60 transition-all"
                >
                  <motion.div
                    animate={{ scale: flipped.has(index) ? 1 : [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl mb-4"
                  >
                    {card.icon}
                  </motion.div>
                  <p className="text-center text-slate-300 font-light text-sm">
                    Click to reveal
                  </p>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/0 via-violet-600/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>

                {/* Card Back */}
                <motion.div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  className="absolute w-full h-full bg-gradient-to-br from-violet-900/40 to-slate-900/40 backdrop-blur-md rounded-2xl border border-violet-400/50 p-6 flex items-center justify-center"
                >
                  <p className="text-slate-100 text-center font-light leading-relaxed text-sm">
                    {card.joke}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-20 text-slate-400 text-sm tracking-widest"
        >
          8 chaos cards to discover
        </motion.p>
      </div>
    </section>
  )
}
