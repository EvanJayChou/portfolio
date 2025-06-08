"use client"

import {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="flex min-h-screen flex-col pt-16">
      <div className="relative flex flex-grow flex-col md:flex-row">
        {/* Left black section (35% width on desktop, 35% height on mobile) */}
        <div className="h-[35vh] w-full bg-black md:h-auto md:w-[35%]"></div>

        {/* Right whitesmoke section (65% width on desktop, 65% height on mobile) */}
        <div className="flex w-full flex-grow bg-white md:w-[65%]"></div>

        {/* Content overlay */}
        <div className="absolute inset-0">
          {/* Profile image at the dividing line - Much larger now */}
          <div className="absolute left-1/2 top-[35vh] -translate-x-1/2 -translate-y-1/2 md:left-[35%] md:top-1/2">
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-8 border-[whitesmoke] md:h-[350px] md:w-[350px] md:border-[12px]">
              <Image
                src="./evan.jpg?height=350&width=350"
                alt="Professional headshot"
                fill
                className="object-cover"
                priority
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          {/* Content - Mobile: centered below image, Desktop: right-aligned */}
          <div className="absolute inset-x-0 bottom-0 flex h-[65vh] flex-col items-center justify-center px-6 text-center md:inset-x-auto md:right-0 md:top-0 md:h-full md:w-[65%] md:items-end md:justify-center md:pr-16 md:text-right">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-5xl font-bold md:text-8xl">Evan Chou</h1>
                <h2 className="text-2xl text-muted-foreground md:text-4xl">AI/ML Engineer, Data Scientist</h2>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-end md:space-x-8 md:gap-0">
                <Link href="https://github.com/EvanJayChou" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" aria-label="GitHub Profile" className="h-14 w-14 md:h-16 md:w-16">
                    <Github className="h-7 w-7 md:h-8 md:w-8" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/evanjchou" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    aria-label="LinkedIn Profile"
                    className="h-14 w-14 md:h-16 md:w-16"
                  >
                    <Linkedin className="h-7 w-7 md:h-8 md:w-8" />
                  </Button>
                </Link>
                <Button size="lg" className="flex items-center space-x-3 px-6 py-4 text-lg md:px-8 md:py-6 md:text-xl">
                  <Download className="h-6 w-6 md:h-7 md:w-7" />
                  <span>Download Resume</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

