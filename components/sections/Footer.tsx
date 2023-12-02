"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

//constants
import { footerLinks } from "@/constants";

//variants
import { fadeIn } from "@/lib/motion";

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="footer-container"
    >
      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "tween",
          delay: 0.7,
          duration: 0.8,
        })}
      >
        <small className="mb-2 block text-xs">
          &copy; 2023 William. All rights reserved.
        </small>

        <p className="text-xs mb-5">
          <span className="font-semibold">About this website:</span> built with React &
          Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion,
          React Email & Resend, private hosting.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
