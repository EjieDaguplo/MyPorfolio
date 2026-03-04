"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const contentVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

interface Certificate {
  title: string;
  img: string;
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 hover:border-purple-400/30 transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <motion.img
          src={certificate.img}
          alt={certificate.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

        {/* Shimmer effect on hover */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileHover={{ x: "100%", opacity: 0.15 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="p-4 flex flex-col gap-2"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block w-fit px-3 py-0.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 border border-white/20 text-blue-300"
        >
          Certificate
        </motion.span>

        <motion.h3
          variants={itemVariants}
          className="text-white font-semibold text-sm leading-snug bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text hover:text-transparent transition-all"
        >
          {certificate.title}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}

export default CertificateCard;