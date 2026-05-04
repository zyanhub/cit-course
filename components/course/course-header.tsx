'use client'

import { motion } from 'framer-motion'
import {
  Star,
  Users,
  Clock,
  Trophy,
  Play,
  BookOpen,
  Award,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import type { Course } from '@/lib/course-data'

interface CourseHeaderProps {
  course: Course
}

export function CourseHeader({ course }: CourseHeaderProps) {
  const overallProgress = Math.round(
    (course.completedLessons / course.totalLessons) * 100
  )

  return (
    <header className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative p-6 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Left content */}
          <div className="flex-1">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {course.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
            >
              {course.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-lg text-muted-foreground text-pretty"
            >
              {course.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex flex-wrap items-center gap-4 text-sm"
            >
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-muted-foreground">(2,847 reviews)</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{course.studentsEnrolled.toLocaleString()} students</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <Badge variant="outline" className="rounded-full">
                {course.level}
              </Badge>
            </motion.div>

            {/* Instructor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 text-lg font-semibold text-primary">
                  {course.instructor.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground">{course.instructor}</div>
                <div className="text-sm text-muted-foreground">Course Instructor</div>
              </div>
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full shrink-0 rounded-2xl border bg-card p-6 shadow-lg lg:w-80"
          >
            {/* Progress */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-foreground">Your Progress</span>
                <span className="text-2xl font-bold text-primary">{overallProgress}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <p className="mt-2 text-sm text-muted-foreground">
                {course.completedLessons} of {course.totalLessons} lessons completed
              </p>
            </div>

            {/* Stats grid */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-muted/50 p-3 text-center">
                <BookOpen className="mx-auto mb-1 h-5 w-5 text-primary" />
                <div className="text-lg font-bold text-foreground">{course.chapters.length}</div>
                <div className="text-xs text-muted-foreground">Chapters</div>
              </div>
              <div className="rounded-xl bg-muted/50 p-3 text-center">
                <Trophy className="mx-auto mb-1 h-5 w-5 text-amber-500" />
                <div className="text-lg font-bold text-foreground">{course.xpReward}</div>
                <div className="text-xs text-muted-foreground">XP Reward</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button className="w-full gap-2" size="lg">
                <Play className="h-4 w-4" />
                Continue Learning
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Award className="h-4 w-4" />
                View Certificate
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
