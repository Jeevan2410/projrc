import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin

  if (code) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    
    try {
      await supabase.auth.exchangeCodeForSession(code)
      
      // Get the user to create/update profile
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (!userError && user) {
        // Check if profile exists
        const { data: profile } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single()

        if (!profile) {
          // Create profile if it doesn't exist
          await supabase.from('users').insert({
            id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name,
            company_name: user.user_metadata?.company_name,
            role: 'owner',
            subscription_status: 'trialing',
          })
        }
      }

      return NextResponse.redirect(`${origin}/dashboard`)
    } catch (error) {
      console.error('Auth callback error:', error)
      return NextResponse.redirect(`${origin}/auth/login?error=auth_failed`)
    }
  }

  return NextResponse.redirect(`${origin}/auth/login`)
}
