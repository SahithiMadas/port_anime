"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionTransitionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * SectionTransition Component
 *
 * Adds animated entrance effects to sections when they come into view.
 * The animation will trigger each time the section enters the viewport.
 *
 * @param children - The content to be animated
 * @param className - Optional additional CSS classes
 * @param delay - Optional delay before animation starts (in seconds)
 */
export function SectionTransition({ children, className = "", delay = 0 }: SectionTransitionProps) {
  // Reference to the element we want to observe
  const ref = useRef(null)

  // Check if the element is in view (20% visibility threshold)
  // No 'once: true' parameter so animations repeat when scrolling
  const isInView = useInView(ref, { amount: 0.2 })

  // Animation variants for the fade-up effect
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom easing function for smooth animation
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

