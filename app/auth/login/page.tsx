'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    const { error: signInError } = await createClient().auth.signInWithPassword({ email, password })
    if (signInError) {
      setError('Invalid email or password.')
      setLoading(false)
      return
    }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Back to home</Link>
        <h1 className="mt-6 text-2xl font-bold">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to save lesson progress across devices.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border bg-background px-3 py-2" /></label>
          <label className="block text-sm font-medium">Password<input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-lg border bg-background px-3 py-2" /></label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">{loading ? 'Signing in…' : 'Sign in'}</Button>
        </form>
        <p className="mt-5 text-sm text-muted-foreground">Need an account? <Link href="/auth/sign-up" className="font-medium text-primary hover:underline">Create one</Link></p>
      </div>
    </main>
  )
}
