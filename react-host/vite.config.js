import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/semiconductors/' // <-- your repo name (used by GitHub Pages)
})
