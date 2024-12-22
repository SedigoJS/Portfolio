'use client'

import Image from 'next/image'
import Button from "@/components/ui/button"
import SkillsPage from './skills/page'
import Projects from './projects/page'
import Background from './background/page'
import Contact from './contact/page'
import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProfilePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const opacity = 1 - scrollY / 600 

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-white relative overflow-hidden">
      <Navbar />
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-emerald-500/20 rounded-lg rotate-45" />
      <div className="absolute bottom-20 right-40 w-20 h-20 bg-blue-500/20 rounded-full" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-purple-500/20 rounded-lg" />

      <motion.main
        className="max-w-full mx-auto pt-20"
        style={{ opacity }}
        transition={{ duration: 0.5 }}
      >
        <section id="profile" className="py-20 md:px-20 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <p className="text-lg md:text-xl mb-2 text-gray-800 dark:text-gray-200">HI THERE 👋 I&apos;M</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white">
                    Joshua Sedigo
                  </h1>
                  <p className="text-emerald-400 text-lg md:text-xl font-semibold">
                    FULL STACK DEVELOPER 💻
                  </p>
                </div>
                <p className="text-gray-400 text-base md:text-lg max-w-lg dark:text-gray-300">
                  I&apos;m a passionate full-stack developer dedicated to crafting seamless and innovative digital experiences, 
                  blending both technical expertise and creative design to bring impactful products to life.
                </p>
                <Button 
                  variant="primary"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Hire Me 
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/prof.png"
                alt="Developer Illustration"
                width={1000}
                height={1000}
                className="w-full md:w-auto h-auto md:h-[550px] rounded-[60%] sm:rounded-[40%] lg:rounded-[30%] transition-all duration-300 pointer-events-none"
                priority
              />
            </div>
          </div>
        </section>
      </motion.main>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="background">
          <Background />
        </section>
        <section id="contact">
          <Contact />
        </section>
    </div>
  )
}
