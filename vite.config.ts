import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'example.com',
    port: 443,
    https: {
      key: "./certs/example.com.key",
      cert:"./certs/example.com.crt"
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
