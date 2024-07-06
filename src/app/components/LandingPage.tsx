"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

type Props = {};

function LandingPage({}: Props) {
  const [clicked, setClicked] = useState(false);

  const LearnAbleThings = {
    Frontend: ["React", "Vue", "Angular"],
    Backend: ["Node", "Deno", "Python"],
    Database: ["SQL", "NoSQL"],
    DevOps: ["Docker", "Kubernetes", "CI/CD"],
  };

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="mx-auto mt-8 flex h-screen max-w-screen-2xl flex-col items-center justify-center p-4">
      <div className="flex items-center justify-center">
        <h1 className="text-center text-5xl font-extrabold tracking-tight lg:text-left lg:text-6xl xl:text-7xl">
          Is Programming for me
        </h1>
        <div className="pl-2">
          <div
            className="tooltip tooltip-top tooltip-open"
            data-tip="click me to find out!"
          >
            <motion.button
              onClick={handleClick}
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ?
            </motion.button>
          </div>
        </div>
      </div>

      {clicked && (
        <div className="mt-4">
          <h1 className="mb-4 text-center text-4xl text-white">
            Things you can Learn
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.keys(LearnAbleThings).map((category) => (
              <motion.div
                key={category}
                className="rounded-lg border bg-white p-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold text-gray-800">{category}</h2>
                <ul className="mt-2 text-gray-600">
                  {LearnAbleThings[category].map((tool) => (
                    <li key={tool} className="mt-1">
                      {tool}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-8">
        <h1 className="p-5 text-3xl font-semibold">Try it Out Here</h1>
        <motion.button
          className="btn btn-primary btn-wide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {" "}
          <a href="#demo" className="scroll scroll-smooth">
            <FaArrowDown className="animate-bounce" />
          </a>
        </motion.button>
      </div>
    </div>
  );
}

export default LandingPage;
