'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8 my-20">
      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-10">Featured Projects</h2>
        <div className="relative">
          <div className="group perspective-1000">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="project-card">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  src="/p1.png"
                  alt="Project 1"
                />
                <div className="overlay">
                  <div className="text-center">
                    <h3 className="text-md md:text-xl font-semibold text-white">Online Classroom Platform</h3>
                    <p><i>(Custom Company Solution)</i></p>
                    <p className="text-sm md:text-base mt-2 text-white">A web application similar to Google Classroom, where teachers can manage classes, assignments, and students interactively.</p>
                    <Link href="/projects/p1" target="_blank" className="mt-4 inline-block text-blue-500 hover:underline dark:text-blue-400">View Project</Link>
                  </div>
                </div>
              </div>
              {/* Project 2 */}
              <div className="project-card">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-[10rem] object-cover shadow-lg"
                  src="/p2.2.png"
                  alt="Project 2"
                />
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-[10rem] object-cover shadow-lg"
                  src="/p2.png"
                  alt="Project 2"
                />
                <div className="overlay">
                  <div className="text-center">
                    <h3 className="text-md md:text-xl font-semibold text-white">Entry via Purchase Promotion</h3>
                    <p><i>(Custom Company Solution)</i></p>
                    <p className="text-sm md:text-base mt-2 text-white">A promotional campaign where customers can enter a contest, raffle, or sweepstakes by purchasing a designated product.</p>
                    <Link href="/projects/p2" target="_blank" className="mt-4 inline-block text-blue-500 hover:underline dark:text-blue-400">View Project</Link>
                  </div>
                </div>
              </div>
              {/* Project 3 */}
              <div className="project-card">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  src="/p3.png"
                  alt="Project 3"
                />
                <div className="overlay">
                  <div className="text-center">
                    <h3 className="text-md md:text-xl font-semibold text-white">Weather & Music API App</h3>
                    <p><i>(Personal Project)</i></p>
                    <p className="text-sm md:text-base mt-2 text-white">A web app that integrates weather data and music API to provide users with weather updates along with a music track.</p>
                    <Link href="https://cloudcast-five.vercel.app" target="_blank" className="mt-4 inline-block text-blue-500 hover:underline dark:text-blue-400">View Project</Link>
                  </div>
                </div>
              </div>
              {/* Project 4 */}
              <div className="project-card">
                <Image
                  width={1000}
                  height={1000}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  src="/p3-3.png"
                  alt="Project 3"
                />
                <div className="overlay">
                  <div className="text-center">
                    <h3 className="text-md md:text-xl font-semibold text-white">Randomizer / Raffle Wheel</h3>
                    <p><i>(Custom Company Solution)</i></p>
                    <p className="text-sm md:text-base mt-2 text-white">A fun, interactive tool that allows users to randomly select options or winners, similar to the Google Wheel, for raffles or decision-making.</p>
                    <Link href="/projects/p3" target="_blank" className="mt-4 inline-block text-blue-500 hover:underline dark:text-blue-400">View Project</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center mt-24 text-gray-600 dark:text-gray-400">
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mt-8">Thank you for exploring my projects. Feel free to get in touch for more details!</p>
      </section>
    </div>
  );
};

export default Projects;