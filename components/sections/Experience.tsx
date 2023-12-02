"use client";

import React from "react";

import { motion } from "framer-motion";

import TypingText from "../ui/TypingText";

//icons
import { PiStar } from "react-icons/pi";

//constants
import { experiencesData } from "@/constants";

//hooks
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContext";

//react vertical timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="scroll-mt-28 mt-10 mb-28 sm:mb-40"
    >
      <TypingText title="| My Experience" />

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              icon={item.icon}
              date={item.date}
              contentStyle={{
                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                boxShadow:
                  theme === "light" ? "0 3px 0 #ddd" : "0 3px 0 rgba(255,255,255,0.25)",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9CA3AF"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              iconStyle={{
                background: "white",
                color: "#020617",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              <h3 className="font-semibold capitalize dark:text-white">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-600 dark:text-white/60">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
        <VerticalTimelineElement
          visible
          icon={React.createElement(PiStar)}
          iconStyle={{
            background: "white",
            color: "#020617",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        />
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;
