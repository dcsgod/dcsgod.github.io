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
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
