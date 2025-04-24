import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'PlayerIcon',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [], // Optional: Add deps here if needed
    },
  }
})
