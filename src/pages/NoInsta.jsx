import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NoInsta = () => {
  return (
    <motion.div 
      className="container max-w-4xl py-24 px-4"

    >

    
<div className="min-h-screen flex items-center justify-center">
  <div className="box mt-[-100px] text-center">
    <h1 className="text-xl font-bold mb-4 ">🚫 I don’t have Instagram</h1>
    <p className="text-xl text-gray-800">
      But you can follow me on{" "}
      <a
        className="text-blue-600 underline hover:text-blue-800"
        href="https://github.com/Mohamed-Rebbouh"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      instead 😉
    </p>
  </div>
</div>
</motion.div>
  );
};

export default NoInsta;
