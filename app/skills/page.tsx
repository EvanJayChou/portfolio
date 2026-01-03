"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Star, TrendingUp, Award, Code, Database, Brain, Wrench } from "lucide-react"
import Image from "next/image"

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const skillCategories = [
    { id: "all", name: "All Skills", icon: Star, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "ai-ml", name: "AI/ML", icon: Brain, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { id: "datascience", name: "Data Science", icon: Database, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { id: "fullstack", name: "Full-Stack", icon: Code, color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { id: "tools", name: "Robotics & Embedded Systems", icon: Wrench, color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
  ]

  const featuredSkills = [
    {
      name: "PyTorch",
      logo: "./logos/torch.png?height=120&width=120",
      proficiency: 80,
      experience: "2+ years",
      projects: 4,
      description: "Deep learning model development and deployment at scale",
    },
    {
      name: "Scikit-Learn",
      logo: "./logos/sklearn.jpg?height=120&width=120",
      proficiency: 85,
      experience: "2+ years",
      projects: 10,
      description: "Machine learning algorithms, data preprocessing, and model evaluation",
    },
  ]

  const allSkills = [
    // AI/ML
    {
      name: "PyTorch",
      category: "ai-ml",
      proficiency: 90,
      logo: "./logos/torch.png?height=60&width=60",
      level: "Advanced",
      trending: true,
    },
    {
      name: "TensorFlow",
      category: "ai-ml",
      proficiency: 90,
      logo: "./logos/tensorflow.png?height=60&width=60",
      level: "Advanced",
      trending: true,
    },
    {
      name: "Keras",
      category: "ai-ml",
      proficiency: 75,
      logo: "./logos/keras.png?height=60&width=60",
      level: "Advanced",
      trending: false,
    },
    {
      name: "Scikit-learn",
      category: "ai-ml",
      proficiency: 85,
      logo: "./logos/sklearn.jpg?height=60&width=60",
      level: "Advanced",
      trending: false,
    },
    {
      name: "OpenCV",
      category: "ai-ml",
      proficiency: 80,
      logo: "./logos/opencv.png?height=60&width=60",
      level: "Advanced",
      trending: false,
    },
    {
      name: "Hugging Face Transformers",
      category: "ai-ml",
      proficiency: 70,
      logo: "./logos/hface.png?height=60&width=60",
      level: "Beginner",
      trending: true,
    },
    {
      name: "LangChain/LangGraph",
      category: "ai-ml",
      proficiency: 50,
      logo: "./logos/langchain.png?height=60&width=60",
      level: "Beginner",
      trending: true,
    },
    {
      name: "Ollama",
      category: "ai-ml",
      proficiency: 30,
      logo: "./logos/ollama.jpg?height=60&width=60",
      level: "Beginner",
      trending: false,
    },
    {
      name:"Smolagents",
      category: "ai-ml",
      proficiency: 30,
      logo: "./logos/hface.png?height=60&width=60",
      level: "Beginner",
      trending: false,
    },
    {
      name:"AutoGen",
      category: "ai-ml",
      proficiency: 60,
      logo: "./logos/msft.png?height=60&width=60",
      level: "Beginner",
      trending: false,
    },
    {
      name:"Semantic Kernel",
      category: "ai-ml",
      proficiency: 20,
      logo: "./logos/msft.png?height=60&width=60",
      level: "Beginner",
      trending: false,
    },
    {
      name: "CUDA",
      category: "ai-ml",
      proficiency: 60,
      logo: "./logos/nvidia.jpg?height=60&width=60",
      level: "Intermediate",
      trending: false,
    },
    {
      name: "NLTK",
      category: "ai-ml",
      proficiency: 60,
      logo: "/placeholder.svg?height=60&width=60",
      level: "Intermediate",
      trending: false,
    },
    // Robotics & Embedded Systems
    {
      name: "ROS 2 (Robot Operating System)",
      category: "tools",
      proficiency: 25,
      logo: "./logos/ros.jpg?height=60&width=60",
      level: "Beginner",
      trending: true,
    },
    {
      name: "Linux",
      category: "tools",
      proficiency: 25,
      logo: "./logos/linux.png?height=60&width=60",
      level: "Beginner",
      trending: false,
    },
    {
      name:"Ubuntu",
      category: "tools",
      proficiency: 25,
      logo: "./logos/ubuntu.png?height=60&width=60",
      level: "Beginner",
      trending: false,
    },
    {
      name: "Isaac Sim/Lab",
      category: "tools",
      proficiency: 15,
      logo: "./logos/omniverse.png?height=60&width=60",
      level: "Beginner",
      trending: true,
    },
    {
      name: "Raspberry Pi",
      category: "tools",
      proficiency: 50,
      logo: "./logos/rasp.webp?height=60&width=60",
      level: "Intermediate",
      trending: false,
    },
    {
      name: "Arduino",
      category: "tools",
      proficiency: 30,
      logo: "./logos/arduino.png?height=60&width=60",
      level: "Beginner",
      trending: true,
    },
    // Data Science
    {
      name: "Pandas",
      category: "datascience",
      proficiency: 100,
      logo: "./logos/pandas.svg?height=60&width=60",
      level: "Advanced",
      trending: false,
    },
    {
      name: "NumPy",
      category: "datascience",
      proficiency: 90,
      logo: "./logos/numpy.png?height=60&width=60",
      level: "Advanced",
      trending: false,
    },
    {
      name:"Matplotlib",
      category: "datascience",
      proficiency: 90,
      logo: "./logos/matplotlib.png?height=60&width=60",
      level: "Advanced",
      trending: false,
    },
    {
      name: "Seaborn",
      category: "datascience",
      proficiency: 80,
      logo: "./logos/seaborn.svg?height=60&width=60",
      level: "Intermediate",
      trending: false,
    },
    // Full Stack
    {
      name: "React",
      category: "fullstack",
      proficiency: 80,
      logo: "./logos/react.webp?height=60&width=60",
      level: "Advanced",
      trending: true,
    },
    {
      name: "Next.js",
      category: "fullstack",
      proficiency: 45,
      logo: "./logos/next.png?height=60&width=60",
      level: "Beginner",
      trending: true,
    },
    {
      name: "Tailwind CSS",
      category: "fullstack",
      proficiency: 90,
      logo: "./logos/css.svg?height=60&width=60",
      level: "Advanced",
      trending: true,
    },
    {
      name: "Node.js",
      category: "fullstack",
      proficiency: 65,
      logo: "./logos/node.png?height=60&width=60",
      level: "Intermediate",
      trending: false,
    },
  ]

  const filteredSkills =
    activeCategory === "all" ? allSkills : allSkills.filter((skill) => skill.category === activeCategory)

  const nextSlide = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % featuredSkills.length)
  }

  const prevSlide = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + featuredSkills.length) % featuredSkills.length)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-green-600 bg-green-100"
      case "Advanced":
        return "text-blue-600 bg-blue-100"
      case "Intermediate":
        return "text-orange-600 bg-orange-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical expertise across AI/ML, data science, physical/embodied AI applications and
          modern development tools. Constantly learning and evolving with the latest technologies.
        </p>
      </div>

      {/* Featured Skills Carousel */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Expertise</h2>
        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 via-purple-50 to-pink-50 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative h-32 w-32 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse opacity-20"></div>
                  <div className="relative h-full w-full bg-white rounded-full p-4 shadow-lg overflow-hidden">
                    <Image
                      src={featuredSkills[currentCarouselIndex].logo || "/placeholder.svg"}
                      alt={featuredSkills[currentCarouselIndex].name}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-2">{featuredSkills[currentCarouselIndex].name}</h3>
                  <p className="text-muted-foreground mb-4">{featuredSkills[currentCarouselIndex].description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {featuredSkills[currentCarouselIndex].proficiency}%
                      </div>
                      <div className="text-sm text-muted-foreground">Proficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {featuredSkills[currentCarouselIndex].experience}
                      </div>
                      <div className="text-sm text-muted-foreground">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {featuredSkills[currentCarouselIndex].projects}+
                      </div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                  </div>
                  <Progress value={featuredSkills[currentCarouselIndex].proficiency} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredSkills.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCarouselIndex ? "bg-primary scale-125" : "bg-gray-300"
                }`}
                onClick={() => setCurrentCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 px-6 py-3 ${
                  activeCategory === category.id ? category.color + " text-white border-0" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <IconComponent className="h-4 w-4" />
                {category.name}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary/20 hover:border-l-primary"
          >
            <CardHeader className="text-center pb-2">
              <div className="relative h-16 w-16 mx-auto mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full group-hover:scale-110 transition-transform"></div>
                <div className="relative h-full w-full bg-white rounded-full p-2 shadow-md overflow-hidden">
                  <Image
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.name}
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <CardTitle className="text-lg">{skill.name}</CardTitle>
              <div className="flex items-center justify-center gap-2">
                <Badge className={`text-xs ${getLevelColor(skill.level)}`}>{skill.level}</Badge>
                {skill.trending && (
                  <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Proficiency</span>
                  <span className="font-semibold">{skill.proficiency}%</span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
          <Code className="h-12 w-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-bold mb-2">SWE Mastery</h3>
          <p className="text-muted-foreground">Modern software engineering practices and development cycles</p>
        </Card>
        <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <Brain className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <h3 className="text-xl font-bold mb-2">AI/ML Expertise</h3>
          <p className="text-muted-foreground">Deep learning, computer vision, and production ML systems</p>
        </Card>
        <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <Award className="h-12 w-12 mx-auto mb-4 text-purple-600" />
          <h3 className="text-xl font-bold mb-2">Data Science Proficiency</h3>
          <p className="text-muted-foreground">End-to-end pipeline development from data manipulation to processing</p>
        </Card>
      </div>
    </div>
  )
}

