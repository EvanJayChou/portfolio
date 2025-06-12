"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface LoadingScreenProps {
  children: React.ReactNode
}

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  // Track which pages have been visited
  useEffect(() => {
    // Get or initialize the visited pages from sessionStorage
    const visitedPagesStr = sessionStorage.getItem("visitedPages") || "[]"
    const visitedPages = JSON.parse(visitedPagesStr) as string[]

    // If this page has been visited before, skip loading
    if (visitedPages.includes(pathname)) {
      setIsLoading(false)
      return
    }

    // Mark this page as visited
    sessionStorage.setItem("visitedPages", JSON.stringify([...visitedPages, pathname]))

    // Start loading process for new pages
    setIsLoading(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Minimum loading time and wait for images
    const timer = setTimeout(() => {
      const images = document.querySelectorAll("img")
      let loadedImages = 0

      if (images.length === 0) {
        setIsLoading(false)
        return
      }

      const checkAllImagesLoaded = () => {
        loadedImages++
        if (loadedImages >= images.length) {
          setProgress(100)
          setTimeout(() => {
            setIsLoading(false)
          }, 500)
        }
      }

      images.forEach((img) => {
        if (img.complete) {
          checkAllImagesLoaded()
        } else {
          img.addEventListener("load", checkAllImagesLoaded)
          img.addEventListener("error", checkAllImagesLoaded)
        }
      })
    }, 800)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [pathname]) // Re-run when the pathname changes

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            <div className="text-center space-y-6">
              {/* Logo/Name */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold md:text-6xl">Evan Chou</h1>
                <p className="text-lg text-muted-foreground md:text-xl">Portfolio</p>
              </motion.div>

              {/* Loading Bar */}
              <div className="w-64 md:w-80">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Loading... {Math.round(progress)}%</p>
              </div>

              {/* Loading Spinner */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </>
  )
}
