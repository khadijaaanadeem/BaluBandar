'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function FinaleSection() {
  const [showText, setShowText] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 })

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    // Simulate video ending and showing text
    const timer = setTimeout(() => {
      setShowText(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Video placeholder */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showText ? 0 : 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black flex items-center justify-center"
      >
        <div className="text-center text-white">
          <p className="text-2xl md:text-3xl font-light mb-4">
            🎬 Our Journey Together
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </motion.div>
          <p className="text-white/60 text-sm mt-4">
            Video will play here (place your cinematic birthday montage here)
          </p>
        </div>
      </motion.div>

      {/* Text content overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            No matter where life takes us,
          </h2>
          <p className="text-3xl md:text-4xl font-light text-white mb-8">
            you will always be
          </p>
          <p className="text-5xl md:text-6xl font-bold text-soft-yellow mb-12">
            my safest place.
          </p>
        </motion.div>

        {/* Signature line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t-2 border-soft-yellow pt-8 mb-12"
        >
          <p className="text-xl text-white/80 italic">
            With all my love,<br />
            Khatu ✨
          </p>
        </motion.div>

        {/* Fade to black text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl md:text-3xl text-soft-yellow font-light"
          >
            To be continued...
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Particles/stars effect */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  )
}
