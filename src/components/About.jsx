import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="font-poppins py-16 px-6 md:px-12 lg:px-20 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
    >
      <div className="w-full px-2 md:px-6 lg:px-10 flex flex-col md:flex-row items-center md:items-start gap-6">

        {/* Left - Avatar */}
        <motion.div className="w-full md:w-2/5 -ml-2 md:-ml-36"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}>
          <img
            src="avatar/pic2.png"
            alt="Prakadeesh Avatar"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div className="flex-1 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-6">Let's Get Acquainted</h2>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            Hey! I'm <span className="font-semibold text-accent-light dark:text-accent-dark">Prakadeesh</span> — 
            a CS grad now doing my MSc in Data Science at the University of Surrey.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            I got into AI through a deep interest in <span className="font-semibold text-accent-light dark:text-accent-dark">NLP</span> - 
            spent a lot of time with PyTorch, the <span className="font-semibold text-accent-light dark:text-accent-dark">Hugging Face</span> ecosystem, 
            and working through the major deep learning specializations. As Generative AI took off, 
            I followed naturally - building with <span className="font-semibold text-accent-light dark:text-accent-dark">LLMs</span>, 
            RAG pipelines, LangChain, and LlamaIndex.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            Along the way I've picked up <span className="font-semibold text-accent-light dark:text-accent-dark">Computer Vision</span> and 
            <span className="font-semibold text-accent-light dark:text-accent-dark"> Reinforcement Learning</span> - 
            and right now I'm diving into <span className="font-semibold text-accent-light dark:text-accent-dark">LangGraph</span> and agentic systems.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
