"use client";
import Link from "next/link";
import React, { useState } from "react";

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
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
    setResult(theTryOut(newInput));
  };

  return (
    <div className="grid  grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:gap-8">
      <div className="mockup-code">
        <pre data-prefix="">
          <code>{TheCode}</code>
        </pre>
      </div>
      <div className="mockup-code ">
        <pre data-prefix="">
          <code>{TheCode2}</code>
        </pre>
      </div>

      <div className="mockup-code">
        <pre data-prefix="">
          <code>
            <input type="text" value={input} onChange={handleInputChange} />
          </code>
        </pre>
      </div>
      <div className="mockup-code">
        <pre data-prefix="">
          <code>{result}</code>
        </pre>
      </div>
    </div>
  );
}

export default SecondPart;
