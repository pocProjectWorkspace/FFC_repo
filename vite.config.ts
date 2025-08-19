// vite.config.ts - FIXED VERSION
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import vitePluginInjectDataLocator from "./plugins/vite-plugin-inject-data-locator";
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    vitePluginInjectDataLocator(),
    tailwindcss(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // INCREASE FILE SIZE LIMIT TO 50MB (from default 2MB)
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50MB
        
        // EXCLUDE LARGE IMAGES FROM PRECACHING
        globIgnores: [
          '**/hero/hero-image-*.jpg',
          '**/bonding/bonding-*.jpg', 
          '**/events/events-*.jpg',
          '**/about/founder/sunny-varkey.jpg',
          '**/intro/family-dining.jpg',
          '**/app/Mobile-app.png'
        ],
        
        // CACHE LARGE IMAGES ON DEMAND (Runtime caching)
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
        
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg}',
          // Only cache small essential assets
          '**/logo/*.png'
        ]
      },
      manifest: {
        name: 'Family First Café',
        short_name: '',
        description: 'Where Families Connect, Learn & Grow Together',
        theme_color: '#983a45',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    allowedHosts: true,
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          // ONLY INCLUDE PACKAGES THAT ARE ACTUALLY INSTALLED
          vendor: ['react', 'react-dom'],
          ui: ['@heroui/react', 'framer-motion'],
          router: ['react-router-dom']
          // REMOVED: date-fns, clsx, tailwind-merge (not installed)
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@heroui/react']
  }
});