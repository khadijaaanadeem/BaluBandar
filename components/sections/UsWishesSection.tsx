'use client'

import React from 'react'
import { motion } from 'framer-motion'

const wishes = [
  'I hope you\'re as proud of yourself as I am.',
  'I hope you exceed every challenge you set for yourself.',
  'I hope this year is so much better for your health.',
  'I hope you see how far you\'ve come, even when you\'re focused on what\'s next.',
  'I hope you give yourself credit for the effort you put in.',
  'I hope you take care of yourself the way you deserve.',
  'I hope you don\'t doubt your worth when things move slowly.',
  'I hope you keep growing into the person you want to be.',
  'I hope you feel happy without needing a reason.',
  'I hope you always know I\'m in your corner.',
  'I hope our friendship keeps growing, wherever life takes us.',
  'I hope we keep supporting each other the way we always have.',
  'I hope we make more memories we\'ll laugh about later.',
  'I hope you know how much our friendship means to me.',
  'I hope you look back at this year and feel proud.',
  'I hope you know you\'re capable of more than you think.',
  'I hope this year is kind to you.',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function UsWishesSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
            backgroundSize: '4px 4px',
          }}
        />
      </div>

      {/* Warm ambient glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(247, 208, 70, 0.05) 0%, rgba(247, 208, 70, 0) 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight lowercase">
            for you
          </h2>
        </motion.div>

        {/* Wishes container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="space-y-8"
        >
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              variants={lineVariants}
              className="group"
            >
              <motion.p
                className="text-center text-lg md:text-xl text-white font-light leading-relaxed lowercase cursor-default"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.6)',
                }}
                whileHover={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(247, 208, 70, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                {wish}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Spacing after content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-20"
        >
          <p className="text-sm text-slate-500 font-light tracking-widest lowercase">
            scroll to continue
          </p>
        </motion.div>
      </div>
    </section>
  )
}
