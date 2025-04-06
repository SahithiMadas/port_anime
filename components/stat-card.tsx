"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  count: number
  title: string
  description: string
  href: string
}

/**
 * StatCard Component
 *
 * Displays a statistic with icon, count, title, and description.
 * Includes a link to navigate to a related section.
 *
 * @param icon - React node for the card icon
 * @param count - Numeric value to display
 * @param title - Card title
 * @param description - Brief description text
 * @param href - Link destination
 */
export function StatCard({ icon, count, title, description, href }: StatCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border bg-background p-6 shadow-md transition-all duration-300 hover:shadow-lg"
      whileHover={{ y: -5, scale: 1.02 }} // Subtle lift effect on hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Animation triggers when card comes into view
      transition={{ duration: 0.5 }}
      viewport={{ once: false }} // Animation repeats each time card comes into view
    >
      {/* Decorative background glow */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl" />

      {/* Icon container */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10">
        {icon}
      </div>

      {/* Statistic count */}
      <h3 className="mb-1 text-3xl font-bold text-foreground">{count}</h3>

      {/* Title */}
      <p className="mb-2 font-medium uppercase tracking-wider text-foreground">{title}</p>

      {/* Description */}
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>

      {/* "View more" link */}
      <Link
        href={href}
        className="group inline-flex items-center gap-1 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
      >
        View more
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  )
}

