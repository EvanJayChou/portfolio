import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const blogPosts = [
    {
      id: "2",
      title: "AI Horizons Convention",
      content: `
        <p>In August 2024, I joined forces with a few incredible individuals to start the Artificial Intelligence Club at Pasadena City College. Back then, we were fueled by big ideas and excitement about what we could build—events we might host, initiatives we could lead, and the impact we hoped to make. Never did I imagine that those early conversations would one day lead to the AI Horizons Convention: a large-scale event that became a reality through the relentless dedication, creativity, and teamwork of my fellow board officers.</p>
        
        <p>Working alongside my incredible AI Club team to bring this vision to life was truly one of the most fulfilling experiences of my journey so far. From the late after-12-AM nights brainstorming how to make AI approachable and inclusive for all students regardless of background, to the countless meetings where every detail—big or small—mattered, I witnessed firsthand what it means to lead with passion, persistence, and purpose. Planning this event required a lot of thoughtful planning and cross-functional team collaboration, but I am glad to have student and faculty support along this journey. 
</p>
        
        <p>What made this convention truly meaningful wasn’t just the turnout—it was the genuine curiosity, thoughtful conversations, and sense of community that filled the room. As the final event I’ll ever host and organize at PCC, it was the perfect way to end this chapter—surrounded by passionate people, meaningful work, and a team I’ll always be proud of.
</p>
        
        <h2>Acknowledgements</h2>
        
        <p>I would like to give thanks to all our special guests: Andrea Olson, Jen Pino, MBA, Tiffany Kimoto, Ivy Chen, Ming Wang, Nicholas Beaudoin, Kirby Repko, Chenghao (Peter) Liu, David Chou, Rita Sargsyan, Xianmei Lei, Daphne Nea, and Emily Muditar, for participating in our events and sharing your insights and perspectives on AI and/or presenting career development opportunities. Your presence and contributions were essential to the success of this event, and we're truly grateful you took the time to join us.
</p>
        
        <p>I would also like to thank some PCC faculty: Noel Anthony Gonzalez, M.Ed., Jacqueline Sacoto, Sophia Montano, Carrie Afuso, Richshell Allen, and Professor Yu-Chung Chang-Hou. Your support behind the scenes played a crucial role in making the AI Horizons Convention possible.
</p>
        <p>And lastly, we definitely can't forget about my AI Club friends: Shin Aung, Akki Singh, Jordan Marcelo, Vivian Nguyen, Jian Wang, Nyan Lynn Phyoe Zaw, Dien Tran, Timothy De Lange, David Alcala, and our advisor, Professor Jamal Ashraf. It has been such a pleasure working with you all to bring this dream to life, and I'm endlessly grateful for your passion, ideas, and unwavering commitment throughout this journey. Every challenge we faced became an opportunity to grow together - not just as a team, but as a family with a shared vision of positively impacting our community.
</p>
      `,
      date: "April 30, 2025",
      author: "Evan Chou",
      tags: ["AI", "Machine Learning", "Career Development"],
      imageUrl: "/grouppic.jpg?height=400&width=800",
    },
    {
      id: "1",
      title: "NASA JPL SIRI Internship Experience",
      content: `
        TBD
      `,
      date: "June 7, 2025",
      author: "Evan Chou",
      tags: ["Applied ML", "Communication Systems", "Internship"],
      imageUrl: "/evanjpl.jpg?height=400&width=800",
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
