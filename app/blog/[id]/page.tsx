import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const blogPosts = [
    {
      id: "1",
      title: "Getting Started with Next.js 14",
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
      date: "May 15, 2024",
      author: "John Doe",
      tags: ["Next.js", "React", "Web Development"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
    {
      id: "2",
      title: "The Power of TypeScript in Frontend Development",
      content: `
        <p>TypeScript has become an essential tool for modern frontend development, offering type safety and improved developer experience on top of JavaScript.</p>
        
        <p>By adding static types to JavaScript, TypeScript helps catch errors during development rather than at runtime, leading to more robust applications and fewer bugs in production.</p>
        
        <h2>Benefits of TypeScript</h2>
        
        <ul>
          <li>Static Type Checking: Catch type-related errors during development</li>
          <li>Improved IDE Support: Better autocomplete, navigation, and refactoring tools</li>
          <li>Enhanced Documentation: Types serve as documentation for your code</li>
          <li>Safer Refactoring: Make large-scale changes with confidence</li>
          <li>Better Team Collaboration: Clearer interfaces between components and modules</li>
        </ul>
        
        <p>Getting started with TypeScript in a React project is easy, especially with tools like Create React App or Next.js that offer TypeScript templates out of the box.</p>
        
        <pre><code>npx create-next-app@latest my-app --typescript</code></pre>
        
        <p>This command will set up a new Next.js project with TypeScript configuration already in place.</p>
      `,
      date: "April 22, 2024",
      author: "John Doe",
      tags: ["TypeScript", "JavaScript", "Frontend"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
    {
      id: "3",
      title: "Building Accessible Web Applications",
      content: `
        <p>Web accessibility is not just a nice-to-have feature—it's a fundamental aspect of web development that ensures everyone, regardless of ability, can use and navigate your website.</p>
        
        <p>Creating accessible web applications means designing and developing websites that can be used by people with disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
        
        <h2>Key Accessibility Principles</h2>
        
        <ul>
          <li>Perceivable: Information must be presentable to users in ways they can perceive</li>
          <li>Operable: User interface components must be operable by all users</li>
          <li>Understandable: Information and operation must be understandable</li>
          <li>Robust: Content must be robust enough to be interpreted by a wide variety of user agents</li>
        </ul>
        
        <p>Implementing accessibility in your web applications involves following WCAG (Web Content Accessibility Guidelines) standards and using semantic HTML, proper ARIA attributes, and ensuring keyboard navigation works correctly.</p>
        
        <pre><code>&lt;button aria-label="Close dialog" onClick={closeDialog}&gt;
  &lt;span className="sr-only"&gt;Close&lt;/span&gt;
  &lt;XIcon /&gt;
&lt;/button&gt;</code></pre>
        
        <p>This example shows how to create an accessible close button with both an aria-label for screen readers and a visually hidden text element.</p>
      `,
      date: "March 10, 2024",
      author: "John Doe",
      tags: ["Accessibility", "HTML", "CSS"],
      imageUrl: "/placeholder.svg?height=400&width=800",
    },
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
