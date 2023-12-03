"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useScroll, motion, useTransform } from "framer-motion";

import { useRef } from "react";

//hooks
import { useTheme } from "@/context/ThemeContext";

interface ProjectCardProps {
  title: string;
  logoLight: string;
  logoDark: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const ProjectCard = ({
  title,
  logoLight,
  logoDark,
  description,
  tags,
  imageUrl,
  link,
}: ProjectCardProps) => {
  const { theme } = useTheme();

  const reference = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleDelayedNavigation = () => {
    setTimeout(() => {
      router.push(link);
    }, 1000);
  };

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={reference}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Link
        href={title === "Tune-in" ? "/#projects" : "/"}
        onClick={handleDelayedNavigation}
      >
        <article className="project-card_container">
          <div className="project-card_project-text">
            <h1 className="text-2xl font-medium">{title}</h1>
            <p className="mt-2 leading-relaxed text-gray-700 mb-2 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li key={index} className="project-card_tags">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={1000}
            className="project-card_project-image"
          />

          <div className="project-card_hover-gradient">
            <div>
              <Image
                src={theme === "dark" ? logoLight : logoDark}
                alt="project logo"
                width={60}
                height={60}
                className="object-cover"
              />
            </div>
            <h1 className="font-mono font-semibold text-gray-950 text-2xl dark:text-white">
              {title}
            </h1>
            {title !== "Tune-in" ? (
              <div className="flex items-center justify-center gap-3 mt-5">
                <p className="font-mono font-medium text-gray-950 dark:text-gray-200">
                  Live Project
                </p>
                <Image
                  src={`${
                    theme === "light" ? "/assets/click.svg" : "/assets/click-white.svg"
                  }`}
                  alt="arrow right"
                  width={35}
                  height={35}
                />
              </div>
            ) : (
              <p className="w-64 font-mono font-medium text-center mt-5 text-gray-950 dark:text-gray-200 sm:w-96">
                Kindly, contact me to get the URL of the live project
              </p>
            )}
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
