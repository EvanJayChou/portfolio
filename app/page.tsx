"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Download, Sparkles, MapPin, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  // Force icon size with inline styles
  const iconStyle = {
    width: "30px",
    height: "30px",
    minWidth: "30px",
    minHeight: "30px",
  }

  return (
    <div className="flex min-h-screen flex-col pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative flex flex-grow flex-col md:flex-row z-10">
        {/* Left black section (35% width on desktop, 35% height on mobile) */}
        <div className="h-[25vh] w-full bg-gradient-to-br from-black via-gray-900 to-black md:h-auto md:w-[30%] relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        {/* Right whitesmoke section (65% width on desktop, 65% height on mobile) */}
        <div className="flex w-full flex-grow bg-gradient-to-br from-[whitesmoke] via-gray-50 to-white md:w-[70%] relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0">
          {/* Profile image at the dividing line */}
          <div className="absolute left-1/2 top-[25vh] -translate-x-1/2 -translate-y-1/2 md:left-[30%] md:top-1/2">
            <div className="relative">
              {/* Animated ring around image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-sm scale-20"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 animate-spin-slow-reverse opacity-50 blur-md scale-30"></div>

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white shadow-2xl md:h-[425px] md:w-[425px] md:border-[12px] backdrop-blur-sm">
                <Image
                  src="./evan.jpg?height=500&width=500"
                  alt="Professional headshot"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 animate-bounce delay-300">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-bounce delay-700">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full shadow-lg">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content - Mobile: centered below image, Desktop: right-aligned */}
          <div className="absolute inset-x-0 bottom-0 flex h-[60vh] flex-col items-center justify-center px-6 pt-20 text-center md:inset-x-auto md:right-0 md:top-0 md:h-full md:w-[70%] md:items-end md:justify-center md:pr-16 md:pt-0 md:text-right">
            <div className="space-y-6 md:space-y-8 relative">
              {/* Greeting */}
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-end gap-2 text-lg md:text-xl text-muted-foreground">
                  <span className="animate-pulse">👋</span>
                  <span className="font-medium">Hi! My name is</span>
                </div>

                {/* Name with enhanced styling */}
                <div className="relative">
                  <h1 className="text-5xl font-bold md:text-8xl bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent relative z-10">
                    Evan Chou
                  </h1>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 text-5xl font-bold md:text-8xl text-black/5 blur-sm">Evan Chou</div>
                </div>

                {/* Enhanced title */}
                <div className="space-y-2">
                  <h2 className="text-2xl text-muted-foreground md:text-4xl font-medium">
                    Roboticist & AI/ML Engineer
                  </h2>
                  <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      Los Angeles, CA
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Available for opportunities
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Enhanced buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-end md:space-x-8 md:gap-0">
                <Link href="https://github.com/EvanJayChou" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="h-14 w-14 bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-800 md:h-16 md:w-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    aria-label="GitHub Profile"
                  >
                    <Github
                      style={iconStyle}
                      strokeWidth={1.5}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/evanjchou" target="_blank" rel="noopener noreferrer">
                  <Button
                    className="h-14 w-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 md:h-16 md:w-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin
                      style={iconStyle}
                      strokeWidth={1.5}
                      className="group-hover:rotate-12 transition-transform"
                    />
                  </Button>
                </Link>
                <a href="./Evan Chou Resume.pdf" download className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-6 py-4 text-lg md:px-8 md:py-6 md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group rounded-lg">
                  <Download style={iconStyle} strokeWidth={1.5} className="group-hover:bounce" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
