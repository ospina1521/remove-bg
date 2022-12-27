export const ENV = {
  adminEmail: 'hbiaser132@gmail.com',
  isDevMode: process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development',
  isTestMode: process.env.NODE_ENV === 'test',
  removeBgKey: process.env.REMOVE_BG_KEY ?? '',
  supabase: {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  },
  cluodinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  }
}
