'use client'

import { useState, useEffect } from 'react'
import Button from "@/components/ui/button"

type Skill = {
  name: string
  category: 'webDev' | 'microsoft' | 'others'
}

const skills: Skill[] = [
  { name: 'Next.js', category: 'webDev' },
  { name: 'React', category: 'webDev' },
  { name: 'TypeScript', category: 'webDev' },
  { name: 'JavaScript', category: 'webDev' },
  { name: 'Node.js', category: 'webDev' },
  { name: 'MongoDB', category: 'webDev' },
  { name: 'Git', category: 'webDev' },
  { name: 'GitHub', category: 'webDev' },
  { name: 'GitLab', category: 'webDev' },
  { name: 'Canva', category: 'others' },
  { name: 'Word', category: 'microsoft' },
  { name: 'Excel', category: 'microsoft' },
  { name: 'PowerPoint', category: 'microsoft' },
  { name: 'Arduino IDE', category: 'others' },
  { name: 'Python', category: 'others' },
  { name: 'Java', category: 'others' },
]

const categoryNames = {
  webDev: 'Web Development',
  microsoft: 'Microsoft',
  others: 'Others'
}

export default function SkillsPage() {
  const [isSorted, setIsSorted] = useState(false)
  const [bubbleColors, setBubbleColors] = useState<string[]>([])

  useEffect(() => {
    if (!isSorted) {
      const generateRandomColors = skills.map(() => {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        return color
      })
      setBubbleColors(generateRandomColors)
    }
  }, [isSorted])

  useEffect(() => {
    if (!isSorted) {
      const bubbles = document.querySelectorAll('.skill-bubble')
      bubbles.forEach((bubble) => {
        const x = Math.random() * (window.innerWidth - 100)
        const y = Math.random() * (window.innerHeight - 100)
        ;(bubble as HTMLElement).style.setProperty('--x', `${x}px`)
        ;(bubble as HTMLElement).style.setProperty('--y', `${y}px`)
      })
    }
  }, [isSorted])

  const toggleSort = () => {
    setIsSorted(!isSorted)
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <div className="bg-[url('/skillbg.png')] bg-cover bg-no-repeat min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 ">Skills</h1>
      <div className="mb-8 text-center">
        <Button onClick={toggleSort}>
          {isSorted ? 'Randomize' : 'Sort by Category'}
        </Button>
      </div>
      {isSorted ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {categoryNames[category as keyof typeof categoryNames]}
              </h2>
              <ul className="space-y-2">
                {categorySkills.map((skill) => (
                  <li
                    key={skill.name}
                    className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full py-2 px-4"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative h-[600px]">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-bubble absolute rounded-full p-4 shadow-lg transition-all duration-1000 ease-in-out"
              style={{
                backgroundColor: bubbleColors[index],
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <span className="text-white font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
