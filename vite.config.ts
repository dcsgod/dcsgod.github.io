import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment:
// - If deploying to https://<username>.github.io/ (user/org site), base = '/'
// - If deploying to https://<username>.github.io/<repo>/, base = '/<repo>/'
// Using '/' since the repo is dcsgod.github.io (user site)
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react')) return 'vendor'
          }
        },
      },
    },
  },
})
