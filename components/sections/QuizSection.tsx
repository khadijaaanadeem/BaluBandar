'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Question {
  question: string
  options: string[]
  correct: number
  hint?: string
}

const quizQuestions: Question[] = [
  {
    question: "What's her coffee order?",
    options: ["Caramel cold brew", "Iced Latte", "Americano", "Flat white"],
    correct: 0,
    hint: "classic"
  },
  {
    question: "What's her favourite colour?",
    options: ["Soft pink", "Warm brown", "Mint green", "lavender purple"],
    correct: 3,
    hint: "cozy, just like khatu"
  },
  {
    question: "Favourite musician?",
    options: ["Abdul Hannan", "Maanu", "Karan Aujla", "Atif Aslam"],
    correct: 0,
    hint: "lumber 1 fan"
  },
  {
    question: "What can't she live without?",
    options: ["Phone", "Coffee", "Cats", "All of the above"],
    correct: 3,
    hint: "Impossible to choose!"
  },
  {
    question: "Favourite ice cream flavor?",
    options: ["Vanilla", "Whatever Khatu eats", "Pistachio", "Cookie dough"],
    correct: 1,
    hint: "khatu's choice is her choice"
  },
  {
    question: "Cat person or cat OBSESSED?",
    options: ["Allergic actually", "Just a person", "Obsessed", "Wants 47 cats minimum"],
    correct: 3,
    hint: "Let's be honest..."
  },
  {
    question: "Her comfort activity?",
    options: ["Gaming", "Reading", "People-watching with coffee", "Sleeping"],
    correct: 3,
    hint: "Observations and caffeine"
  },
  {
    question: "What does she overthink the most?",
    options: ["Exams", "Text messages", "Career decisions", "Whether to get another coffee"],
    correct: 3,
    hint: "The eternal struggle"
  },
  {
    question: "Who calls her for every problem?",
    options: ["Her mom", "Her doctor", "Her best friend (you!)", "The pizza guy"],
    correct: 2,
    hint: "That's you! 😌"
  },
]

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  const question = quizQuestions[currentQuestion]

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setAnswered(true)

    if (index === question.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
    setSelectedAnswer(null)
    setShowResults(false)
  }

  const getResultMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage === 100) return "Perfect! You're basically her twin! 👯‍♀️"
    if (percentage >= 80) return "Amazing! You know her so well! 💖"
    if (percentage >= 60) return "Pretty good! A few surprises, but we know you! 🎉"
    if (percentage >= 40) return "Not bad! Time for a deeper friendship dive! ☕"
    return "Well, now you have excuses to spend more time with her! 😄"
  }

  return (
    <section className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-soft-yellow mb-4">
            🎮 How Well Do You Know Her?
          </h2>
          <p className="text-xl text-soft-yellow/80">Test your knowledge of Balu!</p>
        </motion.div>

        {!showResults ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-gray-900/50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-soft-yellow/30 backdrop-blur-md"
          >
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-soft-yellow">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-soft-yellow"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-soft-yellow">
                {question.question}
              </h3>
            </div>

            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => !answered && handleAnswer(index)}
                  disabled={answered}
                  className={`
                    w-full p-4 text-left rounded-xl font-medium transition-all
                    ${selectedAnswer === index
                      ? index === question.correct
                        ? 'bg-green-100 border-2 border-green-500 text-green-900'
                        : 'bg-red-100 border-2 border-red-500 text-red-900'
                      : answered && index === question.correct
                      ? 'bg-green-100 border-2 border-green-500 text-green-900'
                      : 'bg-soft-yellow border-2 border-warm-brown/30 text-coffee hover:border-warm-brown disabled:opacity-60'
                    }
                  `}
                  whileHover={{ scale: answered ? 1 : 1.02 }}
                  whileTap={{ scale: answered ? 1 : 0.98 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-soft-yellow/10 rounded-xl p-4 mb-8 border border-soft-yellow/20"
              >
                {selectedAnswer === question.correct ? (
                  <p className="text-green-700 font-semibold">✨ Correct! You nailed it!</p>
                ) : (
                  <>
                    <p className="text-red-700 font-semibold mb-2">Not quite right this time!</p>
                    {question.hint && (
                      <p className="text-soft-yellow/80 text-sm">💡 Hint: {question.hint}</p>
                    )}
                  </>
                )}
              </motion.div>
            )}

            {answered && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleNext}
                className="w-full bg-soft-yellow hover:bg-soft-yellow/80 text-gray-900 font-bold py-3 rounded-xl transition-colors"
              >
                {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next Question'}
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900/50 rounded-2xl shadow-xl p-8 md:p-12 text-center border-2 border-soft-yellow/30 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-8xl font-bold text-soft-yellow mb-4">
                {score}/{quizQuestions.length}
              </div>
            </motion.div>

            <h3 className="text-3xl font-bold text-coffee mb-4">
              {getResultMessage()}
            </h3>

            <p className="text-xl text-soft-yellow/80 mb-8">
              You got <span className="font-bold text-soft-yellow">{Math.round((score / quizQuestions.length) * 100)}%</span> correct!
            </p>

            <motion.button
              onClick={resetQuiz}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-soft-yellow hover:bg-soft-yellow/80 text-gray-900 font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Try Again? 🎯
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
