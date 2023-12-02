"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-300 my-20 h-24 w-1 rounded-full hidden sm:block dark:bg-opacity-30"
    />
  );
};

export default SectionDivider;
