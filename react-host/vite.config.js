import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you are deploying to GitHub Pages, uncomment BASE:
// export default defineConfig({
//   plugins: [react()],
//   base: '/YOUR-REPO-NAME/'
// })

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})
