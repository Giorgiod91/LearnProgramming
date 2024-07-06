"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function MiniGame({}: Props) {
  const [carPicked, setCarPicked] = useState("🚗");
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

  const reFuel = () => {
    setFuel(100);
  };

  const handleCarPick = (car: string) => {
    setCarPicked(car);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-8">
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
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x + 1,
                  y: prevCar[0]!.position.y,
                },
              },
            ]);
          }}
          className="transform rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
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
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x - 1,
                  y: prevCar[0]!.position.y,
                },
              },
            ]);
          }}
          className="transform rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
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
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x,
                  y: prevCar[0]!.position.y + 1,
                },
              },
            ]);
          }}
          className="transform rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
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
                logo: carPicked,
                position: {
                  x: prevCar[0]!.position.x,
                  y: prevCar[0]!.position.y - 1,
                },
              },
            ]);
          }}
          className="transform rounded-lg bg-gradient-to-r from-green-400 to-lime-500 px-6 py-3 text-white shadow-md transition-transform hover:scale-105 focus:outline-none"
        >
          <span className="ml-2">Down</span>
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
        <div className="mockup-phone mx-auto border-primary bg-white">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 relative mx-auto h-80 w-48 bg-gray-100">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGame;
