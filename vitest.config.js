import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'

config()

console.log({ env: process.env.NODE_ENV })

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname)
    }
  },
  test: {
    environment: 'happy-dom',
    env: {
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL
    }
  }
})
