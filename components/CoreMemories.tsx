'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Memory {
  id: string
  name: string
  color: string
  rgbColor: string
  glowColor: string
  memory: string
  initialX: number
  initialY: number
  driftDuration: number
  breatheDuration: number
  pulseDelay: number
}

const MEMORIES: Memory[] = [
  {
    id: 'comfort',
    name: 'Comfort',
    color: '#d4a574',
    rgbColor: '212, 165, 116',
    glowColor: 'rgba(212, 165, 116, 0.4)',
    memory: 'Late nights that felt safe.',
    initialX: -120,
    initialY: -80,
    driftDuration: 12,
    breatheDuration: 4.2,
    pulseDelay: 0,
  },
  {
    id: 'depth',
    name: 'Depth',
    color: '#4a7ba7',
    rgbColor: '74, 123, 167',
    glowColor: 'rgba(74, 123, 167, 0.4)',
    memory: 'Being understood without words.',
    initialX: 140,
    initialY: -60,
    driftDuration: 14,
    breatheDuration: 4.8,
    pulseDelay: 2,
  },
  {
    id: 'joy',
    name: 'Joy',
    color: '#e8c547',
    rgbColor: '232, 197, 71',
    glowColor: 'rgba(232, 197, 71, 0.4)',
    memory: 'Laughing until you forgot to breathe.',
    initialX: -100,
    initialY: 100,
    driftDuration: 13,
    breatheDuration: 4.5,
    pulseDelay: 4,
  },
  {
    id: 'curiosity',
    name: 'Curiosity',
    color: '#b4a7d6',
    rgbColor: '180, 167, 214',
    glowColor: 'rgba(180, 167, 214, 0.4)',
    memory: 'Questions that kept you wondering.',
    initialX: 130,
    initialY: 110,
    driftDuration: 15,
    breatheDuration: 4.9,
    pulseDelay: 3,
  },
  {
    id: 'growth',
    name: 'Growth',
    color: '#a4c69d',
    rgbColor: '164, 198, 157',
    glowColor: 'rgba(164, 198, 157, 0.4)',
    memory: 'Becoming who you needed to be.',
    initialX: 0,
    initialY: -120,
    driftDuration: 16,
    breatheDuration: 5,
    pulseDelay: 5,
  },
  {
    id: 'connection',
    name: 'Connection',
    color: '#d4d4e8',
    rgbColor: '212, 212, 232',
    glowColor: 'rgba(212, 212, 232, 0.4)',
    memory: 'The people who saw all of you.',
    initialX: -130,
    initialY: 50,
    driftDuration: 13.5,
    breatheDuration: 4.6,
    pulseDelay: 1,
  },
]

