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
            Hello! I'm <span className="font-semibold text-accent-light dark:text-accent-dark">Prakadeesh K S</span>,
            an <span className="font-semibold text-accent-light dark:text-accent-dark">MSc Data Science</span> student
            at the <span className="font-semibold">University of Surrey</span>, and a Computer Science and Engineering
            graduate from RMK College of Engineering and Technology.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            My journey started with a deep interest in <span className="font-semibold text-accent-light dark:text-accent-dark">NLP</span> —
            working through the ML, Deep Learning, and TensorFlow specializations, then going deep into
            <span className="font-semibold text-accent-light dark:text-accent-dark"> PyTorch</span> and the
            <span className="font-semibold text-accent-light dark:text-accent-dark"> Hugging Face ecosystem</span>.
            As Generative AI reshaped the field, I followed naturally — building
            <span className="font-semibold text-accent-light dark:text-accent-dark"> LLM-powered applications</span>,
            RAG pipelines, and working extensively with LangChain and LlamaIndex.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            In parallel, I've explored <span className="font-semibold text-accent-light dark:text-accent-dark">Computer Vision</span> —
            building an end-to-end spatio-temporal action localisation system using VideoMAE and a DETR-style decoder —
            and <span className="font-semibold text-accent-light dark:text-accent-dark">Reinforcement Learning</span>,
            with a rigorous study comparing DQN and DDQN agents on LunarLander.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            I'm currently diving into <span className="font-semibold text-accent-light dark:text-accent-dark">LangGraph</span> and
            agentic AI — the next frontier I'm excited to build in.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
