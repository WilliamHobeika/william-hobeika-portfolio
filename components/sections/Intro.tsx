"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { footerLinks } from "@/constants";

//icons
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

//context
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

//hooks
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const { ref } = useSectionInView("Home");

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-36"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", delay: 0.2 }}
        >
          <Image
            src="/assets/bitmoji.png"
            alt="william bitmoji"
            width={200}
            height={200}
            priority
            className="rounded-full border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="font-bold">Hello, I'm William.</span> A recent Software
        Engineering graduate{" "}
        <span className="font-bold"> specializing in web development.</span> Eager to
        apply my skills and contribute to innovative projects,{" "}
        <span className="font-bold">I bring a wealth of expertise focused on React </span>{" "}
        (
        <span className="italic underline">
          specifically within the Next.js framework
        </span>
        ). I find fulfillment in the art of crafting sophisticated websites and
        applications,{" "}
        <span className="underline">
          consistently pushing the boundaries of industry standards
        </span>
        .
      </motion.h1>

      <motion.div
        className="intro_links-container"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        {/* contact link */}
        <Link
          href="#contact"
          className="intro_contact-link group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <div className="opacity-70 group-hover:translate-x-1.5 transition-all">
            <BsArrowRight />
          </div>
        </Link>

        {/* resume link */}
        <a
          href="/William-Hobeika-Resume.pdf"
          download
          className="intro_resume-link group"
        >
          Download resume{" "}
          <div className="opacity-70 group-hover:translate-y-1 transition-all">
            <HiDownload />
          </div>
        </a>

        {/* socials */}
        <div className="flex items-center justify-center gap-3">
          {footerLinks.map((item, index) => (
            <Link key={index} href={item.href} className="intro_social-link">
              <Image
                src={item.icon}
                alt={item.name}
                width={30}
                height={30}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
