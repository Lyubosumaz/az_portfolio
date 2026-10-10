import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production builds are served from https://lyubosumaz.github.io/az_portfolio/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/az_portfolio/' : '/',
  plugins: [react()],
}))
