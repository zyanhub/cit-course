'use client'

import { motion } from 'framer-motion'
import {
  Play,
  FileText,
  Code2,
  Download,
  HelpCircle,
  Dumbbell,
} from 'lucide-react'
import type { Course } from '@/lib/course-data'

interface MaterialStatsProps {
  course: Course
}

const materialTypeConfig = {
  video: { icon: Play, label: 'Videos', color: 'bg-rose-500/10 text-rose-600' },
  article: { icon: FileText, label: 'Articles', color: 'bg-blue-500/10 text-blue-600' },
  code: { icon: Code2, label: 'Code Labs', color: 'bg-emerald-500/10 text-emerald-600' },
  download: { icon: Download, label: 'Downloads', color: 'bg-amber-500/10 text-amber-600' },
  quiz: { icon: HelpCircle, label: 'Quizzes', color: 'bg-purple-500/10 text-purple-600' },
  exercise: { icon: Dumbbell, label: 'Exercises', color: 'bg-cyan-500/10 text-cyan-600' },
}

export function MaterialStats({ course }: MaterialStatsProps) {
  // Count materials by type
  const materialCounts = course.chapters.reduce(
    (acc, chapter) => {
      chapter.subtopics.forEach(subtopic => {
        subtopic.materials.forEach(material => {
          acc[material.type] = (acc[material.type] || 0) + 1
        })
      })
      return acc
    },
    {} as Record<string, number>
  )

  const totalMaterials = Object.values(materialCounts).reduce((a, b) => a + b, 0)

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Course Materials</h3>
        <span className="text-sm text-muted-foreground">
          {totalMaterials} total resources
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {Object.entries(materialTypeConfig).map(([type, config], index) => {
          const count = materialCounts[type] || 0
          const Icon = config.icon

          return (
            <motion.div
              key={type}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border bg-background p-4 text-center transition-shadow hover:shadow-md"
            >
              <div
                className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg ${config.color}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-foreground">{count}</div>
              <div className="text-xs text-muted-foreground">{config.label}</div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
