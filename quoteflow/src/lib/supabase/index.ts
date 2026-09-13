// Re-export based on environment
// For Client Components - direct export
export { createBrowserClient } from './client'

// For Server Components - re-export the module, not a function
// This avoids bundling the server module into client components
export type { createClient as ServerCreateClient } from './server'

export type * from './types'
