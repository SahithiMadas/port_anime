"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, User, GraduationCap, Code, Briefcase, FolderOpen, Award, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#home",
    gradient: "radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(126,34,206,0.06) 50%, rgba(107,33,168,0) 100%)",
    iconColor: "text-purple-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "#about",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    label: "Education",
    href: "#education",
    gradient: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 50%, rgba(190,24,93,0) 100%)",
    iconColor: "text-pink-500",
  },
  {
    icon: <Code className="h-5 w-5" />,
    label: "Skills",
    href: "#skills",
    gradient: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.06) 50%, rgba(4,120,87,0) 100%)",
    iconColor: "text-emerald-500",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Experience",
    href: "#experience",
    gradient: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(217,119,6,0.06) 50%, rgba(180,83,9,0) 100%)",
    iconColor: "text-amber-500",
  },
  {
    icon: <FolderOpen className="h-5 w-5" />,
    label: "Projects",
    href: "#projects",
    gradient: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(2,132,199,0.06) 50%, rgba(3,105,161,0) 100%)",
    iconColor: "text-sky-500",
  },
  {
    icon: <Award className="h-5 w-5" />,
    label: "Certificates",
    href: "#certificates",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(109,40,217,0.06) 50%, rgba(91,33,182,0) 100%)",
    iconColor: "text-violet-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

/**
 * Navbar Component
 *
 * A responsive navigation bar with animated menu items, theme toggle,
 * and active section highlighting.
 */
export function Navbar() {
  const { theme, setTheme } = useTheme()
  // Track if user has scrolled down the page
  const [isScrolled, setIsScrolled] = useState(false)
  // Track which section is currently in view
  const [activeSection, setActiveSection] = useState("home")
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    /**
     * Handle scroll events to:
     * 1. Add background to navbar when scrolled
     * 2. Determine which section is currently in view
     */
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Initial call to set the active section on page load
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  /**
   * Toggle mobile menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isDarkTheme = theme === "dark"

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 p-2 mx-auto max-w-7xl transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center justify-between">
        <Link
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent"
        >
          Sahithi Madas
        </Link>

        <div className="flex items-center gap-4">
          <motion.nav
            className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden hidden md:block"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className={`absolute -inset-2 bg-gradient-radial from-transparent ${
                isDarkTheme
                  ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-pink-400/30 via-90%"
                  : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-pink-400/20 via-90%"
              } to-transparent rounded-3xl z-0 pointer-events-none`}
              variants={navGlowVariants}
            />
            <ul className="flex items-center gap-2 relative z-10">
              {menuItems.map((item) => (
                <motion.li key={item.label} className="relative">
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        opacity: 0,
                        borderRadius: "16px",
                      }}
                    />
                    <motion.a
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl ${
                        activeSection === item.href.substring(1)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                    >
                      <span
                        className={`transition-colors duration-300 ${
                          activeSection === item.href.substring(1) ? item.iconColor : "group-hover:" + item.iconColor
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.a>
                    <motion.a
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl ${
                        activeSection === item.href.substring(1)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                    >
                      <span
                        className={`transition-colors duration-300 ${
                          activeSection === item.href.substring(1) ? item.iconColor : "group-hover:" + item.iconColor
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.a>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-full bg-background/80 backdrop-blur-lg border border-border/40 shadow-md"
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-background/80 backdrop-blur-lg border border-border/40 shadow-md transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden mt-2 p-4 rounded-xl bg-background/95 backdrop-blur-lg border border-border/40 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className={activeSection === item.href.substring(1) ? item.iconColor : ""}>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}

