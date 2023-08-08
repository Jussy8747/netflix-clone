import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config(); // Load environment variables from .env file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Define your manual chunks here
          // Example: separating lodash library into a separate chunk
          lodash: ['lodash'],
          // Add more manual chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000000, // Adjust the chunk size limit here
  },
});
