'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

export default function SignUpPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    const { data, error: signUpError } = await createClient().auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? `${window.location.origin}/auth/callback`,
        data: { full_name: fullName },
      },
    })
    if (signUpError) {
      setError(signUpError.message.includes('password') ? 'Choose a stronger password.' : 'Unable to create your account.')
      setLoading(false)
      return
    }
    if (data.session) router.push('/dashboard')
    else setMessage('Check your email to confirm your account, then sign in.')
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Back to home</Link>
        <h1 className="mt-6 text-2xl font-bold">Create your account</h1>
        <p className="mt-2 text-sm text-muted-foreground">Save your learning progress and continue anywhere.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm font-medium">Full name<input required value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-2 w-full rounded-lg border bg-background px-3 py-2" /></label>
          <label className="block text-sm font-medium">Email<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border bg-background px-3 py-2" /></label>
          <label className="block text-sm font-medium">Password<input required minLength={8} type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full rounded-lg border bg-background px-3 py-2" /></label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          {message && <p role="status" className="text-sm text-emerald-600">{message}</p>}
          <Button type="submit" disabled={loading} className="w-full">{loading ? 'Creating account…' : 'Create account'}</Button>
        </form>
        <p className="mt-5 text-sm text-muted-foreground">Already have an account? <Link href="/auth/login" className="font-medium text-primary hover:underline">Sign in</Link></p>
      </div>
    </main>
  )
}
