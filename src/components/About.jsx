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

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-6">Let’s Get Acquainted</h2>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            Hello! I'm <span className="font-semibold text-accent-light dark:text-accent-dark">Prakadeesh K S</span>,
            a Computer Science and Engineering graduate from
            <span className="font-semibold"> RMK College of Engineering and Technology</span>.
            I'm passionate about building intelligent systems that solve real-world problems, and I love turning ideas into practical, deployable solutions.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            I have a strong foundation and hands-on experience in <span className="font-semibold text-accent-light dark:text-accent-dark">Natural Language Processing (NLP)</span>,
            with a focus on <span className="font-semibold text-accent-light dark:text-accent-dark">transformers</span> and the 
            <span className="font-semibold text-accent-light dark:text-accent-dark"> Hugging Face ecosystem</span>. This is the space where I thrive the most.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            I’m currently exploring the exciting world of <span className="font-semibold text-accent-light dark:text-accent-dark">Generative AI</span>, including
            <span className="font-semibold text-accent-light dark:text-accent-dark"> LLMs</span> and
            <span className="font-semibold text-accent-light dark:text-accent-dark"> Retrieval-Augmented Generation (RAG)</span>, alongside building user-friendly interfaces using
            <span className="font-semibold text-accent-light dark:text-accent-dark"> React and Tailwind CSS</span>.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-text-light dark:text-text-dark leading-[1.5rem] md:leading-[2rem] mt-4">
            I also have a solid background in <span className="font-semibold text-accent-light dark:text-accent-dark">web development</span>, and the ability to build and deploy 
            <span className="font-semibold text-accent-light dark:text-accent-dark"> end-to-end machine learning applications</span>.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default About;
