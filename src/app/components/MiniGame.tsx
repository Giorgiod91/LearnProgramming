"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function MiniGame({}: Props) {
  const [carPicked, setCarPicked] = useState("🚗");
  const Goal = "🏴󠁫󠁩󠁬󠁿";
  const Car = [
    {
      logo: "🚗",
      position: { x: 0, y: 0 },
    },
    {
      logo: "🚙",
      position: { x: 0, y: 0 },
    },
    {
      logo: "🚕",
      position: { x: 0, y: 0 },
    },
  ];

  const [car, setCar] = useState(Car);
  const [fuel, setFuel] = useState(100);
  const [maxForward, setMaxForward] = useState(0);
  const [goal, setGoal] = useState<{ x: number; y: number } | null>(null);

  const reFuel = () => {
    setFuel(100);
  };

  const handleCarPick = (car: string) => {
    setCarPicked(car);
  };

  useEffect(() => {
    if (
      goal &&
      car[0].position.x === goal.x - 1 &&
      car[0].position.y === goal.y - 1
    ) {
      alert("You reached the goal!");
    }
  }, [car, goal]);

  return (
    <div className="flex min-h-screen  flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-8">
      <div className="mb-10 text-center text-white">
        <h1 className="text-5xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl xl:text-7xl">
          Try the MiniGame Coded in JavaScript
        </h1>
        <div className="mt-8 flex justify-center space-x-5 p-4">
          <a className="cursor-pointer" onClick={() => setCarPicked("🚕")}>
            🚕
          </a>
          <a className="cursor-pointer" onClick={() => setCarPicked("🚗")}>
            🚗
          </a>
          <a className="cursor-pointer" onClick={() => setCarPicked("🚙")}>
            🚙
          </a>
        </div>
        <button
          onClick={() => {
            setGoal({
              x: Math.floor(Math.random() * 10),
              y: Math.floor(Math.random() * 10),
            });
          }}
        >
          Create a Goal
        </button>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            setMaxForward((maxForward) => maxForward + 1);
            if (maxForward >= 10) {
              alert("boing ! here is a wall");
              return;
            }
            if (fuel <= 20) {
              return;
            }
            setCar((prevCar) => [
              {
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x + 1,
                  y: prevCar[0]!.position.y,
                },
              },
            ]);
          }}
          className={
            fuel <= 10
              ? "hidden"
              : "transform rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
          }
        >
          <span className="ml-2">Forward</span>
        </button>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            setMaxForward((maxForward) => maxForward - 1);

            if (fuel <= 20) {
              return;
            }
            setCar((prevCar) => [
              {
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x - 1,
                  y: prevCar[0]!.position.y,
                },
              },
            ]);
          }}
          className={
            fuel <= 10
              ? "hidden"
              : "transform rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
          }
        >
          <span className="ml-2">Back</span>
        </button>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            if (fuel <= 20) {
              return;
            }
            setCar((prevCar) => [
              {
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x,
                  y: prevCar[0]!.position.y + 1,
                },
              },
            ]);
          }}
          className={
            fuel <= 10
              ? "hidden"
              : "transform rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
          }
        >
          <span className="ml-2">Down</span>
        </button>
        <button
          onClick={() => {
            setFuel((fuel) => fuel - 10);
            if (fuel <= 10) {
              return;
            }
            setCar((prevCar) => [
              {
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x,
                  y: prevCar[0]!.position.y - 1,
                },
              },
            ]);
          }}
          className={
            fuel <= 10
              ? "hidden"
              : "transform rounded-lg bg-gradient-to-r from-green-400 to-lime-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
          }
        >
          <span className="ml-2">UP</span>
        </button>
        {fuel <= 20 && (
          <button
            onClick={reFuel}
            className="mb-10 transform rounded-lg bg-red-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
          >
            Refuel
          </button>
        )}
        <div className="mb-4 text-lg text-white">
          Fuel: <span className="font-bold">{fuel}%</span>
        </div>

        <div>
          <p className="text-lg leading-relaxed opacity-80">
            Track your progress and motivate yourself to achieve your goals or
            whatever you aim to achieve
          </p>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-3xl">
        <div className="relative mx-auto h-80 w-80 bg-gray-700">
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-1">
            {Array.from({ length: 100 }).map((_, index) => (
              <div key={index} className="bg-gray-600">
                {goal && index === goal.y * 10 + goal.x ? Goal : ""}
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={fuel <= 20 ? "tooltip tooltip-open" : "tooltip "}
              data-tip={
                fuel <= 20
                  ? "Out of fuel press the refuel button"
                  : "This is the car"
              }
              style={{
                gridColumnStart: car[0].position.x + 1,
                gridRowStart: car[0].position.y + 1,
                transition: "grid-column-start 0.5s, grid-row-start 0.5s",
              }}
            >
              {car[0].logo}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGame;
