"use client";

import { motion } from "framer-motion";

//variants
import { textContainer, typingTextVariants } from "@/lib/motion";

const TypingText = ({ title }: { title: string }) => {
  return (
    <motion.p variants={textContainer} className="text-3xl font-medium mb-8 text-center">
      {Array.from(title).map((letter, index) => (
        <motion.span variants={typingTextVariants} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
