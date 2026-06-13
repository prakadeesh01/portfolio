import React from "react";
import { motion } from "framer-motion";

const SkillItem = ({ iconPath, name }) => (
  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
    <img
      src={`/icons/${iconPath}`}
      alt={name}
      className="w-10 h-10 md:w-12 md:h-12"
    />
    <span className="text-text-light dark:text-text-dark">{name}</span>
  </div>
);

// Text-only pill for skills without a local icon
const SkillPill = ({ name }) => (
  <span className="inline-block bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark text-sm px-3 py-1 rounded-full hover:scale-105 transition-transform duration-300">
    {name}
  </span>
);

const skillGroups = [
  // Left column
  [
    {
      category: "🤖 Generative AI & LLMs",
      items: [
        { name: "LangChain", iconPath: null },
        { name: "LlamaIndex", iconPath: null },
        { name: "Google Gemini API", iconPath: null },
        { name: "Hugging Face Transformers", iconPath: "hf_logo.svg" },
        { name: "RAG Pipelines (19+ variants)", iconPath: null },
        { name: "Embeddings & Vector Search", iconPath: null },
      ],
    },
    {
      category: "🎬 Computer Vision",
      items: [
        { name: "VideoMAE", iconPath: null },
        { name: "DETR / Object Detection", iconPath: null },
        { name: "TimeSFormer / ViViT", iconPath: null },
        { name: "OpenCV", iconPath: "opencv_logo.svg" },
      ],
    },
    {
      category: "🕹️ Reinforcement Learning",
      items: [
        { name: "DQN / DDQN", iconPath: null },
        { name: "Gymnasium", iconPath: null },
        { name: "Experience Replay", iconPath: null },
      ],
    },
    {
      category: "🧠 Agentic AI",
      items: [
        { name: "LangGraph (exploring)", iconPath: null },
        { name: "Multi-agent systems", iconPath: null },
      ],
    },
    {
      category: "🖥️ Frontend Development",
      items: [
        { name: "React", iconPath: "react_logo.svg" },
        { name: "Tailwind CSS", iconPath: "tailwindcss_logo.svg" },
        { name: "JavaScript", iconPath: "js_logo.svg" },
        { name: "HTML", iconPath: "html_logo.svg" },
        { name: "CSS", iconPath: "css_logo.svg" },
      ],
    },
  ],

  // Right column
  [
    {
      category: "🤖 Machine Learning Frameworks",
      items: [
        { name: "PyTorch", iconPath: "pytorch_logo.svg" },
        { name: "TensorFlow", iconPath: "tf_logo.svg" },
        { name: "Keras", iconPath: "keras_logo.svg" },
        { name: "Scikit-learn", iconPath: "scikitlearn_logo.svg" },
      ],
    },
    {
      category: "🧠 NLP",
      items: [
        { name: "NLTK", iconPath: "nltk_logo.svg" },
        { name: "spaCy", iconPath: "spacy_logo.svg" },
        { name: "NER & Transformers", iconPath: null },
      ],
    },
    {
      category: "🗄️ Vector Stores & Databases",
      items: [
        { name: "FAISS", iconPath: null },
        { name: "Pinecone", iconPath: null },
        { name: "MongoDB Atlas", iconPath: null },
        { name: "AstraDB", iconPath: null },
        { name: "LanceDB", iconPath: null },
        { name: "Neo4j (Knowledge Graph)", iconPath: null },
        { name: "PostgreSQL", iconPath: "postgresql_logo.svg" },
        { name: "MySQL", iconPath: "mysql_logo.svg" },
      ],
    },
    {
      category: "🌐 Backend & Tools",
      items: [
        { name: "Django", iconPath: "django_logo.svg" },
        { name: "FastAPI", iconPath: "fastapi_logo.svg" },
        { name: "Docker", iconPath: "docker_logo.svg" },
        { name: "Git", iconPath: "git_logo.svg" },
        { name: "VS Code", iconPath: "vscode_logo.svg" },
        { name: "Jupyter Notebook", iconPath: "jupyter_logo.svg" },
        { name: "Google Colab", iconPath: "colab_logo.svg" },
      ],
    },
  ],
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="font-poppins py-16 px-6 md:px-12 lg:px-20 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-10 text-center">
          💡 Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillGroups.map((column, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {column.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="border border-black rounded-xl p-6 shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-background-light dark:bg-background-dark"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-thin mb-4 text-text-light dark:text-text-dark font-poppins">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((skill, idx) => (
                      <li key={idx}>
                        {skill.iconPath ? (
                          <SkillItem iconPath={skill.iconPath} name={skill.name} />
                        ) : (
                          <SkillPill name={skill.name} />
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
