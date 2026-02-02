'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function AmbientBackground() {
  // Create particles for starfield
  const particles = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 -z-50 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(100, 116, 216, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 112, 219, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(100, 116, 216, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(100, 116, 216, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Starfield particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Ambient nebula glow - left */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(100, 116, 216, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ambient nebula glow - right */}
      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(147, 112, 219, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
