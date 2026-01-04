import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "ML Research Scientist",
      company: "Decoded Brain",
      location: "Pasadena, CA",
      period: "September 2025 - Present",
      duration: "5 months",
      type: "Membership",
      logoUrl: "./logos/db.png?height=60&width=60",
      status: "Current",
      description:
        "",
      achievements: [

      ],
      technologies: ["PyTorch", "Scikit-Learn"]
    },
    {
      title: "RoboCup AI Engineer",
      company: "IEEE Student Branch at UCSD",
      location: "La Jolla, CA",
      period: "October 2025 - Present",
      duration: "4 months",
      type: "Membership",
      logoUrl: "./logos/ieee.png?height=60&width=60",
      status: "Current",
      description:
        "",
      achievements: [

      ],
      technologies: ["PyTorch", "Stable Baselines", "Simulations Software"]
    },
    {
      title: "Robotics Perception Engineer",
      company: "Triton AI",
      location: "La Jolla, CA",
      period: "October 2025 - Present",
      duration: "4 months",
      type: "Membership",
      logoUrl: "./logos/tritonai.png?height=60&width=60",
      status: "Current",
      description:
        "",
      achievements: [

      ],
      technologies: ["ROS 2", "LiDAR"]
    },
    {
      title: "AI/ML Research Engineer",
      company: "Qualcomm Institute - UC San Diego Division of Calit2",
      location: "La Jolla, CA",
      period: "October 2025 - Present",
      duration: "4 months",
      type: "Part-Time",
      logoUrl: "./logos/qi.jpg?height=60&width=60",
      status: "Current",
      description: 
        "",
      achievements: [

      ],
      technologies: ["AWS", "Docker", "OpenAI API","SQL", "Prompt Engineering"]
    },
    {
      title: "Machine Learning Research Intern",
      company: "NASA Jet Propulsion Laboratory",
      location: "Pasadena, CA",
      period: "June 2025 - Present",
      duration: "8 months",
      type: "Internship",
      logoUrl: "./jpl.webp?height=60&width=60",
      status: "Current",
      description:
        "Investigated the application of computer vision and semantic segmentation techniques in geological feature identification on Venus. Optimized and evaluated ensemble models on Venus SAR images.",
      achievements: [
        "Discovered 38x more wrinkle ridges on Venus using ML than previously human-mapped studies.",
        "Inferenced on the entire Venus left-look global mosaic, generating a global map of wrinkle ridge faults on Venus.",
        "Co-authored the project's research publication, and presented this research at the 2025 American Geophysical Union Conference."
      ],
      technologies: ["QGIS", "PyTorch", "High Performance Computing", "Hugging Face Transformers", "Scikit-Learn"],
    },
    {
      title: "AI/ML Engineer Intern",
      company: "NASA Jet Propulsion Laboratory",
      location: "Pasadena, CA",
      period: "February 2025 - June 2025",
      duration: "5 months",
      type: "Internship",
      logoUrl: "./jpl.webp?height=60&width=60",
      status: "Completed",
      description:
        "Investigated different deep learning architectures for multivariate time-series anomaly detection within Deep Space Network communications ground systems and multimodal antenna/transmitter telemetry. Prototyped and orchestrated an AI agent system and workflow capable of complex reasoning and cross-validation for true anomalies using a fine-tuned LLM agent.",
      achievements: [
        "Successfully developed a prototype AI agent system that can autonomously detect and validate anomalies in DSN telemetry data, significantly improving the efficiency of anomaly detection processes.",
        "Delivered a data extraction and preprocessing program that integrates with existing DSN transmitter data systems, enabling further operational track analysis.",
        "Presented findings and prototype to the DSN Systems Engineering Group, receiving positive feedback and interest for further development.",
      ],
      technologies: ["PyTorch", "Scikit-Learn", "LangChain", "LangGraph", "CUDA", "Ollama", "Hugging Face Transformers"],    
    },
    {
      title:"President and Co-Founder",
      company:"Artifical Intelligence Club at PCC",
      location: "San Marino, CA",
      period: "September 2024 - May 2025",
      duration: "9 months",
      type: "Extracurricular",
      logoUrl: "./aiclub.png?height=60&width=60",
      status: "Completed",
      description:
        "Co-founded a student-driven AI/ML research club, organized coding workshops and 3+ collaborative projects on applied AI/ML and interdisciplinary research. Partnered and networked with research professors and industry experts to encourage more knowledge-sharing and professional development opportunities, providing more impact to STEM initiatives on campus and encouraging ethical and effective AI uses/applications.",
      achievements: [
        "Lead organized the AI Horizons Convention, a large-scale event at PCC which hosted 150+ attendees and guests from Microsoft, Caltech, NASA JPL, etc.",
        "Established partnerships with other organizations and universities to provide students with career development opportunities in AI/ML.",
        "Built and fostered a community of over 200 students from 7+ different disciplines and clubs on campus, promoting interdisciplinary collaboration and knowledge sharing.",
      ],
      technologies: ["PyTorch", "React", "Node.js", "Next.js", "Tailwind CSS"],
    }
  ]

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-green-500 to-blue-500 bg-clip-text text-transparent">Professional Experience</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A journey through my career in AI/ML engineering and data science, building innovative solutions and leading
          high-impact projects.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block z-10"></div>

              <div className="md:ml-20">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 border-primary/20 bg-background shadow-md">
                          <Image
                            src={exp.logoUrl || "/placeholder.svg"}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <Badge variant={exp.status === "Current" ? "default" : "secondary"} className="text-xs">
                              {exp.status}
                            </Badge>
                          </div>
                          <CardDescription className="text-lg font-semibold text-primary">
                            {exp.company}
                          </CardDescription>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period} ({exp.duration})
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
        <h3 className="text-2xl font-bold mb-2">Interested in working together?</h3>
        <p className="text-muted-foreground mb-4">
          I'm always open to discussing new opportunities and exciting projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="px-4 py-2">
            Open to email discussions: evan.chou@live.com
          </Badge>
        </div>
      </div>
    </div>
  )
}
