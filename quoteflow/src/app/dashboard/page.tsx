import { createClient as serverCreateClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardPage() {
  const supabase = await serverCreateClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/auth/signin')
  }
  
  // Fetch user's organization
  const { data: organization } = await supabase
    .from('organizations')
    .select('*')
    .eq('owner_id', user.id)
    .single()
  
  // Fetch recent quotes
  const { data: quotes } = await supabase
    .from('quotes')
    .select('*')
    .eq('organization_id', organization?.id || '')
    .order('created_at', { ascending: false })
    .limit(5)
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="border-b bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">QuoteFlow</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-300">{user.email}</span>
            <form action="/auth/signout" method="POST">
              <Button variant="outline" size="sm" type="submit">Sign Out</Button>
            </form>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back! Manage your quotes and customers from here.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Quotes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{quotes?.length || 0}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {quotes?.filter(q => q.status === 'draft' || q.status === 'sent').length || 0}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accepted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {quotes?.filter(q => q.status === 'accepted').length || 0}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Organization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-medium truncate">
                {organization?.name || 'No Organization'}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Create Quote</CardTitle>
              <CardDescription>Generate a new quote for your customer</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/quotes/new">
                <Button className="w-full">Create Quote</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Manage Customers</CardTitle>
              <CardDescription>Add and manage your customer database</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/customers">
                <Button variant="outline" className="w-full">View Customers</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Products & Services</CardTitle>
              <CardDescription>Manage your product catalog</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard/products">
                <Button variant="outline" className="w-full">View Products</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        {quotes && quotes.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Recent Quotes</h3>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quote #</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {quotes.map((quote) => (
                        <tr key={quote.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="px-6 py-4 text-sm font-medium">{quote.quote_number}</td>
                          <td className="px-6 py-4 text-sm">{quote.customer_id}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              quote.status === 'accepted' ? 'bg-green-100 text-green-800' :
                              quote.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              quote.status === 'sent' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {quote.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">₹{quote.total.toLocaleString()}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(quote.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
