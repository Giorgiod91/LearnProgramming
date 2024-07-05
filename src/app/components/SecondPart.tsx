"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

type Props = {};
const TheCode = "<div> h1 hello world  h1</div>";
const TheCode2 = " hello world ";
const tryOut = "Try out urself";

const theTryOut = (input: string) => {
  if (input === "<div> h1 hello world  h1</div>") {
    return "hello world";
  } else {
    return "oh no something is wrong or missing";
  }
};

function SecondPart({}: Props) {
  const [finished, setFinished] = useState(false);

  const handleTyping = () => {
    setFinished(true);
  };

  const [text, count] = useTypewriter({
    words: ["<div> h1 hello world  h1</div>"],
    loop: 1,
    deleteSpeed: 50,
    onLoopDone() {
      setFinished(true);
    },
  });

  const [text2, count2] = useTypewriter({
    words: ["hello world"],
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
      <h1>You can Create things just with some Code ! try out yourself</h1>
      <div className="grid   grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:gap-8">
        <div className="mockup-code h-[200px] w-[600px] ">
          <pre data-prefix="">
            <code>{text}</code>
          </pre>
        </div>
        <div className="mockup-code h-[200px] w-[600px] ">
          <pre data-prefix="">
            <code>{finished ? text2 : "....."}</code>
          </pre>
        </div>

        <div className="mockup-code h-[200px] w-[600px]">
          <pre data-prefix="">
            <code>
              <input type="text" value={input} onChange={handleInputChange} />
            </code>
          </pre>
        </div>
        <div className="mockup-code h-[200px] w-[600px]">
          <pre data-prefix="">
            <code>{result}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default SecondPart;
