"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Award, ExternalLink, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  link?: string
  image?: string
  additionalImages?: { title: string; url: string }[]
  index: number
}

export function CertificateCard({ title, issuer, date, link, image, additionalImages, index }: CertificateCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" }) // Removed once: true to allow re-animation

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border bg-background shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
              <Award className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{issuer}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">{date}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>View Certificate</span>
            </Link>
          )}

          {additionalImages && additionalImages.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && additionalImages && additionalImages.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {additionalImages.map((img, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-sm font-medium text-foreground">{img.title}</p>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                    <Image src={img.url || "/placeholder.svg"} alt={img.title} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

