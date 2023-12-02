import React from "react";

//icons
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiMamp,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Radiate Threads",
    logoLight: "/assets/radiate-logo-light.png",
    logoDark: "/assets/radiate-logo-dark.png",
    description:
      "Radiate Threads is a full-stack web application, encourages engaging conversations, thread creation, and community building, providing a dynamic space for meaningful interactions.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Clerk", "Typescript"],
    imageUrl: "/assets/radiate-threads.png",
    link: "https://radiate-threads.vercel.app",
  },
  {
    title: "Tune-in",
    logoLight: "/assets/tunein-logo-light.png",
    logoDark: "/assets/tunein-logo-dark.png",
    description:
      "Effortlessly search, play previews, and explore global charts. Uncover song, artist, and album details for a personalized musical journey.",
    tags: ["React", "Vite", "Tailwind", "Redux", "Rapid Api", "Javascript"],
    imageUrl: "/assets/tune-in.png",
    link: "/#projects",
  },
  {
    title: "Metaverse Madness",
    logoLight: "/assets/metaverse-logo-light.png",
    logoDark: "/assets/metaverse-logo-dark.png",
    description:
      "Step into a world of motion magic with Metaverse Madness. This frontend showcase application captivates with Framer Motion animations, bringing the metaverse to life.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion", "Javascript"],
    imageUrl: "/assets/metaverse-madness.png",
    link: "https://metaverse-motion-madness.vercel.app/",
  },
  {
    title: "Will To Step",
    logoLight: "/assets/w-logo-light.png",
    logoDark: "/assets/w-logo-dark.png",
    description:
      "Explore sports e-commerce with Will-to-Step, a captivating frontend application showcasing a dynamic landing page highlighting popular products, services, and testimonials.",
    tags: ["React", "Vite", "Tailwind", "Javascript"],
    imageUrl: "/assets/will-to-step.png",
    link: "https://will-to-step.vercel.app/",
  },
  {
    title: "Four Wheeliam",
    logoLight: "/assets/w-logo-light.png",
    logoDark: "/assets/w-logo-dark.png",
    description:
      "Discover the world of automobiles with Four-Wheeliam. Explore the diverse range of vehicles, each with its unique features and specifications",
    tags: ["React", "Next.js", "Tailwind", "Typescript"],
    imageUrl: "/assets/four-wheeliam.png",
    link: "https://four-wheeliam.vercel.app/",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: React.createElement(FaHtml5, { color: "#E44D26" }),
  },
  {
    name: "CSS",
    icon: React.createElement(FaCss3Alt, { color: "#264DE4" }),
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript, { color: "#F0DB4F" }),
  },
  {
    name: "TypeScript",
    icon: React.createElement(SiTypescript, { color: "#3178C6" }),
  },
  {
    name: "React",
    icon: React.createElement(FaReact, { color: "#61DAFB" }),
  },
  {
    name: "Next.js",
    icon: React.createElement(TbBrandNextjs),
  },
  {
    name: "Node.js",
    icon: React.createElement(FaNodeJs, { color: "#8CC84B" }),
  },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss, { color: "#38B2AC" }),
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt, { color: "#F05032" }),
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb, { color: "#13AA52" }),
  },
  {
    name: "SQL",
    icon: React.createElement(SiMamp, { color: "#104E8B" }),
  },
  {
    name: "Redux",
    icon: React.createElement(SiRedux, { color: "#764ABC" }),
  },
  {
    name: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion, { color: "#0055FF" }),
  },
  {
    name: "Java",
    icon: React.createElement(FaJava, { color: "#5382a1" }),
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Beirut, Lebanon",
    description:
      "I graduated from university with distinction, highlighting a stellar 3.95 GPA, demonstrating my unwavering commitment to academic excellence and paving the way for a promising career in Software Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023",
  },
  {
    title: "Freelance Software Developer",
    location: "Beirut, Lebanon",
    description:
      "As a freelance software developer, I undertook diverse personal projects, showcasing my proficiency in both frontend and backend technologies. These projects not only enriched my portfolio but also kept me at the forefront of up-to-date technologies, ensuring readiness for the dynamic job market.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - Present",
  },
] as const;

export const footerLinks = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/william-hobeika-406091240?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrA1iyh7kTnq9Lcv3ARHHoA%3D%3D",
    icon: "/assets/linkedin.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/WilliamHobeika",
    icon: "/assets/instagram.svg",
  },
  {
    name: "Github",
    href: "https://github.com/WilliamHobeika",
    icon: "/assets/github.svg",
  },
];
