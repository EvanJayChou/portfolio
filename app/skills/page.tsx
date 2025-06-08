import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST API", "MongoDB", "PostgreSQL"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "Jest", "Cypress", "Figma"],
    },
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
