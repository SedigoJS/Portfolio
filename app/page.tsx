'use client'

import Image from 'next/image'
import Button from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-emerald-500/20 rounded-lg rotate-45" />
      <div className="absolute bottom-20 right-40 w-20 h-20 bg-blue-500/20 rounded-full" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-purple-500/20 rounded-lg" />

      <main className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <p className="text-xl mb-2 text-gray-800 dark:text-gray-200">HI THERE 👋 I&apos;M</p>
                <h1 className="text-6xl font-bold mb-4 text-black dark:text-white">Joshua Sedigo</h1>
                <p className="text-emerald-400 text-xl font-semibold">
                  FULL STACK DEVELOPER 💻
                </p>
              </div>
              <p className="text-gray-400 text-lg max-w-lg dark:text-gray-300">
                I&apos;m a passionate full-stack developer dedicated to crafting seamless and innovative digital experiences, 
                blending both technical expertise and creative design to bring impactful products to life.
              </p>
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} <span className="text-blue-500 hover:underline">Joshua Sedigo</span>. All rights reserved.
              </p>
              <Button 
                variant="primary"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded"
                onClick={(e) => { e.preventDefault(); window.location.href = "https://mail.google.com/mail/u/0/#starred?compose=jrjtXVbTvlGCQXqbMGKnFQxkRtLmPqzZPPJFJfBWRxlLmPMxxBKWdHJNFMnqdtnwSLfZPpdC"; }}
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
              className="w-full h-auto rounded-[60%] sm:rounded-[40%] lg:rounded-[30%] transition-all duration-300 pointer-events-none"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}