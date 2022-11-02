export const credentials = {
  isDev: process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development',
  supabase: {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  }
}
