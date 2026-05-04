'use client'

import { motion } from 'framer-motion'

export function ContentSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div className="border-b pb-6">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-4 w-20 rounded bg-muted" />
          <div className="h-4 w-4 rounded bg-muted" />
          <div className="h-4 w-24 rounded bg-muted" />
        </div>
        <div className="h-10 w-3/4 rounded bg-muted" />
      </div>

      {/* Explanation skeleton */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-muted" />
          <div className="h-6 w-32 rounded bg-muted" />
        </div>
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-4/5 rounded bg-muted" />
        </div>
      </div>

      {/* Code example skeleton */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-muted" />
          <div className="h-6 w-36 rounded bg-muted" />
        </div>
        <div className="rounded-xl border bg-slate-950 p-4">
          <div className="space-y-2">
            <div className="h-4 w-1/3 rounded bg-slate-800" />
            <div className="h-4 w-2/3 rounded bg-slate-800" />
            <div className="h-4 w-1/2 rounded bg-slate-800" />
            <div className="h-4 w-3/4 rounded bg-slate-800" />
            <div className="h-4 w-2/5 rounded bg-slate-800" />
          </div>
        </div>
      </div>

      {/* Key points skeleton */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-muted" />
          <div className="h-6 w-28 rounded bg-muted" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border bg-card p-4">
              <div className="h-6 w-6 shrink-0 rounded-full bg-muted" />
              <div className="h-4 w-full rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SidebarSkeleton() {
  return (
    <div className="sticky top-24 h-[calc(100vh-8rem)] overflow-hidden rounded-2xl border bg-card p-4">
      <div className="mb-4 h-6 w-32 rounded bg-muted animate-pulse" />
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl p-3 animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="h-8 w-8 shrink-0 rounded-lg bg-muted" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 rounded bg-muted" />
              <div className="h-1.5 w-full rounded-full bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
