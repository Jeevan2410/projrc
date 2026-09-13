export const siteConfig = {
  name: "QuoteFlow",
  description: "Turn every enquiry into a quote, every quote into a job, and every job into paid revenue.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["quote", "invoice", "SMB", "SaaS", "revenue", "follow-up"],
  author: "QuoteFlow Team",
}

export const pricingPlans = {
  free: {
    name: "Free",
    price: 0,
    currency: "INR",
    interval: "month",
    features: [
      "25 customers",
      "25 quotes/month",
      "Basic dashboard",
      "Basic follow-ups",
      "PDF quotations",
      "Basic reports",
    ],
    limits: {
      customers: 25,
      quotesPerMonth: 25,
    },
  },
  starter: {
    name: "Starter",
    price: 499,
    currency: "INR",
    interval: "month",
    features: [
      "300 customers",
      "500 quotes/month",
      "Automated reminders",
      "Quote templates",
      "Invoice generation",
      "Customer history",
      "Analytics",
    ],
    limits: {
      customers: 300,
      quotesPerMonth: 500,
    },
  },
  growth: {
    name: "Growth",
    price: 999,
    currency: "INR",
    interval: "month",
    features: [
      "Unlimited customers",
      "Unlimited quotes",
      "Automation",
      "Team members",
      "Advanced analytics",
      "Industry templates",
      "AI assistance",
      "Custom branding",
      "Export",
    ],
    limits: {
      customers: -1, // unlimited
      quotesPerMonth: -1,
    },
  },
  business: {
    name: "Business",
    price: 1999,
    currency: "INR",
    interval: "month",
    features: [
      "Multi-user",
      "Role-based access",
      "Advanced automation",
      "Multiple business locations",
      "API access",
      "Priority features",
      "White-label quotation branding",
    ],
    limits: {
      customers: -1,
      quotesPerMonth: -1,
    },
  },
} as const

export const QUOTE_STATUS = {
  draft: "Draft",
  sent: "Sent",
  viewed: "Viewed",
  accepted: "Accepted",
  rejected: "Rejected",
  expired: "Expired",
} as const

export const INVOICE_STATUS = {
  draft: "Draft",
  sent: "Sent",
  paid: "Paid",
  partial: "Partial",
  overdue: "Overdue",
  cancelled: "Cancelled",
} as const

export const JOB_STATUS = {
  pending: "Pending",
  in_progress: "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
} as const

export const USER_ROLES = {
  owner: "Owner",
  admin: "Admin",
  manager: "Manager",
  staff: "Staff",
  viewer: "Viewer",
} as const
