'use client'

import { motion } from 'framer-motion'
import { Lock, CheckCircle2, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useProgress } from '@/lib/progress-context'

interface ChapterSidebarProps {
  activeChapterId: string | null
  activePartId: string | null
  onSelectChapter: (chapterId: string) => void
  onSelectPart: (chapterId: string, partId: string) => void
}

export function ChapterSidebar({
  activeChapterId,
  activePartId,
  onSelectChapter,
  onSelectPart
}: ChapterSidebarProps) {
  const { course, getChapterProgress } = useProgress()

  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border bg-card p-4">
      <h2 className="mb-4 text-lg font-bold text-foreground">Course Content</h2>
      
      <div className="space-y-2">
        {course.chapters.map((chapter, index) => {
          const progress = getChapterProgress(chapter.id)
          const isActive = chapter.id === activeChapterId
          const isComplete = progress === 100

          return (
            <div key={chapter.id} className="space-y-1">
              <button
                onClick={() => !chapter.isLocked && onSelectChapter(chapter.id)}
                disabled={chapter.isLocked}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all',
                  isActive ? 'bg-primary/10' : 'hover:bg-muted',
                  chapter.isLocked && 'cursor-not-allowed opacity-50'
                )}
              >
                <div
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold',
                    isComplete
                      ? 'bg-emerald-500/20 text-emerald-600'
                      : isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                  )}
                >
                  {chapter.isLocked ? (
                    <Lock className="h-4 w-4" />
                  ) : isComplete ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                
                <div className="min-w-0 flex-1">
                  <p className={cn(
                    'truncate text-sm font-medium',
                    isActive ? 'text-foreground' : 'text-muted-foreground'
                  )}>
                    {chapter.title}
                  </p>
                  {!chapter.isLocked && (
                    <div className="mt-1 flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          className={cn(
                            'h-full rounded-full',
                            isComplete ? 'bg-emerald-500' : 'bg-primary'
                          )}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{progress}%</span>
                    </div>
                  )}
                </div>

                {!chapter.isLocked && (
                  <ChevronRight
                    className={cn(
                      'h-4 w-4 text-muted-foreground transition-transform',
                      isActive && 'rotate-90'
                    )}
                  />
                )}
              </button>

              {/* Parts list when chapter is active */}
              {isActive && !chapter.isLocked && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-11 space-y-1 border-l-2 border-muted pl-3"
                >
                  {chapter.parts.map((part, partIndex) => (
                    <button
                      key={part.id}
                      onClick={() => onSelectPart(chapter.id, part.id)}
                      className={cn(
                        'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all',
                        activePartId === part.id
                          ? 'bg-primary/10 text-foreground font-medium'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      )}
                    >
                      <span className={cn(
                        'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs',
                        part.isCompleted
                          ? 'bg-emerald-500/20 text-emerald-600'
                          : activePartId === part.id
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted'
                      )}>
                        {part.isCompleted ? (
                          <CheckCircle2 className="h-3 w-3" />
                        ) : (
                          partIndex + 1
                        )}
                      </span>
                      <span className="truncate">{part.title}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
