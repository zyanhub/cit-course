import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Trophy, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Course Platform Demo
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
          Computer Information Technology Learning Platform
        </h1>

        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Explore the comprehensive course detail page with rich learning materials, progress tracking, and interactive content.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Link href="/course/cit-101">
            <Button size="lg" className="gap-2">
              View Course Detail
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 rounded-2xl border bg-card p-6">
          <div className="text-center">
            <BookOpen className="mx-auto mb-2 h-6 w-6 text-primary" />
            <div className="text-2xl font-bold text-foreground">5</div>
            <div className="text-sm text-muted-foreground">Chapters</div>
          </div>
          <div className="text-center">
            <Trophy className="mx-auto mb-2 h-6 w-6 text-amber-500" />
            <div className="text-2xl font-bold text-foreground">48</div>
            <div className="text-sm text-muted-foreground">Lessons</div>
          </div>
          <div className="text-center">
            <Users className="mx-auto mb-2 h-6 w-6 text-emerald-500" />
            <div className="text-2xl font-bold text-foreground">12.8K</div>
            <div className="text-sm text-muted-foreground">Students</div>
          </div>
        </div>
      </div>
    </main>
  )
}
