"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

type Props = {};

function LandingPage({}: Props) {
  const [clicked, setClicked] = useState(false);
  const [frontendClicked, setFrontendClicked] = useState(false);
  const [backendClicked, setBackendClicked] = useState(false);
  const [databaseClicked, setDatabaseClicked] = useState(false);
  const [devOpsClicked, setDevOpsClicked] = useState(false);

  const LearnAbleThings = {
    Frontend: {
      technologies: ["React", "Vue", "Angular"],
      picture: "frontend.jpg",
    },
    Backend: {
      technologies: ["Node", "Deno", "Python"],
      picture: "backend.jpg",
    },
    Database: {
      technologies: ["SQL", "NoSQL"],
      picture: "database.jpg",
    },
    DevOps: {
      technologies: ["Docker", "Kubernetes", "CI/CD"],
      picture: "devops.jpg",
    },
  };

  const handleClick = () => {
    setClicked(true);
  };
  //TODO: i need to refactor the code below because i repeated myself and should be able to use a single function

  const handleFrontendClick = () => {
    setFrontendClicked(true);
    setBackendClicked(false);
    setDatabaseClicked(false);
    setDevOpsClicked(false);
  };

  const handleBackendClick = () => {
    setBackendClicked(true);
    setFrontendClicked(false);
    setDatabaseClicked(false);
    setDevOpsClicked(false);
  };

  const handleDatabaseClick = () => {
    setDatabaseClicked(true);
    setFrontendClicked(false);
    setBackendClicked(false);
    setDevOpsClicked(false);
  };

  const handleDevOpsClick = () => {
    setDevOpsClicked(true);
    setFrontendClicked(false);
    setBackendClicked(false);
    setDatabaseClicked(false);
  };

  return (
    <div className="mx-auto mt-8 flex h-screen max-w-screen-2xl flex-col items-center justify-center p-4">
      <div className="flex items-center justify-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-left lg:text-6xl xl:text-7xl">
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
            {/* Frontend */}
            <motion.div
              key="Frontend"
              className="rounded-lg border bg-white p-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={handleFrontendClick}
            >
              {frontendClicked && (
                <>
                  <img
                    src={LearnAbleThings.Frontend.picture}
                    alt="Frontend"
                    className="h-40 w-full rounded-lg object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">Frontend</h2>
                </>
              )}
              {!frontendClicked && (
                <>
                  <h2 className="text-xl font-bold text-gray-800">Frontend</h2>
                  <ul className="mt-2 text-gray-600">
                    {LearnAbleThings.Frontend.technologies.map((tool) => (
                      <li key={tool} className="mt-1">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>

            {/* Backend */}
            <motion.div
              key="Backend"
              className="rounded-lg border bg-white p-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={handleBackendClick}
            >
              {backendClicked && (
                <>
                  <img
                    src={LearnAbleThings.Backend.picture}
                    alt="Backend"
                    className="h-40 w-full rounded-lg object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">Backend</h2>
                </>
              )}
              {!backendClicked && (
                <>
                  <h2 className="text-xl font-bold text-gray-800">Backend</h2>
                  <ul className="mt-2 text-gray-600">
                    {LearnAbleThings.Backend.technologies.map((tool) => (
                      <li key={tool} className="mt-1">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>

            {/* Database */}
            <motion.div
              key="Database"
              className="rounded-lg border bg-white p-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={handleDatabaseClick}
            >
              {databaseClicked && (
                <>
                  <img
                    src={LearnAbleThings.Database.picture}
                    alt="Database"
                    className="h-40 w-full rounded-lg object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">Database</h2>
                </>
              )}
              {!databaseClicked && (
                <>
                  <h2 className="text-xl font-bold text-gray-800">Database</h2>
                  <ul className="mt-2 text-gray-600">
                    {LearnAbleThings.Database.technologies.map((tool) => (
                      <li key={tool} className="mt-1">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>

            {/* DevOps */}
            <motion.div
              key="DevOps"
              className="rounded-lg border bg-white p-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={handleDevOpsClick}
            >
              {devOpsClicked && (
                <>
                  <img
                    src={LearnAbleThings.DevOps.picture}
                    alt="DevOps"
                    className="h-40 w-full rounded-lg object-cover"
                  />
                  <h2 className="text-xl font-bold text-gray-800">DevOps</h2>
                </>
              )}
              {!devOpsClicked && (
                <>
                  <h2 className="text-xl font-bold text-gray-800">DevOps</h2>
                  <ul className="mt-2 text-gray-600">
                    {LearnAbleThings.DevOps.technologies.map((tool) => (
                      <li key={tool} className="mt-1">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
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