export default function CoreMemories() {
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null)
  const [hoverMemory, setHoverMemory] = useState<string | null>(null)
  const [pulseOrb, setPulseOrb] = useState<string | null>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Track mouse position for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Living system: orbs pulse and drift subtly
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      const randomOrb = MEMORIES[Math.floor(Math.random() * MEMORIES.length)]
      setPulseOrb(randomOrb.id)
      setTimeout(() => setPulseOrb(null), 1500)
    }, 9000)

    return () => clearInterval(pulseInterval)
  }, [])

  const getDriftVariants = (memory: Memory, isSelected: boolean) => {
    const magneticPull = hoverMemory === memory.id ? 15 : 0
    const hoverX = Math.cos(Math.atan2(mousePos.y, mousePos.x)) * magneticPull
    const hoverY = Math.sin(Math.atan2(mousePos.y, mousePos.x)) * magneticPull

    return {
      animate: {
        x: [
          memory.initialX,
          memory.initialX + 40,
          memory.initialX - 30,
          memory.initialX,
        ],
        y: [
          memory.initialY,
          memory.initialY - 35,
          memory.initialY + 25,
          memory.initialY,
        ],
        transition: {
          duration: memory.driftDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    }
  }

  const getBreatheVariants = (memory: Memory, isSelected: boolean) => {
    if (isSelected) {
      return {
        animate: {
          scale: 1.4,
          opacity: 1,
          transition: { duration: 0.6 },
        },
      }
    }

    return {
      animate: {
        scale: [1, 1.08, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
          duration: memory.breatheDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    }
  }

  const getPulseVariants = (memory: Memory) => {
    return {
      animate: {
        scale: [1, 1.15, 1],
        boxShadow: [
          `0 0 40px ${memory.glowColor}`,
          `0 0 80px ${memory.glowColor}`,
          `0 0 40px ${memory.glowColor}`,
        ],
        transition: {
          duration: 1.5,
        },
      },
    }
  }

  return (
    <div
      ref={sceneRef}
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f1419 100%)',
      }}
    >
      {/* SVG for advanced glow filters */}
      <svg style={{ display: 'none' }} width="0" height="0">
        <defs>
          {/* Glass sphere inner light effect */}
          <radialGradient id="orb-inner" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.3)" />
          </radialGradient>

          {/* Soft glow filter */}
          <filter id="soft-glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Larger, softer glow for halo */}
          <filter id="glow-halo">
            <feGaussianBlur stdDeviation="16" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Ambient particle background */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Instructions */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-slate-400 text-sm tracking-widest font-light">
          Explore the moments that shaped you
        </p>
      </motion.div>

      {/* Orbs container */}
      <div className="relative w-full h-full flex items-center justify-center perspective">
        {MEMORIES.map((memory) => {
          const isSelected = selectedMemory === memory.id
          const isHovered = hoverMemory === memory.id
          const isPulsing = pulseOrb === memory.id

          return (
            <motion.div
              key={memory.id}
              className="absolute"
              variants={getDriftVariants(memory, isSelected)}
              animate="animate"
            >
              {/* Outer halo glow (very soft) */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 180,
                  height: 180,
                  top: -90,
                  left: -90,
                  background: memory.glowColor,
                  filter: 'blur(35px)',
                }}
                animate={
                  isSelected
                    ? {
                        scale: [1.2, 1.4, 1.2],
                        opacity: [0.4, 0.8, 0.4],
                      }
                    : isPulsing
                      ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }
                      : {
                          scale: [1, 1.15, 1],
                          opacity: [0.2, 0.35, 0.2],
                        }
                }
                transition={{
                  duration: isSelected ? 0.8 : 1.5,
                  repeat: isSelected ? Infinity : isPulsing ? 1 : Infinity,
                  ease: 'easeInOut',
                }}
                pointerEvents="none"
              />

              {/* Middle glow ring */}
              <motion.div
                className="absolute rounded-full border"
                style={{
                  width: 140,
                  height: 140,
                  top: -70,
                  left: -70,
                  borderColor: memory.color,
                  borderWidth: 0.5,
                  opacity: 0.3,
                }}
                animate={
                  isHovered
                    ? { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }
                    : { opacity: 0.2 }
                }
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                pointerEvents="none"
              />

              {/* Main orb */}
              <motion.div
                className="relative w-24 h-24 rounded-full cursor-pointer"
                style={{
                  background: `radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.3), ${memory.color})`,
                  boxShadow: `
                    0 0 40px ${memory.glowColor},
                    inset -8px -8px 16px rgba(0, 0, 0, 0.4),
                    inset 4px 4px 12px rgba(255, 255, 255, 0.2)
                  `,
                  border: `1px solid rgba(255, 255, 255, 0.1)`,
                }}
                variants={getBreatheVariants(memory, isSelected)}
                animate={isPulsing ? 'animate' : undefined}
                custom={getPulseVariants(memory)}
                onMouseEnter={() => setHoverMemory(memory.id)}
                onMouseLeave={() => setHoverMemory(null)}
                onClick={() => setSelectedMemory(isSelected ? null : memory.id)}
                whileHover={!isSelected ? { scale: 1.12 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {/* Inner light refraction */}
                <div
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: 'url(#orb-inner)',
                    opacity: 0.6,
                  }}
                />
              </motion.div>

              {/* Memory text reveal */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    className="absolute top-32 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8 }}
                  >
                    <p
                      className="text-lg font-light tracking-wide"
                      style={{ color: memory.color }}
                    >
                      "{memory.memory}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom instruction */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
      >
        <p className="text-slate-500 text-xs tracking-widest font-light">
          Click to explore each memory
        </p>
      </motion.div>
    </div>
  )
}
