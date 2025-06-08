import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      <div className="relative flex flex-grow flex-col md:flex-row">
        {/* Left black section (35% width on desktop, 35% height on mobile) */}
        <div className="h-[35vh] w-full bg-black md:h-auto md:w-[35%]"></div>

        {/* Right whitesmoke section (65% width on desktop, 65% height on mobile) */}
        <div className="flex w-full flex-grow bg-[whitesmoke] md:w-[65%]"></div>

        {/* Content overlay */}
        <div className="absolute inset-0">
          {/* Profile image at the dividing line */}
          <div className="absolute left-1/2 top-[35vh] -translate-x-1/2 -translate-y-1/2 md:left-[35%] md:top-1/2">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[whitesmoke] md:h-64 md:w-64">
              <Image
                src="/evan.jpg?height=256&width=256"
                alt="Professional headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content - Mobile: centered below image, Desktop: right-aligned */}
          <div className="absolute inset-x-0 bottom-0 flex h-[65vh] flex-col items-center justify-center px-6 text-center md:inset-x-auto md:right-0 md:top-0 md:h-full md:w-[65%] md:items-end md:justify-center md:pr-16 md:text-right">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold md:text-6xl">Evan Chou</h1>
                <h2 className="text-xl text-muted-foreground md:text-2xl">AI/ML Engineer, Data Scientist</h2>
              </div>

              <div className="flex items-center justify-center space-x-4 md:justify-end">
                <Link href="https://github.com/EvanJayChou" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="GitHub Profile">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/evanjchou" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Button className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
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
