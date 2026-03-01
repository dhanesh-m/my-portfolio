import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || 'https://dhaneshm.info'

  return {
    plugins: [
      react(),
      // Injects VITE_SITE_URL into HTML (og:image, etc.) so links work when deployed elsewhere
      {
        name: 'html-site-url',
        transformIndexHtml(html) {
          return html.replace(/https:\/\/dhaneshm\.info/g, siteUrl)
        },
      },
    ],
  }
})
