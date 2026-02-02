'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SectionTransition() {
  return (
    <motion.div
      className="relative h-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Shooting star */}
      <motion.div
        className="absolute top-1/2 -left-32 w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50"
        animate={{ x: 800, opacity: [0, 1, 0] }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Constellation lines */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 128"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="64"
          x2="1000"
          y2="64"
          stroke="url(#gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(167, 139, 250, 0)" />
            <stop offset="50%" stopColor="rgba(167, 139, 250, 0.6)" />
            <stop offset="100%" stopColor="rgba(167, 139, 250, 0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle center glow */}
      <motion.div
        className="absolute w-32 h-32 bg-violet-400 rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  )
}
