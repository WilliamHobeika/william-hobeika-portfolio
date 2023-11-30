"use client";

import { motion } from "framer-motion";

import ProjectCard from "../cards/ProjectCard";
import TypingText from "../ui/TypingText";

import { projectsData } from "@/constants";

//hooks
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="scroll-mt-28 mb-28"
    >
      <TypingText title="| My Projects" />

      <div>
        {projectsData.map((project: any, index: number) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
