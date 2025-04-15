
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="container max-w-4xl py-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          I'm a Computer Science student and basketball player, pursuing my dual passions 
          of coding and sports. My goal is to excel both as a software engineer and on 
          the basketball court.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Tech Background</h2>
        <p className="mb-6">
          Passionate about Python, Linux, and open-source development. I love building 
          tools that solve real problems and contribute to the developer community.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Basketball Journey</h2>
        <p className="mb-6">
          Started playing basketball at age 12 and haven't stopped since. Currently 
          playing at the college level while maintaining my focus on software development.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Goals</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Become a top-tier software engineer</li>
          <li>Excel in competitive basketball</li>
          <li>Contribute to major open-source projects</li>
          <li>Build innovative AI applications</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
