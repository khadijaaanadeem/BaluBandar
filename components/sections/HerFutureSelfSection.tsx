'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HerFutureSelfSection() {
  const futureText = "Ten years from now, I see my Balu as a successful Physician Assistant.\nA cat mom.\nWith her own little bakery serving the best coffee, brownies, and pizza bread.\nI see myself calling her every single day at the slightest inconvenience,\njust for her to fix it — like she always does."

  return (
    <section className="min-h-screen bg-black py-20 px-6 flex items-center relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-soft-yellow rounded-full mix-blend-screen filter blur-3xl opacity-5"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-soft-yellow rounded-full mix-blend-screen filter blur-3xl opacity-5"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-soft-yellow mb-4">
            🔮 Your Future Self
          </h2>
          <p className="text-xl text-soft-yellow/80">What I see for you, ten years from now</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-soft-yellow/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {futureText.split('\n').map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-lg md:text-xl text-soft-yellow leading-relaxed font-medium"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            {/* Visual side - cozy bakery/coffee aesthetic */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-96 relative border-2 border-soft-yellow/30">
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute top-8 left-8 text-5xl"
                  animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ☕
                </motion.div>

                <motion.div
                  className="absolute top-12 right-8 text-5xl"
                  animate={{ rotate: [0, -10, 0], y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🐱
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-1/4 text-5xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🍰
                </motion.div>

                <motion.div
                  className="absolute bottom-12 right-1/4 text-5xl"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🩺
                </motion.div>

                {/* Center glow */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="w-32 h-32 bg-soft-yellow rounded-full filter blur-3xl" />
                </motion.div>

                {/* Text overlay */}
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <p className="text-white text-center text-sm font-semibold">
                    Your Dream, Our Reality 💭✨
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Inspirational quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl text-coffee italic font-light">
            "You've got this, Balu. The future is exactly as bright as you make it."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
