"use client";
import React, { useState } from "react";

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
            <button onClick={handleClick} className="btn">
              ?
            </button>
          </div>
        </div>
      </div>

      {clicked && (
        <div className="mt-4">
          <h1 className="mb-4 text-center text-4xl text-white">
            Things you can Learn
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(LearnAbleThings).map((category) => (
              <div key={category} className="border p-2 hover:translate-x-2 ">
                <h2 className="text-xl font-bold">{category}</h2>
                <ul className="mt-2">
                  {LearnAbleThings[category].map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <h1 className="p-5">Try it Out Here</h1>
      </div>
    </div>
  );
}

export default LandingPage;
