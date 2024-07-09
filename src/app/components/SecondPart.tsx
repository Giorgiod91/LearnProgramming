"use client";
import React, { useState } from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};
const TheCode = "<div> <h1> hello world  </h1> </div>";
const TheCode2 = " hello world ";
const tryOut = "Try out yourself";
const h1 = "<h1></h1>";
const div = "<div></div>";
const example1 = "<div> <h1> hello world  </h1> </div>";
const example2 = "<div> <h1> Welcome! </h1> </div>";
const example3 = "<div> <h1> Goodbye! </h1> </div>";

const theTryOut = (input: string) => {
  const realOutput = input.match(/<div>\s*<h1>\s*(.*?)\s*<\/h1>\s*<\/div>/);
  if (realOutput) {
    const output = realOutput[1]!.trim();
    return output;
  } else {
    return "Oh no, something is wrong or missing.";
  }
};

function SecondPart({}: Props) {
  const [finished, setFinished] = useState(false);

  const handleTyping = () => {
    setFinished(true);
  };

  const [text, count] = useTypewriter({
    words: [TheCode],
    loop: 1,
    deleteSpeed: 50,
    onLoopDone() {
      setFinished(true);
    },
  });

  const [text2, count2] = useTypewriter({
    words: [TheCode2],
    loop: 1,
    deleteSpeed: 50,
  });

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    setResult(theTryOut(newInput));
  };

  return (
    <div className="mx-auto mt-8 flex h-screen max-w-screen-2xl flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 lg:text-6xl">
          You can create things just with some code! Try it out yourself
        </h1>
        <p className="text-2xl text-gray-700">
          Just put the words you want to display in a div and h1 tag like in the
          example.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:gap-8">
        <motion.div
          className="mockup-code h-[200px] w-[400px] rounded-lg bg-gray-800 p-4 text-white shadow-md md:h-[200px] md:w-[600px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <pre data-prefix="">
            <code>{text}</code>
          </pre>
        </motion.div>

        <motion.div
          className="mockup-browser h-[200px] w-[400px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md md:h-[200px] md:w-[600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mockup-browser-toolbar flex items-center border-b border-gray-200 bg-gray-100 px-4 py-2">
            <span className="mr-2 h-3 w-3 rounded-full bg-red-500"></span>
            <span className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="mr-2 h-3 w-3 rounded-full bg-green-500"></span>
          </div>
          <div className="mockup-browser-content bg-gray-50 px-4 py-2 text-center text-gray-800">
            {finished ? text2 : "....."}
          </div>
        </motion.div>

        <motion.div
          className="mockup-code h-[200px] w-[400px] rounded-lg bg-gray-800 p-4 text-white shadow-md md:h-[200px] md:w-[600px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <pre data-prefix="">
            <code>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="w-full rounded-md bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your code here..."
              />
            </code>
          </pre>
        </motion.div>

        <motion.div
          className="mockup-browser h-[200px] w-[400px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md md:h-[200px] md:w-[600px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mockup-browser-toolbar flex items-center border-b border-gray-200 bg-gray-100 px-4 py-2">
            <span className="mr-2 h-3 w-3 rounded-full bg-red-500"></span>
            <span className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="mr-2 h-3 w-3 rounded-full bg-green-500"></span>
          </div>
          <div className="mockup-browser-content bg-gray-50 px-4 py-2 text-center text-gray-800">
            {result}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SecondPart;
