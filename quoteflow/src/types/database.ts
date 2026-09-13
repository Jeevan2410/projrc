// Database type definitions for QuoteFlow

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          phone: string | null
          organization_id: string | null
          role: 'owner' | 'admin' | 'manager' | 'staff' | 'viewer'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          organization_id?: string | null
          role?: 'owner' | 'admin' | 'manager' | 'staff' | 'viewer'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          organization_id?: string | null
          role?: 'owner' | 'admin' | 'manager' | 'staff' | 'viewer'
          created_at?: string
          updated_at?: string
        }
      }
      organizations: {
        Row: {
          id: string
          name: string
          slug: string
          industry: string | null
          subscription_plan: 'free' | 'starter' | 'growth' | 'business'
          subscription_status: 'active' | 'cancelled' | 'past_due' | 'trialing'
          trial_ends_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          industry?: string | null
          subscription_plan?: 'free' | 'starter' | 'growth' | 'business'
          subscription_status?: 'active' | 'cancelled' | 'past_due' | 'trialing'
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          industry?: string | null
          subscription_plan?: 'free' | 'starter' | 'growth' | 'business'
          subscription_status?: 'active' | 'cancelled' | 'past_due' | 'trialing'
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          organization_id: string
          name: string
          email: string | null
          phone: string | null
          company: string | null
          gst_number: string | null
          status: 'active' | 'inactive' | 'archived'
          total_quotes: number
          total_jobs: number
          total_revenue: number
          last_contacted_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          email?: string | null
          phone?: string | null
          company?: string | null
          gst_number?: string | null
          status?: 'active' | 'inactive' | 'archived'
          total_quotes?: number
          total_jobs?: number
          total_revenue?: number
          last_contacted_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          company?: string | null
          gst_number?: string | null
          status?: 'active' | 'inactive' | 'archived'
          total_quotes?: number
          total_jobs?: number
          total_revenue?: number
          last_contacted_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      quotes: {
        Row: {
          id: string
          organization_id: string
          customer_id: string
          quote_number: string
          title: string
          description: string | null
          status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected' | 'expired'
          subtotal: number
          tax_rate: number
          tax_amount: number
          discount: number
          total: number
          valid_until: string | null
          notes: string | null
          terms: string | null
          sent_at: string | null
          viewed_at: string | null
          accepted_at: string | null
          rejected_at: string | null
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          customer_id: string
          quote_number: string
          title: string
          description?: string | null
          status?: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected' | 'expired'
          subtotal?: number
          tax_rate?: number
          tax_amount?: number
          discount?: number
          total?: number
          valid_until?: string | null
          notes?: string | null
          terms?: string | null
          sent_at?: string | null
          viewed_at?: string | null
          accepted_at?: string | null
          rejected_at?: string | null
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          customer_id?: string
          quote_number?: string
          title?: string
          description?: string | null
          status?: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected' | 'expired'
          subtotal?: number
          tax_rate?: number
          tax_amount?: number
          discount?: number
          total?: number
          valid_until?: string | null
          notes?: string | null
          terms?: string | null
          sent_at?: string | null
          viewed_at?: string | null
          accepted_at?: string | null
          rejected_at?: string | null
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      quote_items: {
        Row: {
          id: string
          quote_id: string
          description: string
          quantity: number
          unit_price: number
          amount: number
          created_at: string
        }
        Insert: {
          id?: string
          quote_id: string
          description: string
          quantity: number
          unit_price: number
          amount: number
          created_at?: string
        }
        Update: {
          id?: string
          quote_id?: string
          description?: string
          quantity?: number
          unit_price?: number
          amount?: number
          created_at?: string
        }
      }
      jobs: {
        Row: {
          id: string
          organization_id: string
          quote_id: string | null
          customer_id: string
          job_number: string
          title: string
          description: string | null
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          start_date: string | null
          end_date: string | null
          assigned_to: string | null
          total: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          quote_id?: string | null
          customer_id: string
          job_number: string
          title: string
          description?: string | null
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          start_date?: string | null
          end_date?: string | null
          assigned_to?: string | null
          total?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          quote_id?: string | null
          customer_id?: string
          job_number?: string
          title?: string
          description?: string | null
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          start_date?: string | null
          end_date?: string | null
          assigned_to?: string | null
          total?: number
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          organization_id: string
          job_id: string | null
          customer_id: string
          invoice_number: string
          status: 'draft' | 'sent' | 'paid' | 'partial' | 'overdue' | 'cancelled'
          subtotal: number
          tax_rate: number
          tax_amount: number
          discount: number
          total: number
          amount_paid: number
          amount_due: number
          due_date: string | null
          issued_date: string
          notes: string | null
          sent_at: string | null
          paid_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          job_id?: string | null
          customer_id: string
          invoice_number: string
          status?: 'draft' | 'sent' | 'paid' | 'partial' | 'overdue' | 'cancelled'
          subtotal?: number
          tax_rate?: number
          tax_amount?: number
          discount?: number
          total?: number
          amount_paid?: number
          amount_due?: number
          due_date?: string | null
          issued_date?: string
          notes?: string | null
          sent_at?: string | null
          paid_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          job_id?: string | null
          customer_id?: string
          invoice_number?: string
          status?: 'draft' | 'sent' | 'paid' | 'partial' | 'overdue' | 'cancelled'
          subtotal?: number
          tax_rate?: number
          tax_amount?: number
          discount?: number
          total?: number
          amount_paid?: number
          amount_due?: number
          due_date?: string | null
          issued_date?: string
          notes?: string | null
          sent_at?: string | null
          paid_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          organization_id: string
          invoice_id: string
          amount: number
          payment_method: 'razorpay' | 'cash' | 'bank_transfer' | 'cheque' | 'other'
          razorpay_payment_id: string | null
          razorpay_order_id: string | null
          razorpay_signature: string | null
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          paid_at: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          invoice_id: string
          amount: number
          payment_method?: 'razorpay' | 'cash' | 'bank_transfer' | 'cheque' | 'other'
          razorpay_payment_id?: string | null
          razorpay_order_id?: string | null
          razorpay_signature?: string | null
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          paid_at?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          invoice_id?: string
          amount?: number
          payment_method?: 'razorpay' | 'cash' | 'bank_transfer' | 'cheque' | 'other'
          razorpay_payment_id?: string | null
          razorpay_order_id?: string | null
          razorpay_signature?: string | null
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          paid_at?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      subscriptions: {
        Row: {
          id: string
          organization_id: string
          razorpay_subscription_id: string | null
          razorpay_customer_id: string | null
          plan: 'free' | 'starter' | 'growth' | 'business'
          status: 'active' | 'cancelled' | 'past_due' | 'trialing'
          current_period_start: string | null
          current_period_end: string | null
          trial_start: string | null
          trial_end: string | null
          cancelled_at: string | null
          cancel_reason: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          razorpay_subscription_id?: string | null
          razorpay_customer_id?: string | null
          plan?: 'free' | 'starter' | 'growth' | 'business'
          status?: 'active' | 'cancelled' | 'past_due' | 'trialing'
          current_period_start?: string | null
          current_period_end?: string | null
          trial_start?: string | null
          trial_end?: string | null
          cancelled_at?: string | null
          cancel_reason?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          razorpay_subscription_id?: string | null
          razorpay_customer_id?: string | null
          plan?: 'free' | 'starter' | 'growth' | 'business'
          status?: 'active' | 'cancelled' | 'past_due' | 'trialing'
          current_period_start?: string | null
          current_period_end?: string | null
          trial_start?: string | null
          trial_end?: string | null
          cancelled_at?: string | null
          cancel_reason?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
