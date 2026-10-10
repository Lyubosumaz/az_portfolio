import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/az_portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
  },
}))
