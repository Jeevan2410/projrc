import Link from "next/link"
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, pricingPlans } from "@/config"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Turn every enquiry into a quote,
            <br />
            <span className="text-primary">every quote into paid revenue</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The revenue follow-up system for businesses that still run on WhatsApp and Excel.
            Never lose a deal to forgotten follow-ups again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to grow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From first enquiry to final payment, QuoteFlow handles it all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast Quotes"
              description="Create professional quotes in seconds. Customize templates for your industry."
            />
            <FeatureCard
              icon={Shield}
              title="Never Miss a Follow-up"
              description="Automated reminders ensure no opportunity slips through the cracks."
            />
            <FeatureCard
              icon={BarChart3}
              title="Revenue Insights"
              description="Track conversion rates, identify opportunities, and grow your business."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Quote to Cash"
              description="Seamlessly convert quotes to jobs, jobs to invoices, invoices to payments."
            />
            <FeatureCard
              icon={Zap}
              title="Smart Automation"
              description="Set up workflows that work for you while you focus on your business."
            />
            <FeatureCard
              icon={Shield}
              title="Professional Branding"
              description="Custom-branded quotes and invoices that impress your customers."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start free, upgrade as you grow. No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.values(pricingPlans).map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of small businesses already using QuoteFlow to recover lost revenue.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border">
      <Icon className="h-10 w-10 text-primary mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

interface PricingPlan {
  name: string
  price: number
  currency: string
  interval: string
  features: readonly string[]
  limits: {
    customers: number
    quotesPerMonth: number
  }
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isGrowth = plan.name === 'Growth'
  
  return (
    <div className={`rounded-lg border p-6 ${isGrowth ? 'border-primary shadow-md' : ''}`}>
      <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">₹{plan.price}</span>
        <span className="text-muted-foreground">/{plan.interval}</span>
      </div>
      <ul className="space-y-2 mb-6">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm">
            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full" 
        variant={isGrowth ? 'default' : 'outline'}
        href={`/signup?plan=${plan.name.toLowerCase()}`}
        asChild
      >
        <span>
          {plan.price === 0 ? 'Get Started' : 'Subscribe'}
        </span>
      </Button>
    </div>
  )
}
