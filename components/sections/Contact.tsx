"use client";

import { motion } from "framer-motion";

import toast from "react-hot-toast";
import { useRef } from "react";

import TypingText from "../ui/TypingText";
import SubmitButton from "../ui/SubmitButton";

//variants
import { fadeIn } from "@/lib/motion";

//hooks
import { useSectionInView } from "@/lib/hooks";

//actions
import { sendEmail } from "@/lib/actions/email.action";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.6);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="contact-container"
    >
      <TypingText title="| Contact Me" />

      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "tween",
          delay: 0.3,
          duration: 0.8,
        })}
      >
        <p className="text-gray-950 dark:text-white/80">
          Please contact me directly at{" "}
          <a
            className="underline text-gray-600 font-medium dark:text-white/60"
            href="mailto:william.n.hobeika@gmail.com"
          >
            william.n.hobeika@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          ref={formRef}
          className="flex flex-col mt-10"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            formRef.current?.reset();

            if (error) {
              toast.error(error);
              return;
            }

            return toast.success("Email sent successfully");
          }}
        >
          <input
            type="email"
            name="senderEmail"
            placeholder="Email"
            required
            maxLength={500}
            className="contact-input"
          />
          <textarea
            placeholder="Message"
            name="senderMessage"
            required
            maxLength={5000}
            rows={8}
            className="contact-textarea"
          />
          <SubmitButton />
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
