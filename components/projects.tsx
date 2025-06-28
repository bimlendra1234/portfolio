"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Zap, Brain, Search, Eye } from "lucide-react"

const projects = [
  {
    title: "Netflix-GPT",
    description:
      "AI-powered streaming platform with intelligent search and personalized recommendations using GPT and TMDB integration.",
    tech: ["React", "Redux Toolkit", "Firebase", "OpenAI", "Tailwind CSS"],
    features: [
      "Natural language search converts queries into curated title lists",
      "40% reduction in API calls through memoization",
      "Response time under 1 second",
      "Progressive Web App with Firebase authentication",
    ],
    icon: <Search className="w-8 h-8" />,
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Retinal Disease Classification",
    description:
      "Deep learning system for automated early detection of retinal pathologies using advanced CNN architecture.",
    tech: ["Python", "PyTorch", "scikit-learn", "NumPy"],
    features: [
      "90.4% accuracy in disease classification",
      "F1 score of 0.91 for reliable predictions",
      "50% reduction in training time with mixed-precision",
      "Automated pathology detection system",
    ],
    icon: <Eye className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "NewsSense BART Summarizer",
    description: "Advanced text summarization system using fine-tuned BART model for multi-article content processing.",
    tech: ["Python", "PyTorch", "Hugging Face", "Transformers"],
    features: [
      "ROUGE-1 score of 41.9",
      "BLEU score of 11.8",
      "BERTScore of 86.2",
      "Single-paragraph summaries from multi-article inputs",
    ],
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Pet Vision Transformer",
    description: "Computer vision model using Vision Transformer architecture for high-accuracy pet classification.",
    tech: ["Python", "PyTorch", "Hugging Face ViT"],
    features: [
      "98.4% accuracy in cat-dog classification",
      "F1 score of 0.98",
      "8.3 images/second throughput",
      "Fine-tuned on 25k pet images",
    ],
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, machine learning, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">View Code</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
