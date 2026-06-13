import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Project root — where index.html lives
  root: '.',

  // Dev server settings
  server: {
    port: 3000,
    open: true,        // auto-opens browser on `npm run dev`
    strictPort: false, // tries next available port if 3000 is taken
  },

  // Build output settings
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Inline assets smaller than 4kb (icons, small images)
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankyou: resolve(__dirname, 'thank-you.html'),
      },
    },
  },

  // Preview server (after `npm run build`)
  preview: {
    port: 4173,
    open: true,
  },
})
