'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { courseData, calculateChapterProgress, type Course, type Chapter } from './course-data'

interface ProgressContextType {
  course: Course
  markPartComplete: (chapterId: string, partId: string) => void
  getChapterProgress: (chapterId: string) => number
  isChapterUnlocked: (chapterIndex: number) => boolean
  getOverallProgress: () => number
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [course, setCourse] = useState<Course>(() => {
    // Initialize with first chapter unlocked
    return {
      ...courseData,
      chapters: courseData.chapters.map((chapter, index) => ({
        ...chapter,
        isLocked: index > 0
      }))
    }
  })

  const markPartComplete = useCallback((chapterId: string, partId: string) => {
    setCourse(prev => {
      const updatedChapters = prev.chapters.map(chapter => {
        if (chapter.id !== chapterId) return chapter
        
        const updatedParts = chapter.parts.map(part => {
          if (part.id !== partId) return part
          return { ...part, isCompleted: true }
        })
        
        return { ...chapter, parts: updatedParts }
      })

      // Check if we need to unlock next chapter
      const chapterIndex = updatedChapters.findIndex(ch => ch.id === chapterId)
      if (chapterIndex !== -1 && chapterIndex < updatedChapters.length - 1) {
        const currentChapter = updatedChapters[chapterIndex]
        const allPartsComplete = currentChapter.parts.every(p => p.isCompleted)
        
        if (allPartsComplete) {
          updatedChapters[chapterIndex + 1] = {
            ...updatedChapters[chapterIndex + 1],
            isLocked: false
          }
        }
      }

      return { ...prev, chapters: updatedChapters }
    })
  }, [])

  const getChapterProgress = useCallback((chapterId: string): number => {
    const chapter = course.chapters.find(ch => ch.id === chapterId)
    if (!chapter) return 0
    return calculateChapterProgress(chapter)
  }, [course])

  const isChapterUnlocked = useCallback((chapterIndex: number): boolean => {
    if (chapterIndex === 0) return true
    const prevChapter = course.chapters[chapterIndex - 1]
    if (!prevChapter) return false
    return prevChapter.parts.every(p => p.isCompleted)
  }, [course])

  const getOverallProgress = useCallback((): number => {
    const totalParts = course.chapters.reduce((acc, ch) => acc + ch.parts.length, 0)
    const completedParts = course.chapters.reduce(
      (acc, ch) => acc + ch.parts.filter(p => p.isCompleted).length,
      0
    )
    return Math.round((completedParts / totalParts) * 100)
  }, [course])

  return (
    <ProgressContext.Provider
      value={{
        course,
        markPartComplete,
        getChapterProgress,
        isChapterUnlocked,
        getOverallProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
