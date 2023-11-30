"use client";

import { motion } from "framer-motion";

//constants
import { skillsData } from "@/constants";

import TypingText from "../ui/TypingText";

//hooks
import { useSectionInView } from "@/lib/hooks";

//variants
import { skillsFadeInAnimationVariants } from "@/lib/motion";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="skills-container"
    >
      <TypingText title="| My Skills" />

      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          //pass the index to increase the delay for each skill element
          <motion.li
            key={index}
            variants={skillsFadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            className="skills-list_item"
          >
            {skill.name}
            <span className="text-[1.5rem]">{skill.icon}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
