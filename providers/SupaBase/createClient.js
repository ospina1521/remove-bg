import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://wtfzbttwmkofjtobyckk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0ZnpidHR3bWtvZmp0b2J5Y2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcxNzcxMzUsImV4cCI6MTk4Mjc1MzEzNX0.wQsLcoOLW353-XW9Rh472KWPq9BlgFGl5Nx4gtNAFaI'

)
