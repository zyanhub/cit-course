'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, Info } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChapterSidebar } from '@/components/course/chapter-sidebar'
import { PartContent } from '@/components/course/part-content'
import { ContentSkeleton, SidebarSkeleton } from '@/components/course/loading-skeleton'
import { Footer } from '@/components/footer'
import { ProgressProvider, useProgress } from '@/lib/progress-context'

function CourseContent() {
  const { course, getOverallProgress } = useProgress()
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null)
  const [activePartId, setActivePartId] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize with first chapter and part
  useEffect(() => {
    const timer = setTimeout(() => {
      if (course.chapters.length > 0) {
        const firstUnlockedChapter = course.chapters.find(ch => !ch.isLocked)
        if (firstUnlockedChapter) {
          setActiveChapterId(firstUnlockedChapter.id)
          if (firstUnlockedChapter.parts.length > 0) {
            setActivePartId(firstUnlockedChapter.parts[0].id)
          }
        }
      }
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [course.chapters])

  const activeChapter = course.chapters.find(ch => ch.id === activeChapterId)
  const activePart = activeChapter?.parts.find(p => p.id === activePartId)
  const activePartIndex = activeChapter?.parts.findIndex(p => p.id === activePartId) ?? -1

  const handleSelectChapter = (chapterId: string) => {
    const chapter = course.chapters.find(ch => ch.id === chapterId)
    if (chapter && !chapter.isLocked) {
      setActiveChapterId(chapterId)
      if (chapter.parts.length > 0) {
        setActivePartId(chapter.parts[0].id)
      }
      setSidebarOpen(false)
    }
  }

  const handleSelectPart = (chapterId: string, partId: string) => {
    setActiveChapterId(chapterId)
    setActivePartId(partId)
    setSidebarOpen(false)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!activeChapter || activePartIndex === -1) return

    if (direction === 'prev') {
      if (activePartIndex > 0) {
        setActivePartId(activeChapter.parts[activePartIndex - 1].id)
      } else {
        // Go to previous chapter
        const currentChapterIndex = course.chapters.findIndex(ch => ch.id === activeChapterId)
        if (currentChapterIndex > 0) {
          const prevChapter = course.chapters[currentChapterIndex - 1]
          if (!prevChapter.isLocked) {
            setActiveChapterId(prevChapter.id)
            setActivePartId(prevChapter.parts[prevChapter.parts.length - 1].id)
          }
        }
      }
    } else {
      if (activePartIndex < activeChapter.parts.length - 1) {
        setActivePartId(activeChapter.parts[activePartIndex + 1].id)
      } else {
        // Go to next chapter
        const currentChapterIndex = course.chapters.findIndex(ch => ch.id === activeChapterId)
        if (currentChapterIndex < course.chapters.length - 1) {
          const nextChapter = course.chapters[currentChapterIndex + 1]
          if (!nextChapter.isLocked) {
            setActiveChapterId(nextChapter.id)
            setActivePartId(nextChapter.parts[0].id)
          }
        }
      }
    }
  }

  const hasPrev = activePartIndex > 0 || course.chapters.findIndex(ch => ch.id === activeChapterId) > 0
  const hasNext = (activeChapter && activePartIndex < activeChapter.parts.length - 1) ||
    course.chapters.findIndex(ch => ch.id === activeChapterId) < course.chapters.length - 1

  const overallProgress = getOverallProgress()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="hidden font-bold text-foreground sm:inline">CIT Learning</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="hidden sm:block">
              <h1 className="truncate font-semibold text-foreground">
                {course.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{overallProgress}% complete</span>
                <div className="h-1.5 w-24 rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallProgress}%` }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
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

      {/* Educational purpose notice */}
      <div className="border-b bg-primary/5">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <Info className="h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            {course.description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Sidebar - desktop */}
          <div className="hidden lg:block">
            {isLoading ? (
              <SidebarSkeleton />
            ) : (
              <ChapterSidebar
                activeChapterId={activeChapterId}
                activePartId={activePartId}
                onSelectChapter={handleSelectChapter}
                onSelectPart={handleSelectPart}
              />
            )}
          </div>

          {/* Main content */}
          <main className="min-w-0">
            {isLoading ? (
              <ContentSkeleton />
            ) : activeChapter && activePart ? (
              <PartContent
                chapter={activeChapter}
                part={activePart}
                partIndex={activePartIndex}
                onNavigate={handleNavigate}
                hasPrev={hasPrev}
                hasNext={hasNext}
              />
            ) : (
              <div className="flex h-64 items-center justify-center text-muted-foreground">
                Select a chapter to begin learning
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 h-full w-80 bg-background p-4 shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <ChapterSidebar
                activeChapterId={activeChapterId}
                activePartId={activePartId}
                onSelectChapter={handleSelectChapter}
                onSelectPart={handleSelectPart}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default function CourseDetailPage() {
  return (
    <ProgressProvider>
      <CourseContent />
    </ProgressProvider>
  )
}
