import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Deux pages statiques : / (français) et /en/ (anglais), chacune avec ses métadonnées.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        fr: resolve(import.meta.dirname, 'index.html'),
        en: resolve(import.meta.dirname, 'en/index.html'),
      },
    },
  },
})
