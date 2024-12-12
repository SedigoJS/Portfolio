'use client'

import React, { useState } from "react";
import Image from "next/image";

const Background = () => {
  const [hoveredSection, setHoveredSection] = useState("");

  const getBackground = () => {
    switch (hoveredSection) {
      case "highSchool":
        return "bg-[url('/nclcbg.png')]"; // Set the background for High School
      case "college":
        return "bg-[url('/icctbg.png')]"; // Set the background for College
      case "elementary":
        return "bg-[url('/gbesbg.png')]"; // Set the background for Elementary
      default:
        return "bg-[url('/about_bg.png')]"; // No background change if nothing is hovered
    }
  };

  return (
    <div className={`bg-cover bg-center h-screen relative ${getBackground()}`}>
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 pt-32 md:pt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">Educational Background</h1>

        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* High School */}
          <div
            className="bg-white bg-opacity-45 p-4 sm:p-6 rounded-lg shadow-xl text-center"
            onMouseEnter={() => setHoveredSection("highSchool")}
            onMouseLeave={() => setHoveredSection("")}
          >
            <div className="mb-4 flex justify-center">
              <Image
                height={150}
                width={150}
                src="/nclc.png"
                alt="High School Logo"
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">High School</h2>
            <p className="text-base sm:text-lg">National Christian Life College (NCLC)</p>
            <p className="text-sm text-gray-300">2019 - 2021</p>
          </div>

          {/* College */}
          <div
            className="bg-white bg-opacity-45 p-4 sm:p-6 rounded-lg shadow-xl text-center"
            onMouseEnter={() => setHoveredSection("college")}
            onMouseLeave={() => setHoveredSection("")}
          >
            <div className="mb-4 flex justify-center">
              <Image
                height={150}
                width={150}
                src="/icct.png"
                alt="College Logo"
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">College</h2>
            <p className="text-base sm:text-lg">Institute of Creative Computer Technology (ICCT)</p>
            <p className="text-sm text-gray-300">2021 - 2024</p>
          </div>

          {/* Elementary */}
          <div
            className="bg-white bg-opacity-45 p-4 sm:p-6 rounded-lg shadow-xl text-center"
            onMouseEnter={() => setHoveredSection("elementary")}
            onMouseLeave={() => setHoveredSection("")}
          >
            <div className="mb-4 flex justify-center">
              <Image
                height={150}
                width={150}
                src="/gbes.png"
                alt="Elementary Logo"
                className="rounded-full"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Elementary</h2>
            <p className="text-base sm:text-lg">Guitnang Bayan Elementary School (GBES)</p>
            <p className="text-sm text-gray-300">2009 - 2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
