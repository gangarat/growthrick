import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'handle-html-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Redirect all requests that don't have a file extension to index.html
          if (!req.url.includes('.')) {
            req.url = '/index.html';
          }
          next();
        });
      },
      // Generate a _redirects file for Netlify during build
      closeBundle() {
        // This will be handled by the _redirects file we created
      }
    }
  ],
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // Ensure the _redirects file is copied to the build output
    outDir: 'dist',
  },
  base: '/', // Ensure base URL is set correctly
});
