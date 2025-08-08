import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Natural Language Processing Specialization",
    image: "certificates/nlp.jpg",
    link: "https://github.com/prakadeesh01/Natural-Language-Processing-Specialization",
    direction: "left", // 👈 Slide in from left
  },
  {
    title: "TensorFlow Developer Certificate",
    image: "certificates/tf.jpg",
    link: "https://github.com/prakadeesh01/TensorFlow-Developer-Professional-Certificate",
    direction: "right", // 👉 Slide in from right
  },
  {
    title: "Deep Learning Specialization",
    image: "certificates/dl.jpg",
    link: "https://github.com/prakadeesh01/Deep-Learning-Specialization-Coursera",
    direction: "left", // 👈 Slide in from left
  },
  {
    title: "Machine Learning Specialization",
    image: "certificates/ml.jpg",
    link: "https://github.com/prakadeesh01/Machine-Learning-Specialization-Coursersa",
    direction: "right", // 👉 Slide in from right
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-6 sm:px-12 lg:px-16 xl:px-20 bg-background-light dark:bg-background-dark font-poppins"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight mb-10 text-left text-text-light dark:text-text-dark">
          🏆 Achievements and Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => {
            const isLeft = cert.direction === "left";

            return (
              <motion.a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-shadow duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] dark:shadow-white border border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-gray-800 hover:scale-[1.01]"
                initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-contain"
                />
                <p className="mt-4 text-lg font-medium text-text-light dark:text-text-dark text-center">
                    {cert.title}
                </p>
              </motion.a>   
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
