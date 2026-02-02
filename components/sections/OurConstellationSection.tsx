'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Star {
  x: number
  y: number
  size: number
  id: string
}

interface Trait {
  id: string
  name: string
  description: string
  fromStar: string
  toStar: string
  type: 'core' | 'complementary' | 'subtle'
}

interface CompatibilityNode {
  id: string
  label: string
  rating: number
  description: string
  angle: number
  distance: number
}

// Aquarius constellation (Feb 6) - left side
const aquariusStars: Star[] = [
  { x: 20, y: 25, size: 2.5, id: 'aq-1' },
  { x: 25, y: 20, size: 2, id: 'aq-2' },
  { x: 30, y: 22, size: 1.8, id: 'aq-3' },
  { x: 28, y: 30, size: 2.2, id: 'aq-4' },
  { x: 22, y: 35, size: 1.9, id: 'aq-5' },
  { x: 26, y: 40, size: 2, id: 'aq-6' },
  { x: 18, y: 38, size: 1.7, id: 'aq-7' },
]

// Pisces constellation (March 10) - right side
const piscesStars: Star[] = [
  { x: 70, y: 28, size: 2.4, id: 'pi-1' },
  { x: 75, y: 25, size: 2, id: 'pi-2' },
  { x: 80, y: 28, size: 2.2, id: 'pi-3' },
  { x: 82, y: 35, size: 1.8, id: 'pi-4' },
  { x: 77, y: 38, size: 2, id: 'pi-5' },
  { x: 72, y: 40, size: 1.9, id: 'pi-6' },
  { x: 68, y: 35, size: 1.7, id: 'pi-7' },
]

// Shared traits with connecting lines
const sharedTraits: Trait[] = [
  // Core traits (brightest connections)
  { id: '1', name: 'Intuition', description: 'Both feel things before they can explain them', fromStar: 'aq-1', toStar: 'pi-1', type: 'core' },
  { id: '2', name: 'Emotional Depth', description: 'Not loud, but very real', fromStar: 'aq-4', toStar: 'pi-5', type: 'core' },
  { id: '3', name: 'Empathy', description: 'They notice what others miss', fromStar: 'aq-5', toStar: 'pi-6', type: 'core' },
  { id: '4', name: 'Creativity', description: 'In different forms, same instinct', fromStar: 'aq-3', toStar: 'pi-3', type: 'core' },
  { id: '5', name: 'Soft Strength', description: 'Gentle doesn\'t mean weak', fromStar: 'aq-6', toStar: 'pi-4', type: 'core' },
  
  // Complementary traits
  { id: '6', name: 'Vision ↔ Imagination', description: 'One sees the future, the other feels it', fromStar: 'aq-2', toStar: 'pi-2', type: 'complementary' },
  { id: '7', name: 'Logic ↔ Emotion', description: 'Grounded thinking meets deep feeling', fromStar: 'aq-4', toStar: 'pi-5', type: 'complementary' },
  { id: '8', name: 'Independence ↔ Devotion', description: 'Freedom that still chooses connection', fromStar: 'aq-7', toStar: 'pi-7', type: 'complementary' },
  
  // Subtle traits
  { id: '9', name: 'Overthinking', description: '', fromStar: 'aq-1', toStar: 'pi-1', type: 'subtle' },
  { id: '10', name: 'Late-night honesty', description: '', fromStar: 'aq-5', toStar: 'pi-6', type: 'subtle' },
  { id: '11', name: 'Loyal in unseen ways', description: '', fromStar: 'aq-6', toStar: 'pi-4', type: 'subtle' },
]

// Compatibility metrics
const compatibilityNodes: CompatibilityNode[] = [
  { 
    id: 'emotional', 
    label: 'Emotional Match', 
    rating: 5,
    description: 'Deep, intuitive understanding of each other\'s feelings',
    angle: 0,
    distance: 200
  },
  { 
    id: 'communication', 
    label: 'Communication', 
    rating: 4.5,
    description: 'Honest conversations, even the quiet ones',
    angle: 72,
    distance: 200
  },
  { 
    id: 'energy', 
    label: 'Energy Sync', 
    rating: 4.8,
    description: 'Rhythms align, even when worlds drift apart',
    angle: 144,
    distance: 200
  },
  { 
    id: 'trust', 
    label: 'Trust', 
    rating: 5,
    description: 'Quietly loyal, deeply rooted',
    angle: 216,
    distance: 200
  },
  { 
    id: 'growth', 
    label: 'Growth Potential', 
    rating: 4.9,
    description: 'Together, you inspire each other to evolve',
    angle: 288,
    distance: 200
  },
]

