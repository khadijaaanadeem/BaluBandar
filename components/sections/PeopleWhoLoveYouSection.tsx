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
          {/* Video placeholder - replace with actual video */}
          <div className="relative w-full bg-gray-800 aspect-video flex items-center justify-center border-b-2 border-soft-yellow/30">
            <div className="text-center">
              <p className="text-white text-2xl font-bold mb-4">🎬 Video Montage</p>
              <p className="text-white/80 text-lg">
                A compilation of everyone's messages and moments
              </p>
              <p className="text-white/60 text-sm mt-4">
                Upload your video file (MP4, WebM, etc.) to replace this placeholder
              </p>
              
              {/* Placeholder video iframe for testing */}
              <div className="mt-6">
                <video
                  width="100%"
                  height="100%"
                  controls
                  className="hidden"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                >
                  Your browser does not support HTML5 video.
                </video>
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <svg className="w-20 h-20 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal message section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gray-900/50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-soft-yellow/30 backdrop-blur-md"
        >
          <h3 className="text-3xl font-bold text-soft-yellow mb-6 text-center">
            A Personal Message For You
          </h3>

          <div className="relative bg-gray-800 rounded-xl p-8 aspect-video flex items-center justify-center border-2 border-soft-yellow/30">
            <div className="text-center">
              <p className="text-soft-yellow text-lg font-semibold mb-4">📹 Your Video Message</p>
              <p className="text-soft-yellow/80">
                A personal video recording will appear here. Upload your video file to display it.
              </p>
              <p className="text-soft-yellow/60 text-sm mt-4">
                This is where your heartfelt birthday message goes 💌
              </p>
            </div>
          </div>

          <p className="text-center text-warm-brown mt-6 italic text-sm">
            Your message will autoplay here. Make it special! 🎥
          </p>
        </motion.div>
      </div>
    </section>
  )
}
