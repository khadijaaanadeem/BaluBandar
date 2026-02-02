'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface InteractivePart {
  id: string
  emoji: string
  label: string
  x: number
  y: number
  description: string
}

const brainParts: InteractivePart[] = [
  {
    id: 'coffee',
    emoji: '☕',
    label: 'Coffee Lover',
    x: 25,
    y: 20,
    description: 'A bottomless pit of caffeine appreciation'
  },
  {
    id: 'minions',
    emoji: '🍌',
    label: 'Minions Energy',
    x: 75,
    y: 25,
    description: 'Chaotic, funny, and adorably lovable'
  },
  {
    id: 'cats',
    emoji: '🐱',
    label: 'Cat Obsessed',
    x: 30,
    y: 70,
    description: 'Future cat mom in the making'
  },
  {
    id: 'icecream',
    emoji: '🍦',
    label: 'Ice Cream Connoisseur',
    x: 70,
    y: 75,
    description: 'A sweet tooth with sophisticated taste'
  },
  {
    id: 'adventure',
    emoji: '✨',
    label: 'Tries New Things',
    x: 50,
    y: 45,
    description: 'Always up for an unexpected adventure'
  },
  {
    id: 'heart',
    emoji: '💖',
    label: 'Big Heart',
    x: 50,
    y: 60,
    description: 'Cares deeply about the people she loves'
  },
]

interface BrainMapProps {
  onPartHover?: (part: InteractivePart | null) => void
  onPartClick?: (partId: string) => void
}

export function BrainMap({ onPartHover, onPartClick }: BrainMapProps) {
  const [hoveredPart, setHoveredPart] = useState<InteractivePart | null>(null)

  const sectionMap: { [key: string]: string } = {
    'coffee': 'her-thoughts',
    'minions': 'dark-humor',
    'cats': 'khatu-balu',
    'icecream': 'people-who-love-you',
    'adventure': 'her-future-self',
    'heart': 'quiz',
  }

  const handlePartClick = (part: InteractivePart) => {
    const sectionId = sectionMap[part.id]
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className="relative w-full h-96 bg-gray-900/50 rounded-3xl border-2 border-soft-yellow/30 overflow-hidden cursor-pointer backdrop-blur-md">
      {/* Brain SVG backdrop */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300">
        <ellipse cx="200" cy="150" rx="150" ry="120" fill="#6B4423" />
        <path d="M 100 150 Q 80 120 85 100 M 300 150 Q 320 120 315 100" stroke="#6B4423" strokeWidth="2" fill="none" />
      </svg>

      {/* Interactive parts */}
      {brainParts.map((part, index) => (
        <motion.div
          key={part.id}
          className="absolute cursor-pointer"
          style={{
            left: `${part.x}%`,
            top: `${part.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => handlePartClick(part)}
          onHoverStart={() => {
            setHoveredPart(part)
            onPartHover?.(part)
          }}
          onHoverEnd={() => {
            setHoveredPart(null)
            onPartHover?.(null)
          }}
        >
          <motion.div
            animate={{
              scale: hoveredPart?.id === part.id ? 1.3 : 1,
              y: hoveredPart?.id === part.id ? -20 : 0,
            }}
            className="text-4xl"
          >
            {part.emoji}
          </motion.div>

          {hoveredPart?.id === part.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-soft-yellow px-3 py-2 rounded-lg whitespace-nowrap text-sm z-10 border border-soft-yellow/50"
            >
              <p className="font-bold">{part.label}</p>
              <p className="text-xs text-soft-yellow/60">{part.description}</p>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Info text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-center text-warm-brown font-medium">
          Hover to explore her brain 🧠
        </p>
      </div>
    </div>
  )
}