const starPositions: Record<string, { x: number; y: number }> = {}

// Create a map for quick star position lookup
;[...aquariusStars, ...piscesStars].forEach((star) => {
  starPositions[star.id] = { x: star.x, y: star.y }
})

export default function OurConstellationSection() {
  const [hoveredTrait, setHoveredTrait] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [showLines, setShowLines] = useState(false)

  // Trigger line animation after constellation loads
  React.useEffect(() => {
    const timer = setTimeout(() => setShowLines(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Convert angle and distance to x, y coordinates (centered in SVG)
  const getNodePosition = (angle: number, distance: number) => {
    const centerX = 500
    const centerY = 300
    const radians = (angle * Math.PI) / 180
    const x = centerX + distance * Math.cos(radians)
    const y = centerY + distance * Math.sin(radians)
    return { x, y }
  }

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* Background stars scattered */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 30 }).map((_, i) => (
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

      <div className="relative z-10 w-full max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-light text-slate-100 mb-4 tracking-tight">
            Our Constellation 🌙
          </h2>
          <motion.p
            className="text-lg text-slate-400 font-light tracking-wide"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Different signs. Same sky.
          </motion.p>
        </motion.div>

        {/* SVG Constellation Canvas with Compatibility Nodes */}
        <div className="relative w-full aspect-video max-w-5xl mx-auto">
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 30px rgba(147, 112, 219, 0.2))' }}
          >
            <defs>
              {/* Glow filters */}
              <filter id="glow-core">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-complementary">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-node">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradients for lines */}
              <linearGradient id="grad-core" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(167, 139, 250, 0.4)" />
                <stop offset="50%" stopColor="rgba(147, 112, 219, 0.8)" />
                <stop offset="100%" stopColor="rgba(167, 139, 250, 0.4)" />
              </linearGradient>
              <linearGradient id="grad-complementary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(100, 200, 255, 0.3)" />
                <stop offset="50%" stopColor="rgba(100, 200, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(100, 200, 255, 0.3)" />
              </linearGradient>
              <linearGradient id="grad-subtle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(167, 139, 250, 0.1)" />
                <stop offset="50%" stopColor="rgba(167, 139, 250, 0.3)" />
                <stop offset="100%" stopColor="rgba(167, 139, 250, 0.1)" />
              </linearGradient>
            </defs>

            {/* Compatibility node orbits (invisible guide circles) */}
            {compatibilityNodes.map((node) => (
              <circle
                key={`orbit-${node.id}`}
                cx="500"
                cy="300"
                r={node.distance}
                fill="none"
                stroke="rgba(167, 139, 250, 0.05)"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            ))}

            {/* Connecting trait lines */}
            {sharedTraits.map((trait) => {
              const from = starPositions[trait.fromStar]
              const to = starPositions[trait.toStar]
              if (!from || !to) return null

              const x1 = (from.x / 100) * 1000
              const y1 = (from.y / 100) * 600
              const x2 = (to.x / 100) * 1000
              const y2 = (to.y / 100) * 600

              const gradientId = `grad-${trait.type}`
              const opacity = trait.type === 'core' ? 0.6 : trait.type === 'complementary' ? 0.4 : 0.15
              const strokeWidth = trait.type === 'core' ? 2 : trait.type === 'complementary' ? 1.5 : 1

              return (
                <g key={trait.id} onMouseEnter={() => setHoveredTrait(trait.id)} onMouseLeave={() => setHoveredTrait(null)}>
                  {/* Animated line draw */}
                  {showLines && (
                    <motion.line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={`url(#${gradientId})`}
                      strokeWidth={strokeWidth}
                      opacity={hoveredTrait === trait.id ? 1 : opacity}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: hoveredTrait === trait.id ? 1 : opacity,
                      }}
                      transition={{
                        pathLength: { duration: 1.5, delay: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.3 },
                      }}
                      style={{ filter: 'drop-shadow(0 0 5px rgba(167, 139, 250, 0.5))' }}
                      className="cursor-pointer transition-all"
                    />
                  )}

                  {/* Glow on hover */}
                  {hoveredTrait === trait.id && (
                    <motion.line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={trait.type === 'core' ? 'rgba(167, 139, 250, 0.3)' : 'rgba(100, 200, 255, 0.3)'}
                      strokeWidth={strokeWidth + 3}
                      opacity={0.3}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.2 }}
                      filter="url(#glow-core)"
                    />
                  )}
                </g>
              )
            })}

            {/* Aquarius constellation stars */}
            {aquariusStars.map((star) => (
              <motion.g key={star.id}>
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size}
                  fill="#e0e7ff"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  filter="url(#glow-core)"
                />
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size * 1.5}
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.3)"
                  strokeWidth="1"
                  animate={{
                    r: [star.size * 1.5, star.size * 2.5, star.size * 1.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.g>
            ))}

            {/* Pisces constellation stars */}
            {piscesStars.map((star) => (
              <motion.g key={star.id}>
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size}
                  fill="#bfdbfe"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  filter="url(#glow-core)"
                />
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size * 1.5}
                  fill="none"
                  stroke="rgba(100, 200, 255, 0.3)"
                  strokeWidth="1"
                  animate={{
                    r: [star.size * 1.5, star.size * 2.5, star.size * 1.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
              </motion.g>
            ))}

            {/* Compatibility nodes (orbiting stars) */}
            {compatibilityNodes.map((node, index) => {
              const pos = getNodePosition(node.angle, node.distance)
              return (
                <motion.g
                  key={`node-${node.id}`}
                  animate={{
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 20 + index * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={3.5}
                    fill="url(#grad-node-glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    style={{
                      background: `radial-gradient(circle, ${
                        hoveredNode === node.id
                          ? 'rgba(236, 179, 255, 0.8)'
                          : 'rgba(168, 85, 247, 0.6)'
                      }, transparent)`,
                      filter: 'drop-shadow(0 0 8px rgba(236, 179, 255, 0.6))',
                    }}
                    animate={{
                      r: hoveredNode === node.id ? [3.5, 6, 3.5] : 3.5,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: hoveredNode === node.id ? Infinity : 0,
                    }}
                    className="cursor-pointer"
                  />

                  {/* Outer glow ring on hover */}
                  {hoveredNode === node.id && (
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={3.5}
                      fill="none"
                      stroke="rgba(236, 179, 255, 0.4)"
                      strokeWidth="2"
                      initial={{ r: 3.5 }}
                      animate={{ r: [3.5, 12, 3.5] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                  )}

                  {/* Connecting line from node to center (faint) */}
                  {showLines && (
                    <motion.line
                      x1={pos.x}
                      y1={pos.y}
                      x2="500"
                      y2="300"
                      stroke={hoveredNode === node.id ? 'rgba(236, 179, 255, 0.4)' : 'rgba(168, 85, 247, 0.1)'}
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredNode === node.id ? 1 : 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.g>
              )
            })}
          </svg>

          {/* Constellation labels */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-8 left-8 text-sm font-light text-slate-400 tracking-widest"
          >
            ♒ AQUARIUS (Feb 6)
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-8 right-8 text-sm font-light text-slate-400 tracking-widest"
          >
            ♓ PISCES (Mar 10)
          </motion.div>
        </div>

        {/* Compatibility nodes info (below constellation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {compatibilityNodes.map((node) => (
              <motion.div
                key={`info-${node.id}`}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="group cursor-pointer text-center"
                whileHover={{ scale: 1.05 }}
              >
                {/* Star rating visualization */}
                <div className="flex justify-center gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className={`text-lg transition-colors ${
                        i < Math.floor(node.rating)
                          ? 'text-yellow-300'
                          : i < node.rating
                          ? 'text-yellow-200'
                          : 'text-slate-600'
                      }`}
                      animate={hoveredNode === node.id ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <h3 className="text-sm font-light text-slate-200 mb-2 group-hover:text-purple-300 transition-colors">
                  {node.label}
                </h3>

                {/* Description on hover */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredNode === node.id ? 1 : 0,
                    height: hoveredNode === node.id ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-slate-400 overflow-hidden font-light italic"
                >
                  {node.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trait labels - floating on the right */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Traits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-gradient-to-br from-violet-900/20 to-slate-900/20 backdrop-blur-md rounded-xl border border-violet-400/30 p-6"
            >
              <h3 className="text-violet-300 text-sm font-semibold mb-4 tracking-widest">CORE TRAITS</h3>
              <div className="space-y-3">
                {sharedTraits
                  .filter((t) => t.type === 'core')
                  .map((trait) => (
                    <motion.div
                      key={trait.id}
                      onMouseEnter={() => setHoveredTrait(trait.id)}
                      onMouseLeave={() => setHoveredTrait(null)}
                      className="cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-slate-200 font-light text-sm group-hover:text-violet-300 transition-colors">
                        {trait.name}
                      </p>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredTrait === trait.id ? 1 : 0,
                          height: hoveredTrait === trait.id ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-slate-400 text-xs mt-1 overflow-hidden"
                      >
                        {trait.description}
                      </motion.p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            {/* Complementary Traits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-md rounded-xl border border-blue-400/30 p-6"
            >
              <h3 className="text-blue-300 text-sm font-semibold mb-4 tracking-widest">BALANCE</h3>
              <div className="space-y-3">
                {sharedTraits
                  .filter((t) => t.type === 'complementary')
                  .map((trait) => (
                    <motion.div
                      key={trait.id}
                      onMouseEnter={() => setHoveredTrait(trait.id)}
                      onMouseLeave={() => setHoveredTrait(null)}
                      className="cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-slate-200 font-light text-sm group-hover:text-blue-300 transition-colors">
                        {trait.name}
                      </p>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredTrait === trait.id ? 1 : 0,
                          height: hoveredTrait === trait.id ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-slate-400 text-xs mt-1 overflow-hidden"
                      >
                        {trait.description}
                      </motion.p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            {/* Subtle Traits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-md rounded-xl border border-slate-500/20 p-6"
            >
              <h3 className="text-slate-400 text-sm font-semibold mb-4 tracking-widest">WHISPERS</h3>
              <div className="space-y-3">
                {sharedTraits
                  .filter((t) => t.type === 'subtle')
                  .map((trait) => (
                    <motion.div
                      key={trait.id}
                      onMouseEnter={() => setHoveredTrait(trait.id)}
                      onMouseLeave={() => setHoveredTrait(null)}
                      className="cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-slate-300 font-light text-sm group-hover:text-slate-100 transition-colors italic">
                        {trait.name}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-16 text-slate-400 text-sm tracking-widest font-light"
        >
          Not identical — just compatible. ✨
        </motion.p>
      </div>
    </section>
  )
}>
      {/* Background stars scattered */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 30 }).map((_, i) => (
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

      <div className="relative z-10 w-full max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-light text-slate-100 mb-4 tracking-tight">
            Our Constellation 🌙
          </h2>
          <motion.p
            className="text-lg text-slate-400 font-light tracking-wide"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Different signs. Same sky.
          </motion.p>
        </motion.div>

        {/* SVG Constellation Canvas */}
        <div className="relative w-full aspect-video max-w-5xl mx-auto">
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 30px rgba(147, 112, 219, 0.2))' }}
          >
            <defs>
              {/* Glow filters */}
              <filter id="glow-core">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-complementary">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Gradients for lines */}
              <linearGradient id="grad-core" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(167, 139, 250, 0.4)" />
                <stop offset="50%" stopColor="rgba(147, 112, 219, 0.8)" />
                <stop offset="100%" stopColor="rgba(167, 139, 250, 0.4)" />
              </linearGradient>
              <linearGradient id="grad-complementary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(100, 200, 255, 0.3)" />
                <stop offset="50%" stopColor="rgba(100, 200, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(100, 200, 255, 0.3)" />
              </linearGradient>
              <linearGradient id="grad-subtle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(167, 139, 250, 0.1)" />
                <stop offset="50%" stopColor="rgba(167, 139, 250, 0.3)" />
                <stop offset="100%" stopColor="rgba(167, 139, 250, 0.1)" />
              </linearGradient>
            </defs>

            {/* Connecting trait lines */}
            {sharedTraits.map((trait) => {
              const from = starPositions[trait.fromStar]
              const to = starPositions[trait.toStar]
              if (!from || !to) return null

              const x1 = (from.x / 100) * 1000
              const y1 = (from.y / 100) * 600
              const x2 = (to.x / 100) * 1000
              const y2 = (to.y / 100) * 600

              const gradientId = `grad-${trait.type}`
              const opacity = trait.type === 'core' ? 0.6 : trait.type === 'complementary' ? 0.4 : 0.15
              const strokeWidth = trait.type === 'core' ? 2 : trait.type === 'complementary' ? 1.5 : 1

              return (
                <g key={trait.id} onMouseEnter={() => setHoveredTrait(trait.id)} onMouseLeave={() => setHoveredTrait(null)}>
                  {/* Animated line draw */}
                  {showLines && (
                    <motion.line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={`url(#${gradientId})`}
                      strokeWidth={strokeWidth}
                      opacity={hoveredTrait === trait.id ? 1 : opacity}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: hoveredTrait === trait.id ? 1 : opacity,
                      }}
                      transition={{
                        pathLength: { duration: 1.5, delay: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.3 },
                      }}
                      style={{ filter: 'drop-shadow(0 0 5px rgba(167, 139, 250, 0.5))' }}
                      className="cursor-pointer transition-all"
                    />
                  )}

                  {/* Glow on hover */}
                  {hoveredTrait === trait.id && (
                    <motion.line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={trait.type === 'core' ? 'rgba(167, 139, 250, 0.3)' : 'rgba(100, 200, 255, 0.3)'}
                      strokeWidth={strokeWidth + 3}
                      opacity={0.3}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.2 }}
                      filter="url(#glow-core)"
                    />
                  )}
                </g>
              )
            })}

            {/* Aquarius constellation stars */}
            {aquariusStars.map((star) => (
              <motion.g key={star.id}>
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size}
                  fill="#e0e7ff"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  filter="url(#glow-core)"
                />
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size * 1.5}
                  fill="none"
                  stroke="rgba(167, 139, 250, 0.3)"
                  strokeWidth="1"
                  animate={{
                    r: [star.size * 1.5, star.size * 2.5, star.size * 1.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.g>
            ))}

            {/* Pisces constellation stars */}
            {piscesStars.map((star) => (
              <motion.g key={star.id}>
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size}
                  fill="#bfdbfe"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  filter="url(#glow-core)"
                />
                <motion.circle
                  cx={(star.x / 100) * 1000}
                  cy={(star.y / 100) * 600}
                  r={star.size * 1.5}
                  fill="none"
                  stroke="rgba(100, 200, 255, 0.3)"
                  strokeWidth="1"
                  animate={{
                    r: [star.size * 1.5, star.size * 2.5, star.size * 1.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
              </motion.g>
            ))}
          </svg>

          {/* Constellation labels */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-8 left-8 text-sm font-light text-slate-400 tracking-widest"
          >
            ♒ AQUARIUS (Feb 6)
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-8 right-8 text-sm font-light text-slate-400 tracking-widest"
          >
            ♓ PISCES (Mar 10)
          </motion.div>
        </div>

        {/* Trait labels - floating on the right */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Traits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-gradient-to-br from-violet-900/20 to-slate-900/20 backdrop-blur-md rounded-xl border border-violet-400/30 p-6"
            >
              <h3 className="text-violet-300 text-sm font-semibold mb-4 tracking-widest">CORE TRAITS</h3>
              <div className="space-y-3">
                {sharedTraits
                  .filter((t) => t.type === 'core')
                  .map((trait) => (
                    <motion.div
                      key={trait.id}
                      onMouseEnter={() => setHoveredTrait(trait.id)}
                      onMouseLeave={() => setHoveredTrait(null)}
                      className="cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-slate-200 font-light text-sm group-hover:text-violet-300 transition-colors">
                        {trait.name}
                      </p>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredTrait === trait.id ? 1 : 0,
                          height: hoveredTrait === trait.id ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-slate-400 text-xs mt-1 overflow-hidden"
                      >
                        {trait.description}
                      </motion.p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            {/* Complementary Traits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-md rounded-xl border border-blue-400/30 p-6"
            >
              <h3 className="text-blue-300 text-sm font-semibold mb-4 tracking-widest">BALANCE</h3>
              <div className="space-y-3">
                {sharedTraits
                  .filter((t) => t.type === 'complementary')
                  .map((trait) => (
                    <motion.div
                      key={trait.id}
                      onMouseEnter={() => setHoveredTrait(trait.id)}
                      onMouseLeave={() => setHoveredTrait(null)}
                      className="cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-slate-200 font-light text-sm group-hover:text-blue-300 transition-colors">
                        {trait.name}
                      </p>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredTrait === trait.id ? 1 : 0,
                          height: hoveredTrait === trait.id ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-slate-400 text-xs mt-1 overflow-hidden"
                      >
                        {trait.description}
                      </motion.p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>

            {/* Subtle Traits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/20 to-slate-900/20 backdrop-blur-md rounded-xl border border-slate-500/20 p-6"
            >
              <h3 className="text-slate-400 text-sm font-semibold mb-4 tracking-widest">WHISPERS</h3>
              <div className="space-y-3">
                {sharedTraits
                  .filter((t) => t.type === 'subtle')
                  .map((trait) => (
                    <motion.div
                      key={trait.id}
                      onMouseEnter={() => setHoveredTrait(trait.id)}
                      onMouseLeave={() => setHoveredTrait(null)}
                      className="cursor-pointer group"
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-slate-300 font-light text-sm group-hover:text-slate-100 transition-colors italic">
                        {trait.name}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-16 text-slate-400 text-sm tracking-widest font-light"
        >
          Not identical — just compatible. ✨
        </motion.p>
      </div>
    </section>
  )
}
