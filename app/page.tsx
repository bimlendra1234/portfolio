"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Navigation />

        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        {/* Scroll indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </ThemeProvider>
  )
}
