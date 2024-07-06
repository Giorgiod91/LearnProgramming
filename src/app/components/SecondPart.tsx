"use client";
import React, { useState } from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};
const TheCode = "<div> h1 hello world  h1</div>";
const TheCode2 = " hello world ";
const tryOut = "Try out yourself";

const theTryOut = (input: string) => {
  if (input === "<div> h1 hello world  h1</div>") {
    return "hello world";
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
      <h1 className="mb-4 text-2xl font-bold text-gray-800">
        You can create things just with some code! Try it out yourself
      </h1>
      <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:gap-8">
        <motion.div
          className="mockup-code h-[200px] w-[600px] rounded-lg bg-gray-800 p-4 text-white shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <pre data-prefix="">
            <code>{text}</code>
          </pre>
        </motion.div>
        <motion.div
          className="mockup-browser h-[200px] w-[600px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mockup-browser-toolbar flex items-center border-b border-gray-200 bg-gray-100 px-4 py-2">
            <span className="mr-2 bg-red-300"></span>
            <span className="mr-2 bg-yellow-300"></span>
            <span className="mr-2 bg-green-300"></span>
          </div>
          <div className="mockup-browser-content bg-gray-50 px-4 py-2 text-gray-800">
            {finished ? text2 : "....."}
          </div>
        </motion.div>

        <motion.div
          className="mockup-code h-[200px] w-[600px] rounded-lg bg-gray-800 p-4 text-white shadow-md"
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
                className="w-full rounded-md bg-gray-700 p-2 text-white focus:outline-none"
                placeholder="Type your code here..."
              />
            </code>
          </pre>
        </motion.div>
        <motion.div
          className="mockup-browser h-[200px] w-[600px] overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mockup-browser-toolbar flex items-center border-b border-gray-200 bg-gray-100 px-4 py-2">
            <span className="mr-2 bg-red-300"></span>
            <span className="mr-2 bg-yellow-300"></span>
            <span className="mr-2 bg-green-300"></span>
          </div>
          <div className="mockup-browser-content bg-gray-50 px-4 py-2 text-gray-800">
            {result}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SecondPart;
