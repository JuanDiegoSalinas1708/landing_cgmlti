import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY === 'true' ? '/' : '/landing_cgmlti/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})