import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import LoadingScreen from "@/components/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Evan Chou's Portfolio",
  description: "Evan Chou's professional portfolio showcasing his work and skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingScreen>
            <Navigation />
            <main>{children}</main>
          </LoadingScreen>
        </ThemeProvider>
      </body>
    </html>
  )
}
