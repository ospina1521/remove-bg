import { ENV } from '#/env'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://wtfzbttwmkofjtobyckk.supabase.co',
  // credentials.supabase.supabaseUrl,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0ZnpidHR3bWtvZmp0b2J5Y2trIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzE3NzEzNSwiZXhwIjoxOTgyNzUzMTM1fQ.sWxjV2ujMBOEn2wYsvx9cHyHSchoUKD6L92CKD3_3pg'
  // credentials.supabase.supabaseKey
)
