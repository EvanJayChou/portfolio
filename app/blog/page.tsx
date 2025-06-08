import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with Next.js 14 and its new App Router architecture.",
      date: "May 15, 2024",
      tags: ["Next.js", "React", "Web Development"],
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "The Power of TypeScript in Frontend Development",
      excerpt:
        "Discover how TypeScript can improve your development workflow and help catch errors before they reach production.",
      date: "April 22, 2024",
      tags: ["TypeScript", "JavaScript", "Frontend"],
      imageUrl: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      excerpt:
        "Explore best practices for creating web applications that are accessible to all users, regardless of ability.",
      date: "March 10, 2024",
      tags: ["Accessibility", "HTML", "CSS"],
      imageUrl: "/placeholder.svg?height=200&width=400",
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
