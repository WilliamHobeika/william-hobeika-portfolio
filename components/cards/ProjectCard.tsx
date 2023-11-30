"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useScroll, motion, useTransform } from "framer-motion";

import { useRef } from "react";

interface ProjectCardProps {
  title: string;
  logo: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const ProjectCard = ({
  title,
  logo,
  description,
  tags,
  imageUrl,
  link,
}: ProjectCardProps) => {
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
          <div>
            <div className="project-card_project-text">
              <h3 className="text-2xl font-medium">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 mb-2">{description}</p>
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
                  src={logo}
                  alt="project logo"
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <h1 className="font-mono font-semibold text-gray-950 text-2xl">{title}</h1>
              {title !== "Tune-in" ? (
                <div className="flex items-center justify-center gap-3 mt-5">
                  <p className="font-mono font-medium">Live Project</p>
                  <Image
                    src="/assets/click.svg"
                    alt="arrow right"
                    width={35}
                    height={35}
                  />
                </div>
              ) : (
                <p className="w-96 font-mono font-medium text-center mt-5">
                  Kindly, contact me to get the URL of the live project
                </p>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
