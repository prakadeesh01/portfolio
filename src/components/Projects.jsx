import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    name: "TL;DR Bot",
    description: " ⚡️ TL;DR Chrome extension powered by FastAPI + LLMs for instant text summarization.",
    tech: ["React", "Tailwind", "FastAPI", "OpenAI"],
    url: "https://github.com/prakadeesh01/tldr-bot",
  },
  {
    name: "Resume Parser",
    description: " 📎 AI-driven NER engine for parsing & matching resumes with job descriptions.",
    tech: ["spaCy", "HuggingFace", "Transformers", "React"],
    url: "https://github.com/prakadeesh01/deepmatch-x",
  },
  {
    name: "SpanGlishNet",
    description: "🌐 Neural pipeline for Spanish-English translation using cutting-edge multilingual models.",
    tech: ["Streamlit", "TensorFlow", "HuggingFace"],
    url: "https://github.com/prakadeesh01/spanglish-net",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-12 lg:px-16 xl:px-20 bg-background-light dark:bg-background-dark"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 mx-auto">
        <h2 className="text-[1.4375rem] sm:text-4xl lg:text-4xl font-extralight mb-8 text-left font-poppins text-gray-900 dark:text-white">
          🛠️ Open Source Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            const fromDirection = index % 2 === 0 ? -100 : 100;

            return (
              <motion.a
                key={index}
                ref={ref}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: fromDirection }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-background-light dark:bg-background-dark p-8 rounded-none transition-shadow duration-300 ease-in-out flex flex-col h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] dark:hover:bg-purple-900 dark:hover:shadow-[0_0_15px_4px_rgba(216,180,254,0.2)]"
              >
                <h3 className="text-2xl font-semibold mb-2 text-text-light dark:text-text-dark flex items-center gap-2">
                  <img
                    src="misc/book.svg"
                    alt="book icon"
                    className="w-5 h-5 inline-block filter dark:invert"
                  />
                  {project.name}
                </h3>

                <p className="font-poppins text-text-light dark:text-text-dark text-base sm:text-lg lg:text-xl mb-4">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark text-sm px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/prakadeesh01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-sm font-medium bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-600 transition-colors duration-300 rounded-lg"
          >
            MORE PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}
