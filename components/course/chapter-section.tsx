'use client'

import { motion } from 'framer-motion'
import { Lock, CheckCircle2, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SubtopicAccordion } from './subtopic-accordion'
import type { Chapter } from '@/lib/course-data'

interface ChapterSectionProps {
  chapter: Chapter
  index: number
  isActive?: boolean
}

export function ChapterSection({
  chapter,
  index,
  isActive = false,
}: ChapterSectionProps) {
  const chapterNumber = index + 1

  return (
    <motion.section
      id={`chapter-${chapter.id}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'scroll-mt-24 rounded-3xl border p-6 transition-all duration-300 md:p-8',
        isActive && 'ring-2 ring-primary/20',
        chapter.isLocked && 'opacity-60'
      )}
    >
      {/* Chapter header */}
      <div className="mb-6 flex items-start gap-4">
        {/* Chapter number */}
        <div
          className={cn(
            'flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold',
            chapter.progress === 100
              ? 'bg-emerald-500/10 text-emerald-600'
              : chapter.isLocked
                ? 'bg-muted text-muted-foreground'
                : 'bg-primary/10 text-primary'
          )}
        >
          {chapter.isLocked ? (
            <Lock className="h-6 w-6" />
          ) : chapter.progress === 100 ? (
            <CheckCircle2 className="h-7 w-7" />
          ) : (
            chapterNumber
          )}
        </div>

        {/* Title and description */}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Chapter {chapterNumber}
            </span>
            {chapter.progress === 100 && (
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                Completed
              </span>
            )}
            {chapter.isLocked && (
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                Locked
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-foreground text-balance">
            {chapter.title}
          </h2>
          <p className="mt-2 text-muted-foreground">{chapter.description}</p>
        </div>
      </div>

      {/* Progress bar */}
      {!chapter.isLocked && (
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Chapter Progress</span>
            <span className="font-medium text-foreground">{chapter.progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${chapter.progress}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              className={cn(
                'h-full rounded-full',
                chapter.progress === 100 ? 'bg-emerald-500' : 'bg-primary'
              )}
            />
          </div>
        </div>
      )}

      {/* Subtopics */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Topics & Materials
        </h3>
        <div className="space-y-3">
          {chapter.subtopics.map((subtopic, i) => (
            <SubtopicAccordion
              key={subtopic.id}
              subtopic={subtopic}
              index={i}
              defaultOpen={i === 0 && !chapter.isLocked}
            />
          ))}
        </div>
      </div>

      {/* Quick stats */}
      {!chapter.isLocked && (
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-muted/50 p-4 sm:grid-cols-4">
          <QuickStat
            icon={<Circle className="h-4 w-4" />}
            label="Topics"
            value={chapter.subtopics.length}
          />
          <QuickStat
            icon={<Circle className="h-4 w-4" />}
            label="Materials"
            value={chapter.subtopics.reduce((acc, s) => acc + s.materials.length, 0)}
          />
          <QuickStat
            icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
            label="Completed"
            value={chapter.subtopics.reduce(
              (acc, s) => acc + s.materials.filter(m => m.isCompleted).length,
              0
            )}
          />
          <QuickStat
            icon={<Circle className="h-4 w-4 text-amber-500" />}
            label="Remaining"
            value={chapter.subtopics.reduce(
              (acc, s) => acc + s.materials.filter(m => !m.isCompleted).length,
              0
            )}
          />
        </div>
      )}
    </motion.section>
  )
}

function QuickStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: number
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <div className="text-lg font-bold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}
