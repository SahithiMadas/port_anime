"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

/**
 * Enhanced AnimatedBackground Component
 *
 * Creates a dynamic, interactive particle-based background animation
 * with neon effects that respond to user interaction and theme changes.
 * Uses both canvas-based particles and DOM-based particles for different effects.
 */
export function AnimatedBackground() {
  // Reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Get current theme from next-themes
  const { theme } = useTheme()
  // State for DOM-based particles
  const [domParticles, setDomParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      animationType: string
    }>
  >([])

  // Generate initial DOM particles
  useEffect(() => {
    const generateDomParticles = () => {
      const newParticles = []
      const particleCount = 15 // Fewer DOM particles for performance

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // percentage of viewport width
          y: Math.random() * 100, // percentage of viewport height
          size: Math.random() * 3 + 1,
          color: getRandomNeonColor(theme === "dark"),
          animationType: getRandomAnimation(),
        })
      }

      setDomParticles(newParticles)
    }

    generateDomParticles()

    // Regenerate particles when theme changes
    const observer = new MutationObserver(() => {
      generateDomParticles()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [theme])

  // Helper function to get random neon color
  const getRandomNeonColor = (isDark: boolean) => {
    const colors = [
      "neon-purple",
      "neon-blue",
      "neon-pink",
      "neon-violet",
      "neon-emerald",
      "neon-amber",
      "neon-red",
      "neon-sky",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Helper function to get random animation type
  const getRandomAnimation = () => {
    const animations = ["particle-1", "particle-2", "particle-3", "particle-4", "float", "orbit", "wave", "drift"]
    return animations[Math.floor(Math.random() * animations.length)]
  }

  useEffect(() => {
    // Get canvas element from ref
    const canvas = canvasRef.current
    if (!canvas) return

    // Get 2D rendering context
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    /**
     * Sets canvas dimensions to match window size
     * Called on initial load and window resize
     */
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    /**
     * Particle class
     * Represents a single animated particle in the background
     */
    class Particle {
      x: number // X position
      y: number // Y position
      size: number // Particle size
      baseSize: number // Original size for reference
      speedX: number // Horizontal speed
      speedY: number // Vertical speed
      color: string // Base color
      alpha: number // Opacity
      growing: boolean // Whether particle is growing or shrinking
      hue: number // Color hue for transitions
      angle: number // Movement angle for orbital motion
      orbitSpeed: number // Speed of orbital motion
      orbitRadius: number // Radius of orbital motion
      centerX: number // Center X for orbital motion
      centerY: number // Center Y for orbital motion
      useOrbit: boolean // Whether to use orbital motion
      pulseSpeed: number // Speed of pulsing effect
      trail: Array<{ x: number; y: number; size: number; alpha: number }> // Trail effect

      constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string, hue: number) {
        this.x = x
        this.y = y
        this.size = size
        this.baseSize = size
        this.speedX = speedX
        this.speedY = speedY
        this.color = color
        this.alpha = Math.random() * 0.6 + 0.2
        this.growing = Math.random() > 0.5
        this.hue = hue

        // Orbital motion properties
        this.angle = Math.random() * Math.PI * 2
        this.orbitSpeed = (Math.random() * 0.02 - 0.01) * (Math.random() > 0.5 ? 1 : -1)
        this.orbitRadius = Math.random() * 50 + 20
        this.centerX = x
        this.centerY = y
        this.useOrbit = Math.random() > 0.7 // 30% of particles will have orbital motion

        // Pulsing effect speed
        this.pulseSpeed = Math.random() * 0.05 + 0.01

        // Trail effect
        this.trail = []
      }

      /**
       * Update particle position and properties for animation
       */
      update() {
        // Store current position in trail
        if (Math.random() > 0.7) {
          // Only store some positions for performance
          this.trail.push({
            x: this.x,
            y: this.y,
            size: this.size * 0.6,
            alpha: this.alpha * 0.3,
          })

          // Limit trail length
          if (this.trail.length > 5) {
            this.trail.shift()
          }
        }

        // Apply orbital motion to some particles
        if (this.useOrbit) {
          this.angle += this.orbitSpeed
          this.x = this.centerX + Math.cos(this.angle) * this.orbitRadius
          this.y = this.centerY + Math.sin(this.angle) * this.orbitRadius

          // Slowly move the orbit center
          this.centerX += this.speedX * 0.2
          this.centerY += this.speedY * 0.2
        } else {
          // Regular linear motion
          this.x += this.speedX
          this.y += this.speedY
        }

        // Pulse size effect
        if (this.growing) {
          this.size += this.pulseSpeed
          if (this.size > this.baseSize * 1.5) this.growing = false
        } else {
          this.size -= this.pulseSpeed
          if (this.size < this.baseSize * 0.5) this.growing = true
        }

        // Pulse alpha effect for twinkling
        this.alpha = this.alpha + (Math.random() * 0.03 - 0.015)
        if (this.alpha < 0.2) this.alpha = 0.2
        if (this.alpha > 0.8) this.alpha = 0.8

        // Slightly shift hue for color transition effect
        this.hue = (this.hue + 0.2) % 360

        // Bounce off edges with slight randomization
        if (canvas?.width && (this.x > canvas.width || this.x < 0)) {
          this.speedX = -this.speedX * (0.9 + Math.random() * 0.2)
          if (Math.abs(this.speedX) < 0.2) this.speedX = (Math.random() - 0.5) * 1.2
        }

        if (canvas?.height && (this.y > canvas.height || this.y < 0)) {
          this.speedY = -this.speedY * (0.9 + Math.random() * 0.2)
          if (Math.abs(this.speedY) < 0.2) this.speedY = (Math.random() - 0.5) * 1.2
        }

        // Occasionally change direction slightly for more natural movement
        if (Math.random() > 0.99) {
          this.speedX += (Math.random() - 0.5) * 0.3
          this.speedY += (Math.random() - 0.5) * 0.3

          // Limit max speed
          const maxSpeed = 1.5
          const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY)
          if (currentSpeed > maxSpeed) {
            this.speedX = (this.speedX / currentSpeed) * maxSpeed
            this.speedY = (this.speedY / currentSpeed) * maxSpeed
          }
        }
      }

      /**
       * Draw the particle on the canvas
       */
      draw() {
        // Draw trail first (behind the particle)
        this.trail.forEach((point, index) => {
          if (!ctx) return
          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)

          // Fade trail points based on their position in the trail
          const trailAlpha = point.alpha * (index / this.trail.length)

          const colorMatch = this.color.match(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*[\d.]+$$/)
          if (colorMatch) {
            const [_, r, g, b] = colorMatch
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailAlpha})`
          } else {
            ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${trailAlpha})`)
          }

          ctx.fill()
        })

        // Draw the main particle
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)

        // Create neon glow effect with radial gradient
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)

        // Extract the base color and apply alpha
        const colorMatch = this.color.match(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*[\d.]+$$/)
        if (colorMatch) {
          const [_, r, g, b] = colorMatch
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.alpha})`)
          gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.5})`)
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
          ctx.fillStyle = gradient
        } else {
          ctx.fillStyle = this.color
        }

        // Add glow effect with shadow
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create particles array
    const particles: Particle[] = []
    // Adjust particle count based on screen size for performance
    const particleCount = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 10000))

    /**
     * Initialize particles with appropriate colors based on theme
     */
    const createParticles = () => {
      particles.length = 0

      const isDark = theme === "dark"

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = (Math.random() - 0.5) * 1.2
        const speedY = (Math.random() - 0.5) * 1.2
        const hue = Math.random() * 360

        // Neon colors for both themes
        let color
        if (isDark) {
          // For dark theme: vibrant neon colors with higher opacity
          const colors = [
            "rgba(147, 51, 234, 0.8)", // Purple
            "rgba(59, 130, 246, 0.8)", // Blue
            "rgba(236, 72, 153, 0.8)", // Pink
            "rgba(124, 58, 237, 0.8)", // Violet
            "rgba(16, 185, 129, 0.8)", // Emerald
            "rgba(245, 158, 11, 0.8)", // Amber
            "rgba(239, 68, 68, 0.8)", // Red
            "rgba(14, 165, 233, 0.8)", // Sky
          ]
          color = colors[Math.floor(Math.random() * colors.length)]
        } else {
          // For light theme: same colors but still visible
          const colors = [
            "rgba(147, 51, 234, 0.6)", // Purple
            "rgba(59, 130, 246, 0.6)", // Blue
            "rgba(236, 72, 153, 0.6)", // Pink
            "rgba(124, 58, 237, 0.6)", // Violet
            "rgba(16, 185, 129, 0.6)", // Emerald
            "rgba(245, 158, 11, 0.6)", // Amber
            "rgba(239, 68, 68, 0.6)", // Red
            "rgba(14, 165, 233, 0.6)", // Sky
          ]
          color = colors[Math.floor(Math.random() * colors.length)]
        }

        particles.push(new Particle(x, y, size, speedX, speedY, color, hue))
      }
    }

    createParticles()

    // Track time for wave effects
    let time = 0

    /**
     * Main animation loop
     * Updates and draws all particles and connections
     */
    const animate = () => {
      // Increment time for wave effects
      time += 0.01

      // Clear canvas with slight fade effect for motion trails
      ctx.fillStyle = theme === "dark" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw connections between nearby particles
          const maxDistance = 180
          if (distance < maxDistance) {
            ctx.beginPath()

            // Create gradient line for neon effect
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)

            // Extract colors from both particles
            const color1 = particles[i].color
            const color2 = particles[j].color

            // Calculate opacity based on distance and add wave effect
            const waveEffect = Math.sin(time + i * 0.1) * 0.05 + 0.05
            const opacity = theme === "dark" ? 0.2 - distance / 1200 + waveEffect : 0.15 - distance / 1500 + waveEffect

            gradient.addColorStop(0, color1.replace(/[\d.]+\)$/, `${opacity})`))
            gradient.addColorStop(1, color2.replace(/[\d.]+\)$/, `${opacity})`))

            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.8 * (1 - distance / maxDistance) // Thicker lines for closer particles
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            // Add glow effect to lines
            ctx.shadowBlur = 5
            ctx.shadowColor = theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(147, 51, 234, 0.3)"
            ctx.stroke()
            ctx.shadowBlur = 0
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Add ambient glow effect
      const isDark = theme === "dark"

      // Create a pulsing ambient glow
      const pulseIntensity = Math.sin(time * 0.5) * 0.03 + 0.05

      if (isDark) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width / 1.5,
        )
        gradient.addColorStop(0, `rgba(147, 51, 234, ${0.08 + pulseIntensity})`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.05 + pulseIntensity})`)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      } else {
        // Subtle glow in light mode too
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width / 1.5,
        )
        gradient.addColorStop(0, `rgba(147, 51, 234, ${0.03 + pulseIntensity})`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.02 + pulseIntensity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Occasionally add new particles to keep the animation fresh
      if (Math.random() > 0.99 && particles.length < particleCount + 20) {
        const size = Math.random() * 3 + 1
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = (Math.random() - 0.5) * 1.2
        const speedY = (Math.random() - 0.5) * 1.2
        const hue = Math.random() * 360

        const color =
          theme === "dark"
            ? `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 150)}, 0.8)`
            : `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 150)}, 0.6)`

        particles.push(new Particle(x, y, size, speedX, speedY, color, hue))

        // Keep particle count in check
        if (particles.length > particleCount + 30) {
          particles.splice(0, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    /**
     * Update particles when theme changes
     */
    const observer = new MutationObserver(() => {
      createParticles()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    /**
     * Mouse interaction tracking
     */
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150,
      isActive: false,
    }

    /**
     * Handle mouse movement to create interactive effects
     */
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x
      mouse.y = event.y
      mouse.isActive = true

      // Create ripple effect
      for (let i = 0; i < 3; i++) {
        const size = Math.random() * 2 + 0.5
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 10
        const speedX = Math.cos(angle) * (Math.random() + 0.5) * 1.5
        const speedY = Math.sin(angle) * (Math.random() + 0.5) * 1.5
        const hue = Math.random() * 360

        const color =
          theme === "dark"
            ? `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 150)}, 0.8)`
            : `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 150)}, 0.6)`

        particles.push(
          new Particle(
            mouse.x! + Math.cos(angle) * distance,
            mouse.y! + Math.sin(angle) * distance,
            size,
            speedX,
            speedY,
            color,
            hue,
          ),
        )

        // Keep particle count in check
        if (particles.length > particleCount + 50) {
          particles.splice(0, 1)
        }
      }

      // Attract nearby particles to cursor
      particles.forEach((particle) => {
        const dx = mouse.x! - particle.x
        const dy = mouse.y! - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx)
          const force = (mouse.radius - distance) / mouse.radius

          // Push particles away from cursor
          particle.speedX -= Math.cos(angle) * force * 0.2
          particle.speedY -= Math.sin(angle) * force * 0.2
        }
      })
    }

    /**
     * Handle mouse click for explosion effect
     */
    const handleClick = (event: MouseEvent) => {
      mouse.x = event.x
      mouse.y = event.y

      // Create explosion effect
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 3 + 1
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 4 + 1
        const speedX = Math.cos(angle) * speed
        const speedY = Math.sin(angle) * speed
        const hue = Math.random() * 360

        const color =
          theme === "dark"
            ? `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 150)}, 0.9)`
            : `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 150)}, 0.7)`

        particles.push(new Particle(mouse.x!, mouse.y!, size, speedX, speedY, color, hue))

        // Keep particle count in check
        if (particles.length > particleCount + 100) {
          particles.splice(0, 5)
        }
      }
    }

    // Add event listeners for mouse interaction
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("click", handleClick)

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
      observer.disconnect()
    }
  }, [theme])

  return (
    <>
      {/* Canvas-based particles */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" aria-hidden="true" />

      {/* DOM-based particles with Tailwind animations */}
      {domParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`fixed rounded-full shadow-${particle.color} animate-${particle.animationType} pointer-events-none -z-10`}
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            width: `${particle.size * 5}px`,
            height: `${particle.size * 5}px`,
            background: `radial-gradient(circle, var(--colors-${particle.color}) 0%, transparent 70%)`,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

