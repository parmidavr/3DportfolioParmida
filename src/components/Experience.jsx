
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Experience = () => {
  const technologies = [
    "WordPress",
    "HTML/CSS",
    "JavaScript",
    "PHP",
    "JSON",
    "Leaflet.js",
    "Agile",
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I've done
        </p>
        <h2 className={styles.sectionHeadText}>
          Experience.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-12 bg-tertiary p-6 sm:p-8 rounded-2xl max-w-4xl"
      >
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h3 className="text-white text-[24px] font-bold">
              Web Development Intern
            </h3>
            <p className="text-[#915EFF] text-[18px] mt-1">
              Institut Jean-Louis Murat
            </p>
          </div>

          <span className="text-secondary text-[14px]">
            May – July 2026
          </span>
        </div>

        <p className="text-secondary text-[15px] mt-5 leading-[26px]">
          During my internship, I worked on web development
          and data integration, contributing to a website
          and building tools to make information more
          accessible and interactive.
        </p>

        <ul className="mt-5 space-y-3 text-secondary text-[14px] leading-[24px] list-disc pl-5">
          <li>
            Developed and customized web pages using WordPress,
            Elementor, HTML, CSS, JavaScript, and PHP.
          </li>
          <li>
            Transformed Excel and CSV datasets into structured
            JSON for web integration.
          </li>
          <li>
            Used Leaflet.js to create interactive geographic
            data visualizations.
          </li>
          <li>
            Collaborated in an Agile environment.
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[#b794ff] bg-[#915EFF]/10 px-3 py-1 rounded-full text-[13px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
