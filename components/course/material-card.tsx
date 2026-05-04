'use client'

import { motion } from 'framer-motion'
import {
  Play,
  FileText,
  Code2,
  Download,
  HelpCircle,
  Dumbbell,
  Check,
  Lock,
  Clock,
  HardDrive,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Material } from '@/lib/course-data'

const materialIcons = {
  video: Play,
  article: FileText,
  code: Code2,
  download: Download,
  quiz: HelpCircle,
  exercise: Dumbbell,
}

const materialColors = {
  video: 'bg-rose-500/10 text-rose-600 border-rose-200',
  article: 'bg-blue-500/10 text-blue-600 border-blue-200',
  code: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  download: 'bg-amber-500/10 text-amber-600 border-amber-200',
  quiz: 'bg-purple-500/10 text-purple-600 border-purple-200',
  exercise: 'bg-cyan-500/10 text-cyan-600 border-cyan-200',
}

const materialLabels = {
  video: 'Video Lesson',
  article: 'Reading Material',
  code: 'Code Exercise',
  download: 'Downloadable Resource',
  quiz: 'Knowledge Check',
  exercise: 'Hands-on Practice',
}

interface MaterialCardProps {
  material: Material
  index: number
}

export function MaterialCard({ material, index }: MaterialCardProps) {
  const Icon = materialIcons[material.type]
  const colorClass = materialColors[material.type]
  const label = materialLabels[material.type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={cn(
        'group relative rounded-xl border bg-card p-4 transition-all duration-300',
        material.isLocked
          ? 'opacity-60 cursor-not-allowed'
          : 'hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 cursor-pointer'
      )}
    >
      {/* Completion indicator */}
      {material.isCompleted && (
        <div className="absolute -top-2 -right-2 rounded-full bg-emerald-500 p-1 shadow-lg">
          <Check className="h-3 w-3 text-white" />
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110',
            colorClass
          )}
        >
          {material.isLocked ? (
            <Lock className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Icon className="h-5 w-5" />
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span
              className={cn(
                'rounded-full px-2 py-0.5 text-xs font-medium',
                colorClass
              )}
            >
              {label}
            </span>
          </div>
          <h4 className="mb-1 font-semibold text-foreground text-balance">
            {material.title}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {material.description}
          </p>

          {/* Meta info */}
          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            {material.duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{material.duration}</span>
              </div>
            )}
            {material.size && (
              <div className="flex items-center gap-1">
                <HardDrive className="h-3.5 w-3.5" />
                <span>{material.size}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action indicator */}
        {!material.isLocked && (
          <div className="flex h-full items-center">
            <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        )}
      </div>

      {/* Progress bar for videos */}
      {material.type === 'video' && material.isCompleted && (
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full rounded-full bg-emerald-500" />
        </div>
      )}
    </motion.div>
  )
}
