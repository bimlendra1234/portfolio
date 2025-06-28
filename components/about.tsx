"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I'm a passionate Software Engineer with a Master's in Computer Science from the University at Buffalo and
              over 4 years of experience at Amdocs, where I specialized in building scalable web applications and
              improving user experiences.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              My expertise spans full-stack development with React, Node.js, and Spring Boot, along with a strong
              foundation in machine learning and AI. I'm passionate about creating efficient, user-centric solutions
              that make a real impact.
            </p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                System Design
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Master of Science in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">University at Buffalo</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GPA: 3.7/4.0 • Graduating Dec 2026</p>
                </div>
                <div>
                  <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">NIT Rourkela</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2016 - 2020</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Buffalo, New York</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Open to remote opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
