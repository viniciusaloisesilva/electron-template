import { defineConfig } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    build: {
      entry: 'src/main/main.ts',
      outDir: 'out/main',
      emptyOutDir: true
    }
  },
  preload: {
    build: {
      entry: 'src/preload/preload.ts',
      outDir: 'out/preload',
      emptyOutDir: true
    }
  },
  renderer: {
    root: './src/renderer',
    build: {
      entry: 'src/renderer/renderer.tsx',
      outDir: 'out/renderer',
      emptyOutDir: true
    }
  }
})