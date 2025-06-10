import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "GIS Machine Learning Engineer Intern",
      company: "NASA Jet Propulsion Laboratory",
      period: "June 2025 - Present",
      logoUrl: "./jpl.webp?height=60&width=60",
      description:
        "Developing computer vision and image classification systems for geological feature identification on Venus, using Vision Transformers, Convolutional Neural Networks, and geospatial modeling techniques. Integrating machine learning models and algorithms within geographic information systems for the NASA VERITAS mission.",
    },
    {
      title: "AI/ML Engineer Intern",
      company: "NASA Jet Propulsion Laboratory",
      period: "February 2025 - June 2025",
      logoUrl: "./jpl.webp?height=60&width=60",
      description:
        "Investigated different deep learning architectures for multivariate time-series anomaly detection within Deep Space Network communications ground systems and multimodal antenna/transmitter telemetry. Prototyped and orchestrated an AI agent system and workflow capable of complex reasoning and cross-validation for true anomalies using a fine-tuned LLM agent."    
    },
    {
      title:"President and Co-Founder",
      company:"Artifical Intelligence Club at PCC",
      period: "September 2024 - May 2025",
      logoUrl: "./aiclub.png?height=60&width=60",
      description:
        "Co-founded a student-driven AI/ML research club, organized coding workshops and 3+ collaborative projects on applied AI/ML and interdisciplinary research, built and fostered a community of over 200 students from 7+ different disciplines and clubs on campus. Partnered and networked with research professors and industry experts to encourage more knowledge-sharing and professional development opportunities, providing more impact to STEM initiatives on campus and encouraging ethical and effective AI uses/applications. Lead organized the AI Horizons Convention, a large-scale event at PCC which hosted 150+ attendees and guests from Microsoft, Caltech, NASA JPL, etc.",
    }
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
