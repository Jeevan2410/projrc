# QuoteFlow

**Turn every enquiry into a quote, every quote into a job, and every job into paid revenue.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange)](https://workers.cloudflare.com/)

## Overview

QuoteFlow is a production-ready SaaS platform designed for small and medium service businesses to manage the complete quote-to-cash workflow. It helps businesses recover lost revenue by ensuring no customer enquiry or quote falls through the cracks.

### Tagline

**"The revenue follow-up system for businesses that still run on WhatsApp and Excel."**

## 🎯 Core Problem Solved

Small service businesses lose revenue because they lack systematic follow-up. QuoteFlow addresses this workflow:

```
Customer Enquiry → Customer Details → Requirement → Quote → Quote Sent → 
Follow-up → Accepted/Rejected → Job Created → Work Tracked → Invoice → 
Payment → Review/Referral → Customer Retained
```

### Key Differentiator: Revenue Recovery

QuoteFlow actively identifies opportunities where businesses may lose money:
- Quotes sent but not followed up
- High-value enquiries with no follow-up
- Quotes viewed but not accepted
- Jobs completed but invoices not sent
- Invoices unpaid past due date
- Customers inactive for extended periods
- Rental equipment due for return
- Maintenance contracts nearing expiry

## 🚀 Quick Start

### Prerequisites

- Node.js (latest LTS)
- npm or pnpm
- Git
- Cloudflare account (for Workers deployment)
- Supabase account (for database & auth)

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd quoteflow

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your credentials

# Run setup script
npm run setup

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run typecheck` | Run TypeScript validation |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run db:migrate` | Run database migrations |
| `npm run db:seed` | Seed demo data |
| `npm run doctor` | Diagnose environment issues |
| `npm run check` | Run all validations |
| `npm run setup` | Full environment setup |

## 📁 Project Structure

```
quoteflow/
├── src/                      # Source code
│   ├── app/                  # Next.js App Router
│   ├── components/           # React components
│   ├── lib/                  # Utilities & helpers
│   ├── hooks/                # Custom hooks
│   ├── types/                # TypeScript types
│   └── styles/               # Global styles
├── database/                 # Database migrations & schema
├── docs/                     # Documentation
├── scripts/                  # Build & setup scripts
├── tests/                    # Unit & integration tests
├── e2e/                      # End-to-end tests
├── .env.example              # Environment variables template
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS config
├── wrangler.jsonc            # Cloudflare Workers config
├── PROGRESS.md               # Build progress tracker
└── TODO.md                   # Remaining work tracker
```

## 🏗️ Architecture

### Technology Stack

**Frontend:**
- Next.js 16 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS
- shadcn/ui components
- Lucide icons
- React Hook Form
- Zod validation
- TanStack Query
- Recharts

**Backend & Infrastructure:**
- Cloudflare Workers (runtime)
- vinext (Next.js adapter for Workers)
- Wrangler (CLI & local dev)

**Database:**
- Supabase PostgreSQL
- Row Level Security (RLS)
- Supabase Auth
- Supabase Storage

**Integrations (Abstracted):**
- Email: Resend
- Payments: Razorpay
- Bot Protection: Cloudflare Turnstile
- AI: Provider-agnostic
- Storage: Supabase (R2 ready)

### Multi-Tenancy

QuoteFlow uses organization-based multi-tenancy with strict isolation:
- Every record linked to `organization_id`
- Row Level Security policies enforce isolation
- Role-based access control (owner, admin, manager, staff, viewer)
- Users can never access another organization's data

## 📦 Features

### Core Modules

1. **Dashboard** - Business overview with actionable insights
2. **Leads** - Kanban board and table views for lead management
3. **Customers** - Complete CRM with timeline and history
4. **Quotes** - Professional quote builder with templates
5. **Public Quotes** - Secure shareable quote pages
6. **Jobs** - Track work from quote acceptance to completion
7. **Invoices** - Generate and send professional invoices
8. **Payments** - Record and track payments
9. **Revenue Recovery** - Identify lost revenue opportunities
10. **Automations** - Workflow automation builder
11. **Rentals** - Asset rental management
12. **Maintenance** - Service scheduling and tracking
13. **Products & Services** - Catalog management
14. **Analytics** - Business intelligence and reports
15. **Team** - User and permission management
16. **Settings** - Configuration and customization

### Signature Features

- **Money Left on the Table** - Dashboard showing recoverable revenue
- **Today** - Daily action prioritization
- **Business Health Score** - Transparent health metrics
- **AI Message Generator** - Follow-up message suggestions
- **Command Palette** (Ctrl+K) - Quick actions navigation

## 💰 Pricing Tiers

| Plan | Price | Customers | Quotes/Month | Key Features |
|------|-------|-----------|--------------|--------------|
| Free | ₹0 | 25 | 25 | Basic dashboard, follow-ups, PDF quotes |
| Starter | ₹499/mo | 300 | 500 | Automated reminders, templates, invoices |
| Growth | ₹999/mo | Unlimited | Unlimited | AI assistance, team, advanced analytics |
| Business | ₹1,999/mo | Unlimited | Unlimited | White-label, API, multi-location |

## 🔐 Security

- Supabase Row Level Security on all tables
- Server-side authorization
- Input validation with Zod schemas
- CSRF-safe architecture
- Rate limiting
- Secure headers & CSP
- Cloudflare Turnstile for bot protection
- No client-side exposure of service keys
- Comprehensive audit logging

## 🌍 Environment Variables

See `.env.example` for complete list:

```bash
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key

# Email (Resend)
RESEND_API_KEY=your_api_key

# Payments (Razorpay)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

# AI (Optional)
AI_API_KEY=your_ai_key
AI_PROVIDER=openai

# Storage (Optional R2)
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret
R2_BUCKET_NAME=your_bucket

# Observability
SENTRY_DSN=your_sentry_dsn
ANALYTICS_KEY=your_analytics_key
```

## 📝 Documentation

- [Architecture](./docs/architecture.md) - System design and decisions
- [Database Schema](./docs/database.md) - Table structures and relationships
- [Setup Guide](./docs/setup.md) - Detailed setup instructions
- [Deployment](./docs/deployment.md) - Production deployment guide
- [API Reference](./docs/api.md) - API endpoint documentation
- [Security](./docs/security.md) - Security practices and policies
- [Contributing](./CONTRIBUTING.md) - How to contribute

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run E2E tests
npm run test:e2e

# Run with coverage
npm run test:coverage
```

Test coverage includes:
- Unit tests for utilities and calculations
- Integration tests for API endpoints
- RLS policy tests
- End-to-end tests for critical workflows

## 🚢 Deployment

### Cloudflare Workers

```bash
# Preview deployment
npm run deploy:preview

# Production deployment
npm run deploy:prod
```

### Supabase Migrations

```bash
# Apply migrations
npm run db:migrate

# Seed demo data
npm run db:seed
```

See [Deployment Guide](./docs/deployment.md) for detailed instructions.

## 🎯 Target Industries

QuoteFlow is industry-agnostic with template support for:
- Equipment rental
- Forklift rental & maintenance
- Generator rental
- HVAC/AC service
- Plumbing
- Electrical contractors
- Fabrication workshops
- Printing businesses
- Pest control
- Cleaning services
- Computer/mobile repair
- CCTV installation
- Solar installation
- Auto service
- And many more...

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🆘 Support

- Documentation: `/docs`
- Issues: GitHub Issues
- Security: See [SECURITY.md](./SECURITY.md)

## 📈 Roadmap

Current Status: **Phase 1 - Project Foundation** (In Progress)

See [TODO.md](./TODO.md) for complete roadmap and [PROGRESS.md](./PROGRESS.md) for what's been completed.

---

**Built with ❤️ for small businesses**

*QuoteFlow helps you recover revenue that would otherwise be lost because nobody followed up.*
