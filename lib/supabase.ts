/**
 * Supabase Client Configuration
 * 
 * This file provides Supabase client instances for both client-side and server-side operations.
 * - Client-side: Uses browser storage for auth session persistence
 * - Server-side: Uses service role key for admin operations (if needed)
 */

import { createClient } from '@supabase/supabase-js'

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check .env.local')
}

/**
 * Client-side Supabase client
 * Use this in React components, hooks, and client-side pages
 * - Automatically handles auth session persistence in browser
 * - Uses the anon key (safe to expose publicly)
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  }
})

/**
 * Server-side Supabase client (admin)
 * Use this in API routes for privileged operations
 * - Uses service role key (bypasses Row Level Security)
 * - Only use when necessary for admin operations
 * 
 * Note: Service role key must be added manually to .env.local
 */
export const createServerClient = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!serviceRoleKey) {
    console.warn('SUPABASE_SERVICE_ROLE_KEY not found. Some server operations may fail.')
    // Return regular client as fallback
    return createClient(supabaseUrl, supabaseAnonKey)
  }
  
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

/**
 * Database Types
 * Define your database schema types here for type safety
 */
export type CartItem = {
  id: string
  user_id: string
  tour_id: string
  tour_name: string
  price: number
  quantity: number
  image: string
  type: 'tour' | 'study' | 'dokumen' | 'medical'
  created_at: string
}

export type Order = {
  id: string
  user_id: string
  status: 'pending' | 'paid' | 'completed' | 'cancelled'
  total_amount: number
  payment_id?: string
  created_at: string
}

export type OrderItem = {
  id: string
  order_id: string
  tour_id: string
  tour_name: string
  price: number
  quantity: number
  image: string
  type: 'tour' | 'study' | 'dokumen' | 'medical'
}

export type Profile = {
  id: string
  email: string
  name?: string
  created_at: string
}
