'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  BookOpen, 
  Code2, 
  Globe, 
  Terminal, 
  Rocket, 
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'

const chapters = [
  {
    number: 1,
    title: 'Introduction to IT',
    description: 'Understanding the fundamentals of Information Technology',
    icon: BookOpen,
    topics: ['What is IT', 'History of Computers', 'Hardware Basics', 'Software Types', 'Input/Output Devices']
  },
  {
    number: 2,
    title: 'Operating Systems',
    description: 'Explore how operating systems manage computer resources',
    icon: Terminal,
    topics: ['What is OS', 'Windows Basics', 'Linux Basics', 'File Management', 'Process Management']
  },
  {
    number: 3,
    title: 'Internet & Networking',
    description: 'Learn how computers communicate and the internet works',
    icon: Globe,
    topics: ['Internet Basics', 'Web Browsers', 'IP & DNS', 'Cyber Security', 'Email & Communication']
  },
  {
    number: 4,
    title: 'Programming Basics',
    description: 'Introduction to programming concepts and coding skills',
    icon: Code2,
    topics: ['What is Programming', 'Variables & Data Types', 'Conditions', 'Loops', 'Functions']
  },
  {
    number: 5,
    title: 'Advanced IT Skills',
    description: 'Build practical skills for modern IT careers',
    icon: Rocket,
    topics: ['Web Development', 'Databases', 'APIs', 'Version Control (Git)', 'Career Paths']
  }
]

const features = [
  { icon: BookOpen, value: '5', label: 'Chapters' },
  { icon: CheckCircle2, value: '25', label: 'Lessons' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">CIT Learning</span>
          </div>
          <Link href="/course/cit-101">
            <Button>Start Learning</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-muted-foreground">Free IT Learning Resources</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl">
              Master Computer Information Technology
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground text-balance md:text-xl">
              This platform is built for educational purposes to provide free IT learning resources. 
              Start your journey from basics to advanced skills.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/course/cit-101">
                <Button size="lg" className="gap-2 px-8">
                  Start Course
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" />
                View Curriculum
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Stats */}
      <section id="overview" className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <feature.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-foreground">{feature.value}</div>
                <div className="text-sm text-muted-foreground">{feature.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section id="courses" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Course Curriculum
            </h2>
            <p className="text-lg text-muted-foreground">
              5 comprehensive chapters with 25 in-depth parts covering all essential IT concepts
            </p>
          </div>

          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <chapter.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Chapter {chapter.number}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {chapter.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="mb-3 text-muted-foreground">{chapter.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {chapter.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/course/cit-101?chapter=ch-${chapter.number}`} className="shrink-0">
                    <Button variant="outline" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                      Start Chapter
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary/5 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Ready to Start Learning?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Begin your IT journey today with our comprehensive free course
            </p>
            <Link href="/course/cit-101">
              <Button size="lg" className="gap-2 px-8">
                <GraduationCap className="h-5 w-5" />
                Start Free Course
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
