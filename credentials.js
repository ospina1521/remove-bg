export const credentials = {
  supabase: {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  }
}
