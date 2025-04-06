"use client"

import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { useRef } from "react"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  index: number
}

export function ExperienceCard({ title, company, location, period, description, index }: ExperienceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" }) // Removed once: true to allow re-animation

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border bg-background p-6 shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl" />

      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-lg font-medium text-blue-500">{company}</p>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{period}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </div>

      <ul className="mb-4 ml-5 list-disc space-y-1 text-muted-foreground">
        {description.map((item, i) => (
          <li key={i} className="text-sm">
            {item}
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-70 rounded-b-xl"></div>
    </motion.div>
  )
}

