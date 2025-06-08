import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const blogPosts = [
    {
      id: "2",
      title: "AI Horizons Convention",
      content: `
        <p>Next.js has revolutionized the way we build React applications, providing a powerful framework that combines server-side rendering, static site generation, and client-side rendering in one package.</p>
        
        <p>With the release of Next.js 14, we've seen significant improvements in performance, developer experience, and overall capabilities. The new App Router architecture represents a fundamental shift in how we structure and build Next.js applications.</p>
        
        <h2>Key Features of Next.js 14</h2>
        
        <ul>
          <li>App Router: A new file-system based router built on React Server Components</li>
          <li>Server Components: Render React components on the server for improved performance</li>
          <li>Server Actions: Write server-side code directly in your components</li>
          <li>Improved Caching: More granular control over caching behavior</li>
          <li>Turbopack: A Rust-based bundler for lightning-fast development</li>
        </ul>
        
        <p>Getting started with Next.js 14 is straightforward. You can create a new project using:</p>
        
        <pre><code>npx create-next-app@latest my-app</code></pre>
        
        <p>This will set up a new Next.js project with the latest features enabled by default.</p>
      `,
      date: "April 30, 2025",
      author: "Evan Chou",
      tags: ["AI", "Machine Learning", "Career Development"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
    {
      id: "1",
      title: "NASA JPL SIRI Internship Experience",
      content: `
        <p>Artificial Intelligence (AI) is transforming industries and reshaping our world. From healthcare to finance, AI is driving innovation and creating new opportunities.</p>
        
        <p>In this blog post, we will explore the latest trends in AI, including advancements in machine learning, natural language processing, and computer vision.</p>
        
        <h2>Key Trends in AI</h2>
        
        <ul>
          <li>Generative AI: Creating new content using AI models</li>
          <li>Explainable AI: Making AI decisions transparent and understandable</li>
          <li>AI Ethics: Addressing the ethical implications of AI technologies</li>
          <li>AI in Healthcare: Improving patient outcomes with predictive analytics</li>
        </ul>
        
        <p>The future of AI is bright, with endless possibilities for innovation and growth.</p>
      `,
      date: "June 7, 2025",
      author: "Evan Chou",
      tags: ["Applied ML", "Communication Systems", "Internship"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    }
  ]

  return blogPosts.find((post) => post.id === id)
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ]
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
