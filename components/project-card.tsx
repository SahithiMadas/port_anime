"use client"

import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

interface ProjectCardProps {
  title: string
  description: string[]
  technologies: string[]
  github?: string
  demo?: string
  index: number
}

/**
 * ProjectCard Component
 *
 * Displays project information in a card format with title, description,
 * technologies used, and links to GitHub and demo.
 *
 * @param title - Project title
 * @param description - Array of description points
 * @param technologies - Array of technologies used
 * @param github - Optional GitHub repository link
 * @param demo - Optional live demo link
 * @param index - Card index for staggered animation
 */
export function ProjectCard({ title, description, technologies, github, demo, index }: ProjectCardProps) {
  // Reference to observe visibility
  const ref = useRef(null)

  // Check if card is in view
  const isInView = useInView(ref, { margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border bg-background p-6 shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation based on index
      whileHover={{ y: -5 }} // Subtle lift effect on hover
    >
      {/* Decorative background glow */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl" />

      {/* Project title */}
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>

      {/* Project description as bullet points */}
      <ul className="mb-4 ml-5 list-disc space-y-1 text-muted-foreground">
        {description.map((item, i) => (
          <li key={i} className="text-sm">
            {item}
          </li>
        ))}
      </ul>

      {/* Technologies used */}
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-3 py-1 text-xs font-medium text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project links */}
      <div className="flex gap-3">
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </Link>
        )}

        {demo && (
          <Link
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:from-purple-600 hover:to-blue-600"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </motion.div>
  )
}

