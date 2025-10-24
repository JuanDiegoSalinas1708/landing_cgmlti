import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/landing_cgmlti/'  // <- nombre exacto de tu repo
})

