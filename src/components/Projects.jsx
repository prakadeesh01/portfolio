import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    name: "Video Action Localisation",
    description: "🎬 End-to-end spatio-temporal action localisation — VideoMAE backbone (93% Top-1 on HMDB) + DETR-style transformer decoder for per-frame bounding boxes on JHMDB. Video-mAP@0.5: 0.80.",
    tech: ["PyTorch", "VideoMAE", "DETR", "TimeSFormer", "ViViT", "JHMDB"],
    url: "https://github.com/prakadeesh01/video-action-localisation",
    demo: "https://huggingface.co/spaces/pragi007/video_action_localisation_server",
    badge: "★ Featured",
  },
  {
    name: "DeepMatch-X",
    description: "📎 AI-driven pipeline that extracts structured data from resumes and job descriptions using NER and transformer embeddings to compute semantic similarity for candidate–job matching.",
    tech: ["spaCy", "HuggingFace", "Transformers", "PyTorch"],
    url: "https://github.com/prakadeesh01/deepmatch-x",
    demo: null,
    badge: null,
  },
  {
    name: "LunarLander DQN vs DDQN",
    description: "🚀 Rigorous RL study comparing DQN and DDQN agents — experience replay, target networks, Q-value overestimation analysis, hyperparameter sensitivity sweep, and statistical significance testing.",
    tech: ["PyTorch", "Gymnasium", "DQN", "DDQN", "Python"],
    url: "https://github.com/prakadeesh01/lunarlander-dqn-ddqn",
    demo: null,
    badge: null,
  },
  {
    name: "GenAI Tutorial",
    description: "🤖 19+ hands-on RAG implementations: Fusion RAG, Multimodal RAG, Knowledge Graph RAG (Neo4j), hybrid search with 4-bit quantization, contextual compression, self-query retrieval, and reranking.",
    tech: ["LangChain", "LlamaIndex", "Gemini API", "FAISS", "Pinecone", "Neo4j"],
    url: "https://github.com/prakadeesh01/genai_tutorial",
    demo: null,
    badge: null,
  },
  {
    name: "TL;DR Bot",
    description: "⚡️ Chrome extension powered by FastAPI + LLMs for instant text summarization.",
    tech: ["React", "Tailwind", "FastAPI", "OpenAI"],
    url: "https://github.com/prakadeesh01/tldr-bot",
    demo: null,
    badge: null,
  },
  {
    name: "SpanGlishNet",
    description: "🌐 NLP pipeline for Spanish-English code-switched text classification using multilingual transformer models.",
    tech: ["Streamlit", "TensorFlow", "HuggingFace"],
    url: "https://github.com/prakadeesh01/spanglish-net",
    demo: null,
    badge: null,
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
          🛠️ Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            const fromDirection = index % 2 === 0 ? -100 : 100;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: fromDirection }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background-light dark:bg-background-dark p-8 rounded-none transition-shadow duration-300 ease-in-out flex flex-col h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] dark:hover:bg-purple-900 dark:hover:shadow-[0_0_15px_4px_rgba(216,180,254,0.2)]"
              >
                {/* Badge */}
                {project.badge && (
                  <span className="self-start mb-2 text-xs font-semibold px-2 py-1 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 border border-purple-300 dark:border-purple-600">
                    {project.badge}
                  </span>
                )}

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

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark text-sm px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-purple-600 dark:text-purple-300 hover:underline"
                    >
                      GitHub →
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
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
