"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

/**
 * SectionHeading Component
 *
 * Creates an animated heading for each section with optional subtitle
 * and decorative underline. Animations trigger each time the heading
 * comes into view.
 *
 * @param title - The main heading text
 * @param subtitle - Optional subheading text
 * @param className - Optional additional CSS classes
 */
export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  // Reference to observe visibility
  const ref = useRef(null)

  // Check if heading is in view (20% visibility threshold)
  // No 'once: true' parameter so animations repeat when scrolling
  const isInView = useInView(ref, { amount: 0.2 })

  return (
    <div ref={ref} className={`text-center mb-12 ${className}`}>
      {/* Main heading with gradient text */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Optional subtitle */}
      {subtitle && (
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Animated decorative underline */}
      <motion.div
        className="h-1 w-20 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mx-auto mt-4 rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : { width: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  )
}

