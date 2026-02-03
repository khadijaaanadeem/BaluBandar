'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HerFutureSelfSection() {
  const futureText = "Ten years from now, I see my Balu as a successful Physician Assistant.\nA cat mom.\nWith her own little bakery serving the best coffee, brownies, and pizza bread.\nI see myself calling her every single day at the slightest inconvenience,\njust for her to fix everything, like she always does. I'll annoy her a little, tell her how she's my biggest fan when in reality it's the opposite. Just to annoy her even more i'll take ten more pictures of her while she's in her lazy haalat to make stickers and tease her later on. We'll have our new favourite dessert, and we will still be sending each other coffee updates and rating them, making a note of which one to try later on. ten years from now, khatu and balu will still have the same bond"

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

            {/* Visual side - Polaroid Frame */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center relative"
            >
              {/* Polaroid Frame */}
              <motion.div
                className="w-64 bg-white p-4 shadow-2xl relative group cursor-default"
                style={{
                  aspectRatio: '3/4',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3), -2px 2px 8px rgba(0,0,0,0.1)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                }}
                whileHover={{
                  transform: 'perspective(1000px) rotateY(-5deg) rotateZ(2deg) scale(1.02)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Photo area - empty/faint */}
                <div className="w-full h-4/5 bg-gradient-to-b from-gray-100 to-gray-200 rounded-sm flex items-center justify-center border border-gray-300/30 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-soft-yellow" />
                  </div>
                  <span className="text-gray-400 text-sm font-light absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    not taken yet.
                  </span>
                </div>

                {/* Caption area */}
                <div className="h-1/5 flex items-end pt-3">
                  <p className="text-gray-400 text-xs italic tracking-wide text-center w-full">
                    khatu bozo balu perfect always
                  </p>
                </div>
              </motion.div>
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
