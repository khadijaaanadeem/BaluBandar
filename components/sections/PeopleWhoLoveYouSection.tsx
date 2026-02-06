'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function PeopleWhoLoveYouSection() {
  return (
    <section className="min-h-screen bg-black py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-soft-yellow mb-4">
            💖 People Who Love You
          </h2>
          <p className="text-xl text-soft-yellow/80">Watch how much you mean to everyone</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gray-900/50 rounded-2xl overflow-hidden shadow-2xl border-2 border-soft-yellow/30 backdrop-blur-md"
        >
          {/* Video container */}
          <div className="relative w-full bg-black aspect-video flex items-center justify-center">
            <video
              width="100%"
              height="100%"
              controls
              className="w-full h-full object-cover"
              src="/video2.mp4"
            >
              Your browser does not support HTML5 video.
            </video>
          </div>
        </motion.div>

        {/* Personal message section - removed as video2 covers all messages */}
      </div>
    </section>
  )
}
