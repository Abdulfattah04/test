import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Corrected the typo
        secure: false, // Allows using http even if https is expected
      },
    },
  },
  plugins: [react()],
})