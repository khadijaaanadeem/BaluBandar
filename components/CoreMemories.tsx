'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Memory {
  id: string
  category: string
  emoji: string
  color: string
  glowColor: string
  memory: string
  description: string
}

const MEMORIES: Memory[] = [
  {
    id: 'comfort',
    category: 'Comfort',
    emoji: '🌙',
    color: '#a78bfa',
    glowColor: 'rgba(167, 139, 250, 0.6)',
    memory: '[Memory placeholder: A moment of pure comfort]',
    description: 'Safe spaces where you breathe easy',
  },
  {
    id: 'depth',
    category: 'Depth',
    emoji: '🌊',
    color: '#60a5fa',
    glowColor: 'rgba(96, 165, 250, 0.6)',
    memory: '[Memory placeholder: Understanding runs deep]',
    description: 'Conversations that touch your soul',
  },
  {
    id: 'joy',
    category: 'Joy',
    emoji: '✨',
    color: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.6)',
    memory: '[Memory placeholder: Pure, unbridled happiness]',
    description: 'Moments that make you smile uncontrollably',
  },
  {
    id: 'curiosity',
    category: 'Curiosity',
    emoji: '🔮',
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.6)',
    memory: '[Memory placeholder: Questions that shaped you]',
    description: 'Wonder that keeps you exploring',
  },
  {
    id: 'growth',
    category: 'Growth',
    emoji: '🌱',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.6)',
    memory: '[Memory placeholder: Becoming who you are]',
    description: 'Challenges that made you stronger',
  },
  {
    id: 'connection',
    category: 'Connection',
    emoji: '💫',
    color: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.6)',
    memory: '[Memory placeholder: Hearts intertwined]',
    description: 'The people who see you completely',
  },
]

export default function CoreMemories() {
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null)
  const [orbPositions, setOrbPositions] = useState<
    Record<string, { x: number; y: number }>
  >({})

  // Initialize random positions for orbs
  useEffect(() => {
    const positions: Record<string, { x: number; y: number }> = {}
    MEMORIES.forEach((memory) => {
      positions[memory.id] = {
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 200,
      }
    })
    setOrbPositions(positions)
  }, [])

  // Subtle drift animation for orbs
  const getDriftVariants = (id: string) => ({
    initial: {
      x: orbPositions[id]?.x || 0,
      y: orbPositions[id]?.y || 0,
    },
    animate: {
      x: [orbPositions[id]?.x || 0, (orbPositions[id]?.x || 0) + 30, orbPositions[id]?.x || 0],
      y: [orbPositions[id]?.y || 0, (orbPositions[id]?.y || 0) - 20, orbPositions[id]?.y || 0],
    },
  })

  return (
    <div className="relative w-full h-full min-h-96 flex items-center justify-center">
      {/* Background stars */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 1.5 + 0.5,
              height: Math.random() * 1.5 + 0.5,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* SVG for connections */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      >
        {/* Connection lines from selected orb to others */}
        {selectedMemory &&
          MEMORIES.filter((m) => m.id !== selectedMemory).map((memory) => (
            <line
              key={`line-${memory.id}`}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${(orbPositions[memory.id]?.x || 0) * 1.2}px)`}
              y2={`calc(50% + ${(orbPositions[memory.id]?.y || 0) * 1.2}px)`}
              stroke="rgba(167, 139, 250, 0.3)"
              strokeWidth="1"
              strokeDasharray="4"
              opacity={0.2}
            />
          ))}
      </svg>

      {/* Orbs Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {MEMORIES.map((memory, index) => {
          const isSelected = selectedMemory === memory.id
          const delayFactor = index * 0.1

          return (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + delayFactor }}
              className="absolute"
            >
              {/* Orb container with breathing animation */}
              <motion.div
                variants={getDriftVariants(memory.id)}
                initial="initial"
                animate="animate"
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative cursor-pointer group"
                onClick={() => setSelectedMemory(isSelected ? null : memory.id)}
              >
                {/* Outer glow rings */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: memory.glowColor,
                    filter: 'blur(20px)',
                    width: 120,
                    height: 120,
                    top: -60,
                    left: -60,
                  }}
                  animate={{
                    opacity: isSelected ? [0.8, 1, 0.8] : [0.3, 0.6, 0.3],
                    scale: isSelected ? [1, 1.2, 1] : [1, 1.1, 1],
                  }}
                  transition={{
                    duration: isSelected ? 1.5 : 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Middle ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border"
                  style={{
                    borderColor: memory.color,
                    width: 100,
                    height: 100,
                    top: -50,
                    left: -50,
                    opacity: 0.3,
                  }}
                  animate={{
                    scale: isSelected ? [1, 1.15, 1] : [1, 1.05, 1],
                  }}
                  transition={{
                    duration: isSelected ? 1.5 : 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Main orb */}
                <motion.div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-2xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), ${memory.color})`,
                    boxShadow: `0 0 40px ${memory.glowColor}, inset -2px -2px 5px rgba(0, 0, 0, 0.3)`,
                    border: `2px solid ${memory.color}`,
                  }}
                  animate={{
                    scale: isSelected ? 1.3 : 1,
                    y: isSelected ? -40 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  whileHover={{ scale: isSelected ? 1.3 : 1.1 }}
                >
                  {memory.emoji}
                </motion.div>

                {/* Category label - appears on hover */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap"
                  animate={{
                    opacity: isSelected ? 1 : 0,
                    y: isSelected ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                  pointerEvents="none"
                >
                  <p className="text-sm font-light text-slate-200 tracking-widest">
                    {memory.category}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Memory reveal card - appears when an orb is selected */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            key={selectedMemory}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-md"
          >
            <div
              className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 shadow-2xl"
              style={{
                boxShadow: `0 0 30px ${
                  MEMORIES.find((m) => m.id === selectedMemory)?.glowColor
                }`,
              }}
            >
              {/* Accent line at top */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: MEMORIES.find((m) => m.id === selectedMemory)?.color,
                }}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.6 }}
              />

              <p className="text-slate-300 text-center font-light italic mb-4">
                {MEMORIES.find((m) => m.id === selectedMemory)?.memory}
              </p>

              <p className="text-slate-400 text-center text-sm font-light">
                {MEMORIES.find((m) => m.id === selectedMemory)?.description}
              </p>

              {/* Close hint */}
              <p className="text-slate-500 text-xs text-center mt-6 opacity-60">
                Click orb again to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-slate-400 text-sm tracking-widest font-light">
          Click an orb to explore
        </p>
      </motion.div>
    </div>
  )
}
