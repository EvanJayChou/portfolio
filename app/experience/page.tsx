import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      logoUrl: "/placeholder.svg?height=60&width=60",
      description:
        "Led development of multiple web applications using React, Next.js, and Node.js. Managed a team of 5 developers and implemented CI/CD pipelines that reduced deployment time by 40%.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2017 - 2020",
      logoUrl: "/placeholder.svg?height=60&width=60",
      description:
        "Developed and maintained web applications for clients across various industries. Implemented responsive designs and integrated third-party APIs to enhance functionality.",
    },
    {
      title: "Junior Developer",
      company: "WebCraft Studios",
      period: "2015 - 2017",
      logoUrl: "/placeholder.svg?height=60&width=60",
      description:
        "Assisted in the development of client websites and internal tools. Collaborated with designers to implement pixel-perfect UI components and responsive layouts.",
    },
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Work Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12 overflow-hidden rounded-lg border bg-background">
                    <Image
                      src={exp.logoUrl || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex flex-col justify-between space-y-1 md:flex-row md:items-center md:space-y-0">
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription className="text-sm md:text-right">{exp.period}</CardDescription>
                  </div>
                  <CardDescription className="text-base font-medium">{exp.company}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
