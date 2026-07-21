import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base path: resolves correctly whether the site is served from
// a subpath (e.g. github.io/Miller-CCG/) or the domain root (millerccg.com),
// so this doesn't need to change when the custom domain goes live.
export default defineConfig({
  plugins: [react()],
  base: './',
})
