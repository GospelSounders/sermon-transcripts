import { defineConfig } from 'vite'

export default defineConfig({
  base: '/sermon-transcripts/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        young: 'young-evangelists.html',
        pioneer: 'pioneer-loudcry.html',
        search: 'search.html'
      }
    }
  },
  server: {
    port: 3000
  }
})