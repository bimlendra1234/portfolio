"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building, Calendar, TrendingUp } from "lucide-react"

const experiences = [
  {
    title: "Software Developer (Advanced)",
    company: "AMDOCS",
    location: "Pune, India",
    duration: "Dec 2023 – Jul 2024",
    achievements: [
      "Delivered scalable services on Spring Boot and Node.js with React/Redux frontend",
      "Improved customer satisfaction scores by 20% through faster workflows and responsive design",
      "Designed and indexed MySQL and PostgreSQL schemas, optimizing queries to reduce API response times",
      "Implemented OAuth-based Single Sign-On, unifying authentication across applications",
    ],
    color: "blue",
  },
  {
    title: "Software Developer (Experienced)",
    company: "AMDOCS",
    location: "Pune, India",
    duration: "Jan 2022 - Dec 2023",
    achievements: [
      "Designed responsive user interfaces with React, Redux, and TypeScript",
      "Built supporting NestJS REST endpoints for two enterprise web applications",
      "Optimized workflows, cutting escalation tickets by 40%",
      "Decreased issue-resolution time during release periods",
      "Supported UAT and production roll-outs with 2-hour average resolution time",
    ],
    color: "purple",
  },
  {
    title: "Software Developer",
    company: "AMDOCS",
    location: "Pune, India",
    duration: "Aug 2020 – Jan 2022",
    achievements: [
      "Built high-performance React/Redux/TypeScript frontend applications",
      "Developed PLDT port-in workflow that cut navigation-related support tickets by 25%",
      "Added Jest/Enzyme BDD tests, boosting coverage by 30%",
      "Collaborated with backend and middleware teams to integrate APIs",
      "Delivered every sprint on time with zero critical production bugs",
    ],
    color: "green",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            4+ years of experience building scalable solutions and leading technical initiatives
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full bg-${exp.color}-600 border-4 border-white dark:border-gray-900 z-10`}
                ></div>

                <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <TrendingUp size={16} className={`text-${exp.color}-600 mt-1 flex-shrink-0`} />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
