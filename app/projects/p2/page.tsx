'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Button from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Image from 'next/image'

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectData {
  title: string
  description: string
  images: ProjectImage[]
}

const sampleProject: ProjectData = {
  title: "Entry via Purchase Promotion",
  description: "A promotional campaign where customers can enter a contest, raffle, or sweepstakes by purchasing a designated product. Upon making the purchase, participants automatically become eligible to win a prize, with the winner selected through a confirmation or predetermined criteria.",
  images: [
    { src: "/p2-1.png", alt: "Smart home dashboard" },
    { src: "/p2-2.png", alt: "Energy consumption graph" },
    { src: "/p2-3.png", alt: "Smart device network" },
    { src: "/p2-4.png", alt: "Mobile app interface" },
  ]
}

const ProjectPresentation: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const project = sampleProject

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }, [project.images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }, [project.images.length])

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null
    if (isPlaying) {
      intervalId = setInterval(() => {
        nextImage()
      }, 5000)
    }
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isPlaying, nextImage])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto pt-20 h-fit">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-lg mt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Image 
            src={project.images[currentImageIndex].src} 
            alt={project.images[currentImageIndex].alt}
            className="w-full h-[400px] object-cover rounded-md"
            width={1000}
            height={1000}
          />
          <Button 
            className="absolute h-full w-1/2 left-2 top-1/2 transform -translate-y-1/2"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            className="absolute h-full w-1/2 right-2 top-1/2 transform -translate-y-1/2"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="absolute right-0 h-4 w-4" />
          </Button>
          <Button
            className="absolute bottom-2 right-2"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectPresentation