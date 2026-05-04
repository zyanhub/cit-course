'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CourseHeader } from '@/components/course/course-header'
import { CourseSidebar } from '@/components/course/course-sidebar'
import { ChapterSection } from '@/components/course/chapter-section'
import { MaterialStats } from '@/components/course/material-stats'
import { courseData } from '@/lib/course-data'

export default function CourseDetailPage() {
  const [activeChapterId, setActiveChapterId] = useState(courseData.chapters[0]?.id)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Track scroll position to update active chapter
  useEffect(() => {
    const handleScroll = () => {
      const sections = courseData.chapters.map(ch => document.getElementById(`chapter-${ch.id}`))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapterId(courseData.chapters[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="hidden sm:block">
              <h1 className="truncate font-semibold text-foreground">
                {courseData.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {courseData.completedLessons} / {courseData.totalLessons} lessons completed
              </p>
            </div>
          </div>

          {/* Mobile sidebar toggle */}
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <CourseHeader course={courseData} />

        {/* Material stats */}
        <div className="mt-8">
          <MaterialStats course={courseData} />
        </div>

        {/* Main content grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Chapters */}
          <main className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between"
            >
              <h2 className="text-2xl font-bold text-foreground">Course Content</h2>
              <span className="text-sm text-muted-foreground">
                {courseData.chapters.length} Chapters
              </span>
            </motion.div>

            {courseData.chapters.map((chapter, index) => (
              <ChapterSection
                key={chapter.id}
                chapter={chapter}
                index={index}
                isActive={chapter.id === activeChapterId}
              />
            ))}
          </main>

          {/* Sidebar - desktop */}
          <div className="hidden lg:block">
            <CourseSidebar course={courseData} activeChapterId={activeChapterId} />
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-80 bg-background p-4 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <CourseSidebar course={courseData} activeChapterId={activeChapterId} />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
