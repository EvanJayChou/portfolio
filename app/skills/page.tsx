import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Machine Learning & AI",
      skills:["PyTorch", "Scikit-Learn", "TensorFlow", "Keras", "OpenCV", "Hugging Face Transformers", "NLTK", "LangChain", "LangGraph", "Smolagents", "Ollama", "CUDA"],
    },
    {
      category: "Embedded Systems",
      skills:["Raspberry Pi", "Robot Operating System (ROS 2)", "Linux", "Ubuntu"]
    },
    {
      category:"Data Science",
      skills:["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"]
    },
    {
      category: "Full-Stack",
      skills: ["React", "Node.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    }
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Skills</h1>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
