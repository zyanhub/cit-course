import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/proxy'

async function proxy(request: NextRequest) {
  return updateSession(request)
}

export { proxy }
export default proxy

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
