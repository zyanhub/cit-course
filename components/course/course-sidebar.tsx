'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  Lock,
  Circle,
  Trophy,
  Clock,
  Users,
  Star,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Progress } from '@/components/ui/progress'
import type { Course, Chapter } from '@/lib/course-data'

interface CourseSidebarProps {
  course: Course
  activeChapterId?: string
}

export function CourseSidebar({ course, activeChapterId }: CourseSidebarProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([
    activeChapterId || course.chapters[0]?.id || '',
  ])

  const overallProgress = Math.round(
    (course.completedLessons / course.totalLessons) * 100
  )

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    )
  }

  return (
    <aside className="sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border bg-card p-6">
      {/* Course info */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-foreground text-balance">{course.title}</h2>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{course.studentsEnrolled.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Overall progress */}
      <div className="mb-6 rounded-xl bg-primary/5 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Your Progress</span>
          <span className="text-sm font-bold text-primary">{overallProgress}%</span>
        </div>
        <Progress value={overallProgress} className="h-2" />
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {course.completedLessons} of {course.totalLessons} lessons
          </span>
          <div className="flex items-center gap-1">
            <Trophy className="h-3.5 w-3.5 text-amber-500" />
            <span>{course.xpReward} XP</span>
          </div>
        </div>
      </div>

      {/* Course stats */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-muted/50 p-3">
          <Clock className="mb-1 h-4 w-4 text-muted-foreground" />
          <div className="text-sm font-medium text-foreground">{course.duration}</div>
          <div className="text-xs text-muted-foreground">Total Duration</div>
        </div>
        <div className="rounded-lg bg-muted/50 p-3">
          <div className="mb-1 text-sm font-medium text-primary">{course.level}</div>
          <div className="text-xs text-muted-foreground">Difficulty</div>
        </div>
      </div>

      {/* Chapter navigation */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Chapters
        </h3>
        <nav className="space-y-2">
          {course.chapters.map((chapter, index) => (
            <ChapterNavItem
              key={chapter.id}
              chapter={chapter}
              index={index}
              isActive={chapter.id === activeChapterId}
              isExpanded={expandedChapters.includes(chapter.id)}
              onToggle={() => toggleChapter(chapter.id)}
            />
          ))}
        </nav>
      </div>
    </aside>
  )
}

function ChapterNavItem({
  chapter,
  index,
  isActive,
  isExpanded,
  onToggle,
}: {
  chapter: Chapter
  index: number
  isActive: boolean
  isExpanded: boolean
  onToggle: () => void
}) {
  const StatusIcon = chapter.progress === 100 ? Check : chapter.isLocked ? Lock : Circle

  return (
    <div className="overflow-hidden rounded-lg">
      <button
        onClick={onToggle}
        disabled={chapter.isLocked}
        className={cn(
          'flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors',
          isActive && 'bg-primary/10',
          !chapter.isLocked && 'hover:bg-muted',
          chapter.isLocked && 'cursor-not-allowed opacity-50'
        )}
      >
        <div
          className={cn(
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium',
            chapter.progress === 100
              ? 'bg-emerald-500/10 text-emerald-600'
              : chapter.isLocked
                ? 'bg-muted text-muted-foreground'
                : isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
          )}
        >
          {chapter.progress === 100 ? (
            <Check className="h-4 w-4" />
          ) : chapter.isLocked ? (
            <Lock className="h-3.5 w-3.5" />
          ) : (
            index + 1
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium text-foreground">
            {chapter.title}
          </div>
          {!chapter.isLocked && (
            <div className="mt-1 flex items-center gap-2">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    'h-full rounded-full transition-all',
                    chapter.progress === 100 ? 'bg-emerald-500' : 'bg-primary'
                  )}
                  style={{ width: `${chapter.progress}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{chapter.progress}%</span>
            </div>
          )}
        </div>
        {!chapter.isLocked && (
          <ChevronDown
            className={cn(
              'h-4 w-4 shrink-0 text-muted-foreground transition-transform',
              isExpanded && 'rotate-180'
            )}
          />
        )}
      </button>

      {/* Subtopics */}
      {isExpanded && !chapter.isLocked && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="ml-4 border-l pl-4"
        >
          {chapter.subtopics.map(subtopic => (
            <a
              key={subtopic.id}
              href={`#subtopic-${subtopic.id}`}
              className={cn(
                'flex items-center gap-2 py-2 text-sm transition-colors',
                subtopic.isCompleted
                  ? 'text-emerald-600'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {subtopic.isCompleted ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Circle className="h-3.5 w-3.5" />
              )}
              <span className="truncate">{subtopic.title}</span>
            </a>
          ))}
        </motion.div>
      )}
    </div>
  )
}
