"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  GraduationCap,
  Award,
  BookOpen,
  Lightbulb,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Star,
  Bookmark,
} from "lucide-react"
import Image from "next/image"

export default function EducationPage() {
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({})

  const toggleCourseExpansion = (universityId: string) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [universityId]: !prev[universityId],
    }))
  }

  const universities = [
    {
      id: "ucsd",
      name: "University of California: San Diego",
      shortName: "UC San Diego",
      location: "La Jolla, CA",
      degree: "Bachelor of Science in Electrical Engineering",
      period: "2025 - 2027",
      expectedGraduation: "June 2027",
      gpa: "N/A",
      logoUrl: "/ucsd.png?height=120&width=120",
      status: "Current",
      description:
        "Pursuing a Bachelor's degree with a focus on machine learning and control. Participating in research projects and student organizations related to AI and robotics.",
      concentrations: ["Machine Learning", "Intelligent Systems", "Robotics", "Control Systems"],
      progress: 0,
      courses: [
        {
          code: "ECE 171A-B",
          name: "Linear Control System Theory",
          description: "Introduction to linear control systems, including system modeling, stability analysis, and control design.",
          grade: "PL",
          credits: 8,
          term: "Spring 2026 - Fall 2026",
        },
        {
          code: "ECE 100",
          name: "Linear Electronic Systems",
          description: "Study of linear electronic systems, including circuit analysis, signal processing, and system dynamics.",
          grade: "PL",
          credits: 4,
          term: "Spring 2026",
        },
        {
          code: "ECE 102",
          name: "Introduction to Active Circuit Design",
          description: "Fundamentals of active circuit design, including operational amplifiers, feedback systems, and signal processing techniques.",
          grade: "PL",
          credits: 4,
          term: "Winter 2026",
        },
      ],
      achievements: [
      ],
      activities: [
      ],
    },
    {
      id: "pcc",
      name: "Pasadena City College",
      shortName: "PCC",
      location: "San Marino, CA",
      degree: "Associate of Science in Applied Sciences, Natural Sciences",
      period: "2023 - 2025",
      expectedGraduation: "June 2025",
      gpa: "3.8/4.0",
      logoUrl: "/pcc.png?height=120&width=120",
      status: "Completed",
      description:
        "Completed an Associate's degree with honors, focusing on mathematics, physics, and computer science. Participated in the honors program and served as a peer tutor.",
      concentrations: ["Mathematics", "Physics", "Computer Science", "Engineering"],
      progress: 100,
      courses: [
        {
          code: "CS 033",
          name: "Advanced Java Programming and Data Structures",
          description: "In-depth study of data structures and algorithms using Java, including trees, graphs, and advanced sorting techniques.",
          grade: "A",
          credits: 3,
          term: "Spring 2025",
        },
        {
          code: "MATH 010",
          name: "Linear Algebra and Applications",
          description: "Introduction to linear algebra concepts, including vector spaces, matrices, and eigenvalues.",
          grade: "A",
          credits: 4,
          term: "Spring 2024",
        },
        {
          code: "MATH 055",
          name: "Differential Equations",
          description: "Study of ordinary differential equations, including first-order and second-order equations, and applications in engineering.",
          grade: "A",
          credits: 4,
          term: "Winter 2025",
        }
      ],
      achievements: [
        {
          title: "Administration Honors",
          description: "Maintained a GPA of 3.5 or higher for three consecutive semesters",
          date: "2023-2025",
          icon: Award,
        },
        {
          title: "Flea Market Scholarship",
          description: "Earned a scholarship for leadership and community service",
          date: "2025",
          icon: Award,
        },
      ],
      activities: [
        "AI Club - President and Co-Founder",
        "AI Working Group - Student Representative",
        "AI Horizons Convention - Lead Organizer",
        "Data Science Club - Active Member",
        "Decoded Brain - Active Member",
      ],
    },
  ]

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24">
      {/* Hero Section */}
      <div className="relative mb-16 text-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <GraduationCap className="h-64 w-64" />
        </div>
        <div className="relative z-10">
          <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Academic Journey
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            My educational background, academic achievements, and the knowledge I've gained through formal education and
            continuous learning.
          </p>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="relative mb-16">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

        <div className="space-y-12">
          {universities.map((university) => (
            <div key={university.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-6 h-6 rounded-full border-4 border-background shadow-lg hidden md:block z-10">
                <div
                  className={`w-full h-full rounded-full ${
                    university.status === "Current" ? "bg-primary animate-pulse" : "bg-gray-300"
                  }`}
                ></div>
              </div>

              <div className="md:ml-20">
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* University Header with Gradient */}
                  <div
                    className={`bg-gradient-to-r ${
                      university.status === "Current"
                        ? "from-primary/20 via-purple-500/10 to-blue-500/5"
                        : "from-gray-200 to-gray-100"
                    } p-6 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
                        <GraduationCap className="h-64 w-64 text-black" />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <div
                          className={`relative h-24 w-24 overflow-hidden rounded-xl border-4 ${
                            university.status === "Current" ? "border-primary/20" : "border-gray-200"
                          } bg-white shadow-md mx-auto md:mx-0`}
                        >
                          <Image
                            src={university.logoUrl || "/placeholder.svg"}
                            alt={`${university.name} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      </div>

                      {/* University Info */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h2 className="text-2xl font-bold">{university.name}</h2>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {university.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {university.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-amber-500" />
                                GPA: {university.gpa}
                              </div>
                            </div>
                          </div>

                          <Badge
                            variant={university.status === "Current" ? "default" : "secondary"}
                            className="text-sm px-3 py-1 md:self-start"
                          >
                            {university.status}
                          </Badge>
                        </div>

                        <div className="mt-3">
                          <h3 className="text-lg font-semibold text-primary">{university.degree}</h3>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Degree Progress</span>
                            <span>{university.progress}%</span>
                          </div>
                          <Progress value={university.progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="courses">Courses</TabsTrigger>
                        <TabsTrigger value="achievements">Achievements</TabsTrigger>
                        <TabsTrigger value="activities">Activities</TabsTrigger>
                      </TabsList>

                      {/* Overview Tab */}
                      <TabsContent value="overview" className="pt-6">
                        <div className="space-y-6">
                          <p className="text-muted-foreground">{university.description}</p>

                          <div>
                            <h4 className="text-lg font-semibold mb-3">Concentrations</h4>
                            <div className="flex flex-wrap gap-2">
                              {university.concentrations.map((concentration, index) => (
                                <Badge key={index} variant="outline" className="px-3 py-1">
                                  {concentration}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="bg-muted/50">
                              <CardContent className="p-4 flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-full">
                                  <Clock className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <CardDescription>Expected Graduation</CardDescription>
                                  <CardTitle className="text-base">{university.expectedGraduation}</CardTitle>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="bg-muted/50">
                              <CardContent className="p-4 flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-full">
                                  <BookOpen className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <CardDescription>Total Credits</CardDescription>
                                  <CardTitle className="text-base">
                                    {university.courses.reduce((sum, course) => sum + course.credits, 0)} Credits
                                  </CardTitle>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </TabsContent>

                      {/* Courses Tab */}
                      <TabsContent value="courses" className="pt-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold">Key Courses</h4>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleCourseExpansion(university.id)}
                              className="flex items-center gap-1"
                            >
                              {expandedCourses[university.id] ? (
                                <>
                                  <ChevronUp className="h-4 w-4" /> Show Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-4 w-4" /> Show All
                                </>
                              )}
                            </Button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(expandedCourses[university.id] ? university.courses : university.courses.slice(0, 2)).map(
                              (course, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                                  <CardHeader className="bg-muted/30 p-4">
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <CardTitle className="text-base">{course.name}</CardTitle>
                                        <CardDescription>{course.code}</CardDescription>
                                      </div>
                                      <Badge
                                        className={`${
                                          course.grade === "A+" || course.grade === "A"
                                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                                            : course.grade === "A-" || course.grade === "B+"
                                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                              : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                        }`}
                                      >
                                        {course.grade}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="p-4">
                                    <p className="text-sm text-muted-foreground">{course.description}</p>
                                    <div className="flex justify-between items-center mt-3 text-sm">
                                      <span>{course.credits} Credits</span>
                                      <span className="text-muted-foreground">{course.term}</span>
                                    </div>
                                  </CardContent>
                                </Card>
                              ),
                            )}
                          </div>
                        </div>
                      </TabsContent>

                      {/* Achievements Tab */}
                      <TabsContent value="achievements" className="pt-6">
                        <div className="space-y-6">
                          {university.achievements.map((achievement, index) => {
                            const AchievementIcon = achievement.icon
                            return (
                              <div
                                key={index}
                                className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border border-muted bg-muted/20 hover:bg-muted/30 transition-colors"
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <AchievementIcon className="h-6 w-6 text-primary" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold">{achievement.title}</h4>
                                  <p className="text-muted-foreground">{achievement.description}</p>
                                  <div className="mt-2 text-sm text-muted-foreground flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {achievement.date}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </TabsContent>

                      {/* Activities Tab */}
                      <TabsContent value="activities" className="pt-6">
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold">Extracurricular Activities</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {university.activities.map((activity, index) => (
                              <div
                                key={index}
                                className="p-4 rounded-lg border border-muted flex items-center gap-3 hover:bg-muted/20 transition-colors"
                              >
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Bookmark className="h-4 w-4 text-primary" />
                                </div>
                                <span>{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Education */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Additional Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <CardTitle>NASA Open Science Credential</CardTitle>
                  <CardDescription>NASA</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Completed a comprehensive course on open science practices, data management, and reproducibility in research.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline">Completed 2025</Badge>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> View Certificate
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle>Machine Learning/AI Engineer Career Path</CardTitle>
                  <CardDescription>Codecademy</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive course covering machine learning algorithms, AI concepts, and practical applications in Python.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline">Completed 2024</Badge>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> View Certificate
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>Data Scientist: NLP Specialist Career Path</CardTitle>
                  <CardDescription>Codecademy</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                In-depth course on natural language processing techniques, including text analysis, sentiment analysis, and language models.
              </p>
              <div className="flex justify-between items-center">
                <Badge variant="outline">Completed 2023</Badge>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> View Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5 rounded-xl">
        <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Education doesn't stop with formal degrees. I'm constantly expanding my knowledge through online courses,
          workshops, and self-directed learning.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-primary hover:bg-primary/90">View Full Resume</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </div>
  )
}
