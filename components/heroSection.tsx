"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative"
    >
      {/* Background floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left - Photo */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          className="order-1 md:order-none flex justify-center md:justify-start"
        >
          <div className="relative w-52 h-52 md:w-72 md:h-72">
            {/* Spinning gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-70 scale-110"
            />
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-pink-400 opacity-40 scale-110"
            />
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <Image
                src="/MyFace.jpg"
                alt="Ejie's Profile"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Text Content (staggered children) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="order-2 md:order-none flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 border border-white/20 text-blue-300"
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400 inline-block"
            />
            Available for hire
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ejie
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 max-w-lg md:text-lg text-sm mb-8 leading-relaxed"
          >
            A passionate web developer building functional web apps. I also
            develop native and cross-platform mobile applications. Additionally,
            I have experience in developing and integrating machine learning
            models into applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="resume&appLetter.pdf"
              download
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30 text-white"
            >
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white backdrop-blur-sm"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start"
          >
            {["React", "Next.js", "TypeScript", "Flutter", "Python"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.15 }}
                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;