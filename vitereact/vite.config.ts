import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: [
      '123website-short-summary-this.launchpulse.ai',
      'ta-01kf8snsn4kdenptt8k4h4k8pb-5173.wo-9mpy4gmqi16rm91leevmrp12y.w.modal.host'
    ]
  },
})
