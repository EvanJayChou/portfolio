import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { title } from "process"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "NASA JPL SIRI Internship Experience",
      excerpt: "Insights from my internship at NASA JPL, focusing on machine learning applications in communications systems.",
      date: "June 7, 2025",
      tags: ["Applied AI/ML", "Communication Systems", "Internship"],
      imageUrl: "./evanjpl.jpg?height=200&width=400",
    },
    {
      id: 2,
      title: "AI Horizons Convention",
      excerpt: "A large-scale event at PCC focused on different perspectives of AI and its impact on society.",
      date: "April 30, 2025",
      tags: ["AI", "Machine Learning", "Career Development"],
      imageUrl: "./grouppic.jpg?height=200&width=400",
    },
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 py-24">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2">
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={`/blog/${post.id}`} className="text-sm font-medium text-primary hover:underline">
                Read more
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
