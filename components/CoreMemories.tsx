'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CANDLE_COUNT = 21


export default function CoreMemories() {
  const [wishMade, setWishMade] = useState(false)
  const [candleFlickers, setCandleFlickers] = useState<number[]>([])

  const handleMakeWish = () => {
    setWishMade(true)
    // Flicker all candles on click
    setCandleFlickers(Array.from({ length: CANDLE_COUNT }, (_, i) => i))
    
    setTimeout(() => {
      setCandleFlickers([])
    }, 600)
  }

  const getCandleFlameAnimation = (index: number) => ({
    animate: {
      y: [0, -4, 2, -3, 1, 0],
      opacity: wishMade ? [1, 0.6, 0.5, 0.4, 0.2, 0] : [0.8, 1, 0.9, 1, 0.85, 0.95],
    },
    transition: {
      duration: 2.5 + Math.random() * 1,
      repeat: Infinity,
      delay: index * 0.05 + Math.random() * 0.3,
      ease: 'easeInOut',
    },
  })

  const getFlickerAnimation = (index: number) => 
    candleFlickers.includes(index)
      ? {
          scale: [1, 0.9, 1.1, 0.8, 1],
          opacity: [1, 0.7, 1, 0.6, 1],
        }
      : {}

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-soft-yellow mb-3">
            🎂 Make a Wish
          </h2>
        </motion.div>

        {/* Cake and Candles Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Cake */}
          <motion.div
            className="relative w-64 h-52 mb-12"
            animate={wishMade ? { scale: 0.95, opacity: 0.7 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Cake glow background */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(155, 89, 182, 0.3) 0%, rgba(155, 89, 182, 0.1) 100%)',
                filter: 'blur(30px)',
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Cake body */}
            <svg viewBox="0 0 200 180" className="w-full h-full relative z-10">
              <defs>
                <linearGradient
                  id="cakeGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#B89FD0" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#9B59B6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7A3E8F" stopOpacity="0.95" />
                </linearGradient>
                <filter id="cakeShadow">
                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="6"
                    floodOpacity="0.3"
                  />
                </filter>
              </defs>

              {/* Cake base */}
              <ellipse cx="100" cy="140" rx="75" ry="20" fill="#6B2E7F" opacity="0.4" />

              {/* Cake main body */}
              <path
                d="M 40 120 Q 35 80, 50 60 L 150 60 Q 165 80, 160 120 Q 160 140, 100 145 Q 40 140, 40 120"
                fill="url(#cakeGradient)"
                filter="url(#cakeShadow)"
              />

              {/* Cake top shine */}
              <ellipse
                cx="100"
                cy="75"
                rx="55"
                ry="15"
                fill="white"
                opacity="0.15"
              />

              {/* Frosting swirl details */}
              <path
                d="M 60 90 Q 70 85, 80 88"
                stroke="#C9B3D8"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M 120 88 Q 130 85, 140 90"
                stroke="#C9B3D8"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
            </svg>

            {/* Candles */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 flex items-end justify-center gap-1">
              {Array.from({ length: CANDLE_COUNT }).map((_, index) => {
                const angle = (index / CANDLE_COUNT) * Math.PI * 2
                const radius = 65
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius * 0.4

                return (
                  <motion.div
                    key={index}
                    className="absolute w-1.5 h-16"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(40% + ${y}px)`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {/* Candle stick */}
                    <div className="w-full h-12 bg-gradient-to-b from-amber-100 to-amber-50 rounded-full" />

                    {/* Flame */}
                    <motion.div
                      className="absolute bottom-12 left-1/2 -translate-x-1/2"
                      {...getCandleFlameAnimation(index)}
                      {...(candleFlickers.includes(index) && {
                        animate: {
                          ...getFlickerAnimation(index),
                          ...getCandleFlameAnimation(index).animate,
                        },
                        transition: {
                          duration: 0.6,
                          ease: 'easeInOut',
                        },
                      })}
                    >
                      <svg
                        width="12"
                        height="20"
                        viewBox="0 0 12 20"
                        className="drop-shadow-lg"
                      >
                        <defs>
                          <radialGradient
                            id={`flameGrad-${index}`}
                            cx="50%"
                            cy="30%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#FFF8DC"
                              stopOpacity="1"
                            />
                            <stop
                              offset="50%"
                              stopColor="#FFD700"
                              stopOpacity="0.8"
                            />
                            <stop
                              offset="100%"
                              stopColor="#FFA500"
                              stopOpacity="0.4"
                            />
                          </radialGradient>
                        </defs>
                        <path
                          d="M 6 20 Q 3 15, 3.5 8 Q 4 4, 6 0 Q 8 4, 8.5 8 Q 9 15, 6 20"
                          fill={`url(#flameGrad-${index})`}
                        />
                      </svg>
                    </motion.div>

                    {/* Glow around flame */}
                    <motion.div
                      className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
                        filter: 'blur(4px)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: wishMade ? [0.3, 0.1, 0] : [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 0.8,
                        repeat: Infinity,
                        delay: index * 0.05,
                      }}
                    />
                  </motion.div>
                )
              })}
            </div>

            {/* Floating particles from candles */}
            {!wishMade &&
              Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                  style={{
                    left: `calc(50% + ${Math.cos((i / 8) * Math.PI * 2) * 40}px)`,
                    top: '10px',
                  }}
                  animate={{
                    y: -80,
                    opacity: [1, 0],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeOut',
                  }}
                />
              ))}
          </motion.div>

          {/* Make a Wish Button */}
          <motion.button
            onClick={handleMakeWish}
            disabled={wishMade}
            className="relative px-8 py-3 mt-12 text-center font-light tracking-wide text-soft-yellow border border-soft-yellow/40 rounded-full overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={!wishMade ? { scale: 1.05 } : {}}
            whileTap={!wishMade ? { scale: 0.98 } : {}}
          >
            {/* Button glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-soft-yellow/10 via-soft-yellow/20 to-soft-yellow/10 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Text */}
            <span className="relative z-10 text-sm md:text-base">
              {wishMade ? '✨ Wish Made ✨' : 'Make a Wish'}
            </span>
          </motion.button>

          {/* Message after wish */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={wishMade ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-soft-yellow/60 text-sm mt-8 italic"
          >
            Your wish is on its way to the future ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
