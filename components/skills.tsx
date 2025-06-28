"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SQL"],
    color: "blue",
  },
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "Next.js", "Tailwind CSS", "Responsive Design"],
    color: "purple",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Spring Boot", "NestJS", "REST APIs", "GraphQL"],
    color: "green",
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
    color: "orange",
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "AWS", "Git", "Jenkins", "Jira"],
    color: "red",
  },
  {
    title: "Testing & AI",
    skills: ["Jest", "Enzyme", "PyTorch", "Machine Learning", "OpenAI"],
    color: "indigo",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-3 rounded-full bg-${category.color}-600 mr-3`}></div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        <span className="text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-${category.color}-600 opacity-0 group-hover/skill:opacity-100 transition-opacity`}
                          whileHover={{ scale: 1.5 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI/ML techniques, cloud architecture
              patterns, and emerging frontend frameworks to stay at the cutting edge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
