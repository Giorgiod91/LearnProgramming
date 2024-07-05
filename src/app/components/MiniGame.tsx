"use client";
import React, { useRef, useState } from "react";
import { set } from "zod";

type Props = {};

function MiniGame({}: Props) {
  const Car = [
    {
      logo: "🚗",
      position: { x: 0, y: 0 },
    },
  ];

  const [car, setCar] = useState(Car);
  const [fuel, setFuel] = useState(100);
  const [maxForward, setMaxForward] = useState(0);
  const prevMaxForwardRef = useRef();

  const reFuel = () => {
    setFuel(100);
  };

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-16 space-x-6 px-6 pb-10 pt-24 sm:px-8 sm:pt-28 lg:flex-row lg:gap-20 lg:pb-20">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-10 text-center sm:justify-between lg:items-start lg:gap-14 lg:text-left">
        <h1 className="text-5xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl xl:text-7xl">
          Try the miniGame that's coded in JavaScript
        </h1>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            setMaxForward((maxForward) => maxForward + 1);
            if (maxForward >= 7) {
              alert("boing ! here is a wall");
              return;
            }
            if (fuel <= 20) {
              alert("You are soon out of fuel");
              return;
            }
            setCar((prevCar) => [
              {
                logo: "🚗",
                position: {
                  x: prevCar[0].position.x + 1,
                  y: prevCar[0].position.y,
                },
              },
            ]);
          }}
          className="via-magenta-500 btn btn-wide bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:via-blue-300 hover:to-cyan-400 hover:text-black"
        >
          <span className="ml-2">Forward</span>
        </button>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            setMaxForward((maxForward) => maxForward - 1);

            if (fuel <= 20) {
              alert("You are soon out of fuel");
              return;
            }
            setCar((prevCar) => [
              {
                logo: "🚗",
                position: {
                  x: prevCar[0].position.x - 1,
                  y: prevCar[0].position.y,
                },
              },
            ]);
          }}
          className="via-magenta-500 btn btn-wide bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:via-blue-300 hover:to-cyan-400 hover:text-black"
        >
          <span className="ml-2">Back</span>
        </button>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            if (fuel <= 20) {
              alert("You are soon out of fuel");
              return;
            }
            setCar((prevCar) => [
              {
                logo: "🚗",
                position: {
                  x: prevCar[0].position.x,
                  y: prevCar[0].position.y + 1,
                },
              },
            ]);
          }}
          className="via-magenta-500 btn btn-wide bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:via-blue-300 hover:to-cyan-400 hover:text-black"
        >
          <span className="ml-2">Up</span>
        </button>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            if (fuel <= 20) {
              alert("You are soon out of fuel");
              return;
            }
            setCar((prevCar) => [
              {
                logo: "🚗",
                position: {
                  x: prevCar[0].position.x,
                  y: prevCar[0].position.y - 1,
                },
              },
            ]);
          }}
          className="via-magenta-500 btn btn-wide bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:via-blue-300 hover:to-cyan-400 hover:text-black"
        >
          <span className="ml-2">Down</span>
        </button>
        <button onClick={reFuel} className="btn btn-primary">
          Refuel
        </button>

        <div>
          <p className="text-lg leading-relaxed opacity-80">
            Track your progress and motivate yourself to achieve your goals or
            whatever you aim to achieve
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-3xl">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div
                className={fuel <= 20 ? "tooltip tooltip-open" : "tooltip"}
                data-tip={
                  fuel <= 20
                    ? "Out of fuel press the refuel button"
                    : "This is the car"
                }
                style={{
                  left: `${car[0].position.x * 20}px`,
                  top: `${car[0].position.y * 20}px`,
                  transition: "left 0.5s, top 0.5s",
                }}
              >
                {car[0].logo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGame;
