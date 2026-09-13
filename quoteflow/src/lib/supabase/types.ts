export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'owner' | 'admin' | 'member' | 'viewer'

export interface User {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  role: UserRole
  organization_id: string | null
  created_at: string
  updated_at: string
}

export interface Organization {
  id: string
  name: string
  slug: string
  owner_id: string
  plan: 'free' | 'starter' | 'growth' | 'business'
  status: 'active' | 'suspended' | 'deleted'
  created_at: string
  updated_at: string
}

export interface OrganizationMember {
  id: string
  organization_id: string
  user_id: string
  role: UserRole
  invited_by: string
  invited_at: string
  accepted_at: string | null
  status: 'pending' | 'active' | 'removed'
}

export interface Invitation {
  id: string
  organization_id: string
  email: string
  role: UserRole
  invited_by: string
  invited_at: string
  expires_at: string
  status: 'pending' | 'accepted' | 'declined' | 'expired'
}

export interface Quote {
  id: string
  organization_id: string
  quote_number: string
  customer_id: string
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected' | 'expired'
  issue_date: string
  expiry_date: string
  subtotal: number
  tax_rate: number
  tax_amount: number
  discount_amount: number
  total: number
  currency: string
  notes: string | null
  terms: string | null
  created_by: string
  created_at: string
  updated_at: string
}

export interface QuoteItem {
  id: string
  quote_id: string
  product_id: string | null
  description: string
  quantity: number
  unit_price: number
  tax_rate: number
  amount: number
  sort_order: number
}

export interface Customer {
  id: string
  organization_id: string
  name: string
  email: string | null
  phone: string | null
  address: string | null
  city: string | null
  state: string | null
  postal_code: string | null
  country: string
  gst_number: string | null
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  organization_id: string
  name: string
  description: string | null
  sku: string | null
  unit_price: number
  tax_rate: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface AuditLog {
  id: string
  organization_id: string
  user_id: string
  action: string
  entity_type: string
  entity_id: string | null
  metadata: Json | null
  ip_address: string | null
  user_agent: string | null
  created_at: string
}
