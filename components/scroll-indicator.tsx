"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ChevronDown } from "lucide-react"

/**
 * ScrollIndicator Component
 *
 * Provides a progress bar at the top of the page and a "scroll to explore"
 * indicator at the bottom that disappears when near the end of the page.
 */
export function ScrollIndicator() {
  // State to control visibility of the scroll indicator
  const [isVisible, setIsVisible] = useState(true)

  // Get scroll progress for the progress bar
  const { scrollYProgress } = useScroll()

  // Apply spring physics to the scroll progress for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    /**
     * Handle scroll events to hide the indicator when near the bottom
     */
    const handleScroll = () => {
      // Calculate how far down the page we've scrolled
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Hide the indicator when we're near the bottom of the page
      if (scrollPosition + windowHeight > documentHeight - 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar at the top of the page */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Scroll indicator at the bottom */}
      {isVisible && (
        <motion.div
          className="fixed bottom-10 left-0 right-0 mx-auto w-max z-40 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.p
            className="text-sm font-medium text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Scroll to explore
          </motion.p>
          <motion.div
            className="p-2 rounded-full bg-background/80 backdrop-blur-lg border border-border/40 shadow-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-foreground" />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

