import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],

  server: {
    hmr: {
      host: 'localhost',
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@router': path.resolve(__dirname, './src/router'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@locale': path.resolve(__dirname, './src/assets/locale'),
      '@ts': path.resolve(__dirname, './src/ts'),
    },
  },
});
