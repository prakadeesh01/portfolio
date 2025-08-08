import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // ← Allow access from other devices
    port: 5173,       // (default port, you can change)
  },
})