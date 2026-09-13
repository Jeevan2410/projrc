'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ConfirmPage() {
  const [checking, setChecking] = useState(true)
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    // Check if user is already logged in (already confirmed)
    const checkAuth = async () => {
      try {
        const { createBrowserClient } = await import('@/lib/supabase/index')
        const supabase = createBrowserClient()
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          setConfirmed(true)
        }
      } catch (error) {
        console.error('Error checking auth:', error)
      } finally {
        setChecking(false)
      }
    }

    checkAuth()
  }, [])

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Checking confirmation status...</CardTitle>
          </CardHeader>
        </Card>
      </div>
    )
  }

  if (confirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-green-600">Email Confirmed!</CardTitle>
            <CardDescription className="text-center">
              Your email has been successfully confirmed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Check your email</CardTitle>
          <CardDescription className="text-center">
            We've sent you a confirmation link. Please click the link in your email to confirm your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Didn't receive the email? Check your spam folder or{' '}
            <button 
              onClick={() => window.location.reload()}
              className="text-blue-600 hover:underline"
            >
              try again
            </button>
          </div>
          <Button asChild variant="outline" className="w-full">
            <Link href="/auth/login">Back to Login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
