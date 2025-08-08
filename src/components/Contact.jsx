import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-background-light dark:bg-background-dark py-20 px-6 md:px-20 font-poppins"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-thin text-text-light dark:text-text-dark">
            Reach Out to me!
          </h2>

          {/* Avatar appears below heading in mobile */}
          <div className="flex justify-center md:hidden">
            <div className="w-40 h-40 rounded-full border-8 border-accent-light dark:border-accent-dark p-1">
              <img
                src="misc/me1.png"
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-text-light dark:text-text-dark">
            Got a project in mind or just want to say hi? My inbox is always open.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-xl md:text-2xl">
            <MdLocationOn className="text-accent-light dark:text-accent-dark" />
            <span className="text-text-light dark:text-text-dark">
              Chennai, India
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-medium">
            Open for opportunities: <span className="text-green-600 dark:text-green-400">Yes</span>
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
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
                src="misc/huggingface.svg"
                alt="Hugging Face"
                className="w-8 h-8"
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
        </div>

        {/* RIGHT SIDE (shown only on desktop) */}
        <div className="hidden md:flex flex-1 justify-end mt-8 md:mt-8">
          <div className="w-64 h-64 rounded-full border-8 border-accent-light dark:border-accent-dark p-1">
            <img
              src="misc/me1.png"
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
