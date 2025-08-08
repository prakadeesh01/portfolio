import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';


const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Left: Text */}
        <motion.div className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-text-light dark:text-text-dark text-3xl sm:text-4xl md:text-6xl font-normal leading-tight mb-6">
            Hi, I'm Prakadeesh
            <span className="inline-block ml-2 animate-wave origin-[70%_70%]">👋</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-text-light dark:text-text-dark leading-[1.4rem] md:leading-[2rem]">

            I'm an NLP-focused AI developer 🤖 with strong experience
            <span className="hidden md:inline"><br /></span>
            in transformers and Hugging Face. My core strength lies in deep learning
            <span className="hidden md:inline"><br /></span>
            and building intelligent language systems. I also work with React
            <span className="hidden md:inline"><br /></span>
            and web technologies to deploy end-to-end ML applications efficiently.
          </p>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prakadeesh-k-s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 transition duration-300"
            >
              <FaLinkedin className="text-white text-2xl" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/prakadeesh01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center hover:scale-110 transition duration-300"
            >
              <FaGithub className="text-white text-2xl" />
            </a>

            {/* Hugging Face */}
            <a
              href="https://huggingface.co/pragi007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center hover:scale-110 transition duration-300"
            >
              <img
                src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png"
                alt="Hugging Face"
                className="w-10 h-10 "
              />
            </a>

            {/* Email */}
            <a
              href="mailto:prakadeesh01@gmail.com"
              className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition duration-300"
            >
              <MdEmail className="text-white text-2xl" />
            </a>

          </div>
          <div id="cv-section" className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <a
              href="#contact"
              className="px-6 py-3 text-center rounded-xl font-semibold text-white bg-[#55198b] border-2 border-[#55198b] hover:bg-white hover:text-[#55198b] transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="misc/resume.pdf"
              download
              className="px-6 py-3 text-center rounded-xl font-semibold text-white bg-[#55198b] border-2 border-[#55198b] hover:bg-white hover:text-[#55198b] transition duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div className="w-84 h-84 md:w-84 md:h-84"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <img
            src="avatar/pic1.png"
            alt="Hello Illustration"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
