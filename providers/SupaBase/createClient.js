import { credentials } from '#/credentials'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  credentials.supabase.supabaseUrl,
  credentials.supabase.supabaseKey
)
