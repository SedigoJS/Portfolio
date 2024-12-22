'use client'

import React, { useState } from "react";
import Image from "next/image";

const Background = () => {
  const [hoveredSection, setHoveredSection] = useState("");

  const getBackground = () => {
    switch (hoveredSection) {
      case "highSchool":
        return "bg-[url('/nclcbg.png')]";
      case "college":
        return "bg-[url('/icctbg.png')]";
      case "elementary":
        return "bg-[url('/gbesbg.png')]";
      default:
        return "bg-[url('/about_bg.png')]";
    }
  };

  const educationData = [
    {
      level: "High School",
      school: "National Christian Life College (NCLC)",
      years: "2019 - 2021",
      logo: "/nclc.png",
      hoverKey: "highSchool"
    },
    {
      level: "College",
      school: "Institute of Creative Computer Technology (ICCT)",
      years: "2021 - 2024",
      logo: "/icct.png",
      hoverKey: "college"
    },
    {
      level: "Elementary",
      school: "Guitnang Bayan Elementary School (GBES)",
      years: "2009 - 2015",
      logo: "/gbes.png",
      hoverKey: "elementary"
    }
  ];

  return (
    <div className={`bg-cover bg-center min-h-screen relative py-10 sm:py-20 ${getBackground()} transition-all duration-500`}>
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12">Educational Background</h1>

        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-45 p-4 sm:p-6 rounded-lg shadow-xl text-center transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredSection(edu.hoverKey)}
              onMouseLeave={() => setHoveredSection("")}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  height={120}
                  width={120}
                  src={edu.logo}
                  alt={`${edu.level} Logo`}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">{edu.level}</h2>
              <p className="text-base sm:text-lg">{edu.school}</p>
              <p className="text-sm text-gray-300 mt-2">{edu.years}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;