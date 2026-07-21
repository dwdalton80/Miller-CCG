import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is '/' because this deploys to a custom domain (millerccg.com),
// not to a github.io/<repo> subpath. If you ever deploy to a project
// page without a custom domain, change this to '/<repo-name>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
