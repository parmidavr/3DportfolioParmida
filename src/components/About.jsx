import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { SkillsSection } from "./SkillsSection";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Master's student in Computer Science at Université Claude
        Bernard Lyon 1, with a particular interest in Data Science,
        Machine Learning, and AI.
        <br /><br />
        I've always been curious about how things work and enjoy finding
        creative ways to solve problems. Through my studies and experience,
        I've developed a solid background in programming, data analysis,
        and software development.
        <br /><br />
        I enjoy learning new things, taking on challenges, and stepping
        outside my comfort zone. I'm excited to keep growing, explore
        new ideas, and contribute to projects that make a meaningful difference.
      </motion.p>

      <SkillsSection />
    </>
  );
};

export default SectionWrapper(About, "about");