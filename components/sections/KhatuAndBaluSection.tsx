'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Polaroid {
  id: number
  front: {
    type: 'image' | 'video'
    src: string
    label: string
  }
  back: string
}

const polaroids: Polaroid[] = [
  {
    id: 1,
    front: {
      type: 'image',
      src: '/img1.jpeg',
      label: 'Coffee Time'
    },
    back: 'That day you spilled coffee on yourself and laughed it off. Classic Balu. ☕'
  },
  {
    id: 2,
    front: {
      type: 'image',
      src: '/img2.jpeg',
      label: 'Adventures'
    },
    back: 'Remember when we got lost but found the best ice cream place? Worth it. 🍦'
  },
  {
    id: 3,
    front: {
      type: 'image',
      src: '/img3.jpeg',
      label: 'Cat Cuddles'
    },
    back: 'Your future cat won\'t stand a chance against your love. 🐱'
  },
  {
    id: 4,
    front: {
      type: 'image',
      src: '/img4.jpeg',
      label: 'Late Night Talks'
    },
    back: 'The conversations that last till 3 AM. You get me like no one else. 💭'
  },
  {
    id: 5,
    front: {
      type: 'image',
      src: '/img5.jpeg',
      label: 'Laughter'
    },
    back: 'Your laugh is contagious. The whole world needs more of it. 😄'
  },
  {
    id: 6,
    front: {
      type: 'image',
      src: '/img6.jpeg',
      label: 'Just Us'
    },
    back: 'In a world full of chaos, you\'re my peace. Forever grateful. 💖'
  },
  {
    id: 7,
    front: {
      type: 'image',
      src: '/img7.jpeg',
      label: 'Forever'
    },
    back: 'And this is just the beginning of our story. Here\'s to many more memories together. 💕'
  },
]

export default function KhatuAndBaluSection({ musicEnabled }: { musicEnabled: boolean }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set())

  const toggleFlip = (id: number) => {
    const newFlipped = new Set(flipped)
    if (newFlipped.has(id)) {
      newFlipped.delete(id)
    } else {
      newFlipped.add(id)
    }
    setFlipped(newFlipped)
  }

  return (
    <section className="min-h-screen bg-black py-20 px-6 relative">
      {/* Music player would go here in production */}
      {musicEnabled && (
        <div className="fixed bottom-8 right-8 z-50">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-soft-yellow text-gray-900 rounded-full p-4 shadow-lg"
          >
            <p className="text-sm text-center">♪ Tu Jo Mila ♪</p>
          </motion.div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-soft-yellow mb-4">
            💞 Khatu & Balu
          </h2>
          <p className="text-xl text-soft-yellow/80">Our story in polaroids and memories</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective">
          {polaroids.map((polaroid, index) => (
            <motion.div
              key={polaroid.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => toggleFlip(polaroid.id)}
              className="h-96 cursor-pointer"
              style={{
                perspective: '1000px',
              }}
            >
              <motion.div
                initial={false}
                animate={{ rotateY: flipped.has(polaroid.id) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center',
                }}
                className="relative w-full h-full"
              >
                {/* Front of polaroid */}
                <motion.div
                  style={{ backfaceVisibility: 'hidden' }}
                  className="absolute w-full h-full bg-gray-900 rounded-lg p-4 shadow-xl border-2 border-soft-yellow/30"
                >
                  <div className="h-64 bg-gray-300 rounded overflow-hidden mb-4">
                    <img
                      src={polaroid.front.src}
                      alt={polaroid.front.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-warm-brown italic text-sm font-medium">
                    {polaroid.front.label}
                  </p>
                </motion.div>

                {/* Back of polaroid */}
                <motion.div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  className="absolute w-full h-full bg-gray-800 rounded-lg p-6 shadow-xl flex items-center justify-center border-2 border-soft-yellow/50"
                >
                  <p className="text-soft-yellow text-center font-handwriting leading-relaxed text-base">
                    {polaroid.back}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-warm-brown text-lg italic">
            Click the polaroids to reveal the memories behind them 📸
          </p>
        </motion.div>
      </div>
    </section>
  )
}
