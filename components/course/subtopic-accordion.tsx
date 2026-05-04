'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check, Lock, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MaterialCard } from './material-card'
import type { Subtopic } from '@/lib/course-data'

interface SubtopicAccordionProps {
  subtopic: Subtopic
  index: number
  defaultOpen?: boolean
}

export function SubtopicAccordion({
  subtopic,
  index,
  defaultOpen = false,
}: SubtopicAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const completedMaterials = subtopic.materials.filter(m => m.isCompleted).length
  const totalMaterials = subtopic.materials.length
  const progress = Math.round((completedMaterials / totalMaterials) * 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm',
        subtopic.isLocked && 'opacity-70'
      )}
    >
      {/* Header */}
      <button
        onClick={() => !subtopic.isLocked && setIsOpen(!isOpen)}
        disabled={subtopic.isLocked}
        className={cn(
          'flex w-full items-center gap-4 p-5 text-left transition-colors',
          !subtopic.isLocked && 'hover:bg-muted/50',
          subtopic.isLocked && 'cursor-not-allowed'
        )}
      >
        {/* Status indicator */}
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
            subtopic.isCompleted
              ? 'bg-emerald-500/10 text-emerald-600'
              : subtopic.isLocked
                ? 'bg-muted text-muted-foreground'
                : 'bg-primary/10 text-primary'
          )}
        >
          {subtopic.isLocked ? (
            <Lock className="h-5 w-5" />
          ) : subtopic.isCompleted ? (
            <Check className="h-5 w-5" />
          ) : (
            <BookOpen className="h-5 w-5" />
          )}
        </div>

        {/* Title and description */}
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-foreground">{subtopic.title}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
            {subtopic.description}
          </p>
        </div>

        {/* Progress and chevron */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {completedMaterials}/{totalMaterials}
            </span>
          </div>
          {!subtopic.isLocked && (
            <ChevronDown
              className={cn(
                'h-5 w-5 text-muted-foreground transition-transform duration-300',
                isOpen && 'rotate-180'
              )}
            />
          )}
        </div>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && !subtopic.isLocked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="border-t bg-muted/30 px-5 py-4">
              <div className="grid gap-3">
                {subtopic.materials.map((material, i) => (
                  <MaterialCard key={material.id} material={material} index={i} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
