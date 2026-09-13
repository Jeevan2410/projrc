import { createClient as serverCreateClient } from '@/lib/supabase/server'
import { User } from '@/lib/supabase/types'

export async function getCurrentUser(): Promise<User | null> {
  try {
    const supabase = await serverCreateClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
      return null
    }

    // Fetch additional user metadata from your users table
    const { data: userProfile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileError) {
      // If profile doesn't exist yet, return basic auth user
      return {
        id: user.id,
        email: user.email || '',
        full_name: user.user_metadata?.full_name || null,
        avatar_url: user.user_metadata?.avatar_url || null,
        role: 'member',
        organization_id: null,
        created_at: user.created_at,
        updated_at: user.updated_at,
      } as User
    }

    return userProfile as User
  } catch (error) {
    console.error('Error fetching current user:', error)
    return null
  }
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Unauthorized')
  }
  return user
}
