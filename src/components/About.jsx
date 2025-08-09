import React from "react";
import {Tilt} from 'react-tilt'; //no

import { motion } from "framer-motion";//no


import { styles } from "../styles"; 
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
  // languages
  { name: "HTML", category: "languages" },
  { name: "CSS", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "JavaScript (basics)", category: "languages" },
  { name: "PHP (basics)", category: "languages" },
  { name: "OCaml", category: "languages" },
  { name: "Prolog", category: "languages" },
  { name: "SQL", category: "languages" },
  
  

  // Tools
  { name: "QT Creator ", category: "tools" },
  { name: "Git & GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "PostgreSQL", category: "tools" },

  // Others

  { name: "Machine Learning (beginner)", category: "others" },
  { name: "Algorithms & Data Structures", category: "others" },
  { name: "English", category: "others" },
  { name: "French", category: "others" },
  { name: "Persian", category: "others" },
];

const categories = ["all", "languages", "tools", "others"];
  

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
    const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
          </h2>
  
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-left"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm a third-year computer science student with a strong curiosity for all things tech. 
      While I'm still exploring which path truly sparks my passion — whether it's web development, programming, or something I haven’t discovered yet — what drives me every day is the excitement of learning and creating.
      I'm not afraid to dive into new challenges, experiment, and grow through hands-on experience. 
      I believe in the power of technology to improve lives, and I’m eager to contribute, collaborate, and constantly evolve.
      </motion.p>

      <SkillsSection />
    </>
  );
};

export default SectionWrapper(About, "about");


/*if u want to add percentage to it 
  { name: "CSS", level: 90, category: "Languages" },
   export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
    const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
          </h2>
  
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
  
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}; */
