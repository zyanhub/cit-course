'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { courseData, calculateChapterProgress, type Course } from './course-data'
import { createClient } from './supabase/client'

interface ProgressContextType { course: Course; markPartComplete: (chapterId: string, partId: string) => Promise<void>; getChapterProgress: (chapterId: string) => number; isChapterUnlocked: (chapterIndex: number) => boolean; getOverallProgress: () => number }
const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [course, setCourse] = useState<Course>(() => ({ ...courseData, chapters: courseData.chapters.map((chapter, index) => ({ ...chapter, isLocked: index > 0 })) }))
  const [userId, setUserId] = useState<string | null>(null)
  useEffect(() => { const supabase = createClient(); supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null)); supabase.auth.onAuthStateChange((_event, session) => setUserId(session?.user?.id ?? null)); return undefined }, [])
  useEffect(() => { if (!userId) return; const load = async () => { const { data } = await createClient().from('lesson_progress').select('lesson_id').eq('user_id', userId); const ids = new Set((data ?? []).map(row => row.lesson_id)); setCourse(prev => { const chapters = prev.chapters.map(chapter => ({ ...chapter, parts: chapter.parts.map(part => ({ ...part, isCompleted: ids.has(part.id) })) })); return { ...prev, chapters: chapters.map((chapter, index) => ({ ...chapter, isLocked: index > 0 && !chapters[index - 1].parts.every(part => part.isCompleted) })) } }) }; void load() }, [userId])
  const markPartComplete = useCallback(async (chapterId: string, partId: string) => { setCourse(prev => { const chapters = prev.chapters.map(ch => ch.id === chapterId ? { ...ch, parts: ch.parts.map(p => p.id === partId ? { ...p, isCompleted: true } : p) } : ch); const index = chapters.findIndex(ch => ch.id === chapterId); if (index >= 0 && index < chapters.length - 1 && chapters[index].parts.every(p => p.isCompleted)) chapters[index + 1] = { ...chapters[index + 1], isLocked: false }; return { ...prev, chapters } }); if (userId) await createClient().from('lesson_progress').upsert({ user_id: userId, lesson_id: partId }, { onConflict: 'user_id,lesson_id' }) }, [userId])
  const getChapterProgress = useCallback((id: string) => { const ch = course.chapters.find(c => c.id === id); return ch ? calculateChapterProgress(ch) : 0 }, [course])
  const isChapterUnlocked = useCallback((i: number) => i === 0 || course.chapters[i - 1]?.parts.every(p => p.isCompleted) === true, [course])
  const getOverallProgress = useCallback(() => { const total = course.chapters.reduce((n, c) => n + c.parts.length, 0); const done = course.chapters.reduce((n, c) => n + c.parts.filter(p => p.isCompleted).length, 0); return total ? Math.round(done / total * 100) : 0 }, [course])
  return <ProgressContext.Provider value={{ course, markPartComplete, getChapterProgress, isChapterUnlocked, getOverallProgress }}>{children}</ProgressContext.Provider>
}
export function useProgress() { const context = useContext(ProgressContext); if (!context) throw new Error('useProgress must be used within ProgressProvider'); return context }
