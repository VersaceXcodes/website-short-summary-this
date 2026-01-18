import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["ta-01kf9cb54pvhd9fhthrwbjmpdg-5173.wo-zysvb476rn3nnk5rmv3znxear.w.modal.host"]
  }
})
