"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

/**
 * TypingEffect Component
 *
 * Creates a typewriter effect that cycles through an array of texts,
 * typing and deleting each one in sequence.
 *
 * @param texts - Array of strings to display in sequence
 * @param typingSpeed - Milliseconds per character when typing
 * @param deletingSpeed - Milliseconds per character when deleting
 * @param delayBetweenTexts - Pause time between typing and deleting
 */
export function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingEffectProps) {
  // Current text index in the array
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  // Current text being displayed (partial or complete)
  const [currentText, setCurrentText] = useState("")
  // Whether we're currently deleting or typing
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    // Get the full text we're currently working with
    const text = texts[currentTextIndex]

    // Set timeout for the next character update
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing mode: add one character at a time
          if (currentText.length < text.length) {
            setCurrentText(text.substring(0, currentText.length + 1))
          } else {
            // Text is complete, wait before starting to delete
            setTimeout(() => setIsDeleting(true), delayBetweenTexts)
          }
        } else {
          // Deleting mode: remove one character at a time
          if (currentText.length > 0) {
            setCurrentText(text.substring(0, currentText.length - 1))
          } else {
            // Text is fully deleted, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          }
        }
      },
      // Use different speeds for typing and deleting
      isDeleting ? deletingSpeed : typingSpeed,
    )

    // Clean up timeout on component unmount or state change
    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <div className="inline-flex items-center">
      <span>{currentText}</span>
      {/* Blinking cursor */}
      <motion.span
        className="ml-1 inline-block w-0.5 h-6 bg-foreground"
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
      />
    </div>
  )
}

