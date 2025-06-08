import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function EducationPage() {
  const universities = [
    {
      name: "University of California: San Diego",
      location: "La Jolla, CA",
      degree: "Bachelor of Science in Electrical Engineering",
      period: "2025 - 2027 (Expected)",
      gpa: "N/A",
      logoUrl: "./ucsd.png?height=120&width=120",
      status: "Current",
    },
    {
      name: "Pasadena City College",
      location: "San Marino, CA",
      degree: "Associate of Science in Applied Sciences, Natural Sciences",
      period: "2023 - 2025",
      gpa: "3.875/4.0",
      logoUrl: "./pcc.png?height=120&width=120",
      status: "Completed",
    },
  ]

  const concentrations = ["Machine Learning", "Intelligent Systems", "Robotics", "Controls"]

  const courses = [
    {
      code: "CS 033",
      name: "Advanced Java Programming and Algorithm with Data Structures",
      description: "Encapsulation, abstract data types, interfaces, algorithms, and complexity and data structures in Java.",
      semester: "PCC Spring 2025",
    },
  ]

  const achievements = [
    "PCC Dean's List",
    "PCC Administration Honors",
    "PCC Flea Market Leadership Scholarship",
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Education</h1>

      {/* Universities */}
      <div className="mb-8">
        <h2 className="mb-6 text-2xl font-semibold">Universities</h2>
        <div className="space-y-6">
          {universities.map((university, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border bg-background">
                    <Image
                      src={university.logoUrl || "/placeholder.svg"}
                      alt={`${university.name} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 space-y-1 text-center md:text-left">
                    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                      <CardTitle className="text-xl">{university.name}</CardTitle>
                      <Badge variant={university.status === "Current" ? "default" : "secondary"}>
                        {university.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">{university.location}</CardDescription>
                    <div className="font-medium">{university.degree}</div>
                    <div className="flex flex-col space-y-1 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                      <span>{university.period}</span>
                      <span className="hidden md:inline">•</span>
                      <span>GPA: {university.gpa}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Concentrations */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Concentrations</h2>
        <div className="flex flex-wrap gap-2">
          {concentrations.map((concentration, index) => (
            <Badge key={index} variant="secondary" className="text-base px-3 py-1">
              {concentration}
            </Badge>
          ))}
        </div>
      </div>

      {/* Relevant Coursework */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Relevant Coursework</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-base">{course.name}</CardTitle>
                    <CardDescription>{course.code}</CardDescription>
                  </div>
                  <CardDescription className="text-right">{course.semester}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Academic Achievements */}
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Academic Achievements</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc space-y-2 pl-5">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
