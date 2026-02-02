'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface MusicToggleProps {
  enabled: boolean
  onChange: (enabled: boolean) => void
}

export default function MusicToggle({ enabled, onChange }: MusicToggleProps) {
  return (
    <motion.button
      onClick={() => onChange(!enabled)}
      className="fixed top-6 right-6 z-50 bg-coffee hover:bg-warm-brown text-white p-3 rounded-full shadow-lg transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle music"
    >
      {enabled ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎵
        </motion.div>
      ) : (
        <span>🔊</span>
      )}
    </motion.button>
  )
}
