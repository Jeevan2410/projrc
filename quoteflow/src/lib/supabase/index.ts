// Re-export based on environment
// For Client Components
export { createBrowserClient } from './client'

// For Server Components (dynamic import to avoid bundling issues)
export async function getServerClient() {
  const { createClient } = await import('./server')
  return createClient()
}

export type * from './types'
