import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    hmr: {
      timeout: 5000
    },
    watch: {
      usePolling: false,
      interval: 1000
    }
  }
});