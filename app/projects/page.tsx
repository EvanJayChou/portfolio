"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Rocket, Brain, Globe, X, Calendar, Trophy, Code, Car, HeartPulse } from "lucide-react"

export default function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  const projects = [
    {
      id: 1,
      title: "Coordinated Bipedal Robotics",
      subtitle: "Multi-Agent Reinforcement Learning",
      banner: "/placeholder.svg?height=120&width=400",
      description:
        "Developing a multi-agent reinforcement learning system for coordinating bipedal robots in complex environments, enhancing their adaptability.",
      detailedDescription:
        "Training and deploying Attention Models, Policy Networks, Shared Networks, and Value Networks using MAPPO for reinforcement learning-based robotics. Creating simulative environments for large-scale reinforcement learning and rendering using NVIDIA Isaac Sim with ROS 2 middleware integrations. Exploring Sim2Real and OpenUSD implementations.",
      period: "2025",
      status: "Current",
      category: "robotics",
      color: "from-purple-500 to-pink-500",
      icon: Zap,
      technologies: ["Robot Operating System (ROS 2)", "Linux", "NVIDIA Isaac Sim", "Sim2Real", "PyTorch"],
      metrics: { completion: "50%", agents: "6+", frameworks: "5+" },
      achievements: [
        "TBD"
      ],
      challenges: [
        "Integrating Isaac Sim simulations with deep RL training scripts",
        "Bridging ROS 2 middleware with simulative robots and deep RL models",
      ],
      links: { github: "https://github.com/EvanJayChou/marl_robotics"},
    },
    {
      id: 2,
      title: "Deep Learning for EEG Denoising",
      subtitle: "Transformers and Neural Signal Processing",
      banner: "/placeholder.svg?height=120&width=400",
      description:
        "Investigating deep learning methods and transformer architectures for EEG denoising and artifact cleansing, with applications in neural signal processing.",
      detailedDescription:
        "Researching different EEG denoiser models, such as CLENet, EEG Conformer, and EEGDfus for cleaning noisy EEG data in real-time. Testing and experimenting with different architectures and training processes to improve SNR and clean signal processing.",
      period: "2025",
      status: "Current",
      category: "ai-ml",
      color: "from-green-500 to-blue-500",
      icon: Brain,
      technologies: ["Deep Learning", "Transformers", "Neural Signal Processing"],
      metrics: {architectures: "3+", studies: "6+", experiments: "10+"},
      achievements: [

      ],
      challenges: [
        "Reading and replicating previous EEG denoising studies",
        "Understanding various transformer components and use cases",
        "Communicating with a wider neuroscience community about research methods and terminology"
      ],
      links: {github: 'https://github.com/EvanJayChou/eeg_artifact_detection'},
    },
    {
      id: 3,
      title: "Autonomous Line-Following Car",
      subtitle: "UCSD ECE 5 Final Project",
      banner: "/placeholder.svg?height=120&width=400",
      description:
        "Built an autonomous robot car that follows a black line track, with different PID settings tuned for each unique type of track.",
      detailedDescription:
        "Built and integrated embedded software, electronics hardware, and mechanical components into an autonomous robot car capable of following a black line track using photoresistor arrays. Fine-tuned different PID settings for each unique type of track through iterative trial and error.",
      period: "2025",
      status: "Completed",
      category: "robotics",
      color: "from-yellow-500 to-green-500",
      icon: Car,
      technologies: ["Embedded Programming", "Electronic Circuits", "PID Tuning", "Arduino", "C++"],
      metrics: { accuracy: "90%", ranking: "6th", teammates: "3"},
      achievements: [

      ],
      challenges: [
        "Debugging line-following functions in embeddded code",
        "Ensuring circuit components and wiring are soldered correctly",
        "PID tuning to ensure stable behaviors on various line tracks"
      ],
      links: {demo: "https://youtu.be/AOaCGNmPx2k?si=M8eV_QVU5v0xgr-1", website: "https://evanjaychou.github.io/ece5_lab4_jabe/"},
    },
    {
      id: 4,
      title: "TensorPilot",
      subtitle: "Personalized AI Math/Educational Assistant",
      banner: "/placeholder.svg?height=120&width=400",
      description:
        "Building an extensive AI note-taking app with the AI Club at PCC, focusing on tailored experiences for personalized education on-campus.",
      detailedDescription:
        "This cutting-edge project leverages agentic retrieval-augmented generation (RAG) systems to create a personalized AI educational assistant. The app integrates with various data sources, including lecture notes, textbooks, and online resources, to provide tailored learning experiences. It features advanced natural language processing capabilities, allowing users to interact with the AI in a conversational manner, ask questions, and receive contextually relevant answers.",
      period: "2025",
      status: "Completed",
      category: "ai-ml",
      color: "from-red-500 to-orange-500",
      icon: Globe,
      technologies: ["Agentic AI", "Model Context Protocol", "Retrieval Augmented Generation"],
      metrics: { contributors: "5+", apis: "4+", frameworks: "5+" },
      achievements: [
        "Developed an agentic RAG system for personalized education",
        "Orchestrated model context protocol for efficient API data retrieval",
        "Prompt engineered Gemini 2.0 Flash for AI agent tool calling",
      ],
      challenges: [
        "Configuring integration with a full-stack web application",
        "Linking APIs to the MCP Host and Server",
        "Improving mathematical reasoning capabilities",
      ],
      links: { github: "#", demo: "#", paper: "#" },
    },
    {
      id: 5,
      title: "Human Activity Recognition",
      subtitle: "MLP for Sensor Classification",
      banner: "/placeholder.svg?height=120&width=400",
      description:
        "",
      detailedDescription:
        "",
      period: "2025",
      status: "Completed",
      category: "ai-ml",
      color: "from-blue-500 to-purple-500",
      icon: HeartPulse,
      technologies: ["Neural Networks", "Model Train and Testing", "Data Science"],
      metrics: {accuracy: "95%", tests: "5", datasets: "2"},
      achievements: [

      ],
      challenges: [

      ],
      links: {},
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Inline Styles for Text Clamping */}
      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
            Projects Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Innovative projects at the intersection of AI/ML, application development, and cutting-edge technology
          </p>

          {/* Floating Stats */}
          <div className="flex justify-center gap-8">
            {[
              { label: "Projects", value: "4", icon: "🚀" },
              { label: "Technologies", value: "15+", icon: "⚡" },
              { label: "Years", value: "3+", icon: "📅" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:-rotate-1 h-[600px] flex flex-col"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Banner Image */}
                  <div className="relative h-32 overflow-hidden rounded-t-3xl">
                    <img
                      src={project.banner || "/placeholder.svg"}
                      alt={`${project.title} banner`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                    {/* Status Badge on Banner */}
                    <div className="absolute top-3 right-3">
                      <Badge
                        className={`${project.status === "Current" ? "bg-green-500/90 text-white" : "bg-gray-500/90 text-white"} border-0 backdrop-blur-sm`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Background Gradient for Content Area */}
                  <div className={`absolute inset-0 top-32 bg-gradient-to-br ${project.color} opacity-90`} />

                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 top-32 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_0%,transparent_50%)] animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 p-6 flex flex-col text-white">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold mb-1 line-clamp-1">{project.title}</h3>
                      <p className="text-white/80 font-medium text-sm line-clamp-1">{project.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 mb-3 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold">{value}</div>
                          <div className="text-xs text-white/70 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Period */}
                    <div className="mb-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <div className="text-white/80 text-sm text-center">{project.period}</div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 mt-auto">
                      {Object.entries(project.links).map(([type, url]) => (
                        <Button
                          key={type}
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-0 text-white flex-1 text-xs"
                        >
                          {type === "github" && <Github className="w-3 h-3" />}
                          {type !== "github" && <ExternalLink className="w-3 h-3" />}
                        </Button>
                      ))}
                    </div>

                    {/* Hover Overlay - Now Clickable */}
                    <div
                      className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      } flex items-center justify-center rounded-3xl cursor-pointer`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="text-center pointer-events-none">
                        <div className="text-4xl mb-2">🚀</div>
                        <div className="font-bold">Explore Project</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProject.banner || "/placeholder.svg"}
                alt={`${selectedProject.title} banner`}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-t-3xl" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <h2 className="text-3xl font-bold mb-1">{selectedProject.title}</h2>
                <p className="text-white/80 text-lg">{selectedProject.subtitle}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="font-semibold">Project Year</div>
                    <div className="text-sm text-gray-600">{selectedProject.period}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-gray-500" />
                  <div>
                    <Badge
                      className={
                        selectedProject.status === "Current"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {selectedProject.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProject.detailedDescription}</p>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange-600" />
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {selectedProject.achievements?.map((achievement: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges */}
              {selectedProject.challenges && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Technical Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-orange-600" />
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {Object.entries(selectedProject.links).map(([type, url]) => (
                  <a
                    key={type}
                    href={typeof url === "string" ? url : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center px-4 py-2 rounded-lg"
                  >
                    {type === "github" && <Github className="w-4 h-4 mr-2" />}
                    {type !== "github" && <ExternalLink className="w-4 h-4 mr-2" />}
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
