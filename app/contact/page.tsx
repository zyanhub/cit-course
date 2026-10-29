import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-sm font-medium text-primary">Contact</p>
        <h1 className="text-4xl font-bold tracking-tight">Have a question about CIT Learning?</h1>
        <p className="text-lg leading-8 text-muted-foreground">For course feedback, corrections, or collaboration inquiries, contact the Dev Hub team. We welcome suggestions that make these free learning resources clearer and more useful.</p>
        <a className="inline-flex text-lg font-medium text-primary underline underline-offset-4" href="mailto:hello@devhub.example">hello@devhub.example</a>
        <div><Link href="/"><Button>Back to home</Button></Link></div>
      </div>
    </main>
  )
}
