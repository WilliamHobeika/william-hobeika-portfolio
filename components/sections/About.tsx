"use client";

import { motion } from "framer-motion";

import TypingText from "../ui/TypingText";

//hooks
import { useSectionInView } from "@/lib/hooks";

//variants
import { fadeIn } from "@/lib/motion";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="about"
    >
      <TypingText title="| About Me" />

      <motion.p
        variants={fadeIn({ direction: "up", type: "tween", delay: 0.2, duration: 1 })}
        className="mb-3"
      >
        Following my recent graduation with a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to channel my
        passion for web development into a dedicated pursuit. is the inherent
        problem-solving aspect — the satisfaction derived from unraveling intricate
        challenges
        <span className="italic">What captivates me most about programming</span> is the
        problem-solving aspect — the <span className="underline">Satisfaction</span>{" "}
        derived from finally figuring out a solution to a problem. My proficiency centers
        around a core stack comprising{" "}
        <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am
        also familiar with TypeScript, JavaScript and Tailwindcss. Ever enthusiastic about
        staying ahead of the curve, I am perpetually engaged in learning new technologies.
        Currently, I am actively seeking a{" "}
        <span className="font-medium">full-time position</span> as a software developer,
        where I can leverage my expertise and passion to a dynamic team and impactful
        projects.
      </motion.p>

      <motion.p
        variants={fadeIn({ direction: "up", type: "tween", delay: 0.2, duration: 1 })}
      >
        <span className="italic">Outside of the coding realm</span>, you'll often find me
        at the gym, fueling my passion for fitness and health. I'm also an enthusiastic
        basketball player, where the court becomes a canvas for me to blend my love for
        the game <span className="font-medium">with a sense of competitiveness</span>. I'm
        immersed in the world of literature and knowledge, continuously learning about{" "}
        <span className="font-medium">history and philosophy</span>.
      </motion.p>
    </motion.section>
  );
};

export default About;
