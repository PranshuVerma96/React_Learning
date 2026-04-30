import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ✅ Tailwind plugin
  ],
  server: {
    host: "0.0.0.0",   // network access enable
    port: 5173         // fix port (हर बार बदलने से बचेगा)
  }
})
