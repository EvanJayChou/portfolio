"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type BlogPost = {
  id: string
  title: string
  content: string
  date: string
  author: string
  tags: string[]
  imageUrl: string
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-24">
      <Link href="/blog" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>

      <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg sm:h-96">
        <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="mb-4 space-y-2">
        <h1 className="text-3xl font-bold sm:text-4xl">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>By {post.author}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div
        className="prose prose-stone max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
} 