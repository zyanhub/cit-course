'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, BookOpen, Code, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useProgress } from '@/lib/progress-context'
import type { Part, Chapter } from '@/lib/course-data'

interface PartContentProps {
  chapter: Chapter
  part: Part
  partIndex: number
  onNavigate: (direction: 'prev' | 'next') => void
  hasPrev: boolean
  hasNext: boolean
}

export function PartContent({
  chapter,
  part,
  partIndex,
  onNavigate,
  hasPrev,
  hasNext
}: PartContentProps) {
  const { markPartComplete } = useProgress()

  const handleMarkComplete = () => {
    markPartComplete(chapter.id, part.id)
  }

  return (
    <motion.div
      key={part.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="border-b pb-6">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <span>Chapter {chapter.number}</span>
          <span>/</span>
          <span>Part {partIndex + 1} of {chapter.parts.length}</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground text-balance md:text-4xl">
          {part.title}
        </h1>
        {part.isCompleted && (
          <div className="mt-3 flex items-center gap-2 text-emerald-600">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">Completed</span>
          </div>
        )}
      </div>

      {/* Main Explanation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <BookOpen className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Explanation</h2>
        </div>
        <div className="prose prose-slate max-w-none dark:prose-invert">
          {part.explanation.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Example */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Code className="h-5 w-5" />
          <h2 className="text-xl font-semibold">
            {part.example.type === 'code' ? 'Code Example' : 'Concept Example'}
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl border bg-slate-950 dark:bg-slate-900">
          {part.example.language && (
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2">
              <span className="text-xs font-medium text-slate-400">{part.example.language}</span>
              <button
                onClick={() => navigator.clipboard.writeText(part.example.content)}
                className="text-xs text-slate-400 hover:text-slate-200"
              >
                Copy
              </button>
            </div>
          )}
          <pre className="overflow-x-auto p-4">
            <code className="text-sm text-slate-200 font-mono whitespace-pre-wrap">
              {part.example.content}
            </code>
          </pre>
        </div>
      </section>

      {/* Key Points */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Lightbulb className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Key Points</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {part.keyPoints.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 rounded-xl border bg-card p-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span className="text-sm text-muted-foreground">{point}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Actions */}
      <div className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onNavigate('prev')}
            disabled={!hasPrev}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate('next')}
            disabled={!hasNext}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {!part.isCompleted && (
          <Button
            onClick={handleMarkComplete}
            className={cn(
              'gap-2',
              'bg-emerald-600 hover:bg-emerald-700 text-white'
            )}
          >
            <CheckCircle2 className="h-4 w-4" />
            Mark as Complete
          </Button>
        )}
      </div>
    </motion.div>
  )
}
