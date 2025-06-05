import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',  // GitHub repo name, adjust if repo name differs
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Bhanu Shakya's Portfolio",
        short_name: "Bhanu's Portfolio",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        scope: "/portfolio/",       // Add trailing slash for consistency
        start_url: "/portfolio/",   // Add trailing slash for consistency
        icons: [
          {
            src: "maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "logo384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      // You might want to add workbox options or other PWA config here if needed
    }),
  ],
})
