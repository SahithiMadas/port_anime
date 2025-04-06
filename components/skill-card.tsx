"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code,
  Database,
  Globe,
  Wrench,
  Activity,
  GitBranch,
  PiIcon as Python,
  FileJson,
  Coffee,
  Server,
  Cpu,
  Braces,
} from "lucide-react"

interface Skill {
  name: string
  icon?: React.ReactNode
}

interface SkillCardProps {
  category: string
  skills: Skill[]
  index: number
}

// Function to get icon for a skill
const getSkillIcon = (skillName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    // Programming Languages
    Python: <Python className="h-4 w-4 text-blue-500" />,
    Java: <Coffee className="h-4 w-4 text-orange-500" />,
    R: <Code className="h-4 w-4 text-blue-600" />,
    "C#": <Code className="h-4 w-4 text-green-600" />,
    Go: <Code className="h-4 w-4 text-cyan-500" />,
    JavaScript: <Braces className="h-4 w-4 text-yellow-500" />,
    "HTML & CSS": <Code className="h-4 w-4 text-red-500" />,

    // Databases
    MySQL: <Database className="h-4 w-4 text-blue-500" />,
    MongoDB: <Database className="h-4 w-4 text-green-500" />,
    Oracle: <Database className="h-4 w-4 text-red-500" />,
    "AWS RDS": <Database className="h-4 w-4 text-orange-500" />,
    "AWS S3": <Database className="h-4 w-4 text-yellow-500" />,
    "AWS Lambda": <Server className="h-4 w-4 text-purple-500" />,
    Azure: <Server className="h-4 w-4 text-blue-500" />,
    GCP: <Server className="h-4 w-4 text-red-500" />,

    // Web Development
    React: <Code className="h-4 w-4 text-blue-400" />,
    Angular: <Code className="h-4 w-4 text-red-500" />,
    "Node.js": <Server className="h-4 w-4 text-green-500" />,
    "D3.js": <Globe className="h-4 w-4 text-orange-500" />,

    // Software Tools
    "Cursor AI": <Cpu className="h-4 w-4 text-purple-500" />,
    "Oracle Cloud Infrastructure": <Server className="h-4 w-4 text-red-500" />,
    AWS: <Server className="h-4 w-4 text-orange-500" />,
    Kubernetes: <Server className="h-4 w-4 text-blue-500" />,
    Docker: <Server className="h-4 w-4 text-blue-400" />,
    Terraform: <Wrench className="h-4 w-4 text-purple-600" />,
    Helm: <Wrench className="h-4 w-4 text-blue-500" />,
    "API Gateway": <Globe className="h-4 w-4 text-green-500" />,
    Databricks: <Database className="h-4 w-4 text-orange-500" />,
    "Power BI": <Activity className="h-4 w-4 text-yellow-500" />,
    Tableau: <Activity className="h-4 w-4 text-blue-500" />,
    "Microsoft Excel": <FileJson className="h-4 w-4 text-green-600" />,

    // Monitoring & Debugging
    DataDog: <Activity className="h-4 w-4 text-purple-500" />,
    Splunk: <Activity className="h-4 w-4 text-green-500" />,
    Prometheus: <Activity className="h-4 w-4 text-orange-500" />,

    // Testing & CI/CD
    JUnit: <Code className="h-4 w-4 text-green-500" />,
    PyTest: <Code className="h-4 w-4 text-yellow-500" />,
    Selenium: <Code className="h-4 w-4 text-green-600" />,
    Jenkins: <GitBranch className="h-4 w-4 text-red-500" />,
    "GitHub Actions": <GitBranch className="h-4 w-4 text-purple-500" />,
    "CI/CD pipelines": <GitBranch className="h-4 w-4 text-blue-500" />,
    "Circle CI": <GitBranch className="h-4 w-4 text-green-500" />,
    TravisCI: <GitBranch className="h-4 w-4 text-red-600" />,
    DevOps: <Wrench className="h-4 w-4 text-blue-600" />,
  }

  return iconMap[skillName] || <Code className="h-4 w-4 text-foreground" />
}

export function SkillCard({ category, skills, index }: SkillCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px" }) // Removed once: true to allow re-animation

  return (
    <motion.div
      ref={ref}
      className="rounded-xl border bg-background p-6 shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="mb-4 text-lg font-bold text-foreground">{category}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-3 py-1.5"
            whileHover={{ scale: 1.05 }}
          >
            {getSkillIcon(skill.name)}
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

