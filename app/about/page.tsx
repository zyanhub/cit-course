import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-sm font-medium text-primary">About Dev Hub</p>
        <h1 className="text-4xl font-bold tracking-tight">Practical IT learning, freely available.</h1>
        <p className="text-lg leading-8 text-muted-foreground">CIT Learning is an educational resource built by Dev Hub to make core computer information technology concepts easier to understand. The course moves from foundational hardware and operating systems to networking, programming, and modern development skills.</p>
        <p className="text-lg leading-8 text-muted-foreground">Everything is organized into five chapters and twenty-five lessons so learners can progress at a clear, manageable pace.</p>
        <Link href="/"><Button>Back to home</Button></Link>
      </div>
    </main>
  )
}
